/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Inspector from './components/inspector';
import './editor.scss';

const edit = ( props ) => {
	const { clientId, setAttributes, attributes } = props;
	const { defaultTab, defaultTabEnabled } = attributes;

	const TEMPLATE = [ [ 'yard-gutenberg/tabs-item' ] ];
	const ALLOWED_BLOCKS = [ 'yard-gutenberg/tabs-item' ];

	const { innerblocks } = useSelect( ( select ) => ( {
		/**
		 * Get all innerblocks by client id
		 *
		 * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblocks
		 */
		innerblocks: select( 'core/block-editor' ).getBlocks( clientId ),
	} ) );

	useEffect( () => {
		if ( defaultTabEnabled && defaultTab ) {
			// When a defaultTab is selected, set the tab as currentTab
			setAttributes( { currentTab: defaultTab } );
		} else if ( innerblocks && innerblocks.length > 0 ) {
			// Fallback to open the first tab
			setAttributes( { currentTab: innerblocks[ 0 ]?.attributes.id } );
		}
	}, [] );

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

export default edit;
