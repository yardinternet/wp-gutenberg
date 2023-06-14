/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = () => {
	return (
		<ul { ...useBlockProps.save() }>
			<InnerBlocks.Content />
		</ul>
	);
};

export default Save;
