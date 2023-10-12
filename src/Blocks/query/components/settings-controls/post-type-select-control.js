/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@wordpress/element';
import { SelectControl, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { fetchRegisteredPostTypes } from '../../utils/api';
import { mapPostTypesToOptions } from '../../utils/helpers';
import { filterPostTypes } from '../../utils/post-types';

const PostTypeSelectControl = ( props ) => {
	const { query, setParameter } = props;
	const [ options, setOptions ] = useState( [] );

	useEffect( () => {
		getOptions();
	}, [] );

	/**
	 * Fetch and map all post types without the unwanted post types
	 *
	 * @todo Add external options
	 */
	const getOptions = async () => {
		const allPostTypes = await fetchRegisteredPostTypes();
		const filteredPostTypes = filterPostTypes( allPostTypes );
		const mappedPostTypes = mapPostTypesToOptions( filteredPostTypes );

		setOptions( mappedPostTypes );
	};

	/**
	 * @todo A better multi select
	 */
	return options.length > 0 ? (
		<SelectControl
			multiple
			label={ __( 'Selecteer content type' ) }
			value={ query.post_type }
			options={ options }
			onChange={ ( value ) => setParameter( 'post_type', value ) }
		/>
	) : (
		<Spinner />
	);
};

export default PostTypeSelectControl;
