/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

const transforms = {
	to: [
		{
			type: 'block',
			blocks: [ 'yard-gutenberg/collapse' ],
			transform: function ( attributes, innerBlocks ) {
				const transformedInnerBlocks = innerBlocks?.map(
					( { attributes, innerBlocks } ) => {
						return createBlock(
							'yard-gutenberg/collapse-item',
							{
								headingLevel: attributes.headingLevel,
								headingText: attributes.headingText,
								icon: attributes.icon,
								iconAltText: attributes.iconAltText,
							},
							innerBlocks
						);
					}
				);

				return createBlock(
					'yard-gutenberg/collapse',
					{ headingLevel: attributes.headingLevel },
					transformedInnerBlocks
				);
			},
		},
	],
};

export default transforms;
