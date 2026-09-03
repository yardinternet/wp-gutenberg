<?php

declare(strict_types=1);

namespace Yard\Gutenberg\PhpBlocks;

/**
 * Holds the logic behind a single PHP-only block.
 *
 * A block folder may contain a class of the same name extending this one, e.g.
 * `Greeting/Greeting.php`. `PhpBlockManager` finds it, hands it the data it was
 * going to pass to the Blade template, and passes on whatever comes back — so
 * domain logic lives in a testable class instead of an `@php` block.
 *
 * The `with()` / `override()` pair and their merge order are deliberately
 * identical to `Roots\Acorn\View\Composer`, which the Sage themes around this
 * plugin already use. An actual Acorn composer cannot serve these blocks:
 * composers are matched on the view name, and `Illuminate\View\Factory::file()`
 * uses the template's absolute path as that name, so a composer registered for
 * a dotted view never fires for a block rendered by path.
 */
abstract class BlockViewModel
{
	/**
	 * The data the block was going to be rendered with.
	 *
	 * @var array<string, mixed>
	 */
	private $data = [];

	/**
	 * Merge this view model into the block's render data.
	 *
	 * Following Acorn: `with()` supplies defaults, the block's own render data
	 * beats them, and `override()` beats everything — which is how a block
	 * replaces something it is given, such as `wrapperAttributes`.
	 *
	 * @param array<string, mixed> $data
	 *
	 * @return array<string, mixed>
	 */
	final public function compose(array $data): array
	{
		$this->data = $data;

		return array_merge($this->with(), $data, $this->override());
	}

	/**
	 * Data passed to the Blade template.
	 *
	 * @return array<string, mixed>
	 */
	public function with(): array
	{
		return [];
	}

	/**
	 * Data passed to the Blade template, winning over everything else.
	 *
	 * @return array<string, mixed>
	 */
	public function override(): array
	{
		return [];
	}

	/**
	 * The block's attributes, with the defaults from `block.json` already merged
	 * in by `WP_Block_Type::prepare_attributes_for_render()`.
	 *
	 * @return array<string, mixed>
	 */
	protected function attributes(): array
	{
		return is_array($this->data['attributes'] ?? null) ? $this->data['attributes'] : [];
	}

	/**
	 * @param mixed $default
	 *
	 * @return mixed
	 */
	protected function attribute(string $name, $default = null)
	{
		$attributes = $this->attributes();

		return array_key_exists($name, $attributes) ? $attributes[$name] : $default;
	}

	protected function content(): string
	{
		return is_string($this->data['content'] ?? null) ? $this->data['content'] : '';
	}

	protected function block(): ?\WP_Block
	{
		return ($this->data['block'] ?? null) instanceof \WP_Block ? $this->data['block'] : null;
	}

	protected function wrapperAttributes(): string
	{
		return is_string($this->data['wrapperAttributes'] ?? null) ? $this->data['wrapperAttributes'] : '';
	}
}
