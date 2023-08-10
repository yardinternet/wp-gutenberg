<?php

namespace Yard\Gutenberg;

class PluginServiceProvider
{
    public function boot()
    {
        $this->bootProviders();

        \add_filter('block_categories_all', [$this, 'addBlockCategory']);
        \add_action('init', [$this, 'registerBlocks']);
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
                'slug'  => 'yard-gutenberg',
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
     * @todo: FIX THIS - Get the render callback for a dynamic block if it exists.
     *
     * @param string $blockName The name of the block.
     * @param string $blockPath The path to the block folder.
     *
     * @return callable|null The render callback or null if not found.
     */
    public function getRenderCallback($blockName)
    {
        $className      = ucwords(str_replace('-', ' ', $blockName));
        $className      = str_replace(' ', '', $className);
        $className      = str_replace('Dynamic', '', $className);
        $classPath      = dirname(__DIR__, 1) . '/src/Blocks/' . $blockName . '/' . $className . '.php';

        if (file_exists($classPath)) {
			require_once $classPath;

            $nameSpacedClass = 'Yard\\Gutenberg\\Blocks\\' . $className . '\\' . $className;

            return [ $nameSpacedClass, 'renderCallback'];
        }

        return null;
    }
}
