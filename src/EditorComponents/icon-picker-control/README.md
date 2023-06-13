# Icon picker control

The IconPickerControl use the Font Awesome API to search for icons. More information found here: <https://fontawesome.com/docs/apis/>.

## Hooks

By default all the styles from Font Awesome are loaded. Use this filter to change which styles are needed. In this example all styles are loaded:

```JS
import { addFilter } from '@wordpress/hooks';

addFilter( 'yard-gutenberg.fontawesome-styles', 'yard-gutenberg', () => [
  'solid',
  'regular',
  'light',
  'thin',
  'duotone',
  'brands',
] );
```
