<?php

declare(strict_types=1);

namespace Yard\Gutenberg\PhpBlocks;

use Yard\Gutenberg\Support\AllowedBlocks;

/**
 * Registers the PHP-only blocks in `src/PhpBlocks`.
 *
 * These blocks have no JavaScript and never pass through webpack: each one is a
 * `block.json` plus a Blade template of the same name, registered straight from
 * source. WordPress 7.0's `supports.autoRegister` puts them in the inserter and
 * previews them with core's `ServerSideRender`, so no client-side registration
 * is needed.
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
		foreach ($this->blockNames() as $blockName) {
			$blockPath = __DIR__ . '/' . $blockName;

			\register_block_type($blockPath, [
				'render_callback' => $this->renderCallback($blockName, $blockPath),
			]);
		}
	}

	/**
	 * Every subdirectory holding a `block.json`, minus the ones a site filtered out.
	 *
	 * @return string[]
	 */
	private function blockNames(): array
	{
		$blockNames = array_map('basename', array_filter(glob(__DIR__ . '/*', GLOB_ONLYDIR) ?: []));

		$blockNames = array_filter($blockNames, function (string $blockName) {
			return file_exists(__DIR__ . '/' . $blockName . '/block.json');
		});

		return AllowedBlocks::filter($blockNames);
	}

	/**
	 * Build the render callback for a single block.
	 *
	 * The template lives next to the block's `block.json` and mirrors its
	 * directory name, e.g. `greeting/greeting.blade.php`.
	 *
	 * `get_block_wrapper_attributes()` reads the block currently being rendered,
	 * so it has to be called inside the callback rather than up front.
	 */
	private function renderCallback(string $blockName, string $blockPath): callable
	{
		$templatePath = $blockPath . '/' . $blockName . '.blade.php';

		return function ($attributes, $content = '', $block = null) use ($templatePath) {
			return $this->renderer->render($templatePath, [
				'attributes' => is_array($attributes) ? $attributes : [],
				'content' => $content,
				'block' => $block,
				'wrapperAttributes' => \get_block_wrapper_attributes(),
			]);
		};
	}
}
