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
  return ref, controls, variants, transition;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2hhcmVkL2FuaW1hdGUuanMiXSwibmFtZXMiOlsidmFyaWFudHMiLCJ2aXNpYmxlIiwib3BhY2l0eSIsInNjYWxlIiwiaGlkZGVuIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidXNlRmFkZUFuaW1hdGlvbiIsImNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwidXNlSW5WaWV3IiwicmVmIiwiaW5WaWV3IiwidXNlRWZmZWN0Iiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsUUFBUSxHQUFHO0FBQ3RCQyxTQUFPLEVBQUU7QUFBQ0MsV0FBTyxFQUFFLENBQVY7QUFBYUMsU0FBSyxFQUFFO0FBQXBCLEdBRGE7QUFFdEJDLFFBQU0sRUFBRTtBQUFDRixXQUFPLEVBQUUsQ0FBVjtBQUFhQyxTQUFLLEVBQUU7QUFBcEI7QUFGYyxDQUFqQjtBQUtBLElBQU1FLFVBQVUsR0FBRztBQUFDQyxVQUFRLEVBQUU7QUFBWCxDQUFuQjtBQUVBLFNBQVNDLGdCQUFULEdBQTRCO0FBQUE7O0FBQ2pDLE1BQU1DLFFBQVEsR0FBR0Msa0VBQVksRUFBN0I7O0FBRGlDLG1CQUVYQyw2RUFBUyxFQUZFO0FBQUE7QUFBQSxNQUUxQkMsR0FGMEI7QUFBQSxNQUVyQkMsTUFGcUI7O0FBSWpDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJRCxNQUFKLEVBQVk7QUFDVkosY0FBUSxDQUFDTSxLQUFULENBQWUsU0FBZjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNOLFFBQUQsRUFBV0ksTUFBWCxDQUpNLENBQVQ7QUFNQSxTQUFPRCxHQUFHLEVBQUVILFFBQUYsRUFBWVIsUUFBWixFQUFzQkssVUFBaEM7QUFDRDs7R0FYZUUsZ0I7VUFDR0UsMEQsRUFDS0MscUUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDQ3NzQwNTc4MzI3NzE5ZGIyNzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlQW5pbWF0aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHt1c2VJblZpZXd9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcblxyXG5leHBvcnQgY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgdmlzaWJsZToge29wYWNpdHk6IDEsIHNjYWxlOiAxfSxcclxuICBoaWRkZW46IHtvcGFjaXR5OiAwLCBzY2FsZTogMX0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdHJhbnNpdGlvbiA9IHtkdXJhdGlvbjogMC41fTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VGYWRlQW5pbWF0aW9uKCkge1xyXG4gIGNvbnN0IGNvbnRyb2xzID0gdXNlQW5pbWF0aW9uKCk7XHJcbiAgY29uc3QgW3JlZiwgaW5WaWV3XSA9IHVzZUluVmlldygpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGluVmlldykge1xyXG4gICAgICBjb250cm9scy5zdGFydCgndmlzaWJsZScpO1xyXG4gICAgfVxyXG4gIH0sIFtjb250cm9scywgaW5WaWV3XSk7XHJcblxyXG4gIHJldHVybiByZWYsIGNvbnRyb2xzLCB2YXJpYW50cywgdHJhbnNpdGlvbjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9