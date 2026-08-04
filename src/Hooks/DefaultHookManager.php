<?php

declare(strict_types=1);

namespace Yard\Gutenberg\Hooks;

class DefaultHookManager
{
	public function boot()
	{
		\add_filter('allowed_block_types_all', $this->registerCoreBlocks(...));
		\add_filter('render_block_core/embed', $this->changeEmbedURL(...), 10, 2);
		\add_filter('render_block_yard/timeline-item', $this->markCurrentTimelineStep(...), 10, 2);
		\add_filter('render_block_yard/timeline-item-collapse', $this->markCurrentTimelineStep(...), 10, 2);
		\add_action('enqueue_block_editor_assets', $this->enqueueDefaultHookAssets(...), 11);
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

		$whitelistedPrefixes = ['theme', 'yard', 'zorgsites', 'project', 'sage', 'acf', 'owc'];
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
	 * Enqueue scripts and styles for hooks.
	 */
	public function enqueueDefaultHookAssets(): void
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

		\wp_enqueue_style(
			'yard-gutenberg-hooks',
			YARD_GUTENBERG_PLUGIN_DIR_URL . 'build/hooks.css',
			[],
			YARD_GUTENBERG_PLUGIN_VERSION
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

		$rawSrc = $tagProcessor->get_attribute('src');

		if (! is_string($rawSrc) || '' === $rawSrc) {
			return $content;
		}

		$src = html_entity_decode($rawSrc);

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

	/**
	 * Mark the timeline item styled as the current step: aria-current plus a hidden notice.
	 *
	 * The block style comes from the theme, so match the words themes use for it: active, current.
	 * Styles for completed steps are left alone, they are not the current step.
	 */
	public function markCurrentTimelineStep(string $content, array $block): string
	{
		$className = $block['attrs']['className'] ?? '';

		if (! is_string($className) || ! preg_match('/\b(active|current)\b/', $className)) {
			return $content;
		}

		$tagProcessor = new \WP_HTML_Tag_Processor($content);

		if ($tagProcessor->next_tag('li')) {
			$tagProcessor->set_attribute('aria-current', 'step');
			$content = $tagProcessor->get_updated_html() ?: $content;
		}

		return $this->prefixCurrentStepNotice($content);
	}

	/**
	 * The tag processor cannot insert content, so targets are matched on their class.
	 *
	 * Preferably inside the title, which makes the notice part of the heading. Plain timeline
	 * items have no title of their own, so there the notice goes before their content.
	 */
	private function prefixCurrentStepNotice(string $content): string
	{
		$notice = sprintf('<span class="sr-only">%s </span>', __('Huidige stap:', 'yard-gutenberg'));

		if (str_contains($content, $notice)) {
			return $content;
		}

		$targets = [
			'wp-block-yard-timeline-item-collapse__title',
			'wp-block-yard-timeline-item__content',
		];

		foreach ($targets as $target) {
			$updated = preg_replace('/(<[^>]*\b' . $target . '\b[^>]*>)/', '$1' . $notice, $content, 1);

			if (is_string($updated) && $updated !== $content) {
				return $updated;
			}
		}

		return $content;
	}
}
