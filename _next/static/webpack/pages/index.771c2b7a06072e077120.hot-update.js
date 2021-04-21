webpackHotUpdate_N_E("pages/index",{

/***/ "./context/menuContext/menuContext.js":
/*!********************************************!*\
  !*** ./context/menuContext/menuContext.js ***!
  \********************************************/
/*! exports provided: default, useMenu, useDispatchMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMenu", function() { return useMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDispatchMenu", function() { return useDispatchMenu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_menuReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../reducers/menuReducer */ "./reducers/menuReducer.js");


var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\context\\menuContext\\menuContext.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();



var MenuContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
var MenuDispatchContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

var MenuContextProvider = function MenuContextProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_reducers_menuReducer__WEBPACK_IMPORTED_MODULE_2__["menuReducer"], _reducers_menuReducer__WEBPACK_IMPORTED_MODULE_2__["initialState"]),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuDispatchContext.Provider, {
    value: dispatch,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuContext.Provider, {
      value: state,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

_s(MenuContextProvider, "6JWkGZ32UPfojeNx+xqn8ZU8A0Q=");

_c = MenuContextProvider;
/* harmony default export */ __webpack_exports__["default"] = (MenuContextProvider);
var useMenu = function useMenu() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MenuContext);
};

_s2(useMenu, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var useDispatchMenu = function useDispatchMenu() {
  _s3();

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MenuDispatchContext);
};

_s3(useDispatchMenu, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9tZW51Q29udGV4dC9tZW51Q29udGV4dC5qcyJdLCJuYW1lcyI6WyJNZW51Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJNZW51RGlzcGF0Y2hDb250ZXh0IiwiTWVudUNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsIm1lbnVSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZU1lbnUiLCJ1c2VDb250ZXh0IiwidXNlRGlzcGF0Y2hNZW51Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQztBQUNBLElBQU1DLG1CQUFtQixnQkFBR0QsMkRBQWEsRUFBekM7O0FBRUEsSUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixPQUFnQjtBQUFBOztBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFBQSxvQkFDaEJDLHdEQUFVLENBQUNDLGlFQUFELEVBQWNDLGtFQUFkLENBRE07QUFBQSxNQUNuQ0MsS0FEbUM7QUFBQSxNQUM1QkMsUUFENEI7O0FBRzFDLHNCQUNFLHFFQUFDLG1CQUFELENBQXFCLFFBQXJCO0FBQThCLFNBQUssRUFBRUEsUUFBckM7QUFBQSwyQkFDRSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixXQUFLLEVBQUVELEtBQTdCO0FBQUEsZ0JBQXFDSjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FSRDs7R0FBTUQsbUI7O0tBQUFBLG1CO0FBVVNBLGtGQUFmO0FBRU8sSUFBTU8sT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQTs7QUFBQSxTQUFNQyx3REFBVSxDQUFDWCxXQUFELENBQWhCO0FBQUEsQ0FBaEI7O0lBQU1VLE87O0FBQ04sSUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBOztBQUFBLFNBQU1ELHdEQUFVLENBQUNULG1CQUFELENBQWhCO0FBQUEsQ0FBeEI7O0lBQU1VLGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzcxYzJiN2EwNjA3MmUwNzcxMjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHttZW51UmVkdWNlciwgaW5pdGlhbFN0YXRlfSBmcm9tICcuLy4uLy4uL3JlZHVjZXJzL21lbnVSZWR1Y2VyJztcclxuXHJcbmNvbnN0IE1lbnVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5jb25zdCBNZW51RGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgTWVudUNvbnRleHRQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKG1lbnVSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnVEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgPE1lbnVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+e2NoaWxkcmVufTwvTWVudUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L01lbnVEaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVDb250ZXh0UHJvdmlkZXI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTWVudSA9ICgpID0+IHVzZUNvbnRleHQoTWVudUNvbnRleHQpO1xyXG5leHBvcnQgY29uc3QgdXNlRGlzcGF0Y2hNZW51ID0gKCkgPT4gdXNlQ29udGV4dChNZW51RGlzcGF0Y2hDb250ZXh0KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==