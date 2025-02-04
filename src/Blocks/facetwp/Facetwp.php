<?php

declare(strict_types=1);

namespace Yard\Gutenberg\Blocks\facetwp;

class Facetwp
{
	public function renderCallback(array $attributes)
	{
		if (function_exists('FWP')) {
			$attributes['selectedFacets'] = array_map(
				fn (array $facet) => FWP()->helper->get_facet_by_name($facet['name']),
				$attributes['selectedFacets']
			);
			$attributes['selectedTemplate'] = FWP()->helper->get_template_by_name($attributes['selectedTemplate']['name'] ?? '');
		}

		return view('blocks.FacetWP.index', [
			'template' => $attributes['selectedTemplate'],
			'facets' => $attributes['selectedFacets'],
			'attributes' => $attributes,
		]);
	}
}
