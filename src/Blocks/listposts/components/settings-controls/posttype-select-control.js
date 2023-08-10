/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@wordpress/element';
import { SelectControl, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { fetchRegisteredPosttypes } from '../../utils/api';
import { mapPosttypesToOptions } from '../../utils/helpers';
import { filterPosttypes } from '../../utils/posttypes';

const PosttypeSelectControl = ( props ) => {
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
		const allPosttypes = await fetchRegisteredPosttypes();
		const filteredPosttypes = filterPosttypes( allPosttypes );
		const mappedPosttypes = mapPosttypesToOptions( filteredPosttypes );

		setOptions( mappedPosttypes );
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
			__nextHasNoMarginBottom
		/>
	) : (
		<Spinner />
	);
};

export default PosttypeSelectControl;
