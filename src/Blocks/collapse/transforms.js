/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

const transforms = {
	to: [
		{
			type: 'block',
			blocks: [ 'yard-gutenberg/tabs' ],
			transform: ( attributes, innerBlocks ) => {
				const transformedInnerBlocks = innerBlocks?.map(
					( {
						attributes: childAttributes,
						clientId: childClientId,
						innerBlocks: childInnerBlocks,
					} ) => {
						return createBlock(
							'yard-gutenberg/tabs-item',
							{
								headingLevel: childAttributes.headingLevel,
								headingText: childAttributes.headingText,
								icon: childAttributes.icon,
								iconAltText: childAttributes.iconAltText,
								id: childClientId,
							},
							childInnerBlocks
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
