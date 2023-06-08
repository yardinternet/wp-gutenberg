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
import './style.scss';

registerBlockType( metadata.name, {
	edit,
	save,
	transforms: {
		to: [
			{
				type: 'block',
				blocks: [ 'yard-gutenberg/collapse' ],
				transform: function ( attributes, innerBlocks ) {
					const transformedInnerBlocks = innerBlocks?.map(
						( { attributes, innerBlocks } ) => {
							return wp.blocks.createBlock(
								'yard-gutenberg/collapse-item',
								{ headingText: attributes.headingText },
								innerBlocks
							);
						}
					);

					return wp.blocks.createBlock(
						'yard-gutenberg/collapse',
						{ attributes },
						transformedInnerBlocks
					);
				},
			},
		],
	},
} );
