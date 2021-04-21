webpackHotUpdate_N_E("pages/index",{

/***/ "./context/menuContext/menuContext.js":
/*!********************************************!*\
  !*** ./context/menuContext/menuContext.js ***!
  \********************************************/
/*! exports provided: default, useMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMenu", function() { return useMenu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _menuContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuContext */ "./context/menuContext/menuContext.js");



var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\context\\menuContext\\menuContext.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();




var MenuContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])(false);
var MenuDispatchContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

var MenuContextProvider = function MenuContextProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useCycle = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__["useCycle"])(false, true),
      _useCycle2 = Object(C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useCycle, 2),
      isOpen = _useCycle2[0],
      toggleOpen = _useCycle2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuContext.Provider, {
    value: isOpen,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 10
  }, _this);
};

_s(MenuContextProvider, "+wbUvvGXeT7WCWUG5HoDDMwmX2w=", false, function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_3__["useCycle"]];
});

_c = MenuContextProvider;
/* harmony default export */ __webpack_exports__["default"] = (MenuContextProvider);
var useMenu = function useMenu() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_menuContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
};

_s2(useMenu, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

$RefreshReg$(_c, "MenuContextProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9tZW51Q29udGV4dC9tZW51Q29udGV4dC5qcyJdLCJuYW1lcyI6WyJNZW51Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJNZW51RGlzcGF0Y2hDb250ZXh0IiwiTWVudUNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlQ3ljbGUiLCJpc09wZW4iLCJ0b2dnbGVPcGVuIiwidXNlTWVudSIsInVzZUNvbnRleHQiLCJtZW51Q29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsQ0FBQyxLQUFELENBQWpDO0FBQ0EsSUFBTUMsbUJBQW1CLGdCQUFHRCwyREFBYSxFQUF6Qzs7QUFFQSxJQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BQWdCO0FBQUE7O0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUFBLGtCQUNiQyw4REFBUSxDQUFDLEtBQUQsRUFBUSxJQUFSLENBREs7QUFBQTtBQUFBLE1BQ25DQyxNQURtQztBQUFBLE1BQzNCQyxVQUQyQjs7QUFHMUMsc0JBQU8scUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFRCxNQUE3QjtBQUFBLGNBQXNDRjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUpEOztHQUFNRCxtQjtVQUN5QkUsc0Q7OztLQUR6QkYsbUI7QUFNU0Esa0ZBQWY7QUFFTyxJQUFNSyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBOztBQUFBLFNBQU1DLHdEQUFVLENBQUNDLG9EQUFELENBQWhCO0FBQUEsQ0FBaEI7O0lBQU1GLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjViZGFiYzZiMjQ3NjM4NDllNjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZUN5Y2xlfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IG1lbnVDb250ZXh0IGZyb20gJy4vbWVudUNvbnRleHQnO1xyXG5cclxuY29uc3QgTWVudUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KGZhbHNlKTtcclxuY29uc3QgTWVudURpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IE1lbnVDb250ZXh0UHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHRvZ2dsZU9wZW5dID0gdXNlQ3ljbGUoZmFsc2UsIHRydWUpO1xyXG5cclxuICByZXR1cm4gPE1lbnVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtpc09wZW59PntjaGlsZHJlbn08L01lbnVDb250ZXh0LlByb3ZpZGVyPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVDb250ZXh0UHJvdmlkZXI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTWVudSA9ICgpID0+IHVzZUNvbnRleHQobWVudUNvbnRleHQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9