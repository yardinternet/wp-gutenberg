/**
 * External dependencies
 */
import { createRoot } from '@wordpress/element';
import { TableOfContents } from '@yardinternet/table-of-contents';

/**
 * Get attribute from element or fallback to window.yardTOC or undefined
 */
const getAttribute = (element, attribute, yardTOCKey) => {
	return (
		element.getAttribute(attribute) ||
		window.yardTOC[yardTOCKey] ||
		undefined
	);
};

/**
 * Get boolean attribute from element or fallback to window.yardTOC or null
 */
const getBooleanAttribute = (element, attribute, yardTOCKey) => {
	const attrValue = element.getAttribute(attribute);
	if (attrValue !== null) {
		return attrValue === 'true';
	}
	return window.yardTOC[yardTOCKey] !== undefined
		? window.yardTOC[yardTOCKey]
		: undefined;
};

document.addEventListener('DOMContentLoaded', () => {
	const tocElement = document.getElementById('js-yard-table-of-contents');
	if (!tocElement) return;

	const yardTOC = window.yardTOC || {};

	const props = {
		contentSelector: getAttribute(
			tocElement,
			'data-content-selector',
			'contentSelector'
		),
		headingSelector: getAttribute(
			tocElement,
			'data-heading-selector',
			'headingSelector'
		),
		includeSubheading: getBooleanAttribute(
			tocElement,
			'data-include-subheading',
			'includeSubheading'
		),
		bodyClassName: yardTOC.bodyClassName || undefined,
		mobileButtonIcon: yardTOC.mobileButtonIcon || undefined,
		mobileButtonText: yardTOC.mobileButtonText || undefined,
		observerOptions: yardTOC.observerOptions || undefined,
		overwriteTextDataAttribute:
			yardTOC.overwriteTextDataAttribute || undefined,
		titleText: yardTOC.titleText || undefined,
		subheadingListCollapseIcon:
			yardTOC.subheadingListCollapseIcon || undefined,
		viewportBreakpoint: yardTOC.viewportBreakpoint || undefined,
	};

	createRoot(tocElement).render(<TableOfContents {...props} />);
});
