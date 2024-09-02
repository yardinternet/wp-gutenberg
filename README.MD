# Yard Gutenberg

Plugin with a collection of components for the WordPress Gutenberg editor

## 👷‍♀️ Development

1. Run `nvm use` to automatically use the correct version of Node.js
2. Run `npm install` to install dependencies
3. Run `npm start` for local development

## 🚀 Release

TODO: automate this

1. Update plugin versions and run `npm run build` to build assets. Commit and push to remote.
2. Add tag `git tag v0.1.0` and push to remote `git push origin v0.1.0`

## Hooks

### yard-gutenberg/allowedBlocks

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
