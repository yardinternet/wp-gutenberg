<?php

declare(strict_types=1);

namespace Yard\Gutenberg\PhpBlocks\Greeting;

use Yard\Gutenberg\PhpBlocks\BlockViewModel;

class Greeting extends BlockViewModel
{
	/**
	 * The resolved period, memoised: `with()` and `classes()` both need it, and
	 * resolving twice could straddle an hour boundary.
	 *
	 * @var array{slug: string, greeting: string}|null
	 */
	private $period;

	public function with(): array
	{
		return [
			'greeting' => $this->period()['greeting'],
		];
	}

	public function classes(): array
	{
		return array_filter([$this->modifier($this->period()['slug'])]);
	}

	/**
	 * The period covering the current hour in the site's timezone.
	 *
	 * `current_datetime()` is already in `wp_timezone()`, so this follows the
	 * site's clock rather than the server's.
	 *
	 * @return array{slug: string, greeting: string}
	 */
	private function period(): array
	{
		if (null !== $this->period) {
			return $this->period;
		}

		$periods = $this->periods();

		if ([] === $periods) {
			return $this->period = ['slug' => '', 'greeting' => ''];
		}

		$hour = (int) \current_datetime()->format('G');

		// The day wraps: hours before the first period belong to the last one.
		$slugs = array_keys($periods);
		$slug = end($slugs);

		foreach ($periods as $candidate => $period) {
			if ($period['from'] <= $hour) {
				$slug = $candidate;
			}
		}

		return $this->period = [
			'slug' => (string) $slug,
			'greeting' => $periods[$slug]['greeting'],
		];
	}

	/**
	 * The greeting periods, keyed by slug and sorted by start hour.
	 *
	 * The key doubles as the BEM modifier on the block's class. A site may return
	 * any number of periods and need not start at hour 0 — `period()` wraps
	 * around, so a map starting at 6 leaves the small hours to the final period.
	 *
	 * @return array<string, array{from: int, greeting: string}>
	 */
	private function periods(): array
	{
		/**
		 * Filter the greeting periods.
		 *
		 * Keyed by slug, which becomes the BEM modifier on the block's class,
		 * e.g. `morning` renders `wp-block-yard-greeting--morning`.
		 *
		 * @param array<string, array{from: int, greeting: string}> $periods
		 */
		$periods = \apply_filters('yard::gutenberg/greeting-periods', [
			'night' => ['from' => 0, 'greeting' => \__('Goedenacht', 'yard-gutenberg')],
			'morning' => ['from' => 6, 'greeting' => \__('Goedemorgen', 'yard-gutenberg')],
			'afternoon' => ['from' => 12, 'greeting' => \__('Goedemiddag', 'yard-gutenberg')],
			'evening' => ['from' => 18, 'greeting' => \__('Goedenavond', 'yard-gutenberg')],
		]);

		if (! is_array($periods)) {
			return [];
		}

		$normalized = [];

		foreach ($periods as $slug => $period) {
			if (! is_array($period) || ! isset($period['from']) || ! isset($period['greeting'])) {
				continue;
			}

			$normalized[(string) $slug] = [
				'from' => (int) $period['from'],
				'greeting' => (string) $period['greeting'],
			];
		}

		uasort($normalized, function (array $a, array $b) {
			return $a['from'] <=> $b['from'];
		});

		return $normalized;
	}
}
