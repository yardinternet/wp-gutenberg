<?php

declare(strict_types=1);

namespace Yard\Gutenberg\Support;

class AllowedBlocks
{
	/**
	 * Filter a list of block names through the
	 * `yard::gutenberg/allowed-blocks` filter.
	 *
	 * By default every block this plugin ships is registered. As soon as a site
	 * hooks the filter, only the names it returns survive. Both the built blocks
	 * in `build/Blocks` and the PHP-only blocks in `src/PhpBlocks` go through
	 * here, so one filter controls every block in the plugin.
	 *
	 * Filtering is on the values and keys are preserved, so callers may pass
	 * either a plain list of names or a map of something else onto them.
	 *
	 * @param string[] $blockNames Block names.
	 *
	 * @return string[] The allowed block names.
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
