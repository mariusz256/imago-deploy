webpackHotUpdate_N_E("pages/index",{

/***/ "./component/Section/Section.js":
/*!**************************************!*\
  !*** ./component/Section/Section.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section.module.scss */ "./component/Section/Section.module.scss");
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Section_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\Section\\Section.js";

 // import {about} from './content';

function Section(_ref) {
  var _this = this;

  var content = _ref.content;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _Section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: content.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), content.paragraph.map(function (el, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _Section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__paragraph,
        children: el
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

_c = Section;
/* harmony default export */ __webpack_exports__["default"] = (Section);

var _c;

$RefreshReg$(_c, "Section");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./component/Section/Section.module.scss":
/*!***********************************************!*\
  !*** ./component/Section/Section.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Section.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./component/Section/Section.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Section.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./component/Section/Section.module.scss",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Section.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./component/Section/Section.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./component/about/About.js":
/*!**********************************!*\
  !*** ./component/about/About.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ "./component/about/content.js");
/* harmony import */ var _Section_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Section/Section */ "./component/Section/Section.js");

var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\about\\About.js";
 // import styles from './About.module.scss';




function About() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    content: _content__WEBPACK_IMPORTED_MODULE_2__["about"]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, this);
}

_c = About;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c;

$RefreshReg$(_c, "About");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./component/about/About.module.scss":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./component/Section/Section.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./component/Section/Section.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* colors */\n.Section_container__2w_K6 {\n  max-width: 1024px;\n}\n@media screen and (max-width: 1280px) {\n  .Section_container__2w_K6 {\n    max-width: 840px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .Section_container__2w_K6 {\n    max-width: 768px;\n  }\n}\n@media screen and (max-width: 940px) {\n  .Section_container__2w_K6 {\n    max-width: 720px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .Section_container__2w_K6 {\n    padding: 0 3rem;\n  }\n}\n@media screen and (max-width: 425px) {\n  .Section_container__2w_K6 {\n    padding: 0 3rem;\n  }\n}\n.Section_container__2w_K6 h2 {\n  font-size: 3rem;\n  color: #383838;\n  text-align: center;\n  font-family: \"Parisienne\", cursive;\n}\n\n.Section_container__paragraph__10et0 {\n  font-size: 1rem;\n  line-height: 1.5;\n  font-weight: 500;\n}\n@media screen and (max-width: 768px) {\n  .Section_container__paragraph__10et0 {\n    font-size: 0.875rem;\n  }\n}\n@media screen and (max-width: 425px) {\n  .Section_container__paragraph__10et0 {\n    font-size: 0.75rem;\n  }\n}", "",{"version":3,"sources":["webpack://../../styles/_varriables.scss","webpack://../../styles/_base.scss","webpack://Section.module.scss"],"names":[],"mappings":"AAAA,WAAA;ACAA;EACE,iBAAA;ACEF;ADAE;EAHF;IAII,gBAAA;ECGF;AACF;ADDE;EAPF;IAQI,gBAAA;ECIF;AACF;ADFE;EAXF;IAYI,gBAAA;ECKF;AACF;ADHE;EAfF;IAgBI,eAAA;ECMF;AACF;ADJE;EAnBF;IAoBI,eAAA;ECOF;AACF;ADLE;EACE,eAAA;EACA,cDtBa;ECuBb,kBAAA;EACA,kCAAA;ACOJ;;AA9BE;EACE,eAAA;EACA,gBAAA;EACA,gBAAA;AAiCJ;AA/BI;EALF;IAMI,mBAAA;EAkCJ;AACF;AAhCI;EATF;IAUI,kBAAA;EAmCJ;AACF","sourcesContent":["/* colors */\r\n$primary-color: #121212;\r\n$secondary-color: #242323;\r\n$subtitle-color: #383838;\r\n",".container {\r\n  max-width: 1024px;\r\n\r\n  @media screen and (max-width: 1280px) {\r\n    max-width: 840px;\r\n  }\r\n\r\n  @media screen and (max-width: 1024px) {\r\n    max-width: 768px;\r\n  }\r\n\r\n  @media screen and (max-width: 940px) {\r\n    max-width: 720px;\r\n  }\r\n\r\n  @media screen and (max-width: 768px) {\r\n    padding: 0 3rem;\r\n  }\r\n\r\n  @media screen and (max-width: 425px) {\r\n    padding: 0 3rem;\r\n  }\r\n\r\n  & h2 {\r\n    font-size: 3rem;\r\n    color: $subtitle-color;\r\n    text-align: center;\r\n    font-family: 'Parisienne', cursive;\r\n  }\r\n}\r\n","/* colors */\n.container {\n  max-width: 1024px;\n}\n@media screen and (max-width: 1280px) {\n  .container {\n    max-width: 840px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .container {\n    max-width: 768px;\n  }\n}\n@media screen and (max-width: 940px) {\n  .container {\n    max-width: 720px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .container {\n    padding: 0 3rem;\n  }\n}\n@media screen and (max-width: 425px) {\n  .container {\n    padding: 0 3rem;\n  }\n}\n.container h2 {\n  font-size: 3rem;\n  color: #383838;\n  text-align: center;\n  font-family: \"Parisienne\", cursive;\n}\n\n.container__paragraph {\n  font-size: 1rem;\n  line-height: 1.5;\n  font-weight: 500;\n}\n@media screen and (max-width: 768px) {\n  .container__paragraph {\n    font-size: 0.875rem;\n  }\n}\n@media screen and (max-width: 425px) {\n  .container__paragraph {\n    font-size: 0.75rem;\n  }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Section_container__2w_K6",
	"container__paragraph": "Section_container__paragraph__10et0"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./component/about/About.module.scss":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1NlY3Rpb24vU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1NlY3Rpb24vU2VjdGlvbi5tb2R1bGUuc2Nzcz9iOWY2Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvYWJvdXQvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9TZWN0aW9uL1NlY3Rpb24ubW9kdWxlLnNjc3MiXSwibmFtZXMiOlsiU2VjdGlvbiIsImNvbnRlbnQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ0aXRsZSIsInBhcmFncmFwaCIsIm1hcCIsImVsIiwiaSIsImNvbnRhaW5lcl9fcGFyYWdyYXBoIiwiQWJvdXQiLCJhYm91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBRUEsU0FBU0EsT0FBVCxPQUE0QjtBQUFBOztBQUFBLE1BQVZDLE9BQVUsUUFBVkEsT0FBVTtBQUMxQixzQkFDRTtBQUFTLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ0MsU0FBM0I7QUFBQSw0QkFDRTtBQUFBLGdCQUFLRixPQUFPLENBQUNHO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdILE9BQU8sQ0FBQ0ksU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQ0MsRUFBRCxFQUFLQyxDQUFMLEVBQVc7QUFDaEMsMEJBQ0U7QUFBRyxpQkFBUyxFQUFFTiwyREFBTSxDQUFDTyxvQkFBckI7QUFBQSxrQkFDR0Y7QUFESCxTQUFnREMsQ0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsS0FOQSxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0tBYlFSLE87QUFlTUEsc0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQSxVQUFVLG1CQUFPLENBQUMsc05BQTJHO0FBQzdILDBCQUEwQixtQkFBTyxDQUFDLHdsQkFBZ1Y7O0FBRWxYOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUE7QUFDQSxNQUFNLHdsQkFBZ1Y7QUFDdFY7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyx3bEJBQWdWOztBQUUxVzs7QUFFQTtBQUNBLDRCQUE0QixRQUFTO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0MxREE7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTVSxLQUFULEdBQWlCO0FBQ2Ysc0JBQU8scUVBQUMsd0RBQUQ7QUFBUyxXQUFPLEVBQUVDLDhDQUFLQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7S0FGUUQsSztBQUlNQSxvRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDRDQUE0QyxzQkFBc0IsR0FBRyx5Q0FBeUMsK0JBQStCLHVCQUF1QixLQUFLLEdBQUcseUNBQXlDLCtCQUErQix1QkFBdUIsS0FBSyxHQUFHLHdDQUF3QywrQkFBK0IsdUJBQXVCLEtBQUssR0FBRyx3Q0FBd0MsK0JBQStCLHNCQUFzQixLQUFLLEdBQUcsd0NBQXdDLCtCQUErQixzQkFBc0IsS0FBSyxHQUFHLGdDQUFnQyxvQkFBb0IsbUJBQW1CLHVCQUF1Qix5Q0FBeUMsR0FBRywwQ0FBMEMsb0JBQW9CLHFCQUFxQixxQkFBcUIsR0FBRyx3Q0FBd0MsMENBQTBDLDBCQUEwQixLQUFLLEdBQUcsd0NBQXdDLDBDQUEwQyx5QkFBeUIsS0FBSyxHQUFHLE9BQU8sdUtBQXVLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLE1BQU0sV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLGlFQUFpRSw4QkFBOEIsNkJBQTZCLG1CQUFtQix3QkFBd0IsaURBQWlELHlCQUF5QixPQUFPLGlEQUFpRCx5QkFBeUIsT0FBTyxnREFBZ0QseUJBQXlCLE9BQU8sZ0RBQWdELHdCQUF3QixPQUFPLGdEQUFnRCx3QkFBd0IsT0FBTyxnQkFBZ0Isd0JBQXdCLCtCQUErQiwyQkFBMkIsMkNBQTJDLE9BQU8sS0FBSyxpQ0FBaUMsc0JBQXNCLEdBQUcseUNBQXlDLGdCQUFnQix1QkFBdUIsS0FBSyxHQUFHLHlDQUF5QyxnQkFBZ0IsdUJBQXVCLEtBQUssR0FBRyx3Q0FBd0MsZ0JBQWdCLHVCQUF1QixLQUFLLEdBQUcsd0NBQXdDLGdCQUFnQixzQkFBc0IsS0FBSyxHQUFHLHdDQUF3QyxnQkFBZ0Isc0JBQXNCLEtBQUssR0FBRyxpQkFBaUIsb0JBQW9CLG1CQUFtQix1QkFBdUIseUNBQXlDLEdBQUcsMkJBQTJCLG9CQUFvQixxQkFBcUIscUJBQXFCLEdBQUcsd0NBQXdDLDJCQUEyQiwwQkFBMEIsS0FBSyxHQUFHLHdDQUF3QywyQkFBMkIseUJBQXlCLEtBQUssR0FBRyxtQkFBbUI7QUFDcnJHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43OGM3NjhkMjVjMjY3NDI0YzkxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlY3Rpb24ubW9kdWxlLnNjc3MnO1xyXG4vLyBpbXBvcnQge2Fib3V0fSBmcm9tICcuL2NvbnRlbnQnO1xyXG5cclxuZnVuY3Rpb24gU2VjdGlvbih7Y29udGVudH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGgyPntjb250ZW50LnRpdGxlfTwvaDI+XHJcbiAgICAgIHtjb250ZW50LnBhcmFncmFwaC5tYXAoKGVsLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fcGFyYWdyYXBofSBrZXk9e2l9PlxyXG4gICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9TZWN0aW9uLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9TZWN0aW9uLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vU2VjdGlvbi5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4vQWJvdXQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge2Fib3V0fSBmcm9tICcuL2NvbnRlbnQnO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLy4uL1NlY3Rpb24vU2VjdGlvbic7XHJcblxyXG5mdW5jdGlvbiBBYm91dCgpIHtcclxuICByZXR1cm4gPFNlY3Rpb24gY29udGVudD17YWJvdXR9IC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogY29sb3JzICovXFxuLlNlY3Rpb25fY29udGFpbmVyX18yd19LNiB7XFxuICBtYXgtd2lkdGg6IDEwMjRweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XFxuICAuU2VjdGlvbl9jb250YWluZXJfXzJ3X0s2IHtcXG4gICAgbWF4LXdpZHRoOiA4NDBweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAuU2VjdGlvbl9jb250YWluZXJfXzJ3X0s2IHtcXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTQwcHgpIHtcXG4gIC5TZWN0aW9uX2NvbnRhaW5lcl9fMndfSzYge1xcbiAgICBtYXgtd2lkdGg6IDcyMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLlNlY3Rpb25fY29udGFpbmVyX18yd19LNiB7XFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXG4gIC5TZWN0aW9uX2NvbnRhaW5lcl9fMndfSzYge1xcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxuICB9XFxufVxcbi5TZWN0aW9uX2NvbnRhaW5lcl9fMndfSzYgaDIge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6ICMzODM4Mzg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlBhcmlzaWVubmVcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG4uU2VjdGlvbl9jb250YWluZXJfX3BhcmFncmFwaF9fMTBldDAge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuU2VjdGlvbl9jb250YWluZXJfX3BhcmFncmFwaF9fMTBldDAge1xcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xcbiAgLlNlY3Rpb25fY29udGFpbmVyX19wYXJhZ3JhcGhfXzEwZXQwIHtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vc3R5bGVzL192YXJyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovL1NlY3Rpb24ubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBQTtBQ0FBO0VBQ0UsaUJBQUE7QUNFRjtBREFFO0VBSEY7SUFJSSxnQkFBQTtFQ0dGO0FBQ0Y7QURERTtFQVBGO0lBUUksZ0JBQUE7RUNJRjtBQUNGO0FERkU7RUFYRjtJQVlJLGdCQUFBO0VDS0Y7QUFDRjtBREhFO0VBZkY7SUFnQkksZUFBQTtFQ01GO0FBQ0Y7QURKRTtFQW5CRjtJQW9CSSxlQUFBO0VDT0Y7QUFDRjtBRExFO0VBQ0UsZUFBQTtFQUNBLGNEdEJhO0VDdUJiLGtCQUFBO0VBQ0Esa0NBQUE7QUNPSjs7QUE5QkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWlDSjtBQS9CSTtFQUxGO0lBTUksbUJBQUE7RUFrQ0o7QUFDRjtBQWhDSTtFQVRGO0lBVUksa0JBQUE7RUFtQ0o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBjb2xvcnMgKi9cXHJcXG4kcHJpbWFyeS1jb2xvcjogIzEyMTIxMjtcXHJcXG4kc2Vjb25kYXJ5LWNvbG9yOiAjMjQyMzIzO1xcclxcbiRzdWJ0aXRsZS1jb2xvcjogIzM4MzgzODtcXHJcXG5cIixcIi5jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA4NDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcclxcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTQwcHgpIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA3MjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxyXFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgaDIge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGNvbG9yOiAkc3VidGl0bGUtY29sb3I7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQYXJpc2llbm5lJywgY3Vyc2l2ZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIvKiBjb2xvcnMgKi9cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTAyNHB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDg0MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNzIwcHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXG4gIH1cXG59XFxuLmNvbnRhaW5lciBoMiB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogIzM4MzgzODtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGFyaXNpZW5uZVxcXCIsIGN1cnNpdmU7XFxufVxcblxcbi5jb250YWluZXJfX3BhcmFncmFwaCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5jb250YWluZXJfX3BhcmFncmFwaCB7XFxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxuICAuY29udGFpbmVyX19wYXJhZ3JhcGgge1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNlY3Rpb25fY29udGFpbmVyX18yd19LNlwiLFxuXHRcImNvbnRhaW5lcl9fcGFyYWdyYXBoXCI6IFwiU2VjdGlvbl9jb250YWluZXJfX3BhcmFncmFwaF9fMTBldDBcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9