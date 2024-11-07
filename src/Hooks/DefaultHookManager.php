<?php

declare(strict_types=1);

namespace Yard\Gutenberg\Hooks;

class DefaultHookManager
{
	public function boot()
	{
		/**
		 * @see https://make.wordpress.org/core/2021/07/01/block-styles-loading-enhancements-in-wordpress-5-8/
		 */
		\add_filter('should_load_separate_core_block_assets', '__return_true');
		\add_filter('allowed_block_types', $this->registerCoreBlocks(...));
		\add_filter('render_block_core/embed', $this->changeEmbedURL(...), 10, 2);
		\add_action('enqueue_block_editor_assets', $this->enqueueDefaultHookScripts(...));
	}

	/**
	 * Register core blocks.
	 */
	public function registerCoreBlocks(): array
	{
		$allowedBlocks = [
			'core/block',
			'core/button',
			'core/buttons',
			'core/column',
			'core/columns',
			'core/cover',
			'core/embed',
			'core/file',
			'core/gallery',
			'core/group',
			'core/heading',
			'core/html',
			'core/image',
			'core/legacy-widget',
			'core/list-item',
			'core/list',
			'core/media-text',
			'core/missing',
			'core/paragraph',
			'core/pattern',
			'core/post-featured-image',
			'core/post-title',
			'core/quote',
			'core/separator',
			'core/social-link',
			'core/social-links',
			'core/spacer',
			'core/table',
			'core/video',
			'core/widget-group',
			'gravityforms/form',
		];


		$whitelistedPrefixes = ['theme', 'yard', 'zorgsites', 'project', 'sage', 'acf'];
		$whitelistedPrefixes = apply_filters('yard::gutenberg/allowed-blocks-whitelisted-prefixes', $whitelistedPrefixes);

		$allRegisteredBlocks = \WP_Block_Type_Registry::get_instance()->get_all_registered();

		foreach ($allRegisteredBlocks as $blockName => $blockType) {
			foreach ($whitelistedPrefixes as $prefix) {
				if (str_starts_with($blockName, $prefix)) {
					$allowedBlocks[] = $blockName;

					break;
				}
			}
		}

		return apply_filters('yard::gutenberg/allowed-core-blocks', $allowedBlocks);
	}

	/**
	 * Enqueue scripts for hooks.
	 */
	public function enqueueDefaultHookScripts(): void
	{
		$path = YARD_GUTENBERG_PLUGIN_DIR_PATH . 'build/hooks.asset.php';
		$scriptAsset = file_exists($path) ? require $path : ['dependencies' => [], 'version' => round(microtime(true))];

		\wp_enqueue_script(
			'yard-gutenberg-hooks',
			YARD_GUTENBERG_PLUGIN_DIR_URL . 'build/hooks.js',
			$scriptAsset['dependencies'],
			$scriptAsset['version'],
			true
		);
	}

	/**
	 * Change YouTube/Vimeo block embed URL to:
	 * 1. Include youtube-nocookie
	 * 2. Add disablekb=1 to disable YouTube keyboard shortcuts for a11y
	 * 3. Add ?keyboard=0 to disable Vimeo keyboard shortcuts for a11y
	 */
	public function changeEmbedURL(string $content, array $block): string
	{
		$type = $block['attrs']['type'] ?? null;

		if (empty($type) || 'video' !== $type) {
			return $content;
		}

		$tagProcessor = new \WP_HTML_Tag_Processor($content);
		if (! $tagProcessor->next_tag('iframe')) {
			return $content;
		}
		$src = html_entity_decode($tagProcessor->get_attribute('src'));

		switch ($block['attrs']['providerNameSlug'] ?? '') {
			case 'youtube':
				$src = str_replace('youtube.com', 'youtube-nocookie.com', $src);
				$tagProcessor->set_attribute('src', add_query_arg('disablekb', 1, $src));

				break;
			case 'vimeo':
				$tagProcessor->set_attribute('src', add_query_arg('keyboard', 0, $src));

				break;
		}

		return $tagProcessor->get_updated_html();
	}
}
