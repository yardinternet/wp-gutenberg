# Timeline item collapse block

## Current step

Class logic done in theme, but a11y done here via hook for now.
In future class logic will be moved to this package to its own panel.


## Hooks

Want to change the allowed blocks of a timeline item collapse, use this filter.

```JS
import { addFilter } from '@wordpress/hooks';

addFilter( 'yard.timeline-item-collapse-allowed-blocks', 'yard', ( allowedBlocks ) => [
 ...allowedBlocks,
 'yard/icon',
] );
```

Want to change the starting template of a timeline item collapse, use this filter.

```JS
import { addFilter } from '@wordpress/hooks';

addFilter( 'yard.timeline-item-collapse-template', 'yard', () => [
 [ 'core/paragraph', { placeholder: 'Voeg de inhoud van de uitklap toe' } ],
] );
```
