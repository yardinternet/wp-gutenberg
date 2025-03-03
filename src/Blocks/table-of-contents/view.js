/**
 * External dependencies
 */
import { createRoot } from '@wordpress/element';
import { TableOfContents } from '@yardinternet/table-of-contents';

/**
 * Get attribute from element or fallback to window.yardTOC or undefined
 * @param {HTMLElement} element    - The element to get the attribute from
 * @param {string}      attribute  - The attribute name
 * @param {string}      yardTOCKey - The key in window.yardTOC
 * @return {string|undefined} - The attribute value or undefined
 */
const getAttribute = ( element, attribute, yardTOCKey ) => {
	return (
		element.getAttribute( attribute ) ||
		( window.yardTOC && window.yardTOC[ yardTOCKey ] ) ||
		undefined
	);
};

/**
 * Get boolean attribute from element or fallback to window.yardTOC or undefined
 * @param {HTMLElement} element    - The element to get the attribute from
 * @param {string}      attribute  - The attribute name
 * @param {string}      yardTOCKey - The key in window.yardTOC
 * @return {boolean|undefined} - The attribute value or undefined
 */
const getBooleanAttribute = ( element, attribute, yardTOCKey ) => {
	const attrValue = element.getAttribute( attribute );
	if ( attrValue !== null ) {
		return attrValue === 'true';
	}
	return window.yardTOC && window.yardTOC[ yardTOCKey ] !== undefined
		? window.yardTOC[ yardTOCKey ]
		: undefined;
};

/**
 * Get property from window.yardTOC or return undefined
 * @param {string} yardTOCKey - The key in window.yardTOC
 * @return {any|undefined} - The property value or undefined
 */
const getYardTOCProperty = ( yardTOCKey ) => {
	return window.yardTOC && window.yardTOC[ yardTOCKey ] !== undefined
		? window.yardTOC[ yardTOCKey ]
		: undefined;
};

/**
 * Initialize Table of Contents
 */
const initializeTOC = () => {
	const tocElement = document.getElementById( 'js-yard-table-of-contents' );
	if ( ! tocElement || ! window.yardTOC ) return;

	const props = {
		contentSelector: getAttribute(
			tocElement,
			'data-content-selector',
			'contentSelector'
		),
		headingsSelector: getAttribute(
			tocElement,
			'data-heading-selector',
			'headingsSelector'
		),
		includeSubheading: getBooleanAttribute(
			tocElement,
			'data-include-subheading',
			'includeSubheading'
		),
		bodyClassName: getYardTOCProperty( 'bodyClassName' ),
		mobileButtonIcon: getYardTOCProperty( 'mobileButtonIcon' ),
		mobileButtonText: getYardTOCProperty( 'mobileButtonText' ),
		observerOptions: getYardTOCProperty( 'observerOptions' ),
		overwriteTextDataAttribute: getYardTOCProperty(
			'overwriteTextDataAttribute'
		),
		titleText: getYardTOCProperty( 'titleText' ),
		subheadingListCollapseIcon: getYardTOCProperty(
			'subheadingListCollapseIcon'
		),
		viewportBreakpoint: getYardTOCProperty( 'viewportBreakpoint' ),
	};

	createRoot( tocElement ).render( <TableOfContents { ...props } /> );
};

// Initialize Table of Contents on DOMContentLoaded
document.addEventListener( 'DOMContentLoaded', initializeTOC );
