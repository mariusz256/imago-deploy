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


var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\Section\\Section.js";

 // import {about} from './content';



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


function Section(_ref) {
  var _this = this;

  var content = _ref.content;
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
      lineNumber: 26,
      columnNumber: 7
    }, this), content.paragraph.map(function (el, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__paragraph,
        children: el
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1NlY3Rpb24vU2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJ1c2VGYWRlQW5pbWF0aW9uIiwicmVmIiwiY29udHJvbHMiLCJ2YXJpYW50cyIsInRyYW5zaXRpb24iLCJTZWN0aW9uIiwiY29udGVudCIsInN0eWxlcyIsImNvbnRhaW5lciIsInRpdGxlIiwicGFyYWdyYXBoIiwibWFwIiwiZWwiLCJpIiwiY29udGFpbmVyX19wYXJhZ3JhcGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBOzt3QkFFOENBLHdFQUFnQixFOztJQUF2REMsRztJQUFLQyxRO0lBQVVDLFE7SUFBVUMsVTtBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0MsT0FBVCxPQUE0QjtBQUFBOztBQUFBLE1BQVZDLE9BQVUsUUFBVkEsT0FBVTtBQUMxQixzQkFDRSxxRUFBQyxNQUFELENBQVEsT0FBUjtBQUNFLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ0MsU0FEcEI7QUFFRSxPQUFHLEVBQUVQLEdBRlA7QUFHRSxXQUFPLEVBQUVDLFFBSFg7QUFJRSxXQUFPLEVBQUMsUUFKVjtBQUtFLFlBQVEsRUFBRUMsUUFMWjtBQU1FLGNBQVUsRUFBRUMsVUFOZDtBQUFBLDRCQVFFO0FBQUEsZ0JBQUtFLE9BQU8sQ0FBQ0c7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsRUFTR0gsT0FBTyxDQUFDSSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxFQUFELEVBQUtDLENBQUwsRUFBVztBQUNoQywwQkFDRTtBQUFHLGlCQUFTLEVBQUVOLDJEQUFNLENBQUNPLG9CQUFyQjtBQUFBLGtCQUNHRjtBQURILFNBQWdEQyxDQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxLQU5BLENBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0tBcEJRUixPO0FBc0JNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZTM0Yjg2NmNkNjI0N2UzYTIzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlY3Rpb24ubW9kdWxlLnNjc3MnO1xyXG4vLyBpbXBvcnQge2Fib3V0fSBmcm9tICcuL2NvbnRlbnQnO1xyXG5pbXBvcnQge3VzZUZhZGVBbmltYXRpb259IGZyb20gJy4vLi4vLi4vc2hhcmVkL2FuaW1hdGUnO1xyXG5cclxuY29uc3QgW3JlZiwgY29udHJvbHMsIHZhcmlhbnRzLCB0cmFuc2l0aW9uXSA9IHVzZUZhZGVBbmltYXRpb24oKTtcclxuXHJcbi8qIHByb3BzIHRvIG1vdGlvbiBcclxuICByZWY9e3JlZn1cclxuICBhbmltYXRlPXtjb250cm9sc31cclxuICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgdHJhbnNpdGlvbj17dHJhbnNpdGlvbn1cclxuKi9cclxuXHJcbmZ1bmN0aW9uIFNlY3Rpb24oe2NvbnRlbnR9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uc2VjdGlvblxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBhbmltYXRlPXtjb250cm9sc31cclxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgdHJhbnNpdGlvbj17dHJhbnNpdGlvbn1cclxuICAgID5cclxuICAgICAgPGgyPntjb250ZW50LnRpdGxlfTwvaDI+XHJcbiAgICAgIHtjb250ZW50LnBhcmFncmFwaC5tYXAoKGVsLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fcGFyYWdyYXBofSBrZXk9e2l9PlxyXG4gICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L21vdGlvbi5zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=