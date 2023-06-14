/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

const transforms = {
	to: [
		{
			type: 'block',
			blocks: [ 'yard-gutenberg/tabs' ],
			transform: function ( attributes, innerBlocks ) {
				const transformedInnerBlocks = innerBlocks?.map(
					( { attributes, clientId, innerBlocks } ) => {
						return createBlock(
							'yard-gutenberg/tabs-item',
							{
								headingLevel: attributes.headingLevel,
								headingText: attributes.headingText,
								icon: attributes.icon,
								iconAltText: attributes.iconAltText,
								id: clientId,
							},
							innerBlocks
						);
					}
				);

				return createBlock(
					'yard-gutenberg/tabs',
					{ headingLevel: attributes.headingLevel },
					transformedInnerBlocks
				);
			},
		},
	],
};

export default transforms;
