/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import save from './save';

registerBlockType( metadata.name, {
	edit,
	save,
	transforms: {
		to: [
			{
				type: 'block',
				blocks: [ 'yard-gutenberg/tabs' ],
				transform: function ( attributes, innerBlocks ) {
					const transformedInnerBlocks = innerBlocks?.map(
						( { attributes, clientId, innerBlocks } ) => {
							return wp.blocks.createBlock(
								'yard-gutenberg/tabs-item',
								{
									id: clientId,
									headingLevel: attributes.headingLevel,
									headingText: attributes.headingText,
								},
								innerBlocks
							);
						}
					);

					return wp.blocks.createBlock(
						'yard-gutenberg/tabs',
						{ headingLevel: attributes.headingLevel },
						transformedInnerBlocks
					);
				},
			},
		],
	},
} );
