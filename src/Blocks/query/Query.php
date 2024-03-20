<?php

namespace Yard\Gutenberg\Blocks\Query;

class Query
{
    public function renderCallback($attributes)
    {
		// @todo: Get posts with the arguments
		$posts = [];

		// @todo: return correct view
		if (count($posts) === 0 ) {
			return '<div>Geen berichten gevonden</div>';
		}

		$postsHtml = '';
		foreach($posts as $post) {
			$postsHtml .= '<div><img src="' . \get_the_post_thumbnail_url($post) . '"/><h2>' . \get_the_title($post) . '</h2><p>' . \get_the_date('', $post) .  '</p><p>' . \get_the_excerpt($post) . '</p></div>';
		}

		return '<div>' . $postsHtml . '</div>';
    }
}
