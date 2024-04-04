/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@yardinternet/gutenberg-components/src/block-icon-color/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@yardinternet/gutenberg-components/src/block-icon-color/index.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockIconColor: () => (/* binding */ BlockIconColor)
/* harmony export */ });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./node_modules/@yardinternet/gutenberg-components/src/block-icon-color/editor.scss");
/**
 * Internal dependencies
 */

const BlockIconColor = {
  foreground: '#00a49e'
};

/***/ }),

/***/ "./node_modules/@yardinternet/gutenberg-components/src/icon-picker-control/components/delete-icon.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@yardinternet/gutenberg-components/src/icon-picker-control/components/delete-icon.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const DeleteIcon = ({
  handleRemove
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    onClick: handleRemove,
    className: "icon-picker-control-delete-icon-btn",
    isDestructive: true
  }, "Verwijder icoon");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteIcon);

/***/ }),

/***/ "./node_modules/@yardinternet/gutenberg-components/src/icon-picker-control/components/icon-results.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@yardinternet/gutenberg-components/src/icon-picker-control/components/icon-results.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */


const IconResults = ({
  searchResults,
  handleIconClick
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-picker-control-results-container"
  }, searchResults?.map((result, key) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "icon-picker-control-icon-btn-container",
      key: key
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: () => handleIconClick(result)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: result
    })));
  }), !searchResults?.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Er zijn geen iconen gevonden')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconResults);

/***/ }),

/***/ "./node_modules/@yardinternet/gutenberg-components/src/icon-picker-control/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@yardinternet/gutenberg-components/src/icon-picker-control/index.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconPickerControl: () => (/* binding */ IconPickerControl),
/* harmony export */   IconPickerControlInspector: () => (/* binding */ IconPickerControlInspector),
/* harmony export */   IconPickerControlToolbar: () => (/* binding */ IconPickerControlToolbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_delete_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/delete-icon */ "./node_modules/@yardinternet/gutenberg-components/src/icon-picker-control/components/delete-icon.js");
/* harmony import */ var _components_icon_results__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/icon-results */ "./node_modules/@yardinternet/gutenberg-components/src/icon-picker-control/components/icon-results.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/api */ "./node_modules/@yardinternet/gutenberg-components/src/icon-picker-control/utils/api.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/helpers */ "./node_modules/@yardinternet/gutenberg-components/src/icon-picker-control/utils/helpers.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./editor.scss */ "./node_modules/@yardinternet/gutenberg-components/src/icon-picker-control/editor.scss");

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */





const IconPickerControl = ({
  onChange,
  icon,
  displayIconPreview = true,
  displayAsPopover = true,
  displayDeleteIcon = false,
  handleRemove
}) => {
  const [isOpen, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [searchInput, setSearchInput] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [searchResults, setSearchResults] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [popoverAnchor, setPopoverAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)();
  const {
    createNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_7__.store);
  const allowedFamilyStyles = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__.applyFilters)('yard.fontawesome-family-styles', [{
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
  }, {
    family: 'sharp',
    style: 'thin'
  }]);
  const searchFontAwesomeIcons = async searchValue => {
    try {
      const response = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_10__.getFontAwesomeIcons)(searchValue);
      if (!response) return;
      const result = response?.data?.search.reduce((iconResults, iconData) => {
        (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_11__.convertResponseToClassnames)(iconData, allowedFamilyStyles).forEach(value => {
          iconResults.push(value);
        });
        return iconResults;
      }, []);
      if (!result) return;
      setSearchResults(result);
      setOpen(true);
    } catch (err) {
      return showErrorNotice();
    }
  };
  const showErrorNotice = () => {
    createNotice('error', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Momenteel kunnen er geen iconen worden opgehaald, probeer het later nog een keer.'), {
      isDismissible: true,
      type: 'snackbar',
      id: 'icon-picker-control-error'
    });
  };
  const handleIconClick = clickedIcon => {
    onChange(clickedIcon);
    setSearchInput(() => '');
    setOpen(() => false);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, displayIconPreview && icon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: icon + ' icon-picker-control-preview-icon'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SearchControl, {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Zoek een icoon'),
    value: searchInput,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Gebruik Engelse termen om een icoon te zoeken.'),
    onChange: searchValue => {
      setSearchInput(searchValue);
      searchFontAwesomeIcons(searchValue);
    },
    ref: setPopoverAnchor
  }), displayAsPopover && searchInput && isOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    anchor: popoverAnchor,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Kies een icoon'),
    onClose: () => setOpen(false),
    focusOnMount: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icon_results__WEBPACK_IMPORTED_MODULE_9__["default"], {
    searchResults: searchResults,
    handleIconClick: handleIconClick
  })), !displayAsPopover && searchInput && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_icon_results__WEBPACK_IMPORTED_MODULE_9__["default"], {
    searchResults: searchResults,
    handleIconClick: handleIconClick
  }), displayDeleteIcon && icon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_delete_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    handleRemove: handleRemove
  }));
};
const IconPickerControlInspector = ({
  icon,
  onChange,
  displayDeleteIcon = false,
  handleRemove
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconPickerControl, {
    icon: icon,
    onChange: onChange,
    displayIconPreview: true,
    displayAsPopover: true,
    displayDeleteIcon: displayDeleteIcon,
    handleRemove: handleRemove
  });
};
const IconPickerControlToolbar = ({
  icon,
  onChange
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    contentClassName: "icon-picker-control-popover",
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
      onClick: onToggle,
      "aria-expanded": isOpen
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Kies icoon'))),
    renderContent: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconPickerControl, {
      icon: icon,
      onChange: onChange,
      displayIconPreview: false,
      displayAsPopover: false
    })
  }));
};

/***/ }),

/***/ "./node_modules/@yardinternet/gutenberg-components/src/icon-picker-control/utils/api.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@yardinternet/gutenberg-components/src/icon-picker-control/utils/api.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFontAwesomeIcons: () => (/* binding */ getFontAwesomeIcons)
/* harmony export */ });
/**
 * Use FontAwesome API to search for icons
 *
 * @param {string} search - The value to search for icons.
 *
 * @see https://fontawesome.com/docs/apis/graphql/query-fields#search-icon
 * @see https://fontawesome.com/docs/apis/graphql/objects#icon
 * @see https://fontawesome.com/docs/apis/graphql/objects#familystylesbylicense
 * @see https://fontawesome.com/docs/apis/graphql/objects#familystyle
 */
const getFontAwesomeIcons = async search => {
  const query = `{ search(version: "6.x", first: 100, query: "${search}")
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
  try {
    const res = await fetch('https://api.fontawesome.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        query
      })
    });
    const data = res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

/***/ }),

/***/ "./node_modules/@yardinternet/gutenberg-components/src/icon-picker-control/utils/helpers.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@yardinternet/gutenberg-components/src/icon-picker-control/utils/helpers.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertResponseToClassnames: () => (/* binding */ convertResponseToClassnames)
/* harmony export */ });
/**
 * Create a classname based on the response from the FontAwesome API with only the allowed familyStyles
 *
 * @param {Object} response            - The response from the Font Awesome API.
 * @param {Array}  allowedFamilyStyles - The allowed family styles
 */
const convertResponseToClassnames = (response, allowedFamilyStyles) => {
  const allFamilyStyles = getAllFamilyStyles(response);
  return allFamilyStyles.filter(familyStyle => checkIfFamilyStyleIsAllowed(familyStyle, allowedFamilyStyles)).map(familyStyle => `fa-${familyStyle.family} fa-${familyStyle.style} fa-${response.id}`);
};

/**
 * Returns one array with the allowed free and pro familyStyles
 *
 * @param {Object} response - The response from the Font Awesome API.
 */
const getAllFamilyStyles = response => {
  const freeFamilyStyles = response.familyStylesByLicense.free;
  const proFamilyStyles = response.familyStylesByLicense.pro;
  const allFamilyStyles = freeFamilyStyles.concat(proFamilyStyles);

  // Remove duplicated familyStyles
  return allFamilyStyles.filter((obj, index) => allFamilyStyles.findIndex(item => item.family === obj.family && item.style === obj.style) === index);
};

/**
 * Check if the current familyStyle exist in allowedFamilyStyles
 *
 * @param {Object} familyStyle         - The familyStyle to check if it's allowed.
 * @param {Array}  allowedFamilyStyles - The allowed family styles
 */
const checkIfFamilyStyleIsAllowed = (familyStyle, allowedFamilyStyles) => {
  return allowedFamilyStyles.some(obj => obj.family === familyStyle.family && obj.style === familyStyle.style);
};

/***/ }),

/***/ "./node_modules/@yardinternet/gutenberg-components/src/icon/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@yardinternet/gutenberg-components/src/icon/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Icon: () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Icon = props => {
  const {
    attributes
  } = props;
  const {
    icon,
    iconAltText,
    iconColor
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `wp-block-yard-icon-component fa-fw ${icon} `,
    title: iconAltText ? iconAltText : null,
    "aria-hidden": "true",
    style: {
      color: iconColor
    }
  });
};

/***/ }),

/***/ "./node_modules/@yardinternet/gutenberg-components/src/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@yardinternet/gutenberg-components/src/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockIconColor: () => (/* reexport safe */ _block_icon_color__WEBPACK_IMPORTED_MODULE_0__.BlockIconColor),
/* harmony export */   Icon: () => (/* reexport safe */ _icon__WEBPACK_IMPORTED_MODULE_1__.Icon),
/* harmony export */   IconPickerControl: () => (/* reexport safe */ _icon_picker_control__WEBPACK_IMPORTED_MODULE_2__.IconPickerControl),
/* harmony export */   IconPickerControlInspector: () => (/* reexport safe */ _icon_picker_control__WEBPACK_IMPORTED_MODULE_2__.IconPickerControlInspector),
/* harmony export */   IconPickerControlToolbar: () => (/* reexport safe */ _icon_picker_control__WEBPACK_IMPORTED_MODULE_2__.IconPickerControlToolbar)
/* harmony export */ });
/* harmony import */ var _block_icon_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-icon-color */ "./node_modules/@yardinternet/gutenberg-components/src/block-icon-color/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./node_modules/@yardinternet/gutenberg-components/src/icon/index.js");
/* harmony import */ var _icon_picker_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon-picker-control */ "./node_modules/@yardinternet/gutenberg-components/src/icon-picker-control/index.js");




/***/ }),

/***/ "./src/Blocks/icon/components/inspector.js":
/*!*************************************************!*\
  !*** ./src/Blocks/icon/components/inspector.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @yardinternet/gutenberg-components */ "./node_modules/@yardinternet/gutenberg-components/src/index.js");

/**
 * WordPress dependencies
 */




/**
 * External dependencies
 */

const Inspector = props => {
  const {
    setAttributes,
    attributes
  } = props;
  const {
    icon,
    iconAltText
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Kies een icoon')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_4__.IconPickerControlInspector, {
    icon: icon,
    onChange: result => {
      if (result !== undefined) {
        setAttributes({
          icon: result
        });
      }
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Toegankelijkheid'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Alternatieve tekst'),
    value: iconAltText,
    onChange: value => setAttributes({
      iconAltText: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Voeg een alternatieve tekst toe als een icoon betekenis heeft.')
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/Blocks/icon/edit.js":
/*!*********************************!*\
  !*** ./src/Blocks/icon/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @yardinternet/gutenberg-components */ "./node_modules/@yardinternet/gutenberg-components/src/index.js");
/* harmony import */ var _components_inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/inspector */ "./src/Blocks/icon/components/inspector.js");

/**
 * WordPress dependencies
 */


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

const Edit = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    icon
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_2__.IconPickerControlToolbar, {
    icon: icon,
    onChange: result => {
      if (result !== undefined) {
        setAttributes({
          icon: result
        });
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_inspector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ...props
  }), icon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    ...props
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/Blocks/icon/icon.js":
/*!*********************************!*\
  !*** ./src/Blocks/icon/icon.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yardinternet/gutenberg-components */ "./node_modules/@yardinternet/gutenberg-components/src/index.js");

/**
 * External dependencies
 */

const icon = {
  src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "1em",
    viewBox: "0 0 512 512"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M473.7 4.1C493.5 .2 512 15.3 512 35.5V168h-.2c.1 1.3 .2 2.7 .2 4c0 28.7-28.7 52-64 52s-64-23.3-64-52s28.7-52 64-52c11.7 0 22.6 2.5 32 7V35.5L352 61.1V200h-.2c.1 1.3 .2 2.7 .2 4c0 28.7-28.7 52-64 52s-64-23.3-64-52s28.7-52 64-52c11.7 0 22.6 2.5 32 7V61.1c0-15.3 10.8-28.4 25.7-31.4l128-25.6zM480 172c0-3.1-1.5-7.5-6.9-11.9c-5.5-4.5-14.3-8.1-25.1-8.1s-19.5 3.6-25.1 8.1c-5.5 4.4-6.9 8.8-6.9 11.9s1.5 7.5 6.9 11.9c5.5 4.5 14.3 8.1 25.1 8.1s19.5-3.6 25.1-8.1c5.5-4.4 6.9-8.8 6.9-11.9zM320 204c0-3.1-1.5-7.5-6.9-11.9c-5.5-4.5-14.3-8.1-25.1-8.1s-19.5 3.6-25.1 8.1c-5.5 4.4-6.9 8.8-6.9 11.9s1.5 7.5 6.9 11.9c5.5 4.5 14.3 8.1 25.1 8.1s19.5-3.6 25.1-8.1c5.5-4.4 6.9-8.8 6.9-11.9zM105.4 54.6l-6-6c-9-9-21.8-13.1-34.4-11c-19 3.2-33 19.6-33 38.9v2.9c0 11.9 4.9 23.2 13.6 31.4L128 187.7l82.4-76.9c8.7-8.1 13.6-19.5 13.6-31.4V76.5c0-19.3-13.9-35.8-33-38.9c-12.6-2.1-25.4 2-34.4 11l-6 6L128 77.3 105.4 54.6zM59.7 6C82.5 2.3 105.7 9.7 122 26l0 0 6 6 6-6C150.3 9.7 173.5 2.3 196.3 6C230.7 11.8 256 41.6 256 76.5v2.9c0 20.8-8.6 40.6-23.8 54.8l-90.4 84.3c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5L23.8 134.2C8.6 120 0 100.2 0 79.5V76.5C0 41.6 25.3 11.8 59.7 6zM72 320H48c-8.8 0-16 7.2-16 16V464c0 8.8 7.2 16 16 16H240c8.8 0 16-7.2 16-16V336c0-8.8-7.2-16-16-16H216c-12.1 0-23.2-6.8-28.6-17.7L180.2 288H107.8l-7.2 14.3C95.2 313.2 84.1 320 72 320zm136.8-46.3L216 288h24c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336c0-26.5 21.5-48 48-48H72l7.2-14.3c5.4-10.8 16.5-17.7 28.6-17.7h72.4c12.1 0 23.2 6.8 28.6 17.7zM112 392a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM475.3 283.3L390.6 368H480c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-112 112c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L441.4 400H352c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l112-112c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
  })),
  ..._yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_1__.BlockIconColor
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icon);

/***/ }),

/***/ "./src/Blocks/icon/save.js":
/*!*********************************!*\
  !*** ./src/Blocks/icon/save.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @yardinternet/gutenberg-components */ "./node_modules/@yardinternet/gutenberg-components/src/index.js");

/**
 * WordPress dependencies
 */


/**
 * External dependencies
 */

const Save = props => {
  const {
    attributes
  } = props;
  const {
    icon
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, icon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    ...props
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./node_modules/@yardinternet/gutenberg-components/src/block-icon-color/editor.scss":
/*!******************************************************************************************!*\
  !*** ./node_modules/@yardinternet/gutenberg-components/src/block-icon-color/editor.scss ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@yardinternet/gutenberg-components/src/icon-picker-control/editor.scss":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@yardinternet/gutenberg-components/src/icon-picker-control/editor.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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

/***/ "./src/Blocks/icon/block.json":
/*!************************************!*\
  !*** ./src/Blocks/icon/block.json ***!
  \************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"yard/icon","version":"0.1.0","title":"Icoon","category":"yard","description":"Voeg een Font Awesome icoon toe.","supports":{"align":true,"ariaLabel":true,"color":{"background":true,"color":true},"spacing":{"margin":true,"padding":true},"typography":{"fontSize":true}},"attributes":{"icon":{"type":"string","default":"fa-classic fa-light fa-envelope"},"iconAltText":{"type":"string","default":""}},"textdomain":"yard","editorScript":"file:./index.js","editorStyle":"file:./index.css"}');

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/Blocks/icon/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/Blocks/icon/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/Blocks/icon/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/Blocks/icon/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/Blocks/icon/save.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  icon: _icon__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map