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
				{ /* TODO: Add select control to select the heading level */ }
				{ /* TODO: Add toggle control for defaultTab */ }
				{ /* TODO: Add select control to select the defaultTab */ }
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
