/**
 * WordPress dependencies
 */
import { ComboboxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { mapDataToOptions } from '../../utils/options';
import { searchPosts, fetchPostById } from '../../utils/api';

const StickyPostComboboxControl = ( props ) => {
	const { query, setParameter, attributes } = props;
	const { enableStickyPost } = attributes;
	const [ options, setOptions ] = useState( [] );

	/**
	 * Check if post__in is set
	 */
	useEffect( () => {
		if ( query.post__in ) {
			getSelectedPost();
		}
	}, [] );

	/**
	 * Fetch saved post by id
	 */
	const getSelectedPost = async () => {
		const post = await fetchPostById( query.post__in );

		setOptions( mapDataToOptions( post ) );
	};

	/**
	 * Fetch new options based on the entered search term
	 *
	 * @param {string} searchValue - Entered search term
	 */
	const onFilterValueChange = async ( searchValue ) => {
		let subtype = 'any';

		if ( query.post_type.length > 0 ) {
			subtype = query.post_type.join( ',' );
		}

		const posts = await searchPosts( searchValue, subtype );

		setOptions( mapDataToOptions( posts ) );
	};

	return (
		enableStickyPost && (
			<ComboboxControl
				label={ __( 'Selecteer item' ) }
				hideLabelFromVision={ true }
				value={ query.post__in }
				options={ options }
				onChange={ ( value ) => setParameter( 'post__in', value ) }
				help={ __(
					'Selecteer het item wat als eerste in de lijst getoond moet worden'
				) }
				onFilterValueChange={ onFilterValueChange }
			/>
		)
	);
};

export default StickyPostComboboxControl;
