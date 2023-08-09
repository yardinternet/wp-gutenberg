/**
 * WordPress dependencies
 */
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const LabelTypeSelectControl = ( props ) => {
	const { setAttributes, attributes } = props;
	const { displayLabel, labelType } = attributes;

	// TODO: Retrieve from template if option is available and what the options are
	return (
		displayLabel && (
			<SelectControl
				label={ __( 'Label' ) }
				value={ labelType }
				options={ [ { label: 'Standaard', value: 'default' } ] }
				onChange={ ( value ) => setAttributes( { labelType: value } ) }
				__nextHasNoMarginBottom
			/>
		)
	);
};

export default LabelTypeSelectControl;
