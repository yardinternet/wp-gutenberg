<?php

namespace Yard\Gutenberg\Blocks\listposts;

class Listposts
{
    public function renderCallback($attributes, $content)
    {
        return '<div class="listposts-block">EXAMPLE' . $content . '</div>';
    }
}
