/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import Inspector from './components/inspector';
import './editor.scss';

const Edit = ( props ) => {
	const { attributes } = props;
	const { isOrderedList } = attributes;

	const List = isOrderedList ? 'ol' : 'ul';

	const TEMPLATE = applyFilters( 'yard.timeline-template', [
		[ 'yard/timeline-item' ],
	] );
	const ALLOWED_BLOCKS = [ 'yard/timeline-item' ];

	return (
		<List { ...useBlockProps() }>
			<Inspector { ...props } />
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
				template={ TEMPLATE }
			/>
		</List>
	);
};

export default Edit;
