/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

const transforms = {
	to: [
		{
			type: 'block',
			blocks: [ 'yard/collapse' ],
			transform: ( attributes, innerBlocks ) => {
				const transformedInnerBlocks = innerBlocks?.map(
					( {
						attributes: childAttributes,
						innerBlocks: childInnerBlocks,
					} ) => {
						return createBlock(
							'yard/collapse-item',
							{
								headingLevel: childAttributes.headingLevel,
								headingText: childAttributes.headingText,
								icon: childAttributes.icon,
								iconAltText: childAttributes.iconAltText,
							},
							childInnerBlocks
						);
					}
				);

				return createBlock(
					'yard/collapse',
					{ headingLevel: attributes.headingLevel },
					transformedInnerBlocks
				);
			},
		},
	],
};

export default transforms;
