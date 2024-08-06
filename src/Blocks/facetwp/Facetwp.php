<?php

declare(strict_types=1);

namespace Yard\Gutenberg\Blocks\Facetwp;

class Facetwp
{
	public function renderCallback(array $attributes)
	{
		return view('blocks.FacetWP.index', [
			'template' => $attributes['selectedTemplate'],
			'facets' => $attributes['selectedFacets'],
			'attributes' => $attributes,
		]);
	}
}
