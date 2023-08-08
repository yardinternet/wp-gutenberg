/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/Blocks/tabs/frontend.js ***!
  \*************************************/
/**
 * Get all tabs block and add all functions
 */
const init = () => {
  const tabsBlocks = document.querySelectorAll('.wp-block-yard-tabs');
  tabsBlocks?.forEach(tabs => {
    const defaultTabId = tabs.dataset.defaultTab;
    const tabsButtons = tabs.querySelectorAll('.wp-block-yard-tabs-item__button');
    const tabsPanels = tabs.querySelectorAll('.wp-block-yard-tabs-item__panel');

    // Reset all tab and set active tab based on id
    resetAllTabs(tabsButtons, tabsPanels);
    setDefaultTab(tabs, defaultTabId, tabsButtons);

    // If there is a hash in the url, set that tab active
    if (window.location.hash !== '') {
      setActiveTabOnHash(tabs, tabsButtons, tabsPanels);
    }
    tabsButtons.forEach(btn => {
      // Add click listenter to all tab buttons to change active tab
      btn.addEventListener('click', () => {
        resetAllTabs(tabsButtons, tabsPanels);
        setActiveTab(tabs, btn);
      });
    });
  });
};

/**
 * Remove all active states from tabs buttons and panels
 *
 * @param {HTMLElement[]} tabsButtons - All buttons of current tabs
 * @param {HTMLElement[]} tabsPanels - All panels of current tabs
 */
const resetAllTabs = (tabsButtons, tabsPanels) => {
  tabsButtons?.forEach(btn => {
    btn.setAttribute('aria-selected', 'false');
    btn.classList.remove('active');
  });
  tabsPanels?.forEach(panel => {
    panel.setAttribute('aria-hidden', 'true');
    panel.classList.remove('active');
  });
};

/**
 * Set active tab
 *
 * @param {HTMLElement} tabs - Current tabs
 * @param {HTMLElement} btn - Current tab button
 */
const setActiveTab = (tabs, btn) => {
  // Activate tab button
  btn?.setAttribute('aria-selected', 'true');
  btn?.classList.add('active');

  // Get the corresponding tab panel
  const tabPanel = tabs.querySelector(`#${btn?.getAttribute('aria-controls')}`);
  if (!tabPanel) return;

  // Activate tab panel
  tabPanel.setAttribute('aria-hidden', 'false');
  tabPanel.classList.add('active');
};

/**
 * Set default tab based on id
 *
 * @param {HTMLElement} tabs - Current tabs
 * @param {string} defaultTabId - Id for the default tab
 * @param {HTMLElement[]} tabsButtons - All buttons of current tabs
 */
const setDefaultTab = (tabs, defaultTabId, tabsButtons) => {
  var _defaultButton;
  let defaultButton;
  if (defaultTabId) {
    // Get corresponding tab button by id
    defaultButton = tabs.querySelector(`#tabs-item-button-${defaultTabId}`);
  }

  // Set active tab based on the defaultButton,
  // If there is no button, get the first button (tabsButtons[ 0 ])
  setActiveTab(tabs, (_defaultButton = defaultButton) !== null && _defaultButton !== void 0 ? _defaultButton : tabsButtons[0]);
};

/**
 * Set active tab basesd on url hash
 *
 * @param {HTMLElement} tabs - Current tabs
 * @param {HTMLElement[]} tabsButtons - All buttons of current tabs
 * @param {HTMLElement[]} tabsPanels - All panels of current tabs
 */
const setActiveTabOnHash = (tabs, tabsButtons, tabsPanels) => {
  // Get heading based on de url hash
  const heading = tabs.querySelector(window.location.hash);
  if (heading) {
    // Get corresponding tab button
    const btn = heading.querySelector('.wp-block-yard-tabs-item__button');

    // Reset all tab and set active tab based on btn
    resetAllTabs(tabsButtons, tabsPanels);
    setActiveTab(tabs, btn);
  }
};
init();

// When the url hash is changed, the init function must be called again
window.addEventListener('hashchange', init, false);
/******/ })()
;
//# sourceMappingURL=frontend.js.map