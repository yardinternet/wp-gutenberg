<?php

declare(strict_types=1);

namespace Yard\Gutenberg\Patterns;

class PatternManager
{
	public function boot()
	{
		\add_action('init', [new PatternPostType(), 'boot']);
		\add_action('admin_init', [$this, 'registerAsBlockPatterns']);
		\add_filter('rest_dispatch_request',  [$this, 'disableNonThemePatterns'], 10, 3);
		\add_filter('should_load_remote_block_patterns', '__return_false');
		\remove_action('enqueue_block_editor_assets', 'wp_enqueue_editor_block_directory_assets'); // Disable installing patterns from pattern-directory
	}

	/**
	 * Registers the yard-pattern custom post type as block patterns.
	 */
	public function registerAsBlockPatterns(): void
	{
		$enablePatterns = \apply_filters('yard-gutenberg/enablePatterns', true);

		if (! $enablePatterns) {
			return;
		}

		$this->registerTermsAsCategories();
		$this->registerPostsAsBlockPatterns();
	}

	/**
	 * Retrieves terms from the 'yard-pattern-category' taxonomy and registers them as block pattern categories.
	 */
	private function registerTermsAsCategories(): void
	{
		$terms = \get_terms('yard-pattern-category', ['orderby' => 'name', 'order' => 'asc', 'hide_empty' => true]);

		if (empty($terms) || \is_wp_error($terms)) {
			return;
		}

		foreach($terms as $term) {
			\register_block_pattern_category(
				$term->slug,
				['label' => $term->name]
			);
		}
	}

	/**
	 * Retrieves pattern posts and registers them as block patterns. The 'pageCreationCategory' is used to
	 * determine whether the pattern should be registered for the page creation modal.
	 */
	private function registerPostsAsBlockPatterns(): void
	{
		$pageCreationCategory = \apply_filters('yard-gutenberg/pageCreationCategory', 'paginas');
		$patternPosts = $this->getPatternPosts();

		foreach ($patternPosts as $pattern) {
			$terms = \get_the_terms($pattern->ID, 'yard-pattern-category');
			$termSlugs = $terms ? array_map(fn ($term) => $term->slug, $terms) : [];

			$blockTypes = in_array($pageCreationCategory, $termSlugs) ? ['core/post-content'] : [];

			\register_block_pattern(
				'yard-gutenberg/' . $pattern->post_name,
				[
					'title' => $pattern->post_title,
					'content' => $pattern->post_content,
					'categories' => $termSlugs,
					'blockTypes' => $blockTypes,
				]
			);
		}
	}

	/**
	 * Get all pattern posts.
	 */
	private function getPatternPosts(): array
	{
		$patternPosts = \get_posts([
			'post_type' => 'yard-pattern',
			'order' => 'ASC',
			'order_by' => 'post_title',
			'post_status' => 'publish',
			'posts_per_page' => -1,
		]);

		return $patternPosts;
	}

	/**
	 * WordPress.org and plugins such as WooCommerce and Tribe Events add their own block
	 * patterns. Generally, we only want clients to use only the patterns we provide.
	 *
	 * @see https://developer.wordpress.com/docs/developer-tools/block-patterns/disable-all-patterns/
	 */
	public function disableNonThemePatterns($dispatchResult, $request, $route)
	{
		if (! str_starts_with($route, '/wp/v2/block-patterns/patterns')) {
			return $dispatchResult;
		}

		$patterns = \WP_Block_Patterns_Registry::get_instance()->get_all_registered();

		if (! empty($patterns)) {
			foreach ($patterns as $pattern) {
				unregister_block_pattern($pattern['name']);
			}
			remove_theme_support('core-block-patterns');
		}

		return $dispatchResult;
	}
}
