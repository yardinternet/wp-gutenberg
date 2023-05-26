/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;
	const { isOpen } = attributes;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Instellingen' ) }>
				<ToggleControl
					checked={ isOpen }
					label={ __( 'Toon standaard open' ) }
					onChange={ ( value ) => setAttributes( { isOpen: value } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
