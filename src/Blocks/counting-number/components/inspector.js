/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;
	const {
		number,
		numberPrefix,
		numberSuffix,
		hasThousandsSeparator,
		animationDuration,
	} = attributes;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Teller instellingen' ) }>
				<TextControl
					label={ __( 'Cijfer' ) }
					onChange={ ( value ) =>
						setAttributes( {
							number: value,
						} )
					}
					type="number"
					value={ number }
				/>
				<TextControl
					label={ __( 'Tekst voor cijfer (optioneel)' ) }
					onChange={ ( value ) =>
						setAttributes( {
							numberPrefix: value,
						} )
					}
					value={ numberPrefix }
					help="Voeg een teken of woord toe voor de cijfer. Bijvoorbeeld + of -."
				/>
				<TextControl
					label={ __( 'Tekst na cijfer (optioneel)' ) }
					onChange={ ( value ) =>
						setAttributes( {
							numberSuffix: value,
						} )
					}
					value={ numberSuffix }
					help="Voeg een teken of woord toe na de cijfer. Bijvoorbeeld % of mln."
				/>
				<ToggleControl
					label={ __( 'Toon een punt voor duizendtallen' ) }
					onChange={ ( value ) =>
						setAttributes( {
							hasThousandsSeparator: value,
						} )
					}
					checked={ hasThousandsSeparator }
					help={ __( 'Bijvoorbeeld 15000 wordt 15.000' ) }
				/>
				<RangeControl
					label={ __( 'Animatie duur' ) }
					onChange={ ( value ) =>
						setAttributes( {
							animationDuration: value,
						} )
					}
					value={ animationDuration }
					min={ 1 }
					max={ 5 }
					step={ 0.1 }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
