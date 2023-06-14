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
	const TEMPLATE = [ [ 'yard-gutenberg/collapse-item' ] ];
	const ALLOWED_BLOCKS = [ 'yard-gutenberg/collapse-item' ];

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
