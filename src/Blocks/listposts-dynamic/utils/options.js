/**
 * Map data array to an array to use for options
 *
 * @param {Array} options - Array to map
 */
export const mapDataToOptions = ( options ) => {
	return options.map( ( item ) => ( {
		value: item.id,
		label: `#${ item.id }: ${ item.title }`,
	} ) );
};
