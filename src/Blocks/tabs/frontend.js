const init = () => {
	const tabsBlocks = document.querySelectorAll(
		'.wp-block-yard-gutenberg-tabs'
	);

	tabsBlocks?.forEach( ( tabs ) => {
		const defaultTabId = tabs.dataset.defaultTab;
		const tabsButtons = tabs.querySelectorAll(
			'.wp-block-yard-gutenberg-tabs-item__button'
		);
		const tabsPanels = tabs.querySelectorAll(
			'.wp-block-yard-gutenberg-tabs-item__panel'
		);

		setDefaultTab( tabs, defaultTabId, tabsButtons );

		tabsButtons.forEach( ( btn ) => {
			btn.addEventListener( 'click', () => {
				resetAllTabs( tabsButtons, tabsPanels );
				setActiveTab( tabs, btn );
			} );
		} );
	} );
};

const resetAllTabs = ( tabsButtons, tabsPanels ) => {
	tabsButtons?.forEach( ( btn ) => {
		btn.setAttribute( 'aria-selected', 'false' );
		btn.classList.remove( 'active' );
	} );

	tabsPanels?.forEach( ( item ) => {
		item.setAttribute( 'aria-hidden', 'true' );
		item.classList.remove( 'active' );
	} );
};

const setActiveTab = ( tabs, btn ) => {
	btn?.setAttribute( 'aria-selected', 'true' );
	btn?.classList.add( 'active' );

	const tabPanel = tabs.querySelector( btn?.getAttribute( 'aria-controls' ) );

	if ( ! tabPanel ) return;

	tabPanel.setAttribute( 'aria-hidden', 'false' );
	tabPanel.classList.add( 'active' );
};

const setDefaultTab = ( tabs, defaultTabId, tabsButtons ) => {
	let defaultButton;

	if ( defaultTabId ) {
		defaultButton = tabs.querySelector(
			`#tabs-item-button-${ defaultTabId }`
		);
	}

	setActiveTab( tabs, defaultButton ?? tabsButtons[ 0 ] );
};

init();
