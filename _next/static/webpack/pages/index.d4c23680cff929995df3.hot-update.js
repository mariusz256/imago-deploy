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
      inView = _useInView2[1]; // console.log(ref);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlRmFkZUFuaW1hdGlvbi5qcyJdLCJuYW1lcyI6WyJ2YXJpYW50cyIsInZpc2libGUiLCJvcGFjaXR5Iiwic2NhbGUiLCJoaWRkZW4iLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInVzZUZhZGVBbmltYXRpb24iLCJjb250cm9scyIsInVzZUFuaW1hdGlvbiIsInVzZUluVmlldyIsInJlZiIsImluVmlldyIsInVzZUVmZmVjdCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDZkMsU0FBTyxFQUFFO0FBQUNDLFdBQU8sRUFBRSxDQUFWO0FBQWFDLFNBQUssRUFBRTtBQUFwQixHQURNO0FBRWZDLFFBQU0sRUFBRTtBQUFDRixXQUFPLEVBQUUsQ0FBVjtBQUFhQyxTQUFLLEVBQUU7QUFBcEI7QUFGTyxDQUFqQjtBQUtBLElBQU1FLFVBQVUsR0FBRztBQUFDQyxVQUFRLEVBQUUsR0FBWDtBQUFnQkMsT0FBSyxFQUFFO0FBQXZCLENBQW5CO0FBRU8sU0FBU0MsZ0JBQVQsR0FBNEI7QUFBQTs7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUMsUUFBUSxHQUFHQyxrRUFBWSxFQUE3Qjs7QUFSaUMsbUJBU1hDLDZFQUFTLEVBVEU7QUFBQTtBQUFBLE1BUzFCQyxHQVQwQjtBQUFBLE1BU3JCQyxNQVRxQixtQkFVakM7OztBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJRCxNQUFKLEVBQVk7QUFDVkosY0FBUSxDQUFDTSxLQUFULENBQWUsU0FBZjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNOLFFBQUQsRUFBV0ksTUFBWCxDQUpNLENBQVQ7QUFNQSxTQUFPLENBQUNELEdBQUQsRUFBTUgsUUFBTixFQUFnQlQsUUFBaEIsRUFBMEJLLFVBQTFCLENBQVA7QUFDRDs7R0FuQmVHLGdCO1VBUUdFLDBELEVBQ0tDLHFFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ0YzIzNjgwY2ZmOTI5OTk1ZGYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZUFuaW1hdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7dXNlSW5WaWV3fSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgdmlzaWJsZToge29wYWNpdHk6IDEsIHNjYWxlOiAxfSxcclxuICBoaWRkZW46IHtvcGFjaXR5OiAwLCBzY2FsZTogMX0sXHJcbn07XHJcblxyXG5jb25zdCB0cmFuc2l0aW9uID0ge2R1cmF0aW9uOiAwLjUsIGRlbGF5OiAwLjJ9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZhZGVBbmltYXRpb24oKSB7XHJcbiAgLy8gIGNvbnN0IFtyZWYsIGNvbnRyb2xzLCB2YXJpYW50cywgdHJhbnNpdGlvbl0gPSB1c2VGYWRlQW5pbWF0aW9uKCk7XHJcbiAgLy8gcmVmPXtyZWZ9XHJcbiAgLy8gYW5pbWF0ZT17Y29udHJvbHN9XHJcbiAgLy8gaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgLy8gdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gIC8vIHRyYW5zaXRpb249e3RyYW5zaXRpb259XHJcblxyXG4gIGNvbnN0IGNvbnRyb2xzID0gdXNlQW5pbWF0aW9uKCk7XHJcbiAgY29uc3QgW3JlZiwgaW5WaWV3XSA9IHVzZUluVmlldygpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHJlZik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW5WaWV3KSB7XHJcbiAgICAgIGNvbnRyb2xzLnN0YXJ0KCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgfSwgW2NvbnRyb2xzLCBpblZpZXddKTtcclxuXHJcbiAgcmV0dXJuIFtyZWYsIGNvbnRyb2xzLCB2YXJpYW50cywgdHJhbnNpdGlvbl07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==