/**
 * WordPress dependencies
 */
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const TaxonomyToggleControl = ( props ) => {
	const { removeParameter, setAttributes, attributes } = props;
	const { enableTaxonomies } = attributes;

	/**
	 * Save state in attributes and remove tax_query parameter if the toggle is disabled
	 *
	 * @param {boolean} state - State of toggle
	 */
	const onChange = ( state ) => {
		setAttributes( { enableTaxonomies: state } );

		if ( ! state ) {
			removeParameter( 'tax_query' );
		}
	};

	return (
		<ToggleControl
			label={ __( 'Filter op taxonomie' ) }
			checked={ enableTaxonomies }
			onChange={ onChange }
		/>
	);
};

export default TaxonomyToggleControl;
