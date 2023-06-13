/**
 * External dependencies
 */
import Accordion from 'accordion-js';

const init = () => {
	const collapses = document.querySelectorAll(
		'.wp-block-yard-gutenberg-collapse'
	);

	collapses?.forEach( ( collapse ) => {
		// Get setting if collapse is shown as a accordion
		const showMultiple = collapse.dataset.multiple !== 'true';

		const openOnInit = [];
		const collapseItems = collapse.querySelectorAll(
			'.wp-block-yard-gutenberg-collapse-item'
		);

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
		new Accordion( collapse, { showMultiple, openOnInit, duration: 400 } );
	} );
};

init();
