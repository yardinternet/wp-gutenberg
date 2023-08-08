/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Blocks/iconlist/edit.js":
/*!*************************************!*\
  !*** ./src/Blocks/iconlist/edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/Blocks/iconlist/editor.scss");

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const Edit = () => {
  const TEMPLATE = [['yard-gutenberg/iconlist-item']];
  const ALLOWED_BLOCKS = ['yard-gutenberg/iconlist-item'];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    renderAppender: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.ButtonBlockAppender, null),
    template: TEMPLATE
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/Blocks/iconlist/icon.js":
/*!*************************************!*\
  !*** ./src/Blocks/iconlist/icon.js ***!
  \*************************************/
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
    d: "M156.3 58.2c5.7-6.8 4.7-16.9-2-22.5s-16.9-4.7-22.5 2L62.9 120.3 27.3 84.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l48 48c3.2 3.2 7.5 4.9 12 4.7s8.7-2.3 11.6-5.7l80-96zm0 160c5.7-6.8 4.7-16.9-2-22.5s-16.9-4.7-22.5 2L62.9 280.3 27.3 244.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l48 48c3.2 3.2 7.5 4.9 12 4.7s8.7-2.3 11.6-5.7l80-96zM192 96c0 8.8 7.2 16 16 16H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm0 160c0 8.8 7.2 16 16 16H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zM160 416c0 8.8 7.2 16 16 16H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm-64 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
  })),
  ..._components_block_icon_color__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icon);

/***/ }),

/***/ "./src/Blocks/iconlist/index.js":
/*!**************************************!*\
  !*** ./src/Blocks/iconlist/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/Blocks/iconlist/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/Blocks/iconlist/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/Blocks/iconlist/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/Blocks/iconlist/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/Blocks/iconlist/style.scss");
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

/***/ }),

/***/ "./src/Blocks/iconlist/save.js":
/*!*************************************!*\
  !*** ./src/Blocks/iconlist/save.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const Save = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
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

/***/ "./src/Blocks/iconlist/editor.scss":
/*!*****************************************!*\
  !*** ./src/Blocks/iconlist/editor.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Blocks/iconlist/style.scss":
/*!****************************************!*\
  !*** ./src/Blocks/iconlist/style.scss ***!
  \****************************************/
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

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./src/Blocks/iconlist/block.json":
/*!****************************************!*\
  !*** ./src/Blocks/iconlist/block.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yard-gutenberg/iconlist","version":"0.1.0","title":"Iconenlijst","category":"yard-gutenberg","description":"Voeg een lijst met Font Awesome iconen toe. Verander de tekst en iconen afzonderlijk van elkaar.","attributes":{},"supports":{"align":["wide","full"],"html":false},"textdomain":"iconlist","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"Blocks/iconlist/index": 0,
/******/ 			"Blocks/iconlist/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["Blocks/iconlist/style-index"], () => (__webpack_require__("./src/Blocks/iconlist/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map