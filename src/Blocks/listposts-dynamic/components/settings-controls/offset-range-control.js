/**
 * WordPress dependencies
 */
import { RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const OffsetRangeControl = ( props ) => {
	const { setAttributes, attributes } = props;
	const { offset } = attributes;

	return (
		<RangeControl
			label={ __( 'Afwijking' ) }
			value={ offset }
			min={ 0 }
			max={ 100 }
			onChange={ ( value ) => setAttributes( { offset: value } ) }
			__nextHasNoMarginBottom
		/>
	);
};

export default OffsetRangeControl;
