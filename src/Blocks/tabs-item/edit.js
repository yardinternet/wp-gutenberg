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

	const { hasSelectedInnerBlock, parentAttributes } = useSelect(
		( select ) => ( {
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
		} )
	);

	useEffect( () => {
		// TODO: Duplicating a block does not work well because it keeps the same id (which is a error). But it is important to have the same id for the select control in the inspector of the parent block
		setAttributes( {
			id: ! id || id.length <= 0 ? clientId : id,
			headingLevel: parentAttributes.headingLevel ?? 'h3',
		} );
	}, [] );

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
