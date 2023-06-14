/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import IconPickerControl from '@components/icon-picker-control';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;
	const { icon, iconAltText, isOpen } = attributes;

	const enableIcon = applyFilters(
		'yard-gutenberg.enable-collapse-icon',
		true
	);

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Instellingen' ) }>
				<ToggleControl
					checked={ isOpen }
					label={ __( 'Toon standaard open' ) }
					onChange={ ( value ) => setAttributes( { isOpen: value } ) }
				/>
			</PanelBody>
			{ enableIcon && (
				<PanelBody title={ __( 'Icoon instellingen' ) }>
					<IconPickerControl
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
				</PanelBody>
			) }
		</InspectorControls>
	);
};

export default Inspector;
