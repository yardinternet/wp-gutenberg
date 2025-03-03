/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const { attributes } = props;
	const { includeSubheading, contentSelector, headingSelector } = attributes;

	const dataAttributes = {};
	if ( contentSelector ) {
		dataAttributes[ 'data-content-selector' ] = contentSelector;
	}
	if ( headingSelector ) {
		dataAttributes[ 'data-heading-selector' ] = headingSelector;
	}
	if ( includeSubheading !== undefined ) {
		dataAttributes[ 'data-include-subheading' ] = includeSubheading;
	}

	return (
		<div { ...useBlockProps.save() }>
			<div id="js-yard-table-of-contents" { ...dataAttributes }></div>
		</div>
	);
};

export default Save;
