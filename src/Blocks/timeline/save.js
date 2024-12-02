/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const { attributes } = props;
	const { isOrderedList } = attributes;

	const List = isOrderedList ? 'ol' : 'ul';

	return (
		<List { ...useBlockProps.save() }>
			<InnerBlocks.Content />
		</List>
	);
};

export default Save;
