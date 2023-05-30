<?php

namespace Yard\Gutenberg\Blocks\Example;

class Example
{
    public function renderCallback($attributes, $content)
    {
        dump('Not reached');

        return '<div class="example-dynamic-block">EXAMPLE' . $content . '</div>';
    }
}
