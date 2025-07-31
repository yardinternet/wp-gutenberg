# Collapse item block

## Hooks

By default the option to select an icon is disabled. Use this filter to enable the icon option.

```JS
import { addFilter } from '@wordpress/hooks';

addFilter('yard.collapse-item-enable-icon', 'yard', () => true);
```

By default the option to select a subtitle is disabled. Use this filter to enable the subtitle option.

```JS
import { addFilter } from '@wordpress/hooks';
addFilter('yard.collapse-item-enable-subtitle-toggle', 'yard', () => true);
```
