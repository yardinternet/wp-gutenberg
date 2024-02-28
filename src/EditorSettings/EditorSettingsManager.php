<?php

declare(strict_types=1);

namespace Yard\Gutenberg\EditorSettings;

class EditorSettingsManager
{
    public function boot()
    {
		\add_action('enqueue_block_editor_assets', [$this, 'enqueueAssets']);
    }

    public function enqueueAssets()
    {
        \wp_enqueue_script(
            'yard-editor-settings-js',
            YARD_GUTENBERG_PLUGIN_DIR_URL . 'build/editorSettings.js',
            [],
            YARD_GUTENBERG_PLUGIN_VERSION,
            true
        );
    }
}
