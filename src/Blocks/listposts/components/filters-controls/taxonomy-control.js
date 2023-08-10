/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import TaxonomyToggleControl from './taxonomy-toggle-control';
import { fetchTaxonomiesByPosttype } from '../../utils/api';
import { filterTaxonomies } from '../../utils/taxonomies';

const TaxonomyControl = ( props ) => {
	const { query, removeParameter, setAttributes, attributes } = props;
	const { enableTaxonomie, enableManuelSelection } = attributes;
	const [ taxonomies, setTaxonomies ] = useState( [] );

	useEffect( () => {
		getTaxonomies();
	}, [ query.post_type ] );

	/**
	 * Fetch taxonomies of selected post types
	 *
	 * @todo Make it possible to get taxonomies for multiple post types
	 */
	const getTaxonomies = async () => {
		const allTaxonomies = await fetchTaxonomiesByPosttype(
			query.post_type.join( ',' )
		);
		const filteredTaxonomies = filterTaxonomies( allTaxonomies );

		setTaxonomies( filteredTaxonomies );
	};

	return (
		! enableManuelSelection &&
		taxonomies.length !== 0 && (
			<>
				<TaxonomyToggleControl
					removeParameter={ removeParameter }
					{ ...props }
				/>

				{ enableTaxonomie &&
					taxonomies.map( ( taxonomy ) => {
						// @todo Include taxonomy terms
						// @todo Exclude taxonomy terms
						return <p key={ taxonomy.slug }>{ taxonomy.name }</p>;
					} ) }
			</>
		)
	);
};

export default TaxonomyControl;
