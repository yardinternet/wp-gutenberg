/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import { IconPickerControlInspector } from '@yardinternet/gutenberg-components';

const Inspector = ( props ) => {
	const { setAttributes, attributes } = props;
	const { icon, iconAltText } = attributes;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Kies een icoon', 'yard-gutenberg' ) }>
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
			</PanelBody>
			<PanelBody
				title={ __( 'Toegankelijkheid', 'yard-gutenberg' ) }
				initialOpen={ false }
			>
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
		</InspectorControls>
	);
};

export default Inspector;
