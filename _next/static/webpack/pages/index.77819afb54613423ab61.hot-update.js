webpackHotUpdate_N_E("pages/index",{

/***/ "./component/Section/SectionWithList.js":
/*!**********************************************!*\
  !*** ./component/Section/SectionWithList.js ***!
  \**********************************************/
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

var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\Section\\SectionWithList.js";

 // import {about} from './content';

function SectionWithList(_ref) {
  var _this = this;

  var content = _ref.content,
      listStyle = _ref.listStyle;
  console.log(_Section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['container__listNumeric']);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _Section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: content.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), content.subtitle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _Section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__paragraph,
      children: content.subtitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "".concat(_Section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__list, " ").concat(_Section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["container__".concat(listStyle)]),
      children: content.paragraph.map(function (el, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: _Section_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__list__el,
          children: el
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

_c = SectionWithList;
/* harmony default export */ __webpack_exports__["default"] = (SectionWithList);

var _c;

$RefreshReg$(_c, "SectionWithList");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1NlY3Rpb24vU2VjdGlvbldpdGhMaXN0LmpzIl0sIm5hbWVzIjpbIlNlY3Rpb25XaXRoTGlzdCIsImNvbnRlbnQiLCJsaXN0U3R5bGUiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiY29udGFpbmVyIiwidGl0bGUiLCJzdWJ0aXRsZSIsImNvbnRhaW5lcl9fcGFyYWdyYXBoIiwiY29udGFpbmVyX19saXN0IiwicGFyYWdyYXBoIiwibWFwIiwiZWwiLCJpIiwiY29udGFpbmVyX19saXN0X19lbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBRUEsU0FBU0EsZUFBVCxPQUErQztBQUFBOztBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxTQUFZLFFBQVpBLFNBQVk7QUFDN0NDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQywyREFBTSxDQUFDLHdCQUFELENBQWxCO0FBQ0Esc0JBQ0U7QUFBUyxhQUFTLEVBQUVBLDJEQUFNLENBQUNDLFNBQTNCO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0wsT0FBTyxDQUFDTTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHTixPQUFPLENBQUNPLFFBQVIsaUJBQ0M7QUFBRyxlQUFTLEVBQUVILDJEQUFNLENBQUNJLG9CQUFyQjtBQUFBLGdCQUE0Q1IsT0FBTyxDQUFDTztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFLRTtBQUNFLGVBQVMsWUFBS0gsMkRBQU0sQ0FBQ0ssZUFBWixjQUNQTCwyREFBTSxzQkFBZUgsU0FBZixFQURDLENBRFg7QUFBQSxnQkFLR0QsT0FBTyxDQUFDVSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxFQUFELEVBQUtDLENBQUwsRUFBVztBQUNoQyw0QkFDRTtBQUFJLG1CQUFTLEVBQUVULDJEQUFNLENBQUNVLG1CQUF0QjtBQUFBLG9CQUNHRjtBQURILFdBQWdEQyxDQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBS0QsT0FOQTtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDs7S0F2QlFkLGU7QUF5Qk1BLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc3ODE5YWZiNTQ2MTM0MjNhYjYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VjdGlvbi5tb2R1bGUuc2Nzcyc7XHJcbi8vIGltcG9ydCB7YWJvdXR9IGZyb20gJy4vY29udGVudCc7XHJcblxyXG5mdW5jdGlvbiBTZWN0aW9uV2l0aExpc3Qoe2NvbnRlbnQsIGxpc3RTdHlsZX0pIHtcclxuICBjb25zb2xlLmxvZyhzdHlsZXNbJ2NvbnRhaW5lcl9fbGlzdE51bWVyaWMnXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxoMj57Y29udGVudC50aXRsZX08L2gyPlxyXG4gICAgICB7Y29udGVudC5zdWJ0aXRsZSAmJiAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19wYXJhZ3JhcGh9Pntjb250ZW50LnN1YnRpdGxlfTwvcD5cclxuICAgICAgKX1cclxuICAgICAgPHVsXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyX19saXN0fSAke1xyXG4gICAgICAgICAgc3R5bGVzW2Bjb250YWluZXJfXyR7bGlzdFN0eWxlfWBdXHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICB7Y29udGVudC5wYXJhZ3JhcGgubWFwKChlbCwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fbGlzdF9fZWx9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAge2VsfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uV2l0aExpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=