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


  var a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  console.log(a.current);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].section, {
    className: _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    ref: (ref, a),
    animate: controls,
    initial: "hidden",
    variants: variants,
    transition: transition,
    id: id,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: content.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), content.paragraph.map(function (el, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__paragraph,
        children: el
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_s(Section, "AL7UzQU0hZ2DOy9HKhJItTvkG2o=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1NlY3Rpb24vU2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJTZWN0aW9uIiwiY29udGVudCIsImlkIiwidXNlRmFkZUFuaW1hdGlvbiIsInJlZiIsImNvbnRyb2xzIiwidmFyaWFudHMiLCJ0cmFuc2l0aW9uIiwiYSIsInVzZVJlZiIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50Iiwic3R5bGVzIiwiY29udGFpbmVyIiwidGl0bGUiLCJwYXJhZ3JhcGgiLCJtYXAiLCJlbCIsImkiLCJjb250YWluZXJfX3BhcmFncmFwaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxPQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUFBLE1BQUxDLEVBQUssUUFBTEEsRUFBSzs7QUFBQSwwQkFDZ0JDLGdGQUFnQixFQURoQztBQUFBO0FBQUEsTUFDdkJDLEdBRHVCO0FBQUEsTUFDbEJDLFFBRGtCO0FBQUEsTUFDUkMsUUFEUTtBQUFBLE1BQ0VDLFVBREY7QUFFOUI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLE1BQU1DLENBQUMsR0FBR0Msb0RBQU0sRUFBaEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILENBQUMsQ0FBQ0ksT0FBZDtBQUVBLHNCQUNFLHFFQUFDLG9EQUFELENBQVEsT0FBUjtBQUNFLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ0MsU0FEcEI7QUFFRSxPQUFHLEdBQUdWLEdBQUcsRUFBRUksQ0FBUixDQUZMO0FBR0UsV0FBTyxFQUFFSCxRQUhYO0FBSUUsV0FBTyxFQUFDLFFBSlY7QUFLRSxZQUFRLEVBQUVDLFFBTFo7QUFNRSxjQUFVLEVBQUVDLFVBTmQ7QUFPRSxNQUFFLEVBQUVMLEVBUE47QUFBQSw0QkFTRTtBQUFBLGdCQUFLRCxPQUFPLENBQUNjO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLEVBVUdkLE9BQU8sQ0FBQ2UsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQ0MsRUFBRCxFQUFLQyxDQUFMLEVBQVc7QUFDaEMsMEJBQ0U7QUFBRyxpQkFBUyxFQUFFTiwyREFBTSxDQUFDTyxvQkFBckI7QUFBQSxrQkFDR0Y7QUFESCxTQUFnREMsQ0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsS0FOQSxDQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEOztHQWhDUW5CLE87VUFDdUNHLHdFOzs7S0FEdkNILE87QUFrQ01BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFlYjkyMzhlMWVkMjEyMzRjZGRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlY3Rpb24ubW9kdWxlLnNjc3MnO1xyXG4vLyBpbXBvcnQge2Fib3V0fSBmcm9tICcuL2NvbnRlbnQnO1xyXG5pbXBvcnQge3VzZUZhZGVBbmltYXRpb259IGZyb20gJy4uLy4uL2hvb2tzL3VzZUZhZGVBbmltYXRpb24nO1xyXG5pbXBvcnQge21vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5mdW5jdGlvbiBTZWN0aW9uKHtjb250ZW50LCBpZH0pIHtcclxuICBjb25zdCBbcmVmLCBjb250cm9scywgdmFyaWFudHMsIHRyYW5zaXRpb25dID0gdXNlRmFkZUFuaW1hdGlvbigpO1xyXG4gIC8qIHByb3BzIHRvIG1vdGlvbiBcclxuICAgIHJlZj17cmVmfVxyXG4gICAgYW5pbWF0ZT17Y29udHJvbHN9XHJcbiAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgIHRyYW5zaXRpb249e3RyYW5zaXRpb259XHJcbiAgKi9cclxuICBjb25zdCBhID0gdXNlUmVmKCk7XHJcbiAgY29uc29sZS5sb2coYS5jdXJyZW50KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uc2VjdGlvblxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgIHJlZj17KHJlZiwgYSl9XHJcbiAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxyXG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICAgICBpZD17aWR9XHJcbiAgICA+XHJcbiAgICAgIDxoMj57Y29udGVudC50aXRsZX08L2gyPlxyXG4gICAgICB7Y29udGVudC5wYXJhZ3JhcGgubWFwKChlbCwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX3BhcmFncmFwaH0ga2V5PXtpfT5cclxuICAgICAgICAgICAge2VsfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9tb3Rpb24uc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9