<?php

declare(strict_types=1);

namespace Yard\Gutenberg\Settings;

class SettingsManager
{
    public function render()
    {
        echo '<div id="yard-gutenberg-settings"></div>';
    }

    public function enqueueAssets()
    {
        \wp_enqueue_script(
            'yard-gutenberg-settings-js',
            YARD_GUTENBERG_PLUGIN_DIR_URL . 'build/settings.js',
            ['wp-element', 'wp-components'], // TODO: Get the dependencies from settings.asset.php
            YARD_GUTENBERG_PLUGIN_VERSION,
            true
        );

        \wp_enqueue_style(
            'yard-gutenberg-settings-css',
            YARD_GUTENBERG_PLUGIN_DIR_URL . 'build/style-settings.css',
            [],
            YARD_GUTENBERG_PLUGIN_VERSION
        );

        \wp_localize_script('yard-gutenberg-settings-js', 'wpApiSettings', [
            'root'  => esc_url_raw(\rest_url()),
            'nonce' => \wp_create_nonce('wp_rest'),
        ]);
    }
}
