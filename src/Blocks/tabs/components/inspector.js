/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import { useCurrentBlock } from '@yardinternet/gutenberg-hooks';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;
	const { defaultTab, defaultTabEnabled, headingLevel } = attributes;

	const { currentBlockInnerBlocks, setAllCurrentBlockInnerBlocksAttributes } =
		useCurrentBlock();

	/**
	 * Handles the change event for heading level and update inner blocks attributes.
	 *
	 * @param {string} value - The new value for heading level.
	 */
	const onChangeHeadingLevel = ( value ) => {
		setAttributes( { headingLevel: value } );
		setAllCurrentBlockInnerBlocksAttributes( { headingLevel: value } );
	};

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Instellingen' ) }>
				<ToggleControl
					label={ __( 'Actief tabblad opgeven' ) }
					checked={ defaultTabEnabled }
					onChange={ () =>
						setAttributes( {
							defaultTabEnabled: ! defaultTabEnabled,
						} )
					}
				/>
				{ defaultTabEnabled && (
					<SelectControl
						label={ __( 'Tabblad' ) }
						value={ defaultTab }
						options={ currentBlockInnerBlocks?.map( ( block ) => ( {
							label: block.attributes.headingText,
							value: block.attributes.id,
						} ) ) }
						onChange={ ( value ) => {
							setAttributes( { defaultTab: value } );
						} }
						help={ __(
							'Selecteer het tabblad dat standaard geopend moet zijn.'
						) }
					/>
				) }
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
						'Selecteer het koptekst niveau voor de titels van de tab items.'
					) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
