# WP Gutenberg

A WordPress plugin with a collection of blocks and features for the Gutenberg editor.

## 👷‍♀️ Development

1. Run `nvm use` to automatically use the correct version of Node.js
2. Run `npm install` to install dependencies
3. Run `npm start` for local development

## 🧱 PHP-only blocks

Blocks that need no JavaScript live in `src/PhpBlocks/` instead of `src/Blocks/`. They are
registered straight from source and never pass through webpack, so **they need no
`npm run build`** — adding the files below is enough.

```
src/PhpBlocks/Greeting/
├── block.json           "name": "yard/greeting"
├── greeting.blade.php   named after the slug in block.json
└── Greeting.php         optional; the block's logic
```

The folder is PascalCase because it doubles as a PHP namespace segment. The block's
identity comes from `block.json`'s `name`, not from the folder: the part after the `/` is
the slug, which names the Blade template and is the key a site filters on through
[`yard::gutenberg/allowed-blocks`](#yardgutenbergallowed-blocks). So a folder `OpeningHours`
with `"name": "yard/opening-hours"` looks for `opening-hours.blade.php`.

`block.json` must set `supports.autoRegister`. That is what makes WordPress list the block
in the inserter and preview it with core's `ServerSideRender`, without any client-side
registration:

```json
{
 "$schema": "https://schemas.wp.org/trunk/block.json",
 "apiVersion": 3,
 "name": "yard/greeting",
 "version": "0.1.0",
 "title": "Begroeting",
 "category": "yard",
 "icon": "smiley",
 "description": "Toont een begroeting.",
 "textdomain": "yard",
 "supports": {
  "autoRegister": true,
  "html": false
 }
}
```

Every template receives these variables:

| Variable             | Description                                                          |
| -------------------- | -------------------------------------------------------------------- |
| `$wrapperAttributes` | Output of `get_block_wrapper_attributes()`. Print it with `{!! !!}`. |
| `$attributes`        | The block's attributes, with the defaults from `block.json` merged.  |
| `$content`           | Inner content, for blocks that have any.                             |
| `$block`             | The `WP_Block` instance.                                             |

```blade
<p {!! $wrapperAttributes !!}>{{ $greeting }}</p>
```

Attributes typed `string`, `number`, `integer`, `boolean` or `enum` get an inspector
control generated for them automatically — no `edit` component to write.

### View models

To keep logic out of the template, add a class in the block's folder named after the
folder, extending `BlockViewModel`. It is picked up automatically; a block without one
renders on the four variables above alone.

```php
namespace Yard\Gutenberg\PhpBlocks\Greeting;

use Yard\Gutenberg\PhpBlocks\BlockViewModel;

class Greeting extends BlockViewModel
{
 public function with(): array
 {
  return ['greeting' => $this->greeting()];
 }

 private function greeting(): string
 {
  // $this->attributes(), $this->attribute('name', $default),
  // $this->content(), $this->block(), $this->wrapperAttributes()
 }
}
```

`with()` supplies data, `override()` supplies data that wins over everything, and the
merge order is `with()` → the four variables above → `override()`. That is deliberately
the same shape and precedence as `Roots\Acorn\View\Composer`, so the class reads like the
composers in a Sage theme.

An actual Acorn view composer cannot serve these blocks, so don't reach for one: composers
are matched on the *view name*, and rendering a template by absolute path through
`Illuminate\View\Factory::file()` uses that path as the view name. A composer registered
for `blocks.greeting` never fires.

### Notes

- **Requires WordPress 7.0+.** On older versions these blocks still render existing
  content, they just don't appear in the inserter.
- Blade is rendered through the **host theme's** view engine (Sage/Acorn); this plugin
  ships none. See `src/PhpBlocks/BladeRenderer.php`.
- `autoRegister` supports no `InnerBlocks`, media pickers or inline rich text. A block
  needing those belongs in `src/Blocks/` with a real `edit` component.
- Anything time- or request-dependent (such as `yard/greeting`) is frozen by a full-page
  cache at whatever value the page was cached with. A site that needs it accurate has to
  exclude the page from caching or render that part client-side.

## 🚀 Release

1. Update plugin versions and run `npm run build` to build assets. Commit and push to remote.
2. [Create a new release on GitHub](https://github.com/yardinternet/plugin-yard-gutenberg/releases/new) — set the tag (e.g. `v0.1.0`), add release notes, and publish.

## PHP Hooks

### `yard::gutenberg/allowed-blocks`

By default, all blocks are registered. Use this filter to register only the allowed blocks. The example below lists every available block:

```PHP
add_filter('yard::gutenberg/allowed-blocks', fn () => [
 'collapse',
 'collapse-item',
 'counting-number',
 'facetwp',
 'greeting',
 'icon',
 'iconlist',
 'iconlist-item',
 'slide',
 'slider',
 'tabs',
 'tabs-item',
]);
```

### `yard::gutenberg/allowed-core-blocks`

Overwrite the allowed (core) blocks.

```PHP
add_filter('yard::gutenberg/allowed-core-blocks', $this->registerCoreBlocks(...), 10, 1);

public function registerCoreBlocks($initialAllowedBlocks): array
{
 $additionalBlocks = collect([
  // 'core/search',
 ]);

 $excludeBlocks = collect([
  // 'core/post-featured-image',
 ]);

 return collect($initialAllowedBlocks)
  ->merge($additionalBlocks)
  ->reject(fn ($block) => $excludeBlocks->contains($block))
  ->all();
}
```

### `yard::gutenberg/greeting-periods`

Change the greeting the `yard/greeting` block shows, and when. The map is keyed by the hour
a period starts (in the site's timezone); any number of periods works and the day wraps, so
a map starting at 6 leaves the small hours to the last period.

```PHP
add_filter('yard::gutenberg/greeting-periods', fn () => [
 6 => 'Goedemorgen,',
 12 => 'Goedemiddag,',
 18 => 'Goedenavond,',
]);
```

The defaults are `0 => 'Goedenacht'`, `6 => 'Goedemorgen'`, `12 => 'Goedemiddag'`,
`18 => 'Goedenavond'`.

### `yard::gutenberg/allowed-blocks-whitelisted-prefixes`

By default, all blocks are registered. Use this filter to register only the allowed blocks with a specific prefix. The example adds the `tribe` prefix:

```PHP
add_filter('yard::gutenberg/allowed-blocks-whitelisted-prefixes', fn ($prefixes) => [
 ...$prefixes,
 'tribe',
] );
```

## JavaScript Hooks

### `yard.default-unused-styles`

Change the default unregistered styles: `/src/Hooks/resources/js/default-block-styles.js`:

```javascript
import { addFilter } from '@wordpress/hooks';

addFilter(
 'yard.default-unused-styles',
 'sage/default-unused-styles',
 (styles) => {
  return styles.map((item) => {
   // Remove 'fill' style from the array, so that it works again
   if (item.block === 'core/button') {
    return {
     ...item,
     styles: item.styles.filter(style => style !== 'fill')
    };
   }
   return item;
  });
 }
);

```

### `yard.default-registered-variations`

Remove specific variations: `/src/Hooks/resources/js/default-block-variations.js`:

```javascript
import { addFilter } from '@wordpress/hooks';

// Remove specific variations from the registered list
addFilter(
 'yard.default-registered-variations',
 'your-project/remove-registered-variations',
 (variations) => {
  return variations.filter((item) => {
   // Remove the custom spacer variation
   if (item.block === 'core/spacer' && item.name === 'spacer-with-steps') {
    return false; // Exclude this variation
   }
   // Keep all other variations
   return true;
  });
 }
);
```

Or change an existing variation:

```javascript
addFilter(
 'yard.default-registered-variations',
 'your-project/modify-registered-variations',
 (variations) => {
  return variations.map((item) => {
   // Change the height attribute for the spacer variation
   if (item.block === 'core/spacer' && item.name === 'spacer-with-steps') {
    return {
     ...item,
     attributes: {
      ...item.attributes,
      height: 'var:preset|spacing|9', // New height value
     },
    };
   }
   return item;
  });
 }
);
```

### `yard.default-unused-variations`

Remove a default unregistered variations so that it works again: `/src/Hooks/resources/js/default-block-variations.js`:

```javascript
import { addFilter } from '@wordpress/hooks';

addFilter(
 'yard.default-unused-variations',
 'your-project/remove-unused-variations',
 (variations) => {
  return variations.filter((item) => {
   if (item.block === 'core/group' && item.variation === 'group-row') {
    return false; // Remove this variation so that it works again
   }
   // Keep all other variations in the unused list
   return true;
  });
 }
);
```

## About us

[![banner](https://raw.githubusercontent.com/yardinternet/.github/refs/heads/main/profile/assets/small-banner-github.svg)](https://www.yard.nl/werken-bij/)
