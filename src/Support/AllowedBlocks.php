<?php

declare(strict_types=1);

namespace Yard\Gutenberg\Support;

class AllowedBlocks
{
	/**
	 * Filter a list of block directory names through the
	 * `yard::gutenberg/allowed-blocks` filter.
	 *
	 * By default every block this plugin ships is registered. As soon as a site
	 * hooks the filter, only the names it returns survive. Both the built blocks
	 * in `build/Blocks` and the PHP-only blocks in `src/PhpBlocks` go through
	 * here, so one filter controls every block in the plugin.
	 *
	 * @param string[] $blockNames Block directory names.
	 *
	 * @return string[] The allowed block directory names.
	 */
	public static function filter(array $blockNames): array
	{
		if (! \has_filter('yard::gutenberg/allowed-blocks')) {
			return $blockNames;
		}

		$allowedBlocks = \apply_filters('yard::gutenberg/allowed-blocks', []);

		return array_filter(
			$blockNames,
			function (string $blockName) use ($allowedBlocks) {
				return in_array($blockName, $allowedBlocks);
			}
		);
	}
}
