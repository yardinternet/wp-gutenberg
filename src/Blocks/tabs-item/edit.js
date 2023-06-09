/**
 * WordPress dependencies
 */
import { useBlockProps, PlainText, InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Inspector from './components/Inspector';
import './editor.scss';

const edit = ( props ) => {
	const { clientId, attributes, setAttributes, isSelected } = props;
	const { id, headingText } = attributes;

	const TEMPLATE = [
		[
			'core/paragraph',
			{
				placeholder: __( 'Vul hier de tabblad inhoud in' ),
			},
		],
	];

	const {
		hasSelectedInnerBlock,
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

	useEffect( () => {
		setAttributes( {
			id: getBlockId(),
			headingLevel: parentAttributes.headingLevel ?? 'h3',
		} );
	}, [] );

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
		 * 1. There is no ID at all yet
		 * 2. There is already another block that has that ID as an attribute (that happens if you duplicate a block)
		 */
		if ( ! id || id.length <= 0 || idAlreadyExist ) {
			return clientId;
		}

		// Return the current ID stored in the attributes
		return id;
	};

	return (
		<>
			<Inspector { ...props } />

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

			<div
				className="wp-block-yard-gutenberg-tabs-item__panel"
				style={ {
					display: `${
						isSelected || hasSelectedInnerBlock ? 'block' : 'none'
					}`,
				} }
			>
				<InnerBlocks template={ TEMPLATE } />
			</div>
		</>
	);
};

export default edit;
