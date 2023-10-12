/**
 * Map posts array to an array to use for options in a select control
 *
 * @param {Array} options - Array to map
 */
export const mapPostsToOptions = ( options ) => {
	return options.map( ( item ) => ( {
		value: item.id,
		label: `#${ item.id }: ${ item.title }`,
	} ) );
};

/**
 * Map post types array to an array to use for options in a select control
 *
 * @param {Array} postTypes - Post types to map
 */
export const mapPostTypesToOptions = ( postTypes = [] ) => {
	return postTypes.map( ( item ) => ( {
		label: item.name.replace( '&#39;', "'" ),
		value: item.slug,
	} ) );
};
