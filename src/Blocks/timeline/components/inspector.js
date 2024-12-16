/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = ( props ) => {
	const { setAttributes, attributes } = props;
	const { isOrderedList } = attributes;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Eigenschappen', 'yard-gutenberg' ) }>
				<ToggleControl
					label={ __( 'Gebruik geordende lijst', 'yard-gutenberg' ) }
					checked={ isOrderedList }
					onChange={ ( value ) =>
						setAttributes( {
							isOrderedList: value,
						} )
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
