<?php

namespace Yard\Gutenberg\Blocks\Listposts;

class Listposts
{
    public function renderCallback($attributes, $content)
    {
        dump('Not reached');

        return '<div class="example-dynamic-block">EXAMPLE' . $content . '</div>';
    }
}
