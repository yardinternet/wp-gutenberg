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
import Icon from '@components/icon';
import Inspector from './components/inspector';
import './editor.scss';

const edit = ( props ) => {
	const { attributes, clientId, context, setAttributes, isSelected } = props;
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

	/**
	 * hasSelectedInnerBlock @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#hasselectedinnerblock
	 * getBlockParents @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblockparents
	 * getBlockAttributes @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblockattributes
	 * getClientIdsWithDescendants @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getclientidsofdescendants
	 */
	const {
		hasSelectedInnerBlock,
		getParentClientId,
		parentAttributes,
		getClientIdsWithDescendants,
		getBlockAttributes,
	} = useSelect( ( select ) => ( {
		hasSelectedInnerBlock: select(
			'core/block-editor'
		).hasSelectedInnerBlock( clientId, true ),
		getParentClientId:
			select( 'core/block-editor' ).getBlockParents( clientId )[ 0 ],
		parentAttributes: select( 'core/block-editor' ).getBlockAttributes(
			select( 'core/block-editor' ).getBlockParents( clientId )[ 0 ]
		),
		getClientIdsWithDescendants:
			select( 'core/block-editor' ).getClientIdsWithDescendants(),
		getBlockAttributes: select( 'core/block-editor' ).getBlockAttributes,
	} ) );

	const { updateBlockAttributes } = useDispatch( 'core/block-editor' );

	// Update attributes id and heading level on init
	useEffect( () => {
		setAttributes( {
			id: getBlockId(),
			headingLevel: parentAttributes.headingLevel ?? 'h3',
		} );
	}, [ parentAttributes ] );

	// Set isOpen state based on context 'yard-gutenberg/tabs-current-tab'
	useEffect( () => {
		if ( context[ 'yard-gutenberg/tabs-current-tab' ] === id ) {
			setIsOpen( true );
		} else {
			setIsOpen( false );
		}
	}, [ context ] );

	// When the current block or inner blocks are selected, open the panel and update the parent currentTab attribute to close other tabs
	useEffect( () => {
		if ( isSelected || hasSelectedInnerBlock ) {
			updateBlockAttributes( getParentClientId, {
				currentTab: id ?? clientId,
			} );

			setIsOpen( true );
		}
	}, [ isSelected, hasSelectedInnerBlock ] );

	/**
	 * Get the block ID, ensuring it is unique.
	 * 1. Check if the ID already exists on other block attributes
	 * 2. The ID needs to be changed to the client ID in the following scenarios:
	 * - There is no ID at all
	 * - Another block already has the same ID as an attribute (can happen when duplicating a block)
	 *
	 * @returns {string} The block ID.
	 */
	const getBlockId = () => {
		const idAlreadyExist = getClientIdsWithDescendants?.some(
			( _clientId ) => {
				const { id: _id } = getBlockAttributes( _clientId );
				return clientId !== _clientId && id === _id;
			}
		);

		if ( ! id || id.length <= 0 || idAlreadyExist ) {
			return clientId;
		}

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
