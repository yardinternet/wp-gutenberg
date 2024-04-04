/**
 * WordPress dependencies
 */
import { ColorPalette, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import { IconPickerControlInspector } from '@yardinternet/gutenberg-components';

const Inspector = ( props ) => {
	const { setAttributes, attributes } = props;
	const { icon, iconAltText, iconColor } = attributes;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Icoon instellingen' ) }>
				<IconPickerControlInspector
					icon={ icon }
					onChange={ ( result ) => {
						if ( result !== undefined ) {
							setAttributes( {
								icon: result,
							} );
						}
					} }
				/>
				<TextControl
					label={ __( 'Alternatieve tekst' ) }
					value={ iconAltText }
					onChange={ ( value ) =>
						setAttributes( {
							iconAltText: value,
						} )
					}
					help={ __(
						'Voeg een alternatieve tekst toe als een icoon betekenis heeft.'
					) }
				/>
				<ColorPalette
					clearable={ false }
					value={ iconColor }
					onChange={ ( color ) =>
						setAttributes( { iconColor: color } )
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
