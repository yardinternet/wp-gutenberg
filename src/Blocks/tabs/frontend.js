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
	} );

	tabsPanels?.forEach( ( item ) => {
		item.setAttribute( 'aria-hidden', 'true' );
	} );
};

const setActiveTab = ( tabs, btn ) => {
	btn?.setAttribute( 'aria-selected', 'true' );

	const tabPanel = tabs.querySelector( btn?.getAttribute( 'aria-controls' ) );

	if ( ! tabPanel ) return;

	tabPanel.setAttribute( 'aria-hidden', 'false' );
};

const setDefaultTab = ( tabs, defaultTabId, tabsButtons ) => {
	let defaultButton = tabsButtons[ 0 ];

	if ( defaultTabId ) {
		defaultButton = tabs.querySelector(
			`#tabs-item-button-${ defaultTabId }`
		);
	}

	setActiveTab( tabs, defaultButton );
};

init();
