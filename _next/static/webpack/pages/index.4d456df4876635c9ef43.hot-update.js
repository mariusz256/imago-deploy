webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useFadeAnimation.js":
/*!***********************************!*\
  !*** ./hooks/useFadeAnimation.js ***!
  \***********************************/
/*! exports provided: useFadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFadeAnimation", function() { return useFadeAnimation; });
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
  duration: 0.5,
  delay: 0.2
};
function useFadeAnimation() {
  _s();

  //  const [ref, controls, variants, transition] = useFadeAnimation();
  // ref={ref}
  // animate={controls}
  // initial="hidden"
  // variants={variants}
  // transition={transition}
  var controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])();

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"])(),
      _useInView2 = Object(C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  console.log(ref).observe;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return [ref, controls, variants, transition];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlRmFkZUFuaW1hdGlvbi5qcyJdLCJuYW1lcyI6WyJ2YXJpYW50cyIsInZpc2libGUiLCJvcGFjaXR5Iiwic2NhbGUiLCJoaWRkZW4iLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInVzZUZhZGVBbmltYXRpb24iLCJjb250cm9scyIsInVzZUFuaW1hdGlvbiIsInVzZUluVmlldyIsInJlZiIsImluVmlldyIsImNvbnNvbGUiLCJsb2ciLCJvYnNlcnZlIiwidXNlRWZmZWN0Iiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRztBQUNmQyxTQUFPLEVBQUU7QUFBQ0MsV0FBTyxFQUFFLENBQVY7QUFBYUMsU0FBSyxFQUFFO0FBQXBCLEdBRE07QUFFZkMsUUFBTSxFQUFFO0FBQUNGLFdBQU8sRUFBRSxDQUFWO0FBQWFDLFNBQUssRUFBRTtBQUFwQjtBQUZPLENBQWpCO0FBS0EsSUFBTUUsVUFBVSxHQUFHO0FBQUNDLFVBQVEsRUFBRSxHQUFYO0FBQWdCQyxPQUFLLEVBQUU7QUFBdkIsQ0FBbkI7QUFFTyxTQUFTQyxnQkFBVCxHQUE0QjtBQUFBOztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQyxRQUFRLEdBQUdDLGtFQUFZLEVBQTdCOztBQVJpQyxtQkFTWEMsNkVBQVMsRUFURTtBQUFBO0FBQUEsTUFTMUJDLEdBVDBCO0FBQUEsTUFTckJDLE1BVHFCOztBQVVqQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQVosRUFBaUJJLE9BQWpCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlKLE1BQUosRUFBWTtBQUNWSixjQUFRLENBQUNTLEtBQVQsQ0FBZSxTQUFmO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ1QsUUFBRCxFQUFXSSxNQUFYLENBSk0sQ0FBVDtBQU1BLFNBQU8sQ0FBQ0QsR0FBRCxFQUFNSCxRQUFOLEVBQWdCVCxRQUFoQixFQUEwQkssVUFBMUIsQ0FBUDtBQUNEOztHQW5CZUcsZ0I7VUFRR0UsMEQsRUFDS0MscUUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGQ0NTZkZjQ4NzY2MzVjOWVmNDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlQW5pbWF0aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHt1c2VJblZpZXd9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICB2aXNpYmxlOiB7b3BhY2l0eTogMSwgc2NhbGU6IDF9LFxyXG4gIGhpZGRlbjoge29wYWNpdHk6IDAsIHNjYWxlOiAxfSxcclxufTtcclxuXHJcbmNvbnN0IHRyYW5zaXRpb24gPSB7ZHVyYXRpb246IDAuNSwgZGVsYXk6IDAuMn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRmFkZUFuaW1hdGlvbigpIHtcclxuICAvLyAgY29uc3QgW3JlZiwgY29udHJvbHMsIHZhcmlhbnRzLCB0cmFuc2l0aW9uXSA9IHVzZUZhZGVBbmltYXRpb24oKTtcclxuICAvLyByZWY9e3JlZn1cclxuICAvLyBhbmltYXRlPXtjb250cm9sc31cclxuICAvLyBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAvLyB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgLy8gdHJhbnNpdGlvbj17dHJhbnNpdGlvbn1cclxuXHJcbiAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKTtcclxuICBjb25zdCBbcmVmLCBpblZpZXddID0gdXNlSW5WaWV3KCk7XHJcbiAgY29uc29sZS5sb2cocmVmKS5vYnNlcnZlO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGluVmlldykge1xyXG4gICAgICBjb250cm9scy5zdGFydCgndmlzaWJsZScpO1xyXG4gICAgfVxyXG4gIH0sIFtjb250cm9scywgaW5WaWV3XSk7XHJcblxyXG4gIHJldHVybiBbcmVmLCBjb250cm9scywgdmFyaWFudHMsIHRyYW5zaXRpb25dO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=