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
	const { attributes, setAttributes, enableIcon, enableSubtitleToggle } =
		props;
	const { icon, iconAltText, isOpen, hasSubtitle } = attributes;

	const { selectParentBlock } = useParentBlock();

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Instellingen', 'yard-gutenberg' ) }>
				<ToggleControl
					checked={ isOpen }
					label={ __( 'Toon standaard open', 'yard-gutenberg' ) }
					onChange={ ( value ) => setAttributes( { isOpen: value } ) }
				/>
				{ enableSubtitleToggle && (
					<ToggleControl
						label={ __( 'Toon ondertitel', 'yard-gutenberg' ) }
						checked={ hasSubtitle }
						onChange={ ( value ) =>
							setAttributes( { hasSubtitle: value } )
						}
					/>
				) }
			</PanelBody>
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
							'Voeg een alternatieve tekst toe als een icoon betekenis heeft.'
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
						'Pas de koptekst niveaus aan via het hoofdblok (Uitklap).',
						'yard-gutenberg'
					) }
				</p>
				<Button variant="secondary" onClick={ selectParentBlock }>
					{ __( 'Selecteer hoofdblok (Uitklap)', 'yard-gutenberg' ) }
				</Button>
			</PanelBody>
			<PanelBody
				title={ __( 'SEO instellingen', 'yard-gutenberg' ) }
				initialOpen={ false }
			>
				<p>
					{ __(
						'Pas de SEO instellingen aan via het hoofdblok (Uitklap).',
						'yard-gutenberg'
					) }
				</p>
				<Button variant="secondary" onClick={ selectParentBlock }>
					{ __( 'Selecteer hoofdblok (Uitklap)', 'yard-gutenberg' ) }
				</Button>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
