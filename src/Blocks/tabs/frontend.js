const init = () => {
	const tabsBlocks = document.querySelectorAll(
		'.wp-block-yard-gutenberg-tabs'
	);

	tabsBlocks?.forEach( ( tabs ) => {
		const tabsButtons = tabs.querySelectorAll(
			'.wp-block-yard-gutenberg-tabs-item__button'
		);
		const tabsPanels = tabs.querySelectorAll(
			'.wp-block-yard-gutenberg-tabs-item__panel'
		);

		setDefaultTab( tabsButtons );

		tabsButtons.forEach( ( btn ) => {
			btn.addEventListener( 'click', () => {
				resetAllTabs( tabsButtons, tabsPanels );
				setActiveTab( btn );
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

const setActiveTab = ( btn ) => {
	btn?.setAttribute( 'aria-selected', 'true' );

	const tabPanel = document.querySelector(
		btn?.getAttribute( 'aria-controls' )
	);

	if ( ! tabPanel ) return;

	tabPanel.setAttribute( 'aria-hidden', 'false' );
};

// TODO: Change to setting instead of default first tab
const setDefaultTab = ( tabsButtons ) => {
	setActiveTab( tabsButtons[ 0 ] );
};

init();
