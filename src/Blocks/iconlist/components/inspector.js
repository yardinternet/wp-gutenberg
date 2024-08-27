/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = ( props ) => {
	const { setAttributes, attributes } = props;
	const { useLinkComponent } = attributes;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Icoon instellingen', 'yard-gutenberg' ) }>
				<ToggleControl
					label={ __( 'Gebruik link component', 'yard-gutenberg' ) }
					checked={ useLinkComponent }
					onChange={ ( value ) =>
						setAttributes( {
							useLinkComponent: value,
						} )
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
