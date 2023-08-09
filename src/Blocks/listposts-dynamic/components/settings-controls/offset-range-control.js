/**
 * WordPress dependencies
 */
import { RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const OffsetRangeControl = ( props ) => {
	const { query, setParameter } = props;

	return (
		<RangeControl
			label={ __( 'Afwijking' ) }
			value={ query.offset }
			min={ 0 }
			max={ 100 }
			onChange={ ( value ) => setParameter( 'offset', value ) }
			__nextHasNoMarginBottom
		/>
	);
};

export default OffsetRangeControl;
