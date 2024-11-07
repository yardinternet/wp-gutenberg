/**
 * WordPress dependencies
 */
import {
	registerBlockVariation,
	unregisterBlockVariation,
} from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';
import { applyFilters } from '@wordpress/hooks';

const defaultUnusedVariations = [
	{ block: 'core/group', variation: 'group-stack' },
	{ block: 'core/group', variation: 'group-columns' },
];

const defaultRegisterVariations = [
	// Override core/spacer to start with steps instead of custom height
	{
		block: 'core/spacer',
		name: 'spacer-with-steps',
		isDefault: true,
		attributes: { height: 'var:preset|spacing|5' },
	},
	// Change default media-text settings
	{
		block: 'core/media-text',
		isDefault: true,
		attributes: {
			align: 'wide',
			imageFill: true,
			mediaPosition: 'right',
		},
		innerBlocks: [
			[ 'core/heading', { placeholder: 'Titel' } ],
			[
				'core/paragraph',
				{ placeholder: 'Inleidende tekst van maximaal 10 regels.' },
			],
			[
				'core/buttons',
				{},
				[
					[
						'core/button',
						{ placeholder: 'Optionele call to action' },
					],
				],
			],
		],
	},
];

// Allow project-level overrides
const unusedVariations = applyFilters(
	'yard.default-unused-variations',
	defaultUnusedVariations
);
const registerVariations = applyFilters(
	'yard.default-registered-variations',
	defaultRegisterVariations
);

domReady( () => {
	registerVariations.forEach( ( { block, ...variation } ) => {
		registerBlockVariation( block, variation );
	} );

	unusedVariations.forEach( ( { block, variation } ) => {
		unregisterBlockVariation( block, variation );
	} );
} );
