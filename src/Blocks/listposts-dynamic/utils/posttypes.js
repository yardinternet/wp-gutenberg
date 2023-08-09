/**
 * WordPress dependencies
 */
import { applyFilters } from '@wordpress/hooks';

export const excludePostTypes = [
	'attachment',
	'nav_menu_item',
	'post',
	'tribe_organizer',
	'tribe_venue',
	'visibility_preset',
	'wp_block',
	'wp_navigation',
	'wp_template',
	'wp_template_part',
	'yard-pattern',
];

/**
 * Remove unwanted post types from all posttypes
 *
 * @param {Object} posttypes - All post types
 */
export const filterPosttypes = ( posttypes = {} ) => {
	const excluded = applyFilters(
		'yard-gutenberg.listpost-exclude-posttypes',
		excludePostTypes
	);

	return Object.keys( posttypes )
		.filter( ( item ) => excluded.indexOf( item ) === -1 )
		.map( ( item ) => posttypes[ item ] );
};

/**
 * Map post types array to an array to use for options
 *
 * @param {Array} posttypes - Post types to map
 */
export const mapPosttypes = ( posttypes = [] ) => {
	return posttypes.map( ( item ) => ( {
		label: item.name.replace( '&#39;', "'" ),
		value: item.slug,
	} ) );
};
