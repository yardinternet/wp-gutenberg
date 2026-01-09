/**
 * Get all tabs block and add all functions
 */
const init = () => {
	const tabsBlocks = document.querySelectorAll( '.wp-block-yard-tabs' );

	tabsBlocks?.forEach( ( tabs ) => {
		const defaultTabId = tabs.dataset.defaultTab;

		// Move elements to proper containers
		const { tabButtons, tabPanels } = moveTabElements( tabs );

		// Reset all tab and set active tab based on id
		resetAllTabs( tabButtons, tabPanels );
		setDefaultTab( tabButtons, tabPanels, defaultTabId );

		// If there is a hash in the url, set that tab active
		if ( window.location.hash !== '' ) {
			setActiveTabOnHash( tabButtons, tabPanels );
		}

		// Click and keyboard listeners
		tabButtons.forEach( ( btn ) => {
			btn.addEventListener( 'click', () => {
				resetAllTabs( tabButtons, tabPanels );
				setActiveTab( btn, tabButtons, tabPanels );
			} );
		} );

		addArrowKeyNavigation( tabButtons );
	} );
};

/**
 * Remove all active states from tabs buttons and panels
 *
 * @param {HTMLElement[]} tabsButtons - All buttons of current tabs
 * @param {HTMLElement[]} tabsPanels  - All panels of current tabs
 */
const resetAllTabs = ( tabsButtons, tabsPanels ) => {
	tabsButtons?.forEach( ( btn ) => {
		btn.setAttribute( 'aria-selected', 'false' );
		btn.setAttribute( 'tabindex', '-1' );
		btn.classList.remove( 'active' );
	} );

	tabsPanels?.forEach( ( panel ) => {
		panel.setAttribute( 'aria-hidden', 'true' );
		panel.classList.remove( 'active' );
	} );
};

/**
 * Set active tab
 *
 * @param {HTMLElement} tabs - Current tabs
 * @param {HTMLElement[]} buttons - All tab buttons
 * @param {HTMLElement} btn  - Current tab button
 */
const setActiveTab = ( btn, buttons, panels ) => {
	const id = btn.getAttribute( 'aria-controls' );
	const panel = panels.find( ( p ) => p.id === id );

	if ( ! panel ) return;

	btn.setAttribute( 'aria-selected', 'true' );
	btn.setAttribute( 'tabindex', '0' );
	btn.classList.add( 'active' );

	panels.forEach( ( panel ) => panel.setAttribute( 'hidden', 'true' ) );
	panel.removeAttribute( 'hidden' );
	panel.setAttribute( 'aria-hidden', 'false' );
	panel.classList.add( 'active' );
};

/**
 * Set default tab
 */
const setDefaultTab = ( buttons, panels, defaultId ) => {
	let defaultBtn = defaultId
		? buttons.find( ( b ) => b.id === `tabs-item-button-${ defaultId }` )
		: buttons[ 0 ];

	if ( ! defaultBtn ) defaultBtn = buttons[ 0 ];
	setActiveTab( defaultBtn, buttons, panels );
	defaultBtn.focus();
};

/**
 * Set active tab basesd on url hash
 *
 * @param {HTMLElement[]} tabsButtons - All buttons of current tabs
 * @param {HTMLElement[]} tabsPanels  - All panels of current tabs
 */
const setActiveTabOnHash = ( tabsButtons, tabsPanels ) => {
	const heading = document.querySelector( window.location.hash );
	if ( ! heading ) return;

	const btn = heading.querySelector( '[data-tab-button]' );
	if ( btn ) {
		resetAllTabs( tabsButtons, tabsPanels );
		setActiveTab( btn, tabsButtons, tabsPanels );
		btn.focus();
	}
};

/**
 * Move tab buttons and panels to WCAG-compliant structure
 *
 * @param {HTMLElement} tabs - The parent tabs block
 * @returns {Object} - { tabButtons, tabPanels, tablist, panelsContainer }
 */
const moveTabElements = ( tabs ) => {
	// Grab all fragments
	const tabButtons = Array.from(
		tabs.querySelectorAll( '[data-tab-button]' )
	);
	const tabPanels = Array.from( tabs.querySelectorAll( '[data-tab-panel]' ) );

	// Create or get containers
	const tabList = tabs.querySelector( '[role="tablist"]' );
	const panelsContainer = tabs.querySelector( '.wp-block-yard-tabs__panels' );

	if ( ! tabList ) {
		tabList = document.createElement( 'div' );
		tabList.setAttribute( 'role', 'tablist' );
		tabs.prepend( tabList );
	}

	if ( ! panelsContainer ) {
		panelsContainer = document.createElement( 'div' );
		panelsContainer.classList.add( 'wp-block-yard-tabs__panels' );
		tabs.appendChild( panelsContainer );
	}

	// Move buttons and panels into correct container
	tabButtons.forEach( ( btn ) => tabList.appendChild( btn ) );
	tabPanels.forEach( ( panel ) => panelsContainer.appendChild( panel ) );

	return { tabButtons, tabPanels, tabList, panelsContainer };
};

/**
 * Add keyboard navigation to tab buttons
 *
 * @param {HTMLElement[]} tabButtons - Array of tab buttons
 */
const addArrowKeyNavigation = ( tabButtons ) => {
	tabButtons.forEach( ( btn, index ) => {
		btn.addEventListener( 'keydown', ( e ) => {
			let newIndex = index;

			switch ( e.key ) {
				case 'ArrowRight':
					newIndex = ( index + 1 ) % tabButtons.length;
					e.preventDefault();
					break;
				case 'ArrowLeft':
					newIndex =
						( index - 1 + tabButtons.length ) % tabButtons.length;
					e.preventDefault();
					break;
				case 'Home':
					newIndex = 0;
					e.preventDefault();
					break;
				case 'End':
					newIndex = tabButtons.length - 1;
					e.preventDefault();
					break;
				default:
					return; // ignore other keys
			}

			tabButtons[ newIndex ].focus();
			tabButtons[ newIndex ].click();
		} );
	} );
};

init();

// When the url hash is changed, the init function must be called again
window.addEventListener( 'hashchange', init, false );
