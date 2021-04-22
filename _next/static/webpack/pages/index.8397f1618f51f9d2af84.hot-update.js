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
/* harmony import */ var C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section.module.scss */ "./component/Section/Section.module.scss");
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Section_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/animate */ "./shared/animate.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");



var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\Section\\SectionWithList.js",
    _s = $RefreshSig$();






function SectionWithList(_ref) {
  _s();

  var _this = this;

  var content = _ref.content,
      listStyle = _ref.listStyle;

  var _useFadeAnimation = Object(_shared_animate__WEBPACK_IMPORTED_MODULE_4__["useFadeAnimation"])(),
      _useFadeAnimation2 = Object(C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useFadeAnimation, 4),
      ref = _useFadeAnimation2[0],
      controls = _useFadeAnimation2[1],
      variants = _useFadeAnimation2[2],
      transition = _useFadeAnimation2[3];
  /* props to motion 
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={variants}
    transition={transition}
  */


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].section, {
    className: _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    ref: ref,
    animate: controls,
    initial: "hidden",
    variants: variants,
    transition: transition,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: content.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), content.subtitle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__paragraph,
      children: content.subtitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "".concat(_Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__list, " ").concat(_Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a["container__".concat(listStyle)]),
      children: content.paragraph.map(function (el, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__list__el,
          children: el
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

_s(SectionWithList, "nXZonBP/D8/mIgNqvrF2Zytoahg=", false, function () {
  return [_shared_animate__WEBPACK_IMPORTED_MODULE_4__["useFadeAnimation"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1NlY3Rpb24vU2VjdGlvbldpdGhMaXN0LmpzIl0sIm5hbWVzIjpbIlNlY3Rpb25XaXRoTGlzdCIsImNvbnRlbnQiLCJsaXN0U3R5bGUiLCJ1c2VGYWRlQW5pbWF0aW9uIiwicmVmIiwiY29udHJvbHMiLCJ2YXJpYW50cyIsInRyYW5zaXRpb24iLCJzdHlsZXMiLCJjb250YWluZXIiLCJ0aXRsZSIsInN1YnRpdGxlIiwiY29udGFpbmVyX19wYXJhZ3JhcGgiLCJjb250YWluZXJfX2xpc3QiLCJwYXJhZ3JhcGgiLCJtYXAiLCJlbCIsImkiLCJjb250YWluZXJfX2xpc3RfX2VsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGVBQVQsT0FBK0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFyQkMsT0FBcUIsUUFBckJBLE9BQXFCO0FBQUEsTUFBWkMsU0FBWSxRQUFaQSxTQUFZOztBQUFBLDBCQUNDQyx3RUFBZ0IsRUFEakI7QUFBQTtBQUFBLE1BQ3RDQyxHQURzQztBQUFBLE1BQ2pDQyxRQURpQztBQUFBLE1BQ3ZCQyxRQUR1QjtBQUFBLE1BQ2JDLFVBRGE7QUFFN0M7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVFLHNCQUNFLHFFQUFDLG9EQUFELENBQVEsT0FBUjtBQUNFLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ0MsU0FEcEI7QUFFRSxPQUFHLEVBQUVMLEdBRlA7QUFHRSxXQUFPLEVBQUVDLFFBSFg7QUFJRSxXQUFPLEVBQUMsUUFKVjtBQUtFLFlBQVEsRUFBRUMsUUFMWjtBQU1FLGNBQVUsRUFBRUMsVUFOZDtBQUFBLDRCQVFFO0FBQUEsZ0JBQUtOLE9BQU8sQ0FBQ1M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsRUFTR1QsT0FBTyxDQUFDVSxRQUFSLGlCQUNDO0FBQUcsZUFBUyxFQUFFSCwyREFBTSxDQUFDSSxvQkFBckI7QUFBQSxnQkFBNENYLE9BQU8sQ0FBQ1U7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKLGVBWUU7QUFDRSxlQUFTLFlBQUtILDJEQUFNLENBQUNLLGVBQVosY0FDUEwsMkRBQU0sc0JBQWVOLFNBQWYsRUFEQyxDQURYO0FBQUEsZ0JBS0dELE9BQU8sQ0FBQ2EsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQ0MsRUFBRCxFQUFLQyxDQUFMLEVBQVc7QUFDaEMsNEJBQ0U7QUFBSSxtQkFBUyxFQUFFVCwyREFBTSxDQUFDVSxtQkFBdEI7QUFBQSxvQkFDR0Y7QUFESCxXQUFnREMsQ0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUtELE9BTkE7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0QkQ7O0dBdENRakIsZTtVQUN1Q0csZ0U7OztLQUR2Q0gsZTtBQXdDTUEsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODM5N2YxNjE4ZjUxZjlkMmFmODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWN0aW9uLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHt1c2VGYWRlQW5pbWF0aW9ufSBmcm9tICcuLy4uLy4uL3NoYXJlZC9hbmltYXRlJztcclxuaW1wb3J0IHttb3Rpb259IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gU2VjdGlvbldpdGhMaXN0KHtjb250ZW50LCBsaXN0U3R5bGV9KSB7XHJcbiAgY29uc3QgW3JlZiwgY29udHJvbHMsIHZhcmlhbnRzLCB0cmFuc2l0aW9uXSA9IHVzZUZhZGVBbmltYXRpb24oKTtcclxuICAvKiBwcm9wcyB0byBtb3Rpb24gXHJcbiAgICByZWY9e3JlZn1cclxuICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxyXG4gICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICovXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLnNlY3Rpb25cclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XHJcbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgIHRyYW5zaXRpb249e3RyYW5zaXRpb259XHJcbiAgICA+XHJcbiAgICAgIDxoMj57Y29udGVudC50aXRsZX08L2gyPlxyXG4gICAgICB7Y29udGVudC5zdWJ0aXRsZSAmJiAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19wYXJhZ3JhcGh9Pntjb250ZW50LnN1YnRpdGxlfTwvcD5cclxuICAgICAgKX1cclxuICAgICAgPHVsXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyX19saXN0fSAke1xyXG4gICAgICAgICAgc3R5bGVzW2Bjb250YWluZXJfXyR7bGlzdFN0eWxlfWBdXHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICB7Y29udGVudC5wYXJhZ3JhcGgubWFwKChlbCwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fbGlzdF9fZWx9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAge2VsfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvbW90aW9uLnNlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbldpdGhMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9