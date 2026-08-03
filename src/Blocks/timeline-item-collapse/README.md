# Timeline item collapse block

## Current step

When this block carries a block style whose name contains the word `active` —
`is-style-active-step`, `is-style-active`, etc. — it is rendered as the current step:

1. `aria-current="step"` on the `<li>`
2. `<span class="sr-only">Huidige stap: </span>` before the title

See `Yard\Gutenberg\Hooks\DefaultHookManager::markCurrentTimelineStep()`.

Two parts are the theme's responsibility:

- registering the block style (`registerBlockStyle`) and styling it,
- providing the `.sr-only` utility class.

Known limitations:

- The plain `yard/timeline-item` block is not covered. A theme can register the same block
  style on it, but that block has no title element to put the notice in, so it gets neither
  the notice nor `aria-current`.
- Marking the current step through a block style is a convention, not a contract — the class
  comes from the theme. Replacing it with a block attribute plus an editor control would fix
  that, but needs a migration path for content that already uses the block style.

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
