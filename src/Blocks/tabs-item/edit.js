/**
 * WordPress dependencies
 */
import { useBlockProps, PlainText, InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useCallback, useEffect, useState } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { IconPickerControlToolbar } from '@components/icon-picker-control';
import Icon from '@components/icon';
import { useCurrentBlock, useParentBlock } from '@hooks';
import Inspector from './components/inspector';
import './editor.scss';

const TEMPLATE = [
	[
		'core/paragraph',
		{
			placeholder: __( 'Vul hier de tabblad inhoud in' ),
		},
	],
];

const Edit = ( props ) => {
	const { attributes, clientId, context, setAttributes, isSelected } = props;
	const { headingText, icon, id } = attributes;

	const enableIcon = applyFilters( 'yard.tabs-item-enable-icon', false );

	const [ isOpen, setIsOpen ] = useState( false );

	const { currentBlockHasSelectedInnerBlock } = useCurrentBlock();
	const { parentAttributes, setParentAttributes } = useParentBlock();

	const { getClientIdsWithDescendants, getBlockAttributes } = useSelect(
		( select ) => ( {
			getClientIdsWithDescendants:
				select( 'core/block-editor' ).getClientIdsWithDescendants(),
			getBlockAttributes:
				select( 'core/block-editor' ).getBlockAttributes,
		} )
	);

	/**
	 * Get the block ID, ensuring it is unique.
	 * 1. Check if the ID already exists on other block attributes
	 * 2. The ID needs to be changed to the client ID in the following scenarios:
	 * - There is no ID at all
	 * - Another block already has the same ID as an attribute (can happen when duplicating a block)
	 *
	 * @return {string} The block ID.
	 */
	const getBlockId = useCallback( () => {
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
	}, [ clientId, id, getClientIdsWithDescendants, getBlockAttributes ] );

	useEffect( () => {
		setAttributes( { id: getBlockId() } );
	}, [ setAttributes, getBlockId ] );

	useEffect( () => {
		setAttributes( {
			headingLevel: parentAttributes.headingLevel ?? 'h3',
		} );
	}, [ setAttributes, parentAttributes.headingLevel ] );

	useEffect( () => {
		setIsOpen( context[ 'yard/tabs-current-tab' ] === id );
	}, [ context, id ] );

	// When the current block or inner blocks are selected, open the panel and update the parent currentTab attribute to close other tabs
	useEffect( () => {
		if ( isSelected || currentBlockHasSelectedInnerBlock ) {
			setParentAttributes( { currentTab: getBlockId() } );
			setIsOpen( true );
		}
	}, [
		isSelected,
		currentBlockHasSelectedInnerBlock,
		setParentAttributes,
		getBlockId,
	] );

	// Reset icon and iconAltText when the enableIcon is disabled
	useEffect( () => {
		if ( ! enableIcon ) {
			setAttributes( { icon: '', iconAltText: '' } );
		}
	}, [ setAttributes, enableIcon ] );

	return (
		<>
			{ enableIcon && (
				<IconPickerControlToolbar
					icon={ icon }
					onChange={ ( result ) => {
						if ( result !== undefined ) {
							setAttributes( {
								icon: result,
							} );
						}
					} }
				/>
			) }

			<Inspector { ...props } enableIcon={ enableIcon } />

			<div className="wp-block-yard-tabs-item__heading">
				<div
					className={ `wp-block-yard-tabs-item__button ${
						isOpen ? 'active' : ''
					}` }
				>
					{ icon && <Icon { ...props } /> }
					<PlainText
						{ ...useBlockProps( {
							className: 'wp-block-yard-tabs-item__heading-input',
						} ) }
						onChange={ ( value ) =>
							setAttributes( { headingText: value } )
						}
						value={ headingText }
					/>
				</div>
			</div>

			<div
				className="wp-block-yard-tabs-item__panel"
				style={ {
					display: `${ isOpen ? 'block' : 'none' }`,
				} }
			>
				<InnerBlocks template={ TEMPLATE } />
			</div>
		</>
	);
};

export default Edit;
