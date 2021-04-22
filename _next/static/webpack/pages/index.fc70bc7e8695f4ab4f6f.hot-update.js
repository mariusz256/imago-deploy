webpackHotUpdate_N_E("pages/index",{

/***/ "./shared/animate.js":
/*!***************************!*\
  !*** ./shared/animate.js ***!
  \***************************/
/*! exports provided: variants, transition, useFadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variants", function() { return variants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFadeAnimation", function() { return useFadeAnimation; });
/* harmony import */ var C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");


var _s = $RefreshSig$();




var variants = {
  visible: {
    opacity: 1,
    scale: 1
  },
  hidden: {
    opacity: 0,
    scale: 1
  }
};
var transition = {
  duration: 0.5
};
function useFadeAnimation() {
  _s();

  var controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])();

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"])(),
      _useInView2 = Object(C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return ref;
}

_s(useFadeAnimation, "2NEUvrxzw09dl1eC0Q0pbm0pOIE=", false, function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"]];
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2hhcmVkL2FuaW1hdGUuanMiXSwibmFtZXMiOlsidmFyaWFudHMiLCJ2aXNpYmxlIiwib3BhY2l0eSIsInNjYWxlIiwiaGlkZGVuIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidXNlRmFkZUFuaW1hdGlvbiIsImNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwidXNlSW5WaWV3IiwicmVmIiwiaW5WaWV3IiwidXNlRWZmZWN0Iiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsUUFBUSxHQUFHO0FBQ3RCQyxTQUFPLEVBQUU7QUFBQ0MsV0FBTyxFQUFFLENBQVY7QUFBYUMsU0FBSyxFQUFFO0FBQXBCLEdBRGE7QUFFdEJDLFFBQU0sRUFBRTtBQUFDRixXQUFPLEVBQUUsQ0FBVjtBQUFhQyxTQUFLLEVBQUU7QUFBcEI7QUFGYyxDQUFqQjtBQUtBLElBQU1FLFVBQVUsR0FBRztBQUFDQyxVQUFRLEVBQUU7QUFBWCxDQUFuQjtBQUVBLFNBQVNDLGdCQUFULEdBQTRCO0FBQUE7O0FBQ2pDLE1BQU1DLFFBQVEsR0FBR0Msa0VBQVksRUFBN0I7O0FBRGlDLG1CQUVYQyw2RUFBUyxFQUZFO0FBQUE7QUFBQSxNQUUxQkMsR0FGMEI7QUFBQSxNQUVyQkMsTUFGcUI7O0FBSWpDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJRCxNQUFKLEVBQVk7QUFDVkosY0FBUSxDQUFDTSxLQUFULENBQWUsU0FBZjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNOLFFBQUQsRUFBV0ksTUFBWCxDQUpNLENBQVQ7QUFNQSxTQUFPRCxHQUFQO0FBQ0Q7O0dBWGVKLGdCO1VBQ0dFLDBELEVBQ0tDLHFFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZjNzBiYzdlODY5NWY0YWI0ZjZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZUFuaW1hdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7dXNlSW5WaWV3fSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIHZpc2libGU6IHtvcGFjaXR5OiAxLCBzY2FsZTogMX0sXHJcbiAgaGlkZGVuOiB7b3BhY2l0eTogMCwgc2NhbGU6IDF9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYW5zaXRpb24gPSB7ZHVyYXRpb246IDAuNX07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRmFkZUFuaW1hdGlvbigpIHtcclxuICBjb25zdCBjb250cm9scyA9IHVzZUFuaW1hdGlvbigpO1xyXG4gIGNvbnN0IFtyZWYsIGluVmlld10gPSB1c2VJblZpZXcoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpblZpZXcpIHtcclxuICAgICAgY29udHJvbHMuc3RhcnQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuICB9LCBbY29udHJvbHMsIGluVmlld10pO1xyXG5cclxuICByZXR1cm4gcmVmO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=