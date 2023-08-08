/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Blocks/tabs-item/components/inspector.js":
/*!******************************************************!*\
  !*** ./src/Blocks/tabs-item/components/inspector.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_icon_picker_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/icon-picker-control */ "./src/EditorComponents/icon-picker-control/index.js");

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

const Inspector = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    icon,
    iconAltText
  } = attributes;
  const enableIcon = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.applyFilters)('yard-gutenberg.enable-tabs-icon', false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, enableIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Icoon instellingen')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icon_picker_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: icon,
    onChange: result => {
      if (result !== undefined) {
        setAttributes({
          icon: result
        });
      }
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Alternatieve tekst'),
    value: iconAltText,
    onChange: value => setAttributes({
      iconAltText: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Voeg een alternatieve tekst toe als een icoon betekenis heeft.')
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/Blocks/tabs-item/edit.js":
/*!**************************************!*\
  !*** ./src/Blocks/tabs-item/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/icon */ "./src/EditorComponents/icon/index.js");
/* harmony import */ var _components_inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/inspector */ "./src/Blocks/tabs-item/components/inspector.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/Blocks/tabs-item/editor.scss");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



const Edit = props => {
  const {
    attributes,
    clientId,
    context,
    setAttributes,
    isSelected
  } = props;
  const {
    headingText,
    icon,
    id
  } = attributes;
  const TEMPLATE = [['core/paragraph', {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Vul hier de tabblad inhoud in')
  }]];
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  /**
   * hasSelectedInnerBlock @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#hasselectedinnerblock
   * getBlockParents @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblockparents
   * getBlockAttributes @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblockattributes
   * getClientIdsWithDescendants @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getclientidsofdescendants
   */
  const {
    hasSelectedInnerBlock,
    getParentClientId,
    parentAttributes,
    getClientIdsWithDescendants,
    getBlockAttributes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => ({
    hasSelectedInnerBlock: select('core/block-editor').hasSelectedInnerBlock(clientId, true),
    getParentClientId: select('core/block-editor').getBlockParents(clientId)[0],
    parentAttributes: select('core/block-editor').getBlockAttributes(select('core/block-editor').getBlockParents(clientId)[0]),
    getClientIdsWithDescendants: select('core/block-editor').getClientIdsWithDescendants(),
    getBlockAttributes: select('core/block-editor').getBlockAttributes
  }));
  const {
    updateBlockAttributes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)('core/block-editor');

  // Update attributes id and heading level on init
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var _parentAttributes$hea;
    setAttributes({
      id: getBlockId(),
      headingLevel: (_parentAttributes$hea = parentAttributes.headingLevel) !== null && _parentAttributes$hea !== void 0 ? _parentAttributes$hea : 'h3'
    });
  }, [parentAttributes]);

  // Set isOpen state based on context 'yard-gutenberg/tabs-current-tab'
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (context['yard-gutenberg/tabs-current-tab'] === id) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [context, id]);

  // When the current block or inner blocks are selected, open the panel and update the parent currentTab attribute to close other tabs
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isSelected || hasSelectedInnerBlock) {
      updateBlockAttributes(getParentClientId, {
        currentTab: id !== null && id !== void 0 ? id : clientId
      });
      setIsOpen(true);
    }
  }, [isSelected, hasSelectedInnerBlock]);

  /**
   * Get the block ID, ensuring it is unique.
   * 1. Check if the ID already exists on other block attributes
   * 2. The ID needs to be changed to the client ID in the following scenarios:
   * - There is no ID at all
   * - Another block already has the same ID as an attribute (can happen when duplicating a block)
   *
   * @return {string} The block ID.
   */
  const getBlockId = () => {
    const idAlreadyExist = getClientIdsWithDescendants?.some(_clientId => {
      const {
        id: _id
      } = getBlockAttributes(_clientId);
      return clientId !== _clientId && id === _id;
    });
    if (!id || id.length <= 0 || idAlreadyExist) {
      return clientId;
    }
    return id;
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "wp-block-yard-tabs-item__heading"
  }, icon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_icon__WEBPACK_IMPORTED_MODULE_5__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'wp-block-yard-tabs-item__heading-input'
  }), {
    onChange: value => setAttributes({
      headingText: value
    }),
    value: headingText
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "wp-block-yard-tabs-item__panel",
    style: {
      display: `${isOpen ? 'block' : 'none'}`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    template: TEMPLATE
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/Blocks/tabs-item/icon.js":
/*!**************************************!*\
  !*** ./src/Blocks/tabs-item/icon.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_block_icon_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/block-icon-color */ "./src/EditorComponents/block-icon-color/index.js");

/**
 * Internal dependencies
 */

const icon = {
  src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "1em",
    viewBox: "0 0 512 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M64 64C46.3 64 32 78.3 32 96V416c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H291.9c-17 0-33.3-6.7-45.3-18.7L210.7 73.4c-6-6-14.1-9.4-22.6-9.4H64zM0 96C0 60.7 28.7 32 64 32H188.1c17 0 33.3 6.7 45.3 18.7l35.9 35.9c6 6 14.1 9.4 22.6 9.4H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"
  })),
  ..._components_block_icon_color__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icon);

/***/ }),

/***/ "./src/Blocks/tabs-item/index.js":
/*!***************************************!*\
  !*** ./src/Blocks/tabs-item/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/Blocks/tabs-item/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/Blocks/tabs-item/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/Blocks/tabs-item/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/Blocks/tabs-item/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/Blocks/tabs-item/style.scss");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  icon: _icon__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  usesContext: ['yard-gutenberg/tabs-current-tab']
});

/***/ }),

/***/ "./src/Blocks/tabs-item/save.js":
/*!**************************************!*\
  !*** ./src/Blocks/tabs-item/save.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/icon */ "./src/EditorComponents/icon/index.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const Save = props => {
  const {
    attributes
  } = props;
  const {
    headingLevel,
    headingText,
    icon,
    id
  } = attributes;
  const HeadingWithLevel = headingLevel;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(HeadingWithLevel, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: 'wp-block-yard-tabs-item__heading'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    id: `tabs-item-button-${id}`,
    className: "wp-block-yard-tabs-item__button",
    "aria-controls": `tabs-item-panel-${id}`,
    "aria-selected": "false"
  }, icon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_icon__WEBPACK_IMPORTED_MODULE_3__["default"], props), headingText)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: 'wp-block-yard-tabs-item__panel'
  }), {
    id: `tabs-item-panel-${id}`,
    "aria-hidden": "true",
    "aria-labelledby": `tabs-item-button-${id}`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/EditorComponents/block-icon-color/index.js":
/*!********************************************************!*\
  !*** ./src/EditorComponents/block-icon-color/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/EditorComponents/block-icon-color/editor.scss");
/**
 * Internal dependencies
 */

const blockIconColor = {
  foreground: '#00a49e'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blockIconColor);

/***/ }),

/***/ "./src/EditorComponents/icon-picker-control/index.js":
/*!***********************************************************!*\
  !*** ./src/EditorComponents/icon-picker-control/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/EditorComponents/icon-picker-control/editor.scss");

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */

const IconPickerControl = ({
  onChange,
  icon
}) => {
  const [isOpen, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [searchInput, setSearchInput] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [searchResults, setSearchResults] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [popoverAnchor, setPopoverAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    createNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__.store);
  const allowedFamilyStyles = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__.applyFilters)('yard-gutenberg.fontawesome-family-styles', [{
    family: 'classic',
    style: 'solid'
  }, {
    family: 'classic',
    style: 'regular'
  }, {
    family: 'classic',
    style: 'light'
  }, {
    family: 'classic',
    style: 'thin'
  }, {
    family: 'classic',
    style: 'brands'
  }, {
    family: 'duotone',
    style: 'solid'
  }, {
    family: 'sharp',
    style: 'solid'
  }, {
    family: 'sharp',
    style: 'regular'
  }, {
    family: 'sharp',
    style: 'light'
  }]);
  const searchFontAwesomeIcons = async searchValue => {
    const response = await getFontAwesomeIcons(searchValue);
    if (!response) return;
    if (response.errors) return showErrorNotice();
    const result = response.data.search.reduce((iconResults, iconData) => {
      convertResponseToClassnames(iconData).forEach(value => {
        iconResults.push(value);
      });
      return iconResults;
    }, []);
    if (!result) return;
    setSearchResults(() => result);
    setOpen(() => true);
  };

  /**
   * Use FontAwesome API to search for icons
   *
   * @param {string} search - The value to search for icons.
   *
   * @see https://fontawesome.com/docs/apis/graphql/objects#icon
   * @see https://fontawesome.com/docs/apis/graphql/objects#familystylesbylicense
   * @see https://fontawesome.com/docs/apis/graphql/objects#familystyle
   */
  const getFontAwesomeIcons = search => {
    const query = `{ search(version: "6.4.0", first: 100, query: "${search}")
			{
				id
				familyStylesByLicense {
					free {
						family
						style
					}
					pro {
						family
						style
					}
				}
			}
		}`;
    return fetch('https://api.fontawesome.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }).then(res => res.json()).catch(() => showErrorNotice());
  };

  // Create a classname based on the response with only the allowed familyStyles
  const convertResponseToClassnames = response => {
    const allFamilyStyles = getAllFamilyStyles(response);
    return allFamilyStyles.filter(familyStyle => checkIfStyleIsAllowed(familyStyle)).map(familyStyle => `fa-${familyStyle.family} fa-${familyStyle.style} fa-${response.id}`);
  };

  // Returns one array with free and pro familyStyles
  const getAllFamilyStyles = response => {
    const freeFamilyStyles = response.familyStylesByLicense.free;
    const proFamilyStyles = response.familyStylesByLicense.pro;
    const allFamilyStyles = freeFamilyStyles.concat(proFamilyStyles);

    // Remove duplicated familyStyles
    return allFamilyStyles.filter((obj, index) => allFamilyStyles.findIndex(item => item.family === obj.family && item.style === obj.style) === index);
  };

  // Check if the current familyStyle exist in allowedFamilyStyles
  const checkIfStyleIsAllowed = familyStyle => {
    return allowedFamilyStyles.some(obj => obj.family === familyStyle.family && obj.style === familyStyle.style);
  };
  const showErrorNotice = () => {
    createNotice('error', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Momenteel kunnen er geen iconen worden opgehaald, probeer het later nog een keer.'), {
      isDismissible: true,
      type: 'snackbar',
      id: 'icon-picker-control-error'
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, icon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: icon + ' icon-picker-control-preview-icon'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SearchControl, {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Zoek een icoon'),
    value: searchInput,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Gebruik Engelse termen om een icoon te zoeken.'),
    onChange: searchValue => {
      setSearchInput(() => searchValue);
      searchFontAwesomeIcons(searchValue);
    },
    ref: setPopoverAnchor
  }), isOpen && searchInput && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    anchor: popoverAnchor,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Kies een icoon'),
    onClose: () => setOpen(() => false),
    focusOnMount: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-picker-control-popover-container"
  }, searchResults?.map((result, key) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "icon-picker-control-popover-btn-container",
      key: key
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: () => {
        onChange(result);
        setSearchInput(() => '');
        setOpen(() => false);
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: result
    })));
  }), !searchResults.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Er zijn geen iconen gevonden')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconPickerControl);

/***/ }),

/***/ "./src/EditorComponents/icon/index.js":
/*!********************************************!*\
  !*** ./src/EditorComponents/icon/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/EditorComponents/icon/style.scss");

/**
 * Internal dependencies
 */

const Icon = props => {
  const {
    attributes
  } = props;
  const {
    icon,
    iconAltText,
    iconColor
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `wp-block-yard-icon-component fa-fw ${icon} `,
    title: iconAltText ? iconAltText : null,
    "aria-hidden": "true",
    style: {
      color: iconColor
    }
  }), iconAltText && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wp-block-yard-icon-component__sr-only"
  }, iconAltText));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/Blocks/tabs-item/editor.scss":
/*!******************************************!*\
  !*** ./src/Blocks/tabs-item/editor.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Blocks/tabs-item/style.scss":
/*!*****************************************!*\
  !*** ./src/Blocks/tabs-item/style.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/EditorComponents/block-icon-color/editor.scss":
/*!***********************************************************!*\
  !*** ./src/EditorComponents/block-icon-color/editor.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/EditorComponents/icon-picker-control/editor.scss":
/*!**************************************************************!*\
  !*** ./src/EditorComponents/icon-picker-control/editor.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/EditorComponents/icon/style.scss":
/*!**********************************************!*\
  !*** ./src/EditorComponents/icon/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["notices"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/Blocks/tabs-item/block.json":
/*!*****************************************!*\
  !*** ./src/Blocks/tabs-item/block.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yard-gutenberg/tabs-item","version":"0.1.0","title":"Tabblad","category":"yard-gutenberg","description":"Tabblad item.","attributes":{"headingLevel":{"type":"string","default":"h3"},"headingText":{"type":"string","default":" "},"icon":{"type":"string"},"iconAltText":{"type":"string"},"id":{"type":"string"}},"parent":["yard-gutenberg/tabs"],"supports":{"anchor":true,"html":false,"reusable":false},"textdomain":"tab-item","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"Blocks/tabs-item/index": 0,
/******/ 			"Blocks/collapse-item/style-index": 0,
/******/ 			"Blocks/tabs-item/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkyard_gutenberg"] = globalThis["webpackChunkyard_gutenberg"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["Blocks/collapse-item/style-index","Blocks/tabs-item/style-index"], () => (__webpack_require__("./src/Blocks/tabs-item/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map