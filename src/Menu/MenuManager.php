<?php

declare(strict_types=1);

namespace Yard\Gutenberg\Menu;

use Yard\Gutenberg\Settings\SettingsManager;

class MenuManager
{
    public function boot()
    {
        \add_action('admin_menu', [$this, 'registerAdminMenu']);
        \add_action('admin_enqueue_scripts', [$this, 'enqueueMenuAssets']);
    }

    /**
     * Registers the menu items with WordPress.
     */
    public function registerAdminMenu(): void
    {
        $settingsManager = new SettingsManager();
        $settingsMenu    = \add_menu_page(
            __('Yard Gutenberg', 'yard-gutenberg'),
            __('Yard Gutenberg', 'yard-gutenberg'),
            'manage_options',
            'yard-gutenberg-settings',
            [$settingsManager, 'render'],
            'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDIuNzYgMTA1LjAxIj4KICA8cGF0aCBkPSJtNjkuMzQsOTcuNzJsLTEuOC0xLjMxYy0uOTQtMS42MS0xLjQxLTkuNTMtMS40MS0yMy43N3YtNy4yMmMwLTIuMzguMTYtNC4yLjQ3LTUuNDcuNTctMi4zOCwzLjYyLTcuODUsOS4xMy0xNi40MSw5Ljc5LTE1LjE3LDE4Ljc5LTI3Ljk4LDI3LjAyLTM4LjQzdi0yLjU1bC0uNzktLjczaC0xMS40Yy0xLjYxLDIuODItMi44OSw1LjA0LTMuODIsNi42NGwtOC42NywxNC41MWMtOC42NCwxMy45Ni0xNC41LDIzLjI0LTE3LjU3LDI3Ljg2bC0xMC4yMy0xOS4xMWMtNy40NS0xMy45Ni0xMy4zOC0yMi45NS0xNy44LTI2Ljk4LTIuMTQtMS45NS00LjU1LTMuNTMtNy4yNi00Ljc0QzIxLjYzLjk3LDEzLjQ4LDIuNjIuNzcsNC45NmwtLjc3Ljh2NC4wOGwuODYuOGMzLjA3LDAsNS4wMi4xNSw1Ljg1LjQ3Ljg0LjMxLDIuNDUsMS42Miw0Ljg1LDMuOSw0Ljk1LDQuNzEsMTEuNTgsMTMuNjYsMTkuOTEsMjYuODMsOC4xNywxMi45MywxMi4yNiwyMC4zMiwxMi4yNiwyMi4xN3Y4LjZjMCwxNC4yNC0uNDcsMjIuMTYtMS40LDIzLjc3bC0xLjgsMS4zMWMtMS4zLjM0LTQuNS42Ni05LjYuOTVsLS43OC43M3Y0Ljk2bC43LjY2YzQuODktLjMsMTIuOTEtLjQ0LDI0LjA1LS40NHMxOC45LjE1LDI0LjA1LjQ0bC43OC0uNzR2LTQuODlsLS43OC0uNzNjLTUuMS0uMjktOC4zLS42MS05LjYxLS45NSIgc3R5bGU9ImZpbGw6ICNhN2FhYWQ7Ii8+Cjwvc3ZnPgo=',
            65
        );

        \add_action('load-' . $settingsMenu, [$settingsManager, 'enqueueAssets']);

        \add_submenu_page(
            'yard-gutenberg-settings',
            __('Instellingen', 'yard-gutenberg'),
            __('Instellingen', 'yard-gutenberg'),
            'manage_options',
            'yard-gutenberg-settings'
        );
        \add_submenu_page(
            'yard-gutenberg-settings',
            __('Yard Patronen', 'yard-gutenberg'),
            __('Yard Patronen', 'yard-gutenberg'),
            'manage_options',
            'edit.php?post_type=yard-pattern'
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
            if ('Yard Gutenberg' === $value[0] && 'yard-gutenberg-settings' === $value[2] && (isset($_GET['post_type'])) && ('yard-pattern' === $_GET['post_type'])) {
                $menu[$key][4] .= 'wp-has-submenu wp-has-current-submenu wp-menu-open menu-top toplevel_page_yard-gutenberg-settings';

                break;
            }
        }
    }

    public function enqueueMenuAssets()
    {
        \wp_enqueue_script(
            'yard-gutenberg-admin',
            YARD_GUTENBERG_PLUGIN_DIR_URL . 'build/menu.js',
            [], // TODO: Get the dependencies from menu.asset.php
            YARD_GUTENBERG_PLUGIN_VERSION
        );

        \wp_enqueue_style(
            'yard-gutenberg-admin',
            YARD_GUTENBERG_PLUGIN_DIR_URL . 'build/style-menu.css',
            [],
            YARD_GUTENBERG_PLUGIN_VERSION
        );
    }
}
