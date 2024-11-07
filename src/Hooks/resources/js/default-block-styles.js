/**
 * WordPress dependencies
 */
import { unregisterBlockStyle } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';
import { applyFilters } from '@wordpress/hooks';

const defaultUnregisterStyles = [
	{ block: 'core/button', styles: [ 'outline', 'fill' ] },
	{ block: 'core/image', styles: [ 'default', 'rounded' ] },
	{ block: 'core/separator', styles: [ 'default', 'wide', 'dots' ] },
	{
		block: 'core/social-links',
		styles: [ 'default', 'logos-only', 'pill-shape' ],
	},
	{ block: 'core/quote', styles: [ 'large', 'default', 'plain' ] },
];

// Allow project-level overrides
const unregisterStyles = applyFilters(
	'yard.default-unused-styles',
	defaultUnregisterStyles
);

domReady( () => {
	unregisterStyles.forEach( ( { block, styles } ) => {
		styles.forEach( ( style ) => unregisterBlockStyle( block, style ) );
	} );
} );
