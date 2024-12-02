/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import './editor.scss';

const Edit = ( props ) => {
	const { attributes, setAttributes } = props;
	const { isOrderedList } = attributes;

	const List = isOrderedList ? 'ol' : 'ul';

	const TEMPLATE = applyFilters( 'yard.timeline-template', [
		[ 'yard/timeline-item' ],
	] );
	const ALLOWED_BLOCKS = applyFilters( 'yard.timeline-allowed-blocks', [
		'yard/timeline-item',
	] );

	// TODO: Ik ben er nog niet overuit of dit nou echt lekker werkt...
	const orderedList = applyFilters( 'yard.timeline-is-ordered-list', false );

	useEffect( () => {
		setAttributes( { isOrderedList: orderedList } );
	}, [ setAttributes, orderedList ] );

	return (
		<List { ...useBlockProps() }>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
				template={ TEMPLATE }
			/>
		</List>
	);
};

export default Edit;
