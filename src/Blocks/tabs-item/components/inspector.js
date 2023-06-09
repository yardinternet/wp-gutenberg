/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import IconPickerControl from '../../../EditorComponents/icon-picker-control';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;
	const { icon, iconAltText } = attributes;

	const enableIcon = applyFilters( 'yard-gutenberg.enable-tabs-icon', false );

	return (
		<InspectorControls>
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
