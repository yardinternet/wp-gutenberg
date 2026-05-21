# Table of Contents

This block displays a table of contents for the headings on a WordPress page. It uses the [TableOfContents component](https://github.com/yardinternet/table-of-contents/) under the hood.

## Installation

1. Add the block to the `allowedBlocks` array in the `gutenberg.php` config file.
2. Use `wp_head` to add the options to the `yardTOC` frontend window object in your `Assets.php` file:

```php
	#[Action('wp_head')]
	public function addGlobalsToFrontendWindowObject(): void
	{
		wp_print_inline_script_tag(
			'window.yardTOC = Object.assign({}, window.yardTOC || {}, ' . wp_json_encode([
				'contentSelector' => '.layout-article-aside__article',
				'mobileButtonText' => 'Inhoudsopgave',
				'titleText' => 'Op deze pagina',
			], JSON_UNESCAPED_UNICODE) . ');'
		);
	}
```

Find a list of the options here: [TableOfContents options](https://github.com/yardinternet/table-of-contents/?tab=readme-ov-file#%EF%B8%8F-options)

### Usage in a PHP template

Want to use it in a PHP template? Use the `do_blocks` function:

```php
  {!! do_blocks(
      '<!-- wp:yard/table-of-contents --><div class="wp-block-yard-table-of-contents"><div id="js-yard-table-of-contents" data-include-subheading="true"></div></div><!-- /wp:yard/table-of-contents -->',
  ) !!}
```
