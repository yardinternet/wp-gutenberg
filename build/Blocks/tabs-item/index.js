/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@yardinternet/gutenberg-hooks/src/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@yardinternet/gutenberg-hooks/src/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCurrentBlock: () => (/* reexport safe */ _use_current_block__WEBPACK_IMPORTED_MODULE_0__.useCurrentBlock),
/* harmony export */   useParentBlock: () => (/* reexport safe */ _use_parent_block__WEBPACK_IMPORTED_MODULE_1__.useParentBlock)
/* harmony export */ });
/* harmony import */ var _use_current_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-current-block */ "./node_modules/@yardinternet/gutenberg-hooks/src/use-current-block/index.js");
/* harmony import */ var _use_parent_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-parent-block */ "./node_modules/@yardinternet/gutenberg-hooks/src/use-parent-block/index.js");



/***/ }),

/***/ "./node_modules/@yardinternet/gutenberg-hooks/src/use-current-block/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@yardinternet/gutenberg-hooks/src/use-current-block/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCurrentBlock: () => (/* binding */ useCurrentBlock)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



const useCurrentBlock = () => {
  const {
    clientId
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockEditContext)();

  /**
   * Returns the current block
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblock
   */
  const currentBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).getBlock(clientId));
  const currentBlockInnerBlocks = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    var _currentBlock$innerBl;
    return (_currentBlock$innerBl = currentBlock.innerBlocks) !== null && _currentBlock$innerBl !== void 0 ? _currentBlock$innerBl : [];
  }, [currentBlock.innerBlocks]);

  /**
   * Returns the current block attributes
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblockattributes
   */
  const currentBlockAttributes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).getBlockAttributes(currentBlock.clientId));

  /**
   * Returns true if one of the current block inner blocks is selected
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#hasselectedinnerblock
   */
  const currentBlockHasSelectedInnerBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).hasSelectedInnerBlock(currentBlock.clientId, true));
  const {
    updateBlockAttributes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store);

  /**
   * Action to update all inner blocks attributes of the current block
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#updateblockattributes
   *
   * @param {Object} attributes - the attributes to update
   */
  const setAllCurrentBlockInnerBlocksAttributes = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(attributes => {
    currentBlockInnerBlocks.forEach(child => updateBlockAttributes(child.clientId, attributes));
  }, [currentBlockInnerBlocks, updateBlockAttributes]);
  return {
    currentBlock,
    currentBlockAttributes,
    currentBlockInnerBlocks,
    currentBlockHasSelectedInnerBlock,
    setAllCurrentBlockInnerBlocksAttributes
  };
};

/***/ }),

/***/ "./node_modules/@yardinternet/gutenberg-hooks/src/use-parent-block/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@yardinternet/gutenberg-hooks/src/use-parent-block/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useParentBlock: () => (/* binding */ useParentBlock)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



const useParentBlock = () => {
  const {
    clientId
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockEditContext)();

  /**
   * Returns the list of blocks of all its parents from top to bottom
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblockparents
   */
  const parentBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store).getBlockParents(clientId));
  const parentBlockClientId = parentBlocks.at(-1);

  /**
   * Returns the parent block
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblock
   */
  const parentBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store).getBlock(parentBlockClientId));

  /**
   * Returns the parent block attributes
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblockattributes
   */
  const parentAttributes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store).getBlockAttributes(parentBlockClientId));
  const {
    updateBlockAttributes,
    selectBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store);

  /**
   * Action to update parent block attributes
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#updateblockattributes
   *
   * @param {Object} attributes - the attributes to update
   */
  const setParentAttributes = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(attributes => {
    updateBlockAttributes(parentBlockClientId, attributes);
  }, [updateBlockAttributes, parentBlockClientId]);

  /**
   * Action to select the parent block
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#selectblock
   */
  const selectParentBlock = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    selectBlock(parentBlockClientId);
  }, [selectBlock, parentBlockClientId]);
  return {
    parentBlock,
    parentAttributes,
    setParentAttributes,
    selectParentBlock
  };
};

/***/ }),

/***/ "./src/Blocks/tabs-item/components/inspector.js":
/*!******************************************************!*\
  !*** ./src/Blocks/tabs-item/components/inspector.js ***!
  \******************************************************/
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
/* harmony import */ var _yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @yardinternet/gutenberg-components */ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/index.js");
/* harmony import */ var _yardinternet_gutenberg_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @yardinternet/gutenberg-hooks */ "./node_modules/@yardinternet/gutenberg-hooks/src/index.js");

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const Inspector = props => {
  const {
    attributes,
    setAttributes,
    enableIcon
  } = props;
  const {
    icon,
    iconAltText
  } = attributes;
  const {
    selectParentBlock
  } = (0,_yardinternet_gutenberg_hooks__WEBPACK_IMPORTED_MODULE_5__.useParentBlock)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, enableIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icoon instellingen')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_4__.IconPickerControlInspector, {
    icon: icon,
    onChange: result => {
      if (result !== undefined) {
        setAttributes({
          icon: result
        });
      }
    },
    displayDeleteIcon: true,
    handleRemove: () => setAttributes({
      icon: ''
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Alternatieve tekst'),
    value: iconAltText,
    onChange: value => setAttributes({
      iconAltText: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Voeg een alternatieve tekst toe als een icoon betekenis heeft.')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Toegankelijkheid'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Pas de koptekst niveaus aan via het hoofdblok (Tabbladen).')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    onClick: selectParentBlock
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Selecteer hoofdblok (Tabbladen)'))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @yardinternet/gutenberg-components */ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/index.js");
/* harmony import */ var _yardinternet_gutenberg_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @yardinternet/gutenberg-hooks */ "./node_modules/@yardinternet/gutenberg-hooks/src/index.js");
/* harmony import */ var _components_inspector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/inspector */ "./src/Blocks/tabs-item/components/inspector.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.scss */ "./src/Blocks/tabs-item/editor.scss");

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





const TEMPLATE = [['core/paragraph', {
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Vul hier de tabblad inhoud in')
}]];
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
  const enableIcon = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.applyFilters)('yard.tabs-item-enable-icon', false);
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    currentBlockHasSelectedInnerBlock
  } = (0,_yardinternet_gutenberg_hooks__WEBPACK_IMPORTED_MODULE_7__.useCurrentBlock)();
  const {
    parentAttributes,
    setParentAttributes
  } = (0,_yardinternet_gutenberg_hooks__WEBPACK_IMPORTED_MODULE_7__.useParentBlock)();
  const {
    getClientIdsWithDescendants,
    getBlockAttributes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => ({
    getClientIdsWithDescendants: select('core/block-editor').getClientIdsWithDescendants(),
    getBlockAttributes: select('core/block-editor').getBlockAttributes
  }));

  /**
   * Get the block ID, ensuring it is unique.
   * 1. Check if the ID already exists on other block attributes
   * 2. The ID needs to be changed to the client ID in the following scenarios:
   * - There is no ID at all
   * - Another block already has the same ID as an attribute (can happen when duplicating a block)
   *
   * @return {string} The block ID.
   */
  const getBlockId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
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
  }, [clientId, id, getClientIdsWithDescendants, getBlockAttributes]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setAttributes({
      id: getBlockId()
    });
  }, [setAttributes, getBlockId]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    var _parentAttributes$hea;
    setAttributes({
      headingLevel: (_parentAttributes$hea = parentAttributes.headingLevel) !== null && _parentAttributes$hea !== void 0 ? _parentAttributes$hea : 'h3'
    });
  }, [setAttributes, parentAttributes.headingLevel]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setIsOpen(context['yard/tabs-current-tab'] === id);
  }, [context, id]);

  // When the current block or inner blocks are selected, open the panel and update the parent currentTab attribute to close other tabs
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (isSelected || currentBlockHasSelectedInnerBlock) {
      setParentAttributes({
        currentTab: getBlockId()
      });
      setIsOpen(true);
    }
  }, [isSelected, currentBlockHasSelectedInnerBlock, setParentAttributes, getBlockId]);

  // Reset icon and iconAltText when the enableIcon is disabled
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!enableIcon) {
      setAttributes({
        icon: '',
        iconAltText: ''
      });
    }
  }, [setAttributes, enableIcon]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, enableIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_6__.IconPickerControlToolbar, {
    icon: icon,
    onChange: result => {
      if (result !== undefined) {
        setAttributes({
          icon: result
        });
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_inspector__WEBPACK_IMPORTED_MODULE_8__["default"], {
    ...props,
    enableIcon: enableIcon
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-yard-tabs-item__heading"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wp-block-yard-tabs-item__button ${isOpen ? 'active' : ''}`
  }, icon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PlainText, {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: 'wp-block-yard-tabs-item__heading-input'
    }),
    onChange: value => setAttributes({
      headingText: value
    }),
    value: headingText
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-yard-tabs-item__panel",
    style: {
      display: `${isOpen ? 'block' : 'none'}`
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @yardinternet/gutenberg-components */ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/index.js");

/**
 * Internal dependencies
 */

const icon = {
  src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "1em",
    viewBox: "0 0 512 512"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M64 64C46.3 64 32 78.3 32 96V416c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H291.9c-17 0-33.3-6.7-45.3-18.7L210.7 73.4c-6-6-14.1-9.4-22.6-9.4H64zM0 96C0 60.7 28.7 32 64 32H188.1c17 0 33.3 6.7 45.3 18.7l35.9 35.9c6 6 14.1 9.4 22.6 9.4H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"
  })),
  ..._yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_1__.BlockIconColor
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
  usesContext: ['yard/tabs-current-tab']
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @yardinternet/gutenberg-components */ "../../../../../../../../Projects/gutenberg-packages/packages/components/src/index.js");

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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(HeadingWithLevel, {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: 'wp-block-yard-tabs-item__heading'
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    id: `tabs-item-button-${id}`,
    className: "wp-block-yard-tabs-item__button",
    "aria-controls": `tabs-item-panel-${id}`,
    "aria-selected": "false"
  }, icon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_yardinternet_gutenberg_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    ...props
  }), headingText)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: 'wp-block-yard-tabs-item__panel'
    }),
    id: `tabs-item-panel-${id}`,
    "aria-hidden": "true",
    "aria-labelledby": `tabs-item-button-${id}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)));
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

/***/ "./src/Blocks/tabs-item/block.json":
/*!*****************************************!*\
  !*** ./src/Blocks/tabs-item/block.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"yard/tabs-item","version":"0.1.0","title":"Tabblad","category":"yard","description":"Tabblad item.","attributes":{"headingLevel":{"type":"string","default":"h3"},"headingText":{"type":"string","default":""},"icon":{"type":"string","default":""},"iconAltText":{"type":"string","default":""},"id":{"type":"string"}},"parent":["yard/tabs"],"supports":{"anchor":true,"html":false,"reusable":false},"textdomain":"yard","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["Blocks/tabs-item/style-index"], () => (__webpack_require__("./src/Blocks/tabs-item/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map