/**
 * WordPress dependencies
 */
import { ComboboxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { searchPosts, fetchPostById } from '../../utils/api';

const StickyPostComboboxControl = ( props ) => {
	const { query, setParameter, attributes } = props;
	const { hasStickyPost } = attributes;
	const [ options, setOptions ] = useState( [] );

	useEffect( () => {
		if ( query.post__in ) {
			getSelectedPost();
		}
	}, [] );

	const mapOptions = ( optionsToMap ) => {
		return optionsToMap.map( ( item ) => ( {
			value: item.id,
			label: item.title,
		} ) );
	};

	const getSelectedPost = async () => {
		const post = await fetchPostById( query.post__in );

		setOptions( mapOptions( post ) );
	};

	const onValueChange = async ( searchValue ) => {
		let subtype = 'any';

		if ( query.post_type.length > 0 ) {
			subtype = query.post_type.join( ',' );
		}

		const posts = await searchPosts( searchValue, subtype );

		setOptions( mapOptions( posts ) );
	};

	return (
		hasStickyPost && (
			<ComboboxControl
				label={ __( 'Selecteer item' ) }
				hideLabelFromVision={ true }
				value={ query.post__in }
				options={ options }
				onChange={ ( value ) => setParameter( 'post__in', value ) }
				help={ __(
					'Selecteer het item wat als eerste in de lijst getoond moet worden'
				) }
				onFilterValueChange={ onValueChange }
				__nextHasNoMarginBottom
			/>
		)
	);
};

export default StickyPostComboboxControl;
