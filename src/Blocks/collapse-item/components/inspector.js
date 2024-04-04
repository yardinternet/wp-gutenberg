/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import { IconPickerControlInspector } from '@yardinternet/gutenberg-components';
import { useParentBlock } from '@yardinternet/gutenberg-hooks';

const Inspector = ( props ) => {
	const { attributes, setAttributes, enableIcon } = props;
	const { icon, iconAltText, isOpen } = attributes;

	const { selectParentBlock } = useParentBlock();

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
			<PanelBody title={ __( 'Toegankelijkheid' ) } initialOpen={ false }>
				<p>
					{ __(
						'Pas de koptekst niveaus aan via het hoofdblok (Uitklap).'
					) }
				</p>
				<Button variant="secondary" onClick={ selectParentBlock }>
					{ __( 'Selecteer hoofdblok (Uitklap)' ) }
				</Button>
			</PanelBody>
			<PanelBody title={ __( 'SEO instellingen' ) } initialOpen={ false }>
				<p>
					{ __(
						'Pas de SEO instellingen aan via het hoofdblok (Uitklap).'
					) }
				</p>
				<Button variant="secondary" onClick={ selectParentBlock }>
					{ __( 'Selecteer hoofdblok (Uitklap)' ) }
				</Button>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
