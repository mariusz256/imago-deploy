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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _menuContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuContext */ "./context/menuContext/menuContext.js");


var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\context\\menuContext\\menuContext.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();




var MenuContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
var MenuDispatchContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

var MenuContextProvider = function MenuContextProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(menuReducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SelectDispatchContext.Provider, {
    value: dispatch,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SelectContext.Provider, {
      value: state,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};

_s(MenuContextProvider, "6JWkGZ32UPfojeNx+xqn8ZU8A0Q=");

_c = MenuContextProvider;
/* harmony default export */ __webpack_exports__["default"] = (MenuContextProvider);
var useMenu = function useMenu() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_menuContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9tZW51Q29udGV4dC9tZW51Q29udGV4dC5qcyJdLCJuYW1lcyI6WyJNZW51Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJNZW51RGlzcGF0Y2hDb250ZXh0IiwiTWVudUNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsIm1lbnVSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZU1lbnUiLCJ1c2VDb250ZXh0IiwibWVudUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQztBQUNBLElBQU1DLG1CQUFtQixnQkFBR0QsMkRBQWEsRUFBekM7O0FBRUEsSUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixPQUFnQjtBQUFBOztBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFBQSxvQkFDaEJDLHdEQUFVLENBQUNDLFdBQUQsRUFBY0MsWUFBZCxDQURNO0FBQUEsTUFDbkNDLEtBRG1DO0FBQUEsTUFDNUJDLFFBRDRCOztBQUcxQyxzQkFDRSxxRUFBQyxxQkFBRCxDQUF1QixRQUF2QjtBQUFnQyxTQUFLLEVBQUVBLFFBQXZDO0FBQUEsMkJBQ0UscUVBQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsV0FBSyxFQUFFRCxLQUEvQjtBQUFBLGdCQUF1Q0o7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBUkQ7O0dBQU1ELG1COztLQUFBQSxtQjtBQVVTQSxrRkFBZjtBQUVPLElBQU1PLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUE7O0FBQUEsU0FBTUMsd0RBQVUsQ0FBQ0Msb0RBQUQsQ0FBaEI7QUFBQSxDQUFoQjs7SUFBTUYsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZWM0MmM3MzdiZjdmMmVkOGMyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlQ3ljbGV9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgbWVudUNvbnRleHQgZnJvbSAnLi9tZW51Q29udGV4dCc7XHJcblxyXG5jb25zdCBNZW51Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuY29uc3QgTWVudURpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IE1lbnVDb250ZXh0UHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihtZW51UmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWxlY3REaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgPFNlbGVjdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57Y2hpbGRyZW59PC9TZWxlY3RDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9TZWxlY3REaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVDb250ZXh0UHJvdmlkZXI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTWVudSA9ICgpID0+IHVzZUNvbnRleHQobWVudUNvbnRleHQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9