/**
 * WordPress dependencies
 */
import { RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const NumberOfPostsRangeControl = ( props ) => {
	const { query, setParameter } = props;

	return (
		<RangeControl
			label={ __( 'Aantal berichten' ) }
			value={ query.posts_per_page }
			min={ 1 }
			max={ 100 }
			onChange={ ( value ) => setParameter( 'posts_per_page', value ) }
		/>
	);
};

export default NumberOfPostsRangeControl;
