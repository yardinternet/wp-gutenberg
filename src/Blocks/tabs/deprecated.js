/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default [
	// v0.1.0 - No role="tablist"
	{
		attributes: {
			defaultTab: {
				type: 'string',
				default: '',
			},
		},
		save( { attributes } ) {
			const { defaultTab } = attributes;
			return (
				<div
					{ ...useBlockProps.save() }
					data-default-tab={ defaultTab }
				>
					<InnerBlocks.Content />
				</div>
			);
		},
	},
];
