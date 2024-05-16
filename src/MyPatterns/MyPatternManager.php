<?php

declare(strict_types=1);

namespace Yard\Gutenberg\MyPatterns;

class MyPatternManager
{
	public function boot()
	{
		$enableMyPatternsMenuItem = \apply_filters('yard-gutenberg/enableMyPatternsMenuItem', true);

		if (! $enableMyPatternsMenuItem) {
			return;
		}

		\add_filter('admin_menu', [$this, 'addMyPatternMenuItems']);
		\add_filter('manage_wp_block_posts_columns', [$this, 'addMyPatternColumns']);
		\add_filter('manage_wp_block_posts_custom_column', [$this, 'addPatternStatusColumnContent'], 10, 2);
		\add_filter('manage_wp_block_posts_custom_column', [$this, 'addPatternCategoryColumnContent'], 10, 2);
		\add_filter('register_taxonomy_args', [$this, 'changePatternCategoryTaxonomyArgs'], 10, 2);
		\add_action('admin_enqueue_scripts', [$this, 'enqueuePatternStyles']);
		\add_action('enqueue_block_editor_assets', [$this, 'enqueuePatternScripts']);
	}

	/**
	 * Adds menu items for My Patterns if enabled.
	 */
	public function addMyPatternMenuItems(): void
	{
		if (! $this->MyPatternsMenuItemExists()) {
			$this->addMyPatternsMenuItem();
			$this->addMyPatternsSubMenu();
		}
	}

	/**
	 * Checks if My Patterns menu item exists.
	 */
	private function MyPatternsMenuItemExists(): bool
	{
		global $menu;

		return ! empty(array_filter($menu, function ($item) {
			return 'edit.php?post_type=wp_block' === $item[2];
		}));
	}

	/**
	 * Adds My Patterns main menu item.
	 */
	private function addMyPatternsMenuItem(): void
	{
		add_menu_page(
			__('Mijn patronen', 'yard-gutenberg'),
			__('Mijn patronen', 'yard-gutenberg'),
			'edit_posts',
			'edit.php?post_type=wp_block',
			'',
			'dashicons-layout',
			49 // just below "Pages"
		);
	}

	/**
	 * Adds My Patterns submenu item.
	 */
	private function addMyPatternsSubMenu(): void
	{
		add_submenu_page(
			'edit.php?post_type=wp_block',
			__('Patrooncategorieën', 'yard-gutenberg'),
			__('Patrooncategorieën', 'yard-gutenberg'),
			'edit_posts',
			'edit-tags.php?taxonomy=wp_pattern_category&post_type=wp_block'
		);
	}

	/**
	 * Add columns to the WP Block admin table.
	 */
	public function addMyPatternColumns(array $columns): array
	{
		return [
			'title' => $columns['title'],
			'category' => __('Categorieën', 'yard-gutenberg'),
			'status' => __('Status', 'yard-gutenberg'),
			'date' => $columns['date'],
		];
	}

	/**
	 * Add content to the status column. If the wp_pattern_sync_status is empty, it means the pattern is synced.
	 */
	public function addPatternStatusColumnContent(string $column, int $postID): void
	{
		if ('status' !== $column) {
			return;
		}

		$syncStatus = get_post_meta($postID, 'wp_pattern_sync_status', true);

		if (empty($syncStatus)) {
			echo '<span style="color: var(--wp-block-synced-color);">' . __('Gesynchroniseerd', 'yard-gutenberg') . '</span>';
		} elseif ('unsynced' === $syncStatus) {
			echo '<span>' . __('Niet gesynchroniseerd', 'yard-gutenberg') . '</span>';
		} else {
			echo '<span>' . __('Status onbekend', 'yard-gutenberg') . '</span>';
		}
	}

	/**
	 * Add content to the category column.
	 */
	public function addPatternCategoryColumnContent(string $column, int $postID): void
	{
		if ('category' !== $column) {
			return;
		}

		$terms = get_the_terms($postID, 'wp_pattern_category');

		if (empty($terms)) {
			echo '<span>' . __('Niet gecategoriseerd', 'yard-gutenberg') . '</span>';
		} else {
			$termNames = wp_list_pluck($terms, 'name');
			echo implode(', ', $termNames);
		}
	}

	/**
	 * Modifies arguments for the pattern category taxonomy for better Gutenberg controls.
	 */
	public function changePatternCategoryTaxonomyArgs(array $args, string $taxonomy): array
	{
		if ('wp_pattern_category' !== $taxonomy) {
			return $args;
		}

		$args['hierarchical'] = true;

		return $args;
	}

	/**
	 * Enqueues styles for the my patterns menu.
	 */
	public function enqueuePatternStyles(): void
	{
		\wp_enqueue_style(
			'yard-gutenberg-patterns',
			YARD_GUTENBERG_PLUGIN_DIR_URL . 'build/style-patterns.css',
			[],
			YARD_GUTENBERG_PLUGIN_VERSION
		);
	}

	/**
	 * Enqueues scripts for the my patterns functionality.
	 */
	public function enqueuePatternScripts(): void
	{
		$path = YARD_GUTENBERG_PLUGIN_DIR_PATH . 'build/patterns.asset.php';
		$scriptAsset = file_exists($path) ? require $path : ['dependencies' => [], 'version' => round(microtime(true))];

		\wp_enqueue_script(
			'yard-gutenberg-patterns',
			YARD_GUTENBERG_PLUGIN_DIR_URL . 'build/patterns.js',
			$scriptAsset['dependencies'],
			$scriptAsset['version']
		);
	}
}
