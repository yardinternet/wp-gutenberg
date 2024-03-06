<?php

namespace Yard\Gutenberg;

class PluginServiceProvider
{
    public function boot()
    {
        $this->bootProviders();

        \add_filter('block_categories_all', [$this, 'addBlockCategory']);
        \add_action('init', [$this, 'registerBlocks']);

		\add_action('enqueue_block_editor_assets', function () {
			wp_register_script('yard-facetwp', null);
			$facetWPSettings = json_decode(get_option('facetwp_settings', '{"facets":[], "templates":[]}'));
			wp_localize_script('yard-facetwp', 'facetWP', [
				'facets' => $facetWPSettings->facets,
				'templates' => $facetWPSettings->templates,
			]);
			wp_enqueue_script('yard-facetwp');
		});
    }

    /**
     * Boot all providers
     */
    public function bootProviders(): void
    {
        $providers = [
            EditorSettings\EditorSettingsManager::class,
            Menu\MenuManager::class,
            Patterns\PatternManager::class,
        ];

        foreach ($providers as $provider) {
            $provider = new $provider();
            $provider->boot();
        }
    }

    /**
     * Add a custom block category
     */
    public function addBlockCategory(array $categories)
    {
        $categories = array_merge($categories, [
            [
                'slug'  => 'yard',
                'title' => 'Yard'
            ],
        ]);

        return $categories;
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
        $blocksPath = dirname(__DIR__, 1) . '/build/Blocks/';
        $folders    = array_filter(glob($blocksPath . '*'), 'is_dir');

        foreach ($folders as $folder) {
            $blockName = basename($folder);
            $blockPath = $blocksPath . $blockName;

            if ($this->isDynamicBlock($blockName)) {
                \register_block_type($blockPath, [
                    'render_callback' => $this->getRenderCallback($blockName),
                ]);
            } else {
                \register_block_type($blockPath);
            }
        }
    }


    /**
     * Check if the block is dynamic.
     *
     * @param string $blockName The name of the block.
     */
    public function isDynamicBlock($blockName): bool
    {
		$files = glob(__DIR__ . '/*/*/' . ucfirst($blockName) . '.php') ?? [];

		if (count($files)) {
			return true;
		}

		return false;
    }

    /**
     * Get the render callback for a dynamic block if it exists.
     *
     * @param string $blockName The name of the block.
     *
     * @return callable|null The render callback or null if not found.
     */
    public function getRenderCallback(string $blockName)
    {
		$nameSpacedClass = 'Yard\\Gutenberg\\Blocks\\' . $blockName . '\\' . ucfirst($blockName);

		if (class_exists($nameSpacedClass)) {
            $blockClass = new $nameSpacedClass;
            return [$blockClass, 'renderCallback'];
        }

        return null;
    }
}
