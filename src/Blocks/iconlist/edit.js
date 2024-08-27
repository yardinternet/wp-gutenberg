/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Inspector from './components/inspector';
import './editor.scss';

const Edit = ( props ) => {
	const TEMPLATE = [ [ 'yard/iconlist-item' ] ];
	const ALLOWED_BLOCKS = [ 'yard/iconlist-item' ];

	return (
		<ul { ...useBlockProps() }>
			<Inspector { ...props } />
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
				template={ TEMPLATE }
			/>
		</ul>
	);
};

export default Edit;
