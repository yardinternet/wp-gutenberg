/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useCallback, useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { useCurrentBlock } from '@hooks';
import Inspector from './components/inspector';
import './editor.scss';

const TEMPLATE = [ [ 'yard/tabs-item' ] ];
const ALLOWED_BLOCKS = [ 'yard/tabs-item' ];

const Edit = ( props ) => {
	const { attributes, setAttributes, clientId } = props;
	const { currentTab, defaultTab, defaultTabEnabled } = attributes;

	const { currentBlockInnerBlocks, currentBlockHasSelectedInnerBlock } =
		useCurrentBlock();

	const {
		currentSelectedBlock,
		getClientIdsOfDescendants,
		getBlockAttributes,
	} = useSelect( ( select ) => ( {
		currentSelectedBlock:
			select( 'core/block-editor' ).getSelectedBlockClientId(),
		getClientIdsOfDescendants:
			select( 'core/block-editor' ).getClientIdsOfDescendants( clientId ),
		getBlockAttributes: select( 'core/block-editor' ).getBlockAttributes,
	} ) );

	const clientIdExist = useCallback(
		( idToCheck ) => {
			return getClientIdsOfDescendants?.some( ( _clientId ) => {
				const { id: _id } = getBlockAttributes( _clientId );
				return idToCheck === _id;
			} );
		},
		[ getClientIdsOfDescendants, getBlockAttributes ]
	);

	/**
	 * Set current tab attribute to use context 'yard/tabs-current-tab' in child blocks.
	 * 1. When a defaultTab is selected, set the tab as currentTab
	 * 2. Fallback to open the first tab and reset defaultTab
	 */
	useEffect( () => {
		if ( currentSelectedBlock || currentBlockHasSelectedInnerBlock ) return;

		if ( defaultTabEnabled && defaultTab ) {
			return setAttributes( { currentTab: defaultTab } );
		}

		if ( currentBlockInnerBlocks.length > 0 ) {
			setAttributes( {
				defaultTab: currentBlockInnerBlocks.at( 0 )?.attributes.id,
				currentTab: currentBlockInnerBlocks.at( 0 )?.attributes.id,
			} );
		}
	}, [
		defaultTab,
		defaultTabEnabled,
		currentSelectedBlock,
		currentBlockInnerBlocks,
		currentBlockHasSelectedInnerBlock,
		setAttributes,
	] );

	/**
	 * When the user duplicate the tabs block, the currentTab en defaultTab need to be changed
	 */
	useEffect( () => {
		const currentTabExist = clientIdExist( currentTab );
		const defaultTabExist = clientIdExist( defaultTab );

		if ( ! currentTabExist || ! defaultTabExist ) {
			setAttributes( {
				defaultTab: currentBlockInnerBlocks.at( 0 )?.attributes.id,
				currentTab: currentBlockInnerBlocks.at( 0 )?.attributes.id,
			} );
		}
	}, [
		defaultTab,
		currentTab,
		clientIdExist,
		currentBlockInnerBlocks,
		setAttributes,
	] );

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
