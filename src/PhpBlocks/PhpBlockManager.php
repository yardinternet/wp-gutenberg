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
		foreach ($this->blocks() as $directory => $blockName) {
			$blockPath = __DIR__ . '/' . $directory;

			\register_block_type($blockPath, [
				'render_callback' => $this->renderCallback($directory, $blockName, $blockPath),
			]);
		}
	}

	/**
	 * The registrable blocks, as folder name => block name.
	 *
	 * The name comes from `block.json`, not from the folder: the folder has to be
	 * a valid namespace segment for the view model to autoload, while the name is
	 * the block's actual identity. Its slug names the template and is the key a
	 * site filters on through `yard::gutenberg/allowed-blocks`, where hyphenated
	 * names like `opening-hours` are perfectly normal.
	 *
	 * @return array<string, string>
	 */
	private function blocks(): array
	{
		$blocks = [];

		foreach (array_filter(glob(__DIR__ . '/*', GLOB_ONLYDIR) ?: []) as $path) {
			$blockName = $this->blockName($path . '/block.json');

			if (null !== $blockName) {
				$blocks[basename($path)] = $blockName;
			}
		}

		return $this->filterAllowed($blocks);
	}

	/**
	 * Apply `yard::gutenberg/allowed-blocks`, which is keyed on the slug.
	 *
	 * `AllowedBlocks::filter()` tests values and preserves keys, so it filters a
	 * folder => slug map, and the surviving keys select from the original.
	 *
	 * @param array<string, string> $blocks Folder name => block name.
	 *
	 * @return array<string, string>
	 */
	private function filterAllowed(array $blocks): array
	{
		$allowed = AllowedBlocks::filter(array_map([$this, 'slug'], $blocks));

		return array_intersect_key($blocks, $allowed);
	}

	/**
	 * The namespaced block name from a `block.json`, e.g. `yard/greeting`.
	 *
	 * Returns null for a folder that holds no readable metadata with a namespaced
	 * block name, so a stray directory is skipped rather than fatal.
	 */
	private function blockName(string $metadataPath): ?string
	{
		if (! file_exists($metadataPath)) {
			return null;
		}

		$metadata = json_decode((string) file_get_contents($metadataPath), true);
		$name = is_array($metadata) && is_string($metadata['name'] ?? null) ? $metadata['name'] : '';

		return '' === $this->slug($name) ? null : $name;
	}

	/**
	 * The slug of a block name, e.g. `greeting` for `yard/greeting`.
	 */
	private function slug(string $blockName): string
	{
		$separator = strpos($blockName, '/');

		return false === $separator ? '' : substr($blockName, $separator + 1);
	}

	/**
	 * The class WordPress generates for a block, e.g. `wp-block-yard-greeting`.
	 *
	 * Going through core's function rather than building the string ourselves
	 * means a site filtering `block_default_classname` gets `$blockClass` and
	 * every BEM modifier built on it following along. The function is marked
	 * `@access private`, hence the guard.
	 *
	 * @see wp_get_block_default_classname()
	 */
	private function blockClass(string $blockName): string
	{
		return function_exists('wp_get_block_default_classname')
			? (string) \wp_get_block_default_classname($blockName)
			: 'wp-block-' . str_replace('/', '-', $blockName);
	}

	/**
	 * Build the render callback for a single block.
	 *
	 * The view model assembles the render data, including the wrapper attributes:
	 * `get_block_wrapper_attributes()` reads the block currently being rendered,
	 * so it has to run inside the callback rather than up front. Blocks without
	 * their own view model get a plain `BlockViewModel`, which adds nothing.
	 */
	private function renderCallback(string $directory, string $blockName, string $blockPath): callable
	{
		$templatePath = $blockPath . '/' . $this->slug($blockName) . '.blade.php';
		$viewModelClass = __NAMESPACE__ . '\\' . $directory . '\\' . $directory;
		$blockClass = $this->blockClass($blockName);

		return function ($attributes, $content = '', $block = null) use ($templatePath, $viewModelClass, $blockClass) {
			$viewModel = is_subclass_of($viewModelClass, BlockViewModel::class)
				? new $viewModelClass()
				: new BlockViewModel();

			return $this->renderer->render($templatePath, $viewModel->compose(
				is_array($attributes) ? $attributes : [],
				is_string($content) ? $content : '',
				$block instanceof \WP_Block ? $block : null,
				$blockClass
			));
		};
	}
}
