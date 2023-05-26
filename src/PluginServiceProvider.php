<?php

namespace Yard\Gutenberg;

class PluginServiceProvider
{
    public function boot()
    {
        $this->bootProviders();

        add_action('init', [$this, 'registerBlocks']);
        add_action('admin_enqueue_scripts', [$this, 'enqueueAdminAssets']);
    }

    /**
     * Boot all providers
     */
    public function bootProviders(): void
    {
        $providers = [
            Patterns\PatternServiceProvider::class,
            Settings\SettingsServiceProvider::class,
        ];

        foreach ($providers as $provider) {
            $provider = new $provider();
            $provider->boot();
        }
    }

    /**
     * Registers the block using the metadata loaded from the `block.json` file.
     * Behind the scenes, it registers also all assets so they can be enqueued
     * through the block editor in the corresponding context.
     *
     * @see https://developer.wordpress.org/reference/functions/register_block_type/
     *
     * @todo AUTOMATE THIS
     */
    public function registerBlocks()
    {
        register_block_type(dirname(__DIR__, 1) . '/build/Blocks/example');
        register_block_type(dirname(__DIR__, 1) . '/build/Blocks/example-dynamic', [
            'render_callback' => [$this, 'renderDynamicBlock'],
        ]);
    }

    public function renderDynamicBlock($attributes)
    {
        return '<h3>asdf</h3>';
    }

    /**
     * Enqueue admin assets
     */
    public function enqueueAdminAssets(): void
    {
        wp_enqueue_script(
            'yard-gutenberg-admin',
            plugins_url('build/admin.js', __DIR__),
            [],
        );

        wp_enqueue_style(
            'yard-gutenberg-admin',
            plugins_url('build/style-admin.css', __DIR__),
            [],
        );
    }
}
