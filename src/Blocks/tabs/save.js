/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const { attributes } = props;
	const { defaultTab } = attributes;

	return (
		<div { ...useBlockProps.save() } data-default-tab={ defaultTab }>
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;
