/**
 * WordPress dependencies
 */
import { RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const NumberOfItemsRangeControl = ( props ) => {
	const { setAttributes, attributes } = props;
	const { numberOfItems } = attributes;

	return (
		<RangeControl
			label={ __( 'Aantal items' ) }
			value={ numberOfItems }
			min={ 1 }
			max={ 100 }
			onChange={ ( value ) => setAttributes( { numberOfItems: value } ) }
			__nextHasNoMarginBottom
		/>
	);
};

export default NumberOfItemsRangeControl;
