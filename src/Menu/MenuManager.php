<?php

declare(strict_types=1);

namespace Yard\Gutenberg\Menu;

class MenuManager
{
	public function boot()
	{
		\add_action('admin_menu', [$this, 'registerAdminMenu']);
		\add_action('admin_enqueue_scripts', [$this, 'enqueueMenuAssets']);
		\add_filter('parent_file', [$this, 'highlightTaxSubMenu']);
	}

	/**
	 * Registers the menu items with WordPress.
	 */
	public function registerAdminMenu(): void
	{
		add_menu_page(
			__('Yard Patronen', 'yard-gutenberg'),
			__('Yard Patronen', 'yard-gutenberg'),
			'manage_options',
			'edit.php?post_type=yard-pattern',
			'',
			'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDIuNzYgMTA1LjAxIj4KICA8cGF0aCBkPSJtNjkuMzQsOTcuNzJsLTEuOC0xLjMxYy0uOTQtMS42MS0xLjQxLTkuNTMtMS40MS0yMy43N3YtNy4yMmMwLTIuMzguMTYtNC4yLjQ3LTUuNDcuNTctMi4zOCwzLjYyLTcuODUsOS4xMy0xNi40MSw5Ljc5LTE1LjE3LDE4Ljc5LTI3Ljk4LDI3LjAyLTM4LjQzdi0yLjU1bC0uNzktLjczaC0xMS40Yy0xLjYxLDIuODItMi44OSw1LjA0LTMuODIsNi42NGwtOC42NywxNC41MWMtOC42NCwxMy45Ni0xNC41LDIzLjI0LTE3LjU3LDI3Ljg2bC0xMC4yMy0xOS4xMWMtNy40NS0xMy45Ni0xMy4zOC0yMi45NS0xNy44LTI2Ljk4LTIuMTQtMS45NS00LjU1LTMuNTMtNy4yNi00Ljc0QzIxLjYzLjk3LDEzLjQ4LDIuNjIuNzcsNC45NmwtLjc3Ljh2NC4wOGwuODYuOGMzLjA3LDAsNS4wMi4xNSw1Ljg1LjQ3Ljg0LjMxLDIuNDUsMS42Miw0Ljg1LDMuOSw0Ljk1LDQuNzEsMTEuNTgsMTMuNjYsMTkuOTEsMjYuODMsOC4xNywxMi45MywxMi4yNiwyMC4zMiwxMi4yNiwyMi4xN3Y4LjZjMCwxNC4yNC0uNDcsMjIuMTYtMS40LDIzLjc3bC0xLjgsMS4zMWMtMS4zLjM0LTQuNS42Ni05LjYuOTVsLS43OC43M3Y0Ljk2bC43LjY2YzQuODktLjMsMTIuOTEtLjQ0LDI0LjA1LS40NHMxOC45LjE1LDI0LjA1LjQ0bC43OC0uNzR2LTQuODlsLS43OC0uNzNjLTUuMS0uMjktOC4zLS42MS05LjYxLS45NSIgc3R5bGU9ImZpbGw6ICNhN2FhYWQ7Ii8+Cjwvc3ZnPgo=',
			65
		);

		add_submenu_page(
			'edit.php?post_type=yard-pattern',
			__('Patroon categorieën', 'yard-gutenberg'),
			__('Patroon categorieën', 'yard-gutenberg'),
			'manage_options',
			'edit-tags.php?taxonomy=yard-pattern-category&post_type=yard-pattern',
			false
		);

		\add_submenu_page(
			'yard-gutenberg-settings',
			__('Patroon categorieën', 'yard-gutenberg'),
			__('Patroon categorieën', 'yard-gutenberg'),
			'manage_options',
			'edit-tags.php?taxonomy=yard-pattern-category&post_type=yard-pattern'
		);

		global $menu;

		if (! $menu) {
			return;
		}

		foreach ($menu as $key => $value) {
			if ('Yard Patronen' === $value[0] && 'edit.php?post_type=yard-pattern' === $value[2] && (isset($_GET['post_type'])) && ('yard-pattern' === $_GET['post_type'])) {
				$menu[$key][4] .= 'wp-has-submenu wp-has-current-submenu wp-menu-open menu-top toplevel_page_yard-gutenberg-settings';

				break;
			}
		}
	}

	public function highlightTaxSubMenu($parent_file)
	{
		global $submenu_file, $current_screen, $pagenow;
		if ('yard-pattern' == $current_screen->post_type) {
			if ('yard-pattern-category' == $current_screen->taxonomy) {
				$submenu_file = 'edit-tags.php?taxonomy=yard-pattern-category&post_type=yard-pattern';
			}
			$parent_file = 'edit.php?post_type=yard-pattern';
		}

		return $parent_file;
	}

	public function enqueueMenuAssets()
	{
		\wp_enqueue_style(
			'yard-gutenberg-admin',
			YARD_GUTENBERG_PLUGIN_DIR_URL . 'build/style-menu.css',
			[],
			YARD_GUTENBERG_PLUGIN_VERSION
		);
	}
}
