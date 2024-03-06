/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Settings from './settings';

const Inspector = ( props ) => {
	return (
		<InspectorControls>
			<PanelBody title={ __( 'Instellingen' ) }>
				<Settings { ...props } />
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
