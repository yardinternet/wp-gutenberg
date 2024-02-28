/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

const transforms = {
	to: [
		{
			type: 'block',
			blocks: [ 'yard/tabs' ],
			transform: ( attributes, innerBlocks ) => {
				const transformedInnerBlocks = innerBlocks?.map(
					( {
						attributes: childAttributes,
						clientId: childClientId,
						innerBlocks: childInnerBlocks,
					} ) => {
						return createBlock(
							'yard/tabs-item',
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
					'yard/tabs',
					{ headingLevel: attributes.headingLevel },
					transformedInnerBlocks
				);
			},
		},
	],
};

export default transforms;
