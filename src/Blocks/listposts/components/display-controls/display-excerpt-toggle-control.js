/**
 * WordPress dependencies
 */
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const DisplayExcerptToggleControl = ( props ) => {
	const { setAttributes, attributes } = props;
	const { displayExcerpt } = attributes;

	/**
	 * @todo Retrieve from template if option is available
	 */
	return (
		<ToggleControl
			label={ __( 'Toon samenvatting' ) }
			checked={ displayExcerpt }
			onChange={ () => {
				setAttributes( { displayExcerpt: ! displayExcerpt } );
			} }
			__nextHasNoMarginBottom
		/>
	);
};

export default DisplayExcerptToggleControl;
