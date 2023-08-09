/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@wordpress/element';
import { SelectControl, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	fetchRegisteredPosttypes,
	filterPosttypes,
	mapPosttypes,
} from '../../utils/posttypes';

const PosttypeSelectControl = ( props ) => {
	const { setAttributes, attributes } = props;
	const { posttypes } = attributes;
	const [ options, setOptions ] = useState( [] );

	// TODO: Add external options
	const getOptions = async () => {
		const allPosttypes = await fetchRegisteredPosttypes();
		const filteredPosttypes = filterPosttypes( allPosttypes );
		const mappedPosttypes = mapPosttypes( filteredPosttypes );

		setOptions( mappedPosttypes );
	};

	useEffect( () => {
		getOptions();
	}, [] );

	// TODO: A better multi select
	return options.length > 0 ? (
		<SelectControl
			multiple
			label={ __( 'Selecteer content type' ) }
			value={ posttypes }
			options={ options }
			onChange={ ( value ) => setAttributes( { posttypes: value } ) }
			__nextHasNoMarginBottom
		/>
	) : (
		<Spinner />
	);
};

export default PosttypeSelectControl;
