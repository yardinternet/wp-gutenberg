/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';

const Edit = () => {
	const TEMPLATE = [ [ 'yard-gutenberg/iconlist-item' ] ];
	const ALLOWED_BLOCKS = [ 'yard-gutenberg/iconlist-item' ];

	return (
		<ul { ...useBlockProps() }>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
				template={ TEMPLATE }
			/>
		</ul>
	);
};

export default Edit;
