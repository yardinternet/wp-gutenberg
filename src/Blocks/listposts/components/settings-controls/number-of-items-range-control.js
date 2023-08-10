/**
 * WordPress dependencies
 */
import { RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const NumberOfItemsRangeControl = ( props ) => {
	const { query, setParameter } = props;

	return (
		<RangeControl
			label={ __( 'Aantal items' ) }
			value={ query.posts_per_page }
			min={ 1 }
			max={ 100 }
			onChange={ ( value ) => setParameter( 'posts_per_page', value ) }
			__nextHasNoMarginBottom
		/>
	);
};

export default NumberOfItemsRangeControl;
