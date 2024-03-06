/**
 * External dependencies
 */
import Select from 'react-select';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

const Settings = ( props ) => {
	const { setAttributes, attributes } = props;
	const { selectedFacets, selectedTemplate } = attributes;

	const templates = window.facetWP.templates.map( ( template ) => ( {
		...template,
		value: template.name,
	} ) );

	const facets = window.facetWP.facets.map( ( facet ) => ( {
		...facet,
		value: facet.name,
	} ) );

	return (
		<>
			<p className="facetwp-settings-label">
				{ __( 'Selecteer het template' ) }
			</p>
			<Select
				value={ selectedTemplate }
				options={ templates }
				getOptionValue={ ( opt ) => opt.value }
				onChange={ ( val ) =>
					setAttributes( { selectedTemplate: val } )
				}
			/>

			<p className="facetwp-settings-label">
				{ __( 'Selecteer de filters' ) }
			</p>
			<Select
				isMulti
				value={ selectedFacets }
				options={ facets }
				getOptionValue={ ( opt ) => opt.value }
				onChange={ ( val ) => setAttributes( { selectedFacets: val } ) }
			/>
		</>
	);
};

export default Settings;
