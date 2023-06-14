/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Inspector from './components/inspector';
import './editor.scss';

const Edit = ( props ) => {
	const { attributes, clientId, setAttributes } = props;
	const { defaultTab, defaultTabEnabled } = attributes;

	const TEMPLATE = [ [ 'yard-gutenberg/tabs-item' ] ];
	const ALLOWED_BLOCKS = [ 'yard-gutenberg/tabs-item' ];

	/**
	 * getBlocks @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblocks
	 */
	const { innerblocks } = useSelect( ( select ) => ( {
		innerblocks: select( 'core/block-editor' ).getBlocks( clientId ),
	} ) );

	/**
	 * Set current tab attribute to use context 'yard-gutenberg/tabs-current-tab' in child blocks.
	 * 1. When a defaultTab is selected, set the tab as currentTab
	 * 2. Fallback to open the first tab
	 */
	useEffect( () => {
		if ( defaultTabEnabled && defaultTab ) {
			setAttributes( { currentTab: defaultTab } );
		} else if ( innerblocks && innerblocks.length > 0 ) {
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

export default Edit;
