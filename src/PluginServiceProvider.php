<?php

namespace Yard\Gutenberg;

class PluginServiceProvider
{
    public function boot()
    {
        $this->bootProviders();

        add_action('init', [$this, 'registerBlocks']);
    }

    public function bootProviders()
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
     */
    public function registerBlocks()
    {
        // TODO: Automate this
        register_block_type(dirname(__DIR__, 1) . '/build/Blocks/example');
        register_block_type(dirname(__DIR__, 1) . '/build/Blocks/example-dynamic', [
            'render_callback' => [$this, 'renderDynamicBlock'],
        ]);
    }

    public function renderDynamicBlock($attributes)
    {
        return '<h3>asdf</h3>';
    }
}
