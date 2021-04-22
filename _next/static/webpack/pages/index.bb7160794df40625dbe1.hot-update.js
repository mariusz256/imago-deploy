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
/* harmony import */ var _shared_animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/animate */ "./shared/animate.js");



var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\Section\\Section.js",
    _s = $RefreshSig$();


 // import {about} from './content';



function Section(_ref) {
  _s();

  var _this = this;

  var content = _ref.content;

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


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(motion.section, {
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
    }, this), content.paragraph.map(function (el, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__paragraph,
        children: el
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

_s(Section, "nXZonBP/D8/mIgNqvrF2Zytoahg=", false, function () {
  return [_shared_animate__WEBPACK_IMPORTED_MODULE_4__["useFadeAnimation"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1NlY3Rpb24vU2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJTZWN0aW9uIiwiY29udGVudCIsInVzZUZhZGVBbmltYXRpb24iLCJyZWYiLCJjb250cm9scyIsInZhcmlhbnRzIiwidHJhbnNpdGlvbiIsInN0eWxlcyIsImNvbnRhaW5lciIsInRpdGxlIiwicGFyYWdyYXBoIiwibWFwIiwiZWwiLCJpIiwiY29udGFpbmVyX19wYXJhZ3JhcGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBOztBQUVBLFNBQVNBLE9BQVQsT0FBNEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFWQyxPQUFVLFFBQVZBLE9BQVU7O0FBQUEsMEJBQ29CQyx3RUFBZ0IsRUFEcEM7QUFBQTtBQUFBLE1BQ25CQyxHQURtQjtBQUFBLE1BQ2RDLFFBRGM7QUFBQSxNQUNKQyxRQURJO0FBQUEsTUFDTUMsVUFETjtBQUUxQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUUsc0JBQ0UscUVBQUMsTUFBRCxDQUFRLE9BQVI7QUFDRSxhQUFTLEVBQUVDLDJEQUFNLENBQUNDLFNBRHBCO0FBRUUsT0FBRyxFQUFFTCxHQUZQO0FBR0UsV0FBTyxFQUFFQyxRQUhYO0FBSUUsV0FBTyxFQUFDLFFBSlY7QUFLRSxZQUFRLEVBQUVDLFFBTFo7QUFNRSxjQUFVLEVBQUVDLFVBTmQ7QUFBQSw0QkFRRTtBQUFBLGdCQUFLTCxPQUFPLENBQUNRO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLEVBU0dSLE9BQU8sQ0FBQ1MsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQ0MsRUFBRCxFQUFLQyxDQUFMLEVBQVc7QUFDaEMsMEJBQ0U7QUFBRyxpQkFBUyxFQUFFTiwyREFBTSxDQUFDTyxvQkFBckI7QUFBQSxrQkFDR0Y7QUFESCxTQUFnREMsQ0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsS0FOQSxDQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEOztHQTdCUWIsTztVQUN1Q0UsZ0U7OztLQUR2Q0YsTztBQStCTUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmI3MTYwNzk0ZGY0MDYyNWRiZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWN0aW9uLm1vZHVsZS5zY3NzJztcclxuLy8gaW1wb3J0IHthYm91dH0gZnJvbSAnLi9jb250ZW50JztcclxuaW1wb3J0IHt1c2VGYWRlQW5pbWF0aW9ufSBmcm9tICcuLy4uLy4uL3NoYXJlZC9hbmltYXRlJztcclxuXHJcbmZ1bmN0aW9uIFNlY3Rpb24oe2NvbnRlbnR9KSB7XHJcbiAgY29uc3QgW3JlZiwgY29udHJvbHMsIHZhcmlhbnRzLCB0cmFuc2l0aW9uXSA9IHVzZUZhZGVBbmltYXRpb24oKTtcclxuICAvKiBwcm9wcyB0byBtb3Rpb24gXHJcbiAgICByZWY9e3JlZn1cclxuICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxyXG4gICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICovXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLnNlY3Rpb25cclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XHJcbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgIHRyYW5zaXRpb249e3RyYW5zaXRpb259XHJcbiAgICA+XHJcbiAgICAgIDxoMj57Y29udGVudC50aXRsZX08L2gyPlxyXG4gICAgICB7Y29udGVudC5wYXJhZ3JhcGgubWFwKChlbCwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX3BhcmFncmFwaH0ga2V5PXtpfT5cclxuICAgICAgICAgICAge2VsfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9tb3Rpb24uc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9