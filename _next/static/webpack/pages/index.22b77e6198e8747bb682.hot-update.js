webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useScroll.js":
/*!****************************!*\
  !*** ./hooks/useScroll.js ***!
  \****************************/
/*! exports provided: useScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScroll", function() { return useScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


function useScroll(amountRef) {
  _s();

  var elementsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    itemsRef.current = itemsRef.current.slice(0, 5);
  }, [props.items]);
  console.log(elementsRef); // const scroll = elementRef.current.scrollIntoView();
  // return [elementRef, scroll];
}

_s(useScroll, "Z3czLv2T88IszI7epnRpheYnz3U=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlU2Nyb2xsLmpzIl0sIm5hbWVzIjpbInVzZVNjcm9sbCIsImFtb3VudFJlZiIsImVsZW1lbnRzUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiaXRlbXNSZWYiLCJjdXJyZW50Iiwic2xpY2UiLCJwcm9wcyIsIml0ZW1zIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sU0FBU0EsU0FBVCxDQUFtQkMsU0FBbkIsRUFBOEI7QUFBQTs7QUFDbkMsTUFBTUMsV0FBVyxHQUFHQyxvREFBTSxDQUFDLEVBQUQsQ0FBMUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFlBQVEsQ0FBQ0MsT0FBVCxHQUFtQkQsUUFBUSxDQUFDQyxPQUFULENBQWlCQyxLQUFqQixDQUF1QixDQUF2QixFQUEwQixDQUExQixDQUFuQjtBQUNELEdBRlEsRUFFTixDQUFDQyxLQUFLLENBQUNDLEtBQVAsQ0FGTSxDQUFUO0FBSUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVCxXQUFaLEVBUG1DLENBUW5DO0FBRUE7QUFDRDs7R0FYZUYsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yMmI3N2U2MTk4ZTg3NDdiYjY4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNjcm9sbChhbW91bnRSZWYpIHtcclxuICBjb25zdCBlbGVtZW50c1JlZiA9IHVzZVJlZihbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpdGVtc1JlZi5jdXJyZW50ID0gaXRlbXNSZWYuY3VycmVudC5zbGljZSgwLCA1KTtcclxuICB9LCBbcHJvcHMuaXRlbXNdKTtcclxuXHJcbiAgY29uc29sZS5sb2coZWxlbWVudHNSZWYpO1xyXG4gIC8vIGNvbnN0IHNjcm9sbCA9IGVsZW1lbnRSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldygpO1xyXG5cclxuICAvLyByZXR1cm4gW2VsZW1lbnRSZWYsIHNjcm9sbF07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==