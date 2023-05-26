/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const save = ( props ) => {
	const { attributes } = props;
	const { hasStructuredData, showMultiple } = attributes;

	return (
		<div
			{ ...useBlockProps.save() }
			data-multiple={ showMultiple }
			itemScope={ hasStructuredData }
			itemType={ hasStructuredData ? 'https://schema.org/FAQPage' : null }
		>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
