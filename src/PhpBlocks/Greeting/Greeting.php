<?php

declare(strict_types=1);

namespace Yard\Gutenberg\PhpBlocks\Greeting;

use Yard\Gutenberg\PhpBlocks\BlockViewModel;

class Greeting extends BlockViewModel
{
	public function with(): array
	{
		return [
			'greeting' => $this->greeting(),
		];
	}

	/**
	 * The greeting for the current hour in the site's timezone.
	 *
	 * `current_datetime()` is already in `wp_timezone()`, so this follows the
	 * site's clock rather than the server's.
	 */
	private function greeting(): string
	{
		$periods = $this->periods();

		if ([] === $periods) {
			return '';
		}

		$hour = (int) \current_datetime()->format('G');

		// The day wraps: hours before the first period belong to the last one.
		$greeting = end($periods);

		foreach ($periods as $startHour => $text) {
			if ((int) $startHour <= $hour) {
				$greeting = $text;
			}
		}

		return (string) $greeting;
	}

	/**
	 * The greeting per period, keyed by the hour the period starts, sorted.
	 *
	 * A site may return any number of periods and need not start at hour 0 —
	 * `greeting()` wraps around, so a map starting at 6 leaves the small hours
	 * to the final period.
	 *
	 * @return array<int, string> Start hour (0-23) => greeting.
	 */
	private function periods(): array
	{
		/**
		 * Filter the greeting shown per period.
		 *
		 * @param array<int, string> $periods Start hour (0-23) => greeting.
		 */
		$periods = \apply_filters('yard::gutenberg/greeting-periods', [
			0 => \__('Goedenacht', 'yard-gutenberg'),
			6 => \__('Goedemorgen', 'yard-gutenberg'),
			12 => \__('Goedemiddag', 'yard-gutenberg'),
			18 => \__('Goedenavond', 'yard-gutenberg'),
		]);

		if (! is_array($periods)) {
			return [];
		}

		$periods = array_filter($periods, 'is_scalar');

		ksort($periods, SORT_NUMERIC);

		return $periods;
	}
}
