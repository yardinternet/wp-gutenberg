<?php

namespace Yard\Gutenberg\Blocks\listposts;

class Listposts
{
    public function renderCallback($attributes)
    {
		// @todo: Sticky post is not workign correct
		$queryArgs = $attributes['query'];
		$query = new \WP_Query($queryArgs);

		$posts = $query->posts;

		if (count($posts) === 0 ) {
			return '<div>Geen items gevonden</div>';
		}

		$postsHtml = '';
		foreach($posts as $post) {
			$postsHtml .= '<div><img src="' . \get_the_post_thumbnail_url($post) . '"/><h2>' . \get_the_title($post) . '</h2><p>' . \get_the_date('', $post) .  '</p><p>' . \get_the_excerpt($post) . '</p></div>';
		}

		return '<div>' . $postsHtml . '</div>';
    }
}
