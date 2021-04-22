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
/* harmony import */ var C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section.module.scss */ "./component/Section/Section.module.scss");
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Section_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useFadeAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useFadeAnimation */ "./hooks/useFadeAnimation.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");



var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\Section\\Section.js",
    _s = $RefreshSig$();


 // import {about} from './content';




function Section(_ref) {
  _s();

  var _this = this;

  var content = _ref.content,
      id = _ref.id;

  var _useFadeAnimation = Object(_hooks_useFadeAnimation__WEBPACK_IMPORTED_MODULE_4__["useFadeAnimation"])(),
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
    id: id,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: content.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), content.paragraph.map(function (el, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__paragraph,
        children: el
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_s(Section, "nXZonBP/D8/mIgNqvrF2Zytoahg=", false, function () {
  return [_hooks_useFadeAnimation__WEBPACK_IMPORTED_MODULE_4__["useFadeAnimation"]];
});

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1NlY3Rpb24vU2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJTZWN0aW9uIiwiY29udGVudCIsImlkIiwidXNlRmFkZUFuaW1hdGlvbiIsInJlZiIsImNvbnRyb2xzIiwidmFyaWFudHMiLCJ0cmFuc2l0aW9uIiwic3R5bGVzIiwiY29udGFpbmVyIiwidGl0bGUiLCJwYXJhZ3JhcGgiLCJtYXAiLCJlbCIsImkiLCJjb250YWluZXJfX3BhcmFncmFwaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxPQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUFBLE1BQUxDLEVBQUssUUFBTEEsRUFBSzs7QUFBQSwwQkFDZ0JDLGdGQUFnQixFQURoQztBQUFBO0FBQUEsTUFDdkJDLEdBRHVCO0FBQUEsTUFDbEJDLFFBRGtCO0FBQUEsTUFDUkMsUUFEUTtBQUFBLE1BQ0VDLFVBREY7QUFFOUI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVFLHNCQUNFLHFFQUFDLG9EQUFELENBQVEsT0FBUjtBQUNFLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ0MsU0FEcEI7QUFFRSxPQUFHLEVBQUVMLEdBRlA7QUFHRSxXQUFPLEVBQUVDLFFBSFg7QUFJRSxXQUFPLEVBQUMsUUFKVjtBQUtFLFlBQVEsRUFBRUMsUUFMWjtBQU1FLGNBQVUsRUFBRUMsVUFOZDtBQU9FLE1BQUUsRUFBRUwsRUFQTjtBQUFBLDRCQVNFO0FBQUEsZ0JBQUtELE9BQU8sQ0FBQ1M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsRUFVR1QsT0FBTyxDQUFDVSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxFQUFELEVBQUtDLENBQUwsRUFBVztBQUNoQywwQkFDRTtBQUFHLGlCQUFTLEVBQUVOLDJEQUFNLENBQUNPLG9CQUFyQjtBQUFBLGtCQUNHRjtBQURILFNBQWdEQyxDQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxLQU5BLENBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQkQ7O0dBOUJRZCxPO1VBQ3VDRyx3RTs7O0tBRHZDSCxPO0FBZ0NNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MmFkNzNhNzNkNDFhOWVhMjdlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWN0aW9uLm1vZHVsZS5zY3NzJztcclxuLy8gaW1wb3J0IHthYm91dH0gZnJvbSAnLi9jb250ZW50JztcclxuaW1wb3J0IHt1c2VGYWRlQW5pbWF0aW9ufSBmcm9tICcuLi8uLi9ob29rcy91c2VGYWRlQW5pbWF0aW9uJztcclxuaW1wb3J0IHttb3Rpb259IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gU2VjdGlvbih7Y29udGVudCwgaWR9KSB7XHJcbiAgY29uc3QgW3JlZiwgY29udHJvbHMsIHZhcmlhbnRzLCB0cmFuc2l0aW9uXSA9IHVzZUZhZGVBbmltYXRpb24oKTtcclxuICAvKiBwcm9wcyB0byBtb3Rpb24gXHJcbiAgICByZWY9e3JlZn1cclxuICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxyXG4gICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICovXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLnNlY3Rpb25cclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XHJcbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgIHRyYW5zaXRpb249e3RyYW5zaXRpb259XHJcbiAgICAgIGlkPXtpZH1cclxuICAgID5cclxuICAgICAgPGgyPntjb250ZW50LnRpdGxlfTwvaDI+XHJcbiAgICAgIHtjb250ZW50LnBhcmFncmFwaC5tYXAoKGVsLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fcGFyYWdyYXBofSBrZXk9e2l9PlxyXG4gICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L21vdGlvbi5zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=