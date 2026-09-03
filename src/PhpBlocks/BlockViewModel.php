<?php

declare(strict_types=1);

namespace Yard\Gutenberg\PhpBlocks;

/**
 * Holds the logic behind a single PHP-only block.
 *
 * A block folder may contain a class of the same name extending this one, e.g.
 * `Greeting/Greeting.php`. `PhpBlockManager` finds it and lets it assemble the
 * data the Blade template is rendered with, so domain logic lives in a testable
 * class instead of an `@php` block. A block without one is rendered by a plain
 * instance of this class, which adds nothing.
 *
 * The `with()` / `override()` pair and their merge order are deliberately
 * identical to `Roots\Acorn\View\Composer`, which the Sage themes around this
 * plugin already use. An actual Acorn composer cannot serve these blocks:
 * composers are matched on the view name, and `Illuminate\View\Factory::file()`
 * uses the template's absolute path as that name, so a composer registered for
 * a dotted view never fires for a block rendered by path.
 */
class BlockViewModel
{
	/** @var array<string, mixed> */
	private $attributes = [];

	/** @var string */
	private $content = '';

	/** @var \WP_Block|null */
	private $block;

	/**
	 * The block's generated class, e.g. `wp-block-yard-greeting`.
	 *
	 * @var string
	 */
	private $blockClass = '';

	/** @var string */
	private $wrapperAttributes = '';

	/**
	 * Assemble the data the Blade template is rendered with.
	 *
	 * Following Acorn: `with()` supplies defaults, the block's own render data
	 * beats them, and `override()` beats everything — which is how a block
	 * replaces something it is given, such as `wrapperAttributes`.
	 *
	 * @param array<string, mixed> $attributes Attributes, with `block.json` defaults merged in.
	 *
	 * @return array<string, mixed>
	 */
	final public function compose(array $attributes, string $content, ?\WP_Block $block, string $blockClass): array
	{
		$this->attributes = $attributes;
		$this->content = $content;
		$this->block = $block;
		$this->blockClass = $blockClass;

		// An empty class is harmless: core splits it with PREG_SPLIT_NO_EMPTY,
		// so it contributes nothing to the merge.
		$this->wrapperAttributes = \get_block_wrapper_attributes([
			'class' => implode(' ', array_filter($this->classes())),
		]);

		$data = [
			'attributes' => $attributes,
			'content' => $content,
			'block' => $block,
			'blockClass' => $blockClass,
			'wrapperAttributes' => $this->wrapperAttributes,
		];

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
	 * Extra classes for the block's wrapper element.
	 *
	 * `get_block_wrapper_attributes()` merges these ahead of the class
	 * WordPress generates, and de-duplicates.
	 *
	 * @return string[]
	 */
	public function classes(): array
	{
		return [];
	}

	/**
	 * A BEM modifier on the block's generated class.
	 *
	 * Built from `$blockClass` rather than a literal so it follows the
	 * `block_default_classname` filter, and matches the `$block` variable the
	 * block's SCSS uses.
	 */
	protected function modifier(string $name): string
	{
		$name = \sanitize_html_class($name);

		return '' === $this->blockClass || '' === $name ? '' : $this->blockClass . '--' . $name;
	}

	/**
	 * The block's attributes, with the defaults from `block.json` already merged
	 * in by `WP_Block_Type::prepare_attributes_for_render()`.
	 *
	 * @return array<string, mixed>
	 */
	protected function attributes(): array
	{
		return $this->attributes;
	}

	/**
	 * @param mixed $default
	 *
	 * @return mixed
	 */
	protected function attribute(string $name, $default = null)
	{
		return array_key_exists($name, $this->attributes) ? $this->attributes[$name] : $default;
	}

	protected function content(): string
	{
		return $this->content;
	}

	protected function block(): ?\WP_Block
	{
		return $this->block;
	}

	protected function blockClass(): string
	{
		return $this->blockClass;
	}

	protected function wrapperAttributes(): string
	{
		return $this->wrapperAttributes;
	}
}
