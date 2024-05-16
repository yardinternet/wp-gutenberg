/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import { IconPickerControlInspector } from '@yardinternet/gutenberg-components';
import { useParentBlock } from '@yardinternet/gutenberg-hooks';

const Inspector = ( props ) => {
	const { attributes, setAttributes, enableIcon } = props;
	const { icon, iconAltText } = attributes;

	const { selectParentBlock } = useParentBlock();

	return (
		<InspectorControls>
			{ enableIcon && (
				<PanelBody
					title={ __( 'Icoon instellingen', 'yard-gutenberg' ) }
				>
					<IconPickerControlInspector
						icon={ icon }
						onChange={ ( result ) => {
							if ( result !== undefined ) {
								setAttributes( {
									icon: result,
								} );
							}
						} }
						displayDeleteIcon={ true }
						handleRemove={ () => setAttributes( { icon: '' } ) }
					/>
					<TextControl
						label={ __( 'Alternatieve tekst', 'yard-gutenberg' ) }
						value={ iconAltText }
						onChange={ ( value ) =>
							setAttributes( {
								iconAltText: value,
							} )
						}
						help={ __(
							'Voeg een alternatieve tekst toe als een icoon betekenis heeft.',
							'yard-gutenberg'
						) }
					/>
				</PanelBody>
			) }
			<PanelBody
				title={ __( 'Toegankelijkheid', 'yard-gutenberg' ) }
				initialOpen={ false }
			>
				<p>
					{ __(
						'Pas de koptekst niveaus aan via het hoofdblok (Tabbladen).',
						'yard-gutenberg'
					) }
				</p>
				<Button variant="secondary" onClick={ selectParentBlock }>
					{ __(
						'Selecteer hoofdblok (Tabbladen)',
						'yard-gutenberg'
					) }
				</Button>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
