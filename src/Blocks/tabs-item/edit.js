/**
 * WordPress dependencies
 */
import { useBlockProps, PlainText, InnerBlocks } from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Icon from '../../EditorComponents/icon';
import Inspector from './components/inspector';
import './editor.scss';

const edit = ( props ) => {
	const { clientId, attributes, setAttributes, isSelected } = props;
	const { headingText, icon, id } = attributes;

	const TEMPLATE = [
		[
			'core/paragraph',
			{
				placeholder: __( 'Vul hier de tabblad inhoud in' ),
			},
		],
	];

	const [ isOpen, setIsOpen ] = useState( false );

	const {
		hasSelectedInnerBlock,
		getParentClientId,
		parentAttributes,
		getClientIdsWithDescendants,
		getBlockAttributes,
	} = useSelect( ( select ) => ( {
		/**
		 * Checks if one of the block’s inner blocks is selected
		 *
		 * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#hasselectedinnerblock
		 */
		hasSelectedInnerBlock: select(
			'core/block-editor'
		).hasSelectedInnerBlock( clientId, true ),

		/**
		 * Get parent block client id
		 *
		 * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblockparents
		 */
		getParentClientId:
			select( 'core/block-editor' ).getBlockParents( clientId )[ 0 ],

		/**
		 * Get parent block attributes
		 *
		 * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblockattributes
		 * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblockparents
		 */
		parentAttributes: select( 'core/block-editor' ).getBlockAttributes(
			select( 'core/block-editor' ).getBlockParents( clientId )[ 0 ]
		),

		/**
		 * Get all clientIds
		 *
		 * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getclientidsofdescendants
		 */
		getClientIdsWithDescendants:
			select( 'core/block-editor' ).getClientIdsWithDescendants(),

		/**
		 * Get block attributes with a clientId
		 *
		 * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblockattributes
		 */
		getBlockAttributes: select( 'core/block-editor' ).getBlockAttributes,
	} ) );

	const { updateBlockAttributes } = useDispatch( 'core/block-editor' );

	useEffect( () => {
		setAttributes( {
			id: getBlockId(),
			headingLevel: parentAttributes.headingLevel ?? 'h3',
		} );
	}, [] );

	useEffect( () => {
		// Open panel when this block is saved as the currentTab
		if ( parentAttributes.currentTab === id ) {
			setIsOpen( true );
		} else {
			setIsOpen( false );
		}
	}, [ parentAttributes.currentTab ] );

	useEffect( () => {
		// When the current block or inner blocks are selected, open the panel and update the parent currentTab attribute to close other tabs
		if ( isSelected || hasSelectedInnerBlock ) {
			updateBlockAttributes( getParentClientId, {
				currentTab: id ?? clientId,
			} );

			setIsOpen( true );
		}
	}, [ isSelected, hasSelectedInnerBlock ] );

	const getBlockId = () => {
		// Check if the id already exist on an other block attribute
		const idAlreadyExist = getClientIdsWithDescendants?.some(
			( _clientId ) => {
				const { id: _id } = getBlockAttributes( _clientId );
				return clientId !== _clientId && id === _id;
			}
		);

		/**
		 * The id needs to be changed to the clientId only in the following scenarios:
		 * 1. There is no id at all yet
		 * 2. There is already another block that has that id as an attribute (that happens if you duplicate a block)
		 */
		if ( ! id || id.length <= 0 || idAlreadyExist ) {
			return clientId;
		}

		// Return the current id stored in the attributes
		return id;
	};

	return (
		<>
			<Inspector { ...props } />
			<div className="wp-block-yard-gutenberg-tabs-item__heading">
				{ icon && <Icon { ...props } /> }
				<PlainText
					{ ...useBlockProps( {
						className:
							'wp-block-yard-gutenberg-tabs-item__heading-input',
					} ) }
					onChange={ ( value ) =>
						setAttributes( { headingText: value } )
					}
					value={ headingText }
				/>
			</div>

			<div
				className="wp-block-yard-gutenberg-tabs-item__panel"
				style={ {
					display: `${ isOpen ? 'block' : 'none' }`,
				} }
			>
				<InnerBlocks template={ TEMPLATE } />
			</div>
		</>
	);
};

export default edit;
