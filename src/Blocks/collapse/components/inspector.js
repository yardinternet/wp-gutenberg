/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const Inspector = ( props ) => {
	const { clientId, setAttributes, attributes } = props;
	const { hasStructuredData, headingLevel, showMultiple } = attributes;

	const { getBlocksByClientId } = useSelect( ( select ) => ( {
		getBlocksByClientId:
			select( 'core/block-editor' ).getBlocksByClientId( clientId ),
	} ) );

	const { updateBlockAttributes } = useDispatch( 'core/block-editor' );

	/**
	 * Handles the change event for heading level.
	 *
	 * @param {string} value - The new value for heading level.
	 */
	const onChangeHeadingLevel = ( value ) => {
		setAttributes( { headingLevel: value } );

		if ( getBlocksByClientId.length > 0 ) {
			const children = getBlocksByClientId[ 0 ].innerBlocks;

			children.forEach( ( child ) =>
				updateBlockAttributes( child.clientId, { headingLevel: value } )
			);
		}
	};

	/**
	 * Handles the change event for structured data.
	 *
	 * @param {boolean} value - The new value for structured data.
	 */
	const onChangeHasStructuredData = ( value ) => {
		setAttributes( { hasStructuredData: value } );

		const children = getBlocksByClientId( clientId )[ 0 ].innerBlocks;
		children.forEach( ( child ) =>
			updateBlockAttributes( child.clientId, {
				hasStructuredData: value,
			} )
		);
	};

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Instellingen' ) }>
				<ToggleControl
					label={ __( 'Toon als accordion' ) }
					checked={ showMultiple }
					onChange={ ( value ) =>
						setAttributes( { showMultiple: value } )
					}
					help={ __(
						'Als accordion sluiten de uitklap items na klik op een ander item.'
					) }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Toegankelijkheid' ) }>
				<SelectControl
					label={ __( 'Koptekst' ) }
					value={ headingLevel }
					options={ [
						{ label: 'Geen', value: 'div' },
						{ label: 'H2', value: 'h2' },
						{ label: 'H3', value: 'h3' },
						{ label: 'H4', value: 'h4' },
						{ label: 'H5', value: 'h5' },
						{ label: 'H6', value: 'h6' },
					] }
					onChange={ onChangeHeadingLevel }
					help={ __(
						'Selecteer het koptekst niveau voor de titels van de uitklap items.'
					) }
				/>
			</PanelBody>
			<PanelBody title={ __( 'SEO instellingen' ) }>
				<ToggleControl
					label={ __( 'Voeg FAQ structured data toe' ) }
					checked={ hasStructuredData }
					onChange={ onChangeHasStructuredData }
					help={ __(
						'Als in dit blok veelgestelde vragen worden weergegeven, kan er structured data worden toegevoegd voor SEO.'
					) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
