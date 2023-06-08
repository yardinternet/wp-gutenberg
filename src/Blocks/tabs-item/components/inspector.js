/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = () => {
	return (
		<InspectorControls>
			<PanelBody title={ __( 'Instellingen' ) }>
				{ /* TODO: Add icon picker control */ }
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
