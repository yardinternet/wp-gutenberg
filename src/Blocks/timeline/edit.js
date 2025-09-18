/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import Inspector from './components/inspector';
import PrependButtonBlockAppender from './components/prepend-button-block-appender';
import './editor.scss';

const Edit = ( props ) => {
	const { attributes, clientId } = props;
	const { isOrderedList } = attributes;

	const List = isOrderedList ? 'ol' : 'ul';

	const TEMPLATE = applyFilters( 'yard.timeline-template', [
		[ 'yard/timeline-item' ],
	] );
	const ALLOWED_BLOCKS = [ 'yard/timeline-item' ];

	return (
		<List { ...useBlockProps() }>
			<Inspector { ...props } />
			<PrependButtonBlockAppender rootClientId={ clientId } />
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				renderAppender={ false }
				template={ TEMPLATE }
			/>
			<InnerBlocks.ButtonBlockAppender />
		</List>
	);
};

export default Edit;
