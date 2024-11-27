/**
 * External dependencies
 */
import Accordion from 'accordion-js';

/**
 * Internal dependencies
 */
import { slugify } from '../helpers';

const init = () => {
	const collapses = document.querySelectorAll( '.wp-block-yard-collapse' );

	collapses?.forEach( ( collapse ) => {
		// Get setting if collapse is shown as a accordion
		const showMultiple = collapse.dataset.multiple !== 'true';

		const openOnInit = [];
		const collapseItems = collapse.querySelectorAll(
			'.wp-block-yard-collapse-item'
		);

		if ( ! collapseItems || collapseItems.length === 0 ) return;

		// Get all indexes of collapse items to be open on init
		collapseItems.forEach( ( item, index ) => {
			if ( item.dataset.open && item.dataset.open === 'true' ) {
				openOnInit.push( index );
			}
		} );

		/**
		 * Init collapse with accordion-js options
		 *
		 * @see https://www.npmjs.com/package/accordion-js
		 */
		const accordion = new Accordion( collapse, {
			showMultiple,
			openOnInit,
			duration: 400,
		} );

		openCollapseItemByHash( accordion, collapseItems );

		window.addEventListener( 'hashchange', () =>
			openCollapseItemByHash( accordion, collapseItems )
		);
	} );
};

/**
 * Open collapse item on title by URL hash
 *
 * @param {HTMLElement}   accordion
 * @param {HTMLElement[]} collapseItems
 */
const openCollapseItemByHash = ( accordion, collapseItems ) => {
	if ( window.location.hash === '' ) return;

	const hash = window.location.hash.replace( '#', '' );

	// Get the index of the collapse item that has the hash as id or text
	const collapseItemIndex = Array.from( collapseItems ).findIndex(
		( item ) =>
			compareHashWithId( hash, item ) ||
			compareHashWithHeaderText( hash, item )
	);

	if ( collapseItemIndex < 0 ) return;

	setTimeout( () => {
		accordion.closeAll();
		collapseItems[ collapseItemIndex ].scrollIntoView();
	}, 1 );

	setTimeout( () => {
		accordion.open( collapseItemIndex );
	}, 500 );
};

/**
 * Check if the header id is the same as the hash
 *
 * @param {string}      hash
 * @param {HTMLElement} item
 */
const compareHashWithId = ( hash, item ) => {
	const header = item.querySelector( '.wp-block-yard-collapse-item__header' );

	return header?.id === hash;
};

/**
 * Check if the header text slug is the same as the hash
 *
 * @param {string}      hash
 * @param {HTMLElement} item
 */
const compareHashWithHeaderText = ( hash, item ) => {
	const button = item.querySelector(
		'.wp-block-yard-collapse-item__header-button'
	);

	if ( ! button ) return false;

	const text = extractHeaderText( button );

	return slugify( text ) === hash;
};

/**
 * Returns only header text without other childs
 *
 * @param {HTMLElement} headerButton
 */
const extractHeaderText = ( headerButton ) => {
	const buttonChildren = [ ...headerButton.childNodes ];
	const nodeSearchQuery = ( node ) =>
		node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '';
	const foundTextNode = buttonChildren.find( nodeSearchQuery );

	return foundTextNode?.nodeValue.trim();
};

init();
