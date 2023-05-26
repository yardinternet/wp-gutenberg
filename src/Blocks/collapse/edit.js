/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Inspector from './components/inspector';

const edit = ( props ) => {
	const TEMPLATE = [ [ 'yard-gutenberg/collapse-item' ] ];
	const ALLOWED_BLOCKS = [ 'yard-gutenberg/collapse-item' ];

	return (
		<>
			<Inspector { ...props } />

			<div { ...useBlockProps() }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ TEMPLATE }
				/>
			</div>
		</>
	);
};

export default edit;
