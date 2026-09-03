<?php

declare(strict_types=1);

namespace Yard\Gutenberg\PhpBlocks;

use Yard\Gutenberg\Support\AllowedBlocks;

/**
 * Registers the PHP-only blocks in `src/PhpBlocks`.
 *
 * These blocks have no JavaScript and never pass through webpack. A block is a
 * PascalCase folder holding a `block.json`, a Blade template named after the
 * block's slug, and optionally a `BlockViewModel` of the same name as the
 * folder:
 *
 *     Greeting/
 *     ├── block.json           "name": "yard/greeting"
 *     ├── greeting.blade.php
 *     └── Greeting.php         extends BlockViewModel
 *
 * WordPress 7.0's `supports.autoRegister` puts them in the inserter and previews
 * them with core's `ServerSideRender`, so no client-side registration is needed.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/#autoregister
 */
class PhpBlockManager
{
	/** @var BladeRenderer */
	private $renderer;

	public function __construct()
	{
		$this->renderer = new BladeRenderer();
	}

	public function boot(): void
	{
		\add_action('init', [$this, 'registerBlocks']);
	}

	public function registerBlocks(): void
	{
		foreach ($this->blocks() as $directory => $slug) {
			$blockPath = __DIR__ . '/' . $directory;

			\register_block_type($blockPath, [
				'render_callback' => $this->renderCallback($directory, $slug, $blockPath),
			]);
		}
	}

	/**
	 * The registrable blocks, as folder name => block slug.
	 *
	 * The slug comes from `block.json`, not from the folder: the folder has to be
	 * a valid namespace segment for the view model to autoload, while the slug is
	 * the block's actual identity — it names the template and is the key a site
	 * filters on through `yard::gutenberg/allowed-blocks`, where hyphenated names
	 * like `opening-hours` are perfectly normal.
	 *
	 * @return array<string, string>
	 */
	private function blocks(): array
	{
		$blocks = [];

		foreach (array_filter(glob(__DIR__ . '/*', GLOB_ONLYDIR) ?: []) as $path) {
			$slug = $this->slug($path . '/block.json');

			if (null !== $slug) {
				$blocks[basename($path)] = $slug;
			}
		}

		return AllowedBlocks::filter($blocks);
	}

	/**
	 * The slug from a `block.json`, e.g. `greeting` for `yard/greeting`.
	 *
	 * Returns null for a folder that holds no readable metadata with a namespaced
	 * block name, so a stray directory is skipped rather than fatal.
	 */
	private function slug(string $metadataPath): ?string
	{
		if (! file_exists($metadataPath)) {
			return null;
		}

		$metadata = json_decode((string) file_get_contents($metadataPath), true);
		$name = is_array($metadata) && is_string($metadata['name'] ?? null) ? $metadata['name'] : '';
		$separator = strpos($name, '/');

		if (false === $separator) {
			return null;
		}

		$slug = substr($name, $separator + 1);

		return '' === $slug ? null : $slug;
	}

	/**
	 * Build the render callback for a single block.
	 *
	 * `get_block_wrapper_attributes()` reads the block currently being rendered,
	 * so it has to be called inside the callback rather than up front.
	 */
	private function renderCallback(string $directory, string $slug, string $blockPath): callable
	{
		$templatePath = $blockPath . '/' . $slug . '.blade.php';
		$viewModelClass = __NAMESPACE__ . '\\' . $directory . '\\' . $directory;

		return function ($attributes, $content = '', $block = null) use ($templatePath, $viewModelClass) {
			$data = [
				'attributes' => is_array($attributes) ? $attributes : [],
				'content' => $content,
				'block' => $block,
				'wrapperAttributes' => \get_block_wrapper_attributes(),
			];

			// Blocks without a view model render on this data alone.
			if (is_subclass_of($viewModelClass, BlockViewModel::class)) {
				$data = (new $viewModelClass())->compose($data);
			}

			return $this->renderer->render($templatePath, $data);
		};
	}
}
