/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'core/list' ],
			transform: ( attributes, innerBlocks ) => {
				const transformedInnerBlocks = innerBlocks?.map(
					( { attributes: childAttributes } ) => {
						return createBlock( 'yard/iconlist-item', {
							listText: childAttributes.content,
						} );
					}
				);

				return createBlock(
					'yard/iconlist',
					{},
					transformedInnerBlocks
				);
			},
		},
	],
	to: [
		{
			type: 'block',
			blocks: [ 'core/list' ],
			transform: ( attributes, innerBlocks ) => {
				const transformedInnerBlocks = innerBlocks?.map(
					( { attributes: childAttributes } ) => {
						return createBlock( 'core/list-item', {
							content: childAttributes.listText,
						} );
					}
				);

				return createBlock( 'core/list', {}, transformedInnerBlocks );
			},
		},
	],
};

export default transforms;
