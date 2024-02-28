/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Inspector from './components/inspector';
import './editor.scss';

const TEMPLATE = [ [ 'yard/collapse-item' ] ];
const ALLOWED_BLOCKS = [ 'yard/collapse-item' ];

const Edit = ( props ) => {
	return (
		<>
			<Inspector { ...props } />

			<div { ...useBlockProps() }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
					template={ TEMPLATE }
				/>
			</div>
		</>
	);
};

export default Edit;
