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
		add_filter('should_load_separate_core_block_assets', '__return_true');
		add_filter('render_block_core/embed', $this->changeEmbedURL(...), 10, 2);
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
