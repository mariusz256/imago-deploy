webpackHotUpdate_N_E("pages/index",{

/***/ "./shared/animate.js":
/*!***************************!*\
  !*** ./shared/animate.js ***!
  \***************************/
/*! exports provided: variants, transition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variants", function() { return variants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony import */ var C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");

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
var controls = useAnimation();

var _useInView = useInView(),
    _useInView2 = Object(C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInView, 2),
    ref = _useInView2[0],
    inView = _useInView2[1];

useEffect(function () {
  if (inView) {
    controls.start('visible');
  }
}, [controls, inView]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2hhcmVkL2FuaW1hdGUuanMiXSwibmFtZXMiOlsidmFyaWFudHMiLCJ2aXNpYmxlIiwib3BhY2l0eSIsInNjYWxlIiwiaGlkZGVuIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY29udHJvbHMiLCJ1c2VBbmltYXRpb24iLCJ1c2VJblZpZXciLCJyZWYiLCJpblZpZXciLCJ1c2VFZmZlY3QiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsUUFBUSxHQUFHO0FBQ3RCQyxTQUFPLEVBQUU7QUFBQ0MsV0FBTyxFQUFFLENBQVY7QUFBYUMsU0FBSyxFQUFFO0FBQXBCLEdBRGE7QUFFdEJDLFFBQU0sRUFBRTtBQUFDRixXQUFPLEVBQUUsQ0FBVjtBQUFhQyxTQUFLLEVBQUU7QUFBcEI7QUFGYyxDQUFqQjtBQUtBLElBQU1FLFVBQVUsR0FBRztBQUFDQyxVQUFRLEVBQUU7QUFBWCxDQUFuQjtBQUNQLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxFQUE3Qjs7aUJBQ3NCQyxTQUFTLEU7O0lBQXhCQyxHO0lBQUtDLE07O0FBRVpDLFNBQVMsQ0FBQyxZQUFNO0FBQ2QsTUFBSUQsTUFBSixFQUFZO0FBQ1ZKLFlBQVEsQ0FBQ00sS0FBVCxDQUFlLFNBQWY7QUFDRDtBQUNGLENBSlEsRUFJTixDQUFDTixRQUFELEVBQVdJLE1BQVgsQ0FKTSxDQUFUIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMwMzVhN2Y0MTI0ZmNmNzllMTk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgdmlzaWJsZToge29wYWNpdHk6IDEsIHNjYWxlOiAxfSxcclxuICBoaWRkZW46IHtvcGFjaXR5OiAwLCBzY2FsZTogMX0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdHJhbnNpdGlvbiA9IHtkdXJhdGlvbjogMC41fTtcclxuY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKTtcclxuY29uc3QgW3JlZiwgaW5WaWV3XSA9IHVzZUluVmlldygpO1xyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuICBpZiAoaW5WaWV3KSB7XHJcbiAgICBjb250cm9scy5zdGFydCgndmlzaWJsZScpO1xyXG4gIH1cclxufSwgW2NvbnRyb2xzLCBpblZpZXddKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==