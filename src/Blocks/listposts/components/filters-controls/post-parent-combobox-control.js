/**
 * WordPress dependencies
 */
import { ComboboxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { mapPostsToOptions } from '../../utils/helpers';
import { searchPosts, fetchPostById } from '../../utils/api';

const PostParentComboboxControl = ( props ) => {
	const { query, setParameter, attributes } = props;
	const { postParentOption } = attributes;
	const [ options, setOptions ] = useState( [] );

	/**
	 * Check if post_parent is set
	 */
	useEffect( () => {
		if ( query.post_parent && query.post_parent !== 0 ) {
			getSelectedPost();
		}
	}, [] );

	/**
	 * Fetch saved post by id
	 */
	const getSelectedPost = async () => {
		const post = await fetchPostById( query.post_parent );

		setOptions( mapPostsToOptions( post ) );
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

		setOptions( mapPostsToOptions( posts ) );
	};

	return (
		postParentOption === 'specific-parent' && (
			<ComboboxControl
				label={ __( 'Selecteer item' ) }
				hideLabelFromVision={ true }
				value={ query.post_parent }
				options={ options }
				onChange={ ( value ) => setParameter( 'post_parent', value ) }
				help={ __(
					'Selecteer het hoofditem waar de subitems van getoond moeten worden.'
				) }
				onFilterValueChange={ onFilterValueChange }
			/>
		)
	);
};

export default PostParentComboboxControl;
