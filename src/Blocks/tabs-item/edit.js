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

	const { hasSelectedInnerBlock } = useSelect( ( select ) => ( {
		/**
		 * Checks if one of the block’s inner blocks is selected
		 *
		 * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#hasselectedinnerblock
		 */
		hasSelectedInnerBlock: select(
			'core/block-editor'
		).hasSelectedInnerBlock( clientId, true ),
	} ) );

	useEffect( () => {
		setAttributes( { id: clientId } );
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
