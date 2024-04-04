/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Blocks/counting-number/components/inspector.js":
/*!************************************************************!*\
  !*** ./src/Blocks/counting-number/components/inspector.js ***!
  \************************************************************/
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

/**
 * WordPress dependencies
 */



const Inspector = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    number,
    numberPrefix,
    numberSuffix,
    hasThousandsSeparator,
    animationDuration
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Teller instellingen')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cijfer'),
    onChange: value => setAttributes({
      number: value
    }),
    type: "number",
    value: number
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Tekst voor cijfer (optioneel)'),
    onChange: value => setAttributes({
      numberPrefix: value
    }),
    value: numberPrefix,
    help: "Voeg een teken of woord toe voor de cijfer. Bijvoorbeeld + of -."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Tekst na cijfer (optioneel)'),
    onChange: value => setAttributes({
      numberSuffix: value
    }),
    value: numberSuffix,
    help: "Voeg een teken of woord toe na de cijfer. Bijvoorbeeld % of mln."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Toon een punt voor duizendtallen'),
    onChange: value => setAttributes({
      hasThousandsSeparator: value
    }),
    checked: hasThousandsSeparator,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Bijvoorbeeld 15000 wordt 15.000')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Animatie duur'),
    onChange: value => setAttributes({
      animationDuration: value
    }),
    value: animationDuration,
    min: 1,
    max: 5,
    step: 0.1
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/Blocks/counting-number/components/number.js":
/*!*********************************************************!*\
  !*** ./src/Blocks/counting-number/components/number.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Number = props => {
  const {
    attributes
  } = props;
  const {
    number,
    numberPrefix,
    numberSuffix
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, numberPrefix && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wp-block-yard-counting-number__prefix"
  }, numberPrefix), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wp-block-yard-counting-number__number"
  }, number.replace(/\./g, ',')), numberSuffix && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wp-block-yard-counting-number__suffix"
  }, numberSuffix));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Number);

/***/ }),

/***/ "./src/Blocks/counting-number/edit.js":
/*!********************************************!*\
  !*** ./src/Blocks/counting-number/edit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/inspector */ "./src/Blocks/counting-number/components/inspector.js");
/* harmony import */ var _components_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/number */ "./src/Blocks/counting-number/components/number.js");

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const Edit = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_inspector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_number__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ...props
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/Blocks/counting-number/icon.js":
/*!********************************************!*\
  !*** ./src/Blocks/counting-number/icon.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yardinternet/gutenberg-components */ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/index.js");

/**
 * Internal dependencies
 */

const icon = {
  src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M428 168a52 52 0 1 1 0-104 52 52 0 1 1 0 104zm-84-52c0 46.4 37.6 84 84 84c.4 0 .9 0 1.3 0l-25.4 29.6c-5.8 6.7-5 16.8 1.7 22.6s16.8 5 22.6-1.7l62.4-72.5C504.4 161.8 512 141.2 512 120h-.1c.1-1.3 .1-2.7 .1-4c0-46.4-37.6-84-84-84s-84 37.6-84 84zM171.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L144 86.6V464c0 8.8 7.2 16 16 16s16-7.2 16-16V86.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-96-96zM448 304c0-5.1-2.5-10-6.6-13s-9.5-3.8-14.4-2.2l-48 16c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l26.9-9V448H384c-8.8 0-16 7.2-16 16s7.2 16 16 16h48 48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z"
  })),
  ..._yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_1__.BlockIconColor
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icon);

/***/ }),

/***/ "./src/Blocks/counting-number/save.js":
/*!********************************************!*\
  !*** ./src/Blocks/counting-number/save.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/number */ "./src/Blocks/counting-number/components/number.js");

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
    hasThousandsSeparator,
    animationDuration
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
    "data-hasthousandsseparator": hasThousandsSeparator,
    "data-animationduration": animationDuration
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_number__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...props
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/block-icon-color/index.js":
/*!*************************************************************************************************************!*\
  !*** ../../../../../../../../Projects/gutenberg-packages/packages/components/src/block-icon-color/index.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockIconColor: () => (/* binding */ BlockIconColor)
/* harmony export */ });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/block-icon-color/editor.scss");
/**
 * Internal dependencies
 */

const BlockIconColor = {
  foreground: '#00a49e'
};

/***/ }),

/***/ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon-picker-control/components/delete-icon.js":
/*!*********************************************************************************************************************************!*\
  !*** ../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon-picker-control/components/delete-icon.js ***!
  \*********************************************************************************************************************************/
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

/***/ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon-picker-control/components/icon-results.js":
/*!**********************************************************************************************************************************!*\
  !*** ../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon-picker-control/components/icon-results.js ***!
  \**********************************************************************************************************************************/
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

/***/ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon-picker-control/index.js":
/*!****************************************************************************************************************!*\
  !*** ../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon-picker-control/index.js ***!
  \****************************************************************************************************************/
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
/* harmony import */ var _components_delete_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/delete-icon */ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon-picker-control/components/delete-icon.js");
/* harmony import */ var _components_icon_results__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/icon-results */ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon-picker-control/components/icon-results.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/api */ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon-picker-control/utils/api.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/helpers */ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon-picker-control/utils/helpers.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./editor.scss */ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon-picker-control/editor.scss");

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

/***/ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon-picker-control/utils/api.js":
/*!********************************************************************************************************************!*\
  !*** ../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon-picker-control/utils/api.js ***!
  \********************************************************************************************************************/
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

/***/ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon-picker-control/utils/helpers.js":
/*!************************************************************************************************************************!*\
  !*** ../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon-picker-control/utils/helpers.js ***!
  \************************************************************************************************************************/
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

/***/ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon/index.js":
/*!*************************************************************************************************!*\
  !*** ../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon/index.js ***!
  \*************************************************************************************************/
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

/***/ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/index.js":
/*!********************************************************************************************!*\
  !*** ../../../../../../../../Projects/gutenberg-packages/packages/components/src/index.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockIconColor: () => (/* reexport safe */ _block_icon_color__WEBPACK_IMPORTED_MODULE_0__.BlockIconColor),
/* harmony export */   Icon: () => (/* reexport safe */ _icon__WEBPACK_IMPORTED_MODULE_1__.Icon),
/* harmony export */   IconPickerControl: () => (/* reexport safe */ _icon_picker_control__WEBPACK_IMPORTED_MODULE_2__.IconPickerControl),
/* harmony export */   IconPickerControlInspector: () => (/* reexport safe */ _icon_picker_control__WEBPACK_IMPORTED_MODULE_2__.IconPickerControlInspector),
/* harmony export */   IconPickerControlToolbar: () => (/* reexport safe */ _icon_picker_control__WEBPACK_IMPORTED_MODULE_2__.IconPickerControlToolbar)
/* harmony export */ });
/* harmony import */ var _block_icon_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-icon-color */ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/block-icon-color/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon/index.js");
/* harmony import */ var _icon_picker_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon-picker-control */ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon-picker-control/index.js");




/***/ }),

/***/ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/block-icon-color/editor.scss":
/*!****************************************************************************************************************!*\
  !*** ../../../../../../../../Projects/gutenberg-packages/packages/components/src/block-icon-color/editor.scss ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon-picker-control/editor.scss":
/*!*******************************************************************************************************************!*\
  !*** ../../../../../../../../Projects/gutenberg-packages/packages/components/src/icon-picker-control/editor.scss ***!
  \*******************************************************************************************************************/
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

/***/ "./src/Blocks/counting-number/block.json":
/*!***********************************************!*\
  !*** ./src/Blocks/counting-number/block.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"yard/counting-number","version":"0.0.1","title":"Oplopende teller","category":"yard","description":"Toont een oplopende cijfer.","attributes":{"number":{"type":"string","default":"100"},"numberPrefix":{"type":"string"},"numberSuffix":{"type":"string"},"hasThousandsSeparator":{"type":"boolean","default":false},"animationDuration":{"type":"number","default":2.5}},"supports":{"align":true,"color":{"background":true,"color":true},"spacing":{"margin":true,"padding":true},"typography":{"fontSize":true}},"textdomain":"yard","editorScript":"file:./index.js","editorStyle":"file:./index.css","viewScript":"file:./frontend.js"}');

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
/*!*********************************************!*\
  !*** ./src/Blocks/counting-number/index.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/Blocks/counting-number/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/Blocks/counting-number/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/Blocks/counting-number/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/Blocks/counting-number/save.js");
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