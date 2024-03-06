<?php

namespace Yard\Gutenberg\Blocks\FacetWP;

class FacetWP
{
    public function renderCallback($attributes)
    {
		return view('blocks.FacetWP.index', [
			'template' => $attributes['selectedTemplate'],
			'facets' => $attributes['selectedFacets'],
			'attributes' => $attributes
		]);
	}
}
