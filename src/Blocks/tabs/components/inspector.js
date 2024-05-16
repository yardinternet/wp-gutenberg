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
			<PanelBody title={ __( 'Instellingen', 'yard-gutenberg' ) }>
				<ToggleControl
					label={ __( 'Actief tabblad opgeven', 'yard-gutenberg' ) }
					checked={ defaultTabEnabled }
					onChange={ () =>
						setAttributes( {
							defaultTabEnabled: ! defaultTabEnabled,
						} )
					}
				/>
				{ defaultTabEnabled && (
					<SelectControl
						label={ __( 'Tabblad', 'yard-gutenberg' ) }
						value={ defaultTab }
						options={ currentBlockInnerBlocks?.map( ( block ) => ( {
							label: block.attributes.headingText,
							value: block.attributes.id,
						} ) ) }
						onChange={ ( value ) => {
							setAttributes( { defaultTab: value } );
						} }
						help={ __(
							'Selecteer het tabblad dat standaard geopend moet zijn.',
							'yard-gutenberg'
						) }
					/>
				) }
			</PanelBody>
			<PanelBody title={ __( 'Toegankelijkheid', 'yard-gutenberg' ) }>
				<SelectControl
					label={ __( 'Koptekst', 'yard-gutenberg' ) }
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
						'Selecteer het koptekst niveau voor de titels van de tab items.',
						'yard-gutenberg'
					) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
