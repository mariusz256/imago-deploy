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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SelectDispatchContext.Provider, {
    value: dispatch,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SelectContext.Provider, {
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

/***/ }),

/***/ "./reducers/menuReducer.js":
/*!*********************************!*\
  !*** ./reducers/menuReducer.js ***!
  \*********************************/
/*! exports provided: selectActions, initialState, menuReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectActions", function() { return selectActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuReducer", function() { return menuReducer; });
/* harmony import */ var C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var selectActions = {
  TOGGLE_SHOW: 'TOGGLE_SHOW'
};
var initialState = {
  isOpen: false
};
var menuReducer = function menuReducer(state, action) {
  switch (action.type) {
    case selectActions.TOGGLE_SHOW:
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: !isOpen
      });
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9tZW51Q29udGV4dC9tZW51Q29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvbWVudVJlZHVjZXIuanMiXSwibmFtZXMiOlsiTWVudUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTWVudURpc3BhdGNoQ29udGV4dCIsIk1lbnVDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJtZW51UmVkdWNlciIsImluaXRpYWxTdGF0ZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VNZW51IiwidXNlQ29udGV4dCIsInVzZURpc3BhdGNoTWVudSIsInNlbGVjdEFjdGlvbnMiLCJUT0dHTEVfU0hPVyIsImlzT3BlbiIsImFjdGlvbiIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLEVBQWpDO0FBQ0EsSUFBTUMsbUJBQW1CLGdCQUFHRCwyREFBYSxFQUF6Qzs7QUFFQSxJQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BQWdCO0FBQUE7O0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUFBLG9CQUNoQkMsd0RBQVUsQ0FBQ0MsaUVBQUQsRUFBY0Msa0VBQWQsQ0FETTtBQUFBLE1BQ25DQyxLQURtQztBQUFBLE1BQzVCQyxRQUQ0Qjs7QUFHMUMsc0JBQ0UscUVBQUMscUJBQUQsQ0FBdUIsUUFBdkI7QUFBZ0MsU0FBSyxFQUFFQSxRQUF2QztBQUFBLDJCQUNFLHFFQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFdBQUssRUFBRUQsS0FBL0I7QUFBQSxnQkFBdUNKO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQVJEOztHQUFNRCxtQjs7S0FBQUEsbUI7QUFVU0Esa0ZBQWY7QUFFTyxJQUFNTyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBOztBQUFBLFNBQU1DLHdEQUFVLENBQUNYLFdBQUQsQ0FBaEI7QUFBQSxDQUFoQjs7SUFBTVUsTzs7QUFDTixJQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUE7O0FBQUEsU0FBTUQsd0RBQVUsQ0FBQ1QsbUJBQUQsQ0FBaEI7QUFBQSxDQUF4Qjs7SUFBTVUsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJOLElBQU1DLGFBQWEsR0FBRztBQUMzQkMsYUFBVyxFQUFFO0FBRGMsQ0FBdEI7QUFJQSxJQUFNUCxZQUFZLEdBQUc7QUFDMUJRLFFBQU0sRUFBRTtBQURrQixDQUFyQjtBQUlBLElBQU1ULFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNFLEtBQUQsRUFBUVEsTUFBUixFQUFtQjtBQUM1QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLSixhQUFhLENBQUNDLFdBQW5CO0FBQ0UsNkNBQVdOLEtBQVg7QUFBa0JPLGNBQU0sRUFBRSxDQUFDQTtBQUEzQjtBQUZKO0FBSUQsQ0FMTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hYWIzZjE2ZDViZDQwYzNhODFmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7bWVudVJlZHVjZXIsIGluaXRpYWxTdGF0ZX0gZnJvbSAnLi8uLi8uLi9yZWR1Y2Vycy9tZW51UmVkdWNlcic7XHJcblxyXG5jb25zdCBNZW51Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuY29uc3QgTWVudURpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IE1lbnVDb250ZXh0UHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihtZW51UmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWxlY3REaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgPFNlbGVjdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57Y2hpbGRyZW59PC9TZWxlY3RDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9TZWxlY3REaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVDb250ZXh0UHJvdmlkZXI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTWVudSA9ICgpID0+IHVzZUNvbnRleHQoTWVudUNvbnRleHQpO1xyXG5leHBvcnQgY29uc3QgdXNlRGlzcGF0Y2hNZW51ID0gKCkgPT4gdXNlQ29udGV4dChNZW51RGlzcGF0Y2hDb250ZXh0KTtcclxuIiwiZXhwb3J0IGNvbnN0IHNlbGVjdEFjdGlvbnMgPSB7XHJcbiAgVE9HR0xFX1NIT1c6ICdUT0dHTEVfU0hPVycsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzT3BlbjogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbWVudVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2Ugc2VsZWN0QWN0aW9ucy5UT0dHTEVfU0hPVzpcclxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaXNPcGVuOiAhaXNPcGVufTtcclxuICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=