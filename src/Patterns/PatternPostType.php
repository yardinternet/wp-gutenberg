<?php

declare(strict_types=1);

namespace Yard\Gutenberg\Patterns;

class PatternPostType
{
	public $name = 'yard-pattern';

	public function boot()
	{
		$this->registerPatternPostType();
		$this->registerPatternCategoryTaxonomy();
	}

	public function registerPatternPostType()
	{
		$labels = [
			'name' => __('Patronen', 'yard-gutenberg'),
			'singular_name' => __('Patroon', 'yard-gutenberg'),
			'menu_name' => __('Patronen', 'yard-gutenberg'),
			'name_admin_bar' => __('Patronen', 'yard-gutenberg'),
			'add_new' => __('Nieuw patroon', 'book', 'yard-gutenberg'),
			'add_new_item' => __('Nieuw patroon toevoegen', 'yard-gutenberg'),
			'new_item' => __('Nieuw patroon', 'yard-gutenberg'),
			'edit_item' => __('Patroon bewerken', 'yard-gutenberg'),
			'view_item' => __('Bekijk patroon', 'yard-gutenberg'),
			'all_items' => __('Alle patronen', 'yard-gutenberg'),
			'search_items' => __('Zoek patronen', 'yard-gutenberg'),
			'parent_item_colon' => __('Parent patroon:', 'yard-gutenberg'),
			'not_found' => __('Geen patronen gevonden.', 'yard-gutenberg'),
			'not_found_in_trash' => __('Geen patronen gevonden in de prullenbak.', 'yard-gutenberg'),
		];

		$args = [
			'labels' => $labels,
			'description' => __('Omschrijving.', 'yard-gutenberg'),
			'public' => false,
			'publicly_queryable' => true,
			'show_ui' => true,
			'show_in_menu' => 'admin.php?page=yard-gutenberg',
			'query_var' => true,
			'capability_type' => 'post',
			'has_archive' => false,
			'hierarchical' => false,
			'menu_position' => null,
			'show_in_rest' => true,
			'supports' => ['title', 'editor', 'thumbnail', 'revisions'],
		];

		\register_post_type($this->name, $args);
	}


	/**
	 * Registers the pattern category taxonomy.
	 */
	public function registerPatternCategoryTaxonomy(): void
	{
		\register_taxonomy(
			$this->name . '-category',
			'yard-pattern',
			[
				'label' => __('Patroon categorie'),
				'show_in_rest' => true,
				'show_in_menu' => true,
				'hierarchical' => true,
			]
		);
	}
}
