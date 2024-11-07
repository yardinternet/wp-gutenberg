# Yard | Gutenberg

Plugin with a collection of components for the WordPress Gutenberg editor

## 👷‍♀️ Development

1. Run `nvm use` to automatically use the correct version of Node.js
2. Run `npm install` to install dependencies
3. Run `npm start` for local development

## 🚀 Release

TODO: automate this

1. Update plugin versions and run `npm run build` to build assets. Commit and push to remote.
2. Add tag `git tag v0.1.0` and push to remote `git push origin v0.1.0`

## PHP Hooks

### `yard::gutenberg/allowed-blocks`

By default, all blocks will be registered. Use this filter to register only the allowed blocks.

```PHP
add_filter('yard::gutenberg/allowed-blocks', fn () => [
 'collapse',
 'collapse-item',
 'counting-number',
 'facetwp',
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

Overwrite the allowed blocks.

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
      height: 'var:preset|spacing|5', // New height value
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
