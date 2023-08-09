/**
 * WordPress dependencies
 */
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const TemplateSelectControl = ( props ) => {
	const { setAttributes, attributes } = props;
	const { template } = attributes;

	// TODO: Retrieve all options
	// Options:
	// - Template name (not the file name)
	// - Enable image
	// - Enable date
	// - Enable excerpt
	// - Enable label
	// - Add label options (array with label and value)
	// - Add tekst if no posts are available
	return (
		<SelectControl
			label={ __( 'Sjabloon' ) }
			value={ template }
			options={ [ { label: 'Standaard', value: 'default' } ] }
			onChange={ ( value ) => setAttributes( { template: value } ) }
			__nextHasNoMarginBottom
		/>
	);
};

export default TemplateSelectControl;
