<?php

declare(strict_types=1);
/**
 * Plugin Name:       Yard | Gutenberg
 * Description:       A collection of blocks for the WordPress Gutenberg editor.
 * Version:           0.1.11
 * Author:            Yard | Digital Agency
 * Author URI:        https://www.yard.nl/
 *
 * License:           MIT License
 * License URI:       https://opensource.org/licenses/MIT
 * Text Domain:       yard-gutenberg
 */

/*
* If this file is called directly, abort.
*/
if (! defined('ABSPATH')) {
	exit;
}

define('YARD_GUTENBERG_PLUGIN_VERSION', '0.1.11');
define('YARD_GUTENBERG_PLUGIN_DIR_URL', \plugin_dir_url(__FILE__));
define('YARD_GUTENBERG_PLUGIN_DIR_PATH', \plugin_dir_path(__FILE__));

/**
 * Require autoloader.
 */
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
	require __DIR__ . '/vendor/autoload.php';
}

/*
 * Begin execution of the plugin.
 *
 * This hook is called once any activated plugins have been loaded. Is generally used for immediate filter setup, or
 * plugin overrides. The plugins_loaded action hook fires early, and precedes the setup_theme, after_setup_theme, init
 * and wp_loaded action hooks.
 */
\add_action('plugins_loaded', function () {
	$serviceProvider = new \Yard\Gutenberg\PluginServiceProvider();
	$serviceProvider->boot();
}, 10);
