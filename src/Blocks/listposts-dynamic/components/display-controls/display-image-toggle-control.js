/**
 * WordPress dependencies
 */
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const DisplayImageToggleControl = ( props ) => {
	const { setAttributes, attributes } = props;
	const { displayImage } = attributes;

	/**
	 * @todo Retrieve from template if option is available
	 */
	return (
		<ToggleControl
			label={ __( 'Toon afbeelding' ) }
			checked={ displayImage }
			onChange={ () => {
				setAttributes( { displayImage: ! displayImage } );
			} }
			__nextHasNoMarginBottom
		/>
	);
};

export default DisplayImageToggleControl;
