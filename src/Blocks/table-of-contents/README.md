# Table of Contents

This block displays a table of contents for the headings on a WordPress page. It uses the [TableOfContents component](https://github.com/yardinternet/table-of-contents/) under the hood.

## Installation

1. Add the block to the `allowedBlocks` array in the `gutenberg.php` config file.
2. Use `wp_localize_script` to add the options to the `yardTOC` frontend window object in your `Assets.php` file:

```php
#[Action('wp_enqueue_scripts')]
public function registerFrontendAssets(): void
{
 // ...

 $tableOfContentAttributes = [
 'contentSelector' => '.main-column',
 ];

 wp_localize_script('theme-frontend', 'yardTOC', $tableOfContentAttributes);
}

```

Find a list of the options here: [TableOfContents options](https://github.com/yardinternet/table-of-contents/?tab=readme-ov-file#%EF%B8%8F-options)

### Usage in a PHP template

Want to use it in a PHP template? Use the `do_blocks` function:

```php
  {!! do_blocks('<!-- wp:yard/table-of-contents /-->') !!}
```
