webpackHotUpdate_N_E("pages/index",{

/***/ "./component/menuButton/MenuButton.js":
/*!********************************************!*\
  !*** ./component/menuButton/MenuButton.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menuButton_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuButton.module.scss */ "./component/menuButton/menuButton.module.scss");
/* harmony import */ var _menuButton_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menuButton_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _MenuToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuToggle */ "./component/menuButton/MenuToggle.js");
/* harmony import */ var _context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/menuContext/menuContext */ "./context/menuContext/menuContext.js");
/* harmony import */ var _reducers_menuReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../reducers/menuReducer */ "./reducers/menuReducer.js");


var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\menuButton\\MenuButton.js",
    _s = $RefreshSig$();







var sidebar = {
  open: function open() {
    var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 800;
    return {
      clipPath: "circle(".concat(height * 2 + 200, "px at 320px 30px)"),
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2
      }
    };
  },
  closed: {
    clipPath: 'circle(25px at 320px 30px)',
    transition: {
      delay: 0.3,
      type: 'spring',
      stiffness: 500,
      damping: 40
    }
  }
};

function MenuButton(_ref) {
  _s();

  var children = _ref.children;
  var isOpen = Object(_context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_4__["useMenu"])().isOpen;
  var dispatch = _context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_4__["useDispatchMenu"]; // console.log(menu);
  // const [isOpen, toggleOpen] = useCycle(menu, true);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    className: _menuButton_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    initial: false,
    animate: isOpen ? 'open' : 'closed',
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
      className: _menuButton_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container__background,
      variants: sidebar,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MenuToggle__WEBPACK_IMPORTED_MODULE_3__["MenuToggle"], {
      toggle: function toggle() {
        return dispatch({
          type: _reducers_menuReducer__WEBPACK_IMPORTED_MODULE_5__["selectActions"].TOGGLE_MENU
        });
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

_s(MenuButton, "4QYhmC7UvIGcgtIbT5P05/8RGko=", false, function () {
  return [_context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_4__["useMenu"]];
});

_c = MenuButton;
/* harmony default export */ __webpack_exports__["default"] = (MenuButton);

var _c;

$RefreshReg$(_c, "MenuButton");

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
  TOGGLE_MENU: 'TOGGLE_MENU'
};
var initialState = {
  isOpen: false
};
var menuReducer = function menuReducer(state, action) {
  switch (action.type) {
    case selectActions.TOGGLE_MENU:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21lbnVCdXR0b24vTWVudUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvbWVudVJlZHVjZXIuanMiXSwibmFtZXMiOlsic2lkZWJhciIsIm9wZW4iLCJoZWlnaHQiLCJjbGlwUGF0aCIsInRyYW5zaXRpb24iLCJ0eXBlIiwic3RpZmZuZXNzIiwicmVzdERlbHRhIiwiY2xvc2VkIiwiZGVsYXkiLCJkYW1waW5nIiwiTWVudUJ1dHRvbiIsImNoaWxkcmVuIiwiaXNPcGVuIiwidXNlTWVudSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2hNZW51Iiwic3R5bGVzIiwiY29udGFpbmVyIiwiY29udGFpbmVyX19iYWNrZ3JvdW5kIiwic2VsZWN0QWN0aW9ucyIsIlRPR0dMRV9NRU5VIiwiaW5pdGlhbFN0YXRlIiwibWVudVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLE1BQUksRUFBRTtBQUFBLFFBQUNDLE1BQUQsdUVBQVUsR0FBVjtBQUFBLFdBQW1CO0FBQ3ZCQyxjQUFRLG1CQUFZRCxNQUFNLEdBQUcsQ0FBVCxHQUFhLEdBQXpCLHNCQURlO0FBRXZCRSxnQkFBVSxFQUFFO0FBQ1ZDLFlBQUksRUFBRSxRQURJO0FBRVZDLGlCQUFTLEVBQUUsRUFGRDtBQUdWQyxpQkFBUyxFQUFFO0FBSEQ7QUFGVyxLQUFuQjtBQUFBLEdBRFE7QUFTZEMsUUFBTSxFQUFFO0FBQ05MLFlBQVEsRUFBRSw0QkFESjtBQUdOQyxjQUFVLEVBQUU7QUFDVkssV0FBSyxFQUFFLEdBREc7QUFFVkosVUFBSSxFQUFFLFFBRkk7QUFHVkMsZUFBUyxFQUFFLEdBSEQ7QUFJVkksYUFBTyxFQUFFO0FBSkM7QUFITjtBQVRNLENBQWhCOztBQXFCQSxTQUFTQyxVQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXO0FBQzlCLE1BQU1DLE1BQU0sR0FBR0MsZ0ZBQU8sR0FBR0QsTUFBekI7QUFDQSxNQUFNRSxRQUFRLEdBQUdDLGdGQUFqQixDQUY4QixDQUc5QjtBQUVBOztBQUVBLHNCQUNFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsU0FEcEI7QUFFRSxXQUFPLEVBQUUsS0FGWDtBQUdFLFdBQU8sRUFBRUwsTUFBTSxHQUFHLE1BQUgsR0FBWSxRQUg3QjtBQUFBLDRCQUtFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLGVBQVMsRUFBRUksOERBQU0sQ0FBQ0UscUJBQTlCO0FBQXFELGNBQVEsRUFBRW5CLE9BQS9EO0FBQUEsZ0JBQ0dZO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBUUUscUVBQUMsc0RBQUQ7QUFBWSxZQUFNLEVBQUU7QUFBQSxlQUFNRyxRQUFRLENBQUM7QUFBQ1YsY0FBSSxFQUFFZSxtRUFBYSxDQUFDQztBQUFyQixTQUFELENBQWQ7QUFBQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7R0FuQlFWLFU7VUFDUUcsd0U7OztLQURSSCxVO0FBcUJNQSx5RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRPLElBQU1TLGFBQWEsR0FBRztBQUMzQkMsYUFBVyxFQUFFO0FBRGMsQ0FBdEI7QUFJQSxJQUFNQyxZQUFZLEdBQUc7QUFDMUJULFFBQU0sRUFBRTtBQURrQixDQUFyQjtBQUlBLElBQU1VLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUM1QyxVQUFRQSxNQUFNLENBQUNwQixJQUFmO0FBQ0UsU0FBS2UsYUFBYSxDQUFDQyxXQUFuQjtBQUNFLDZDQUFXRyxLQUFYO0FBQWtCWCxjQUFNLEVBQUUsQ0FBQ0E7QUFBM0I7QUFGSjtBQUlELENBTE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGYyYTllNmM4NzI5Y2FlNmI3NmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9tZW51QnV0dG9uLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHttb3Rpb24sIHVzZUN5Y2xlfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHtNZW51VG9nZ2xlfSBmcm9tICcuL01lbnVUb2dnbGUnO1xyXG5pbXBvcnQge3VzZU1lbnV9IGZyb20gJy4uLy4uL2NvbnRleHQvbWVudUNvbnRleHQvbWVudUNvbnRleHQnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoTWVudX0gZnJvbSAnLi8uLi8uLi9jb250ZXh0L21lbnVDb250ZXh0L21lbnVDb250ZXh0JztcclxuaW1wb3J0IHtzZWxlY3RBY3Rpb25zfSBmcm9tICcuLy4uLy4uL3JlZHVjZXJzL21lbnVSZWR1Y2VyJztcclxuXHJcbmNvbnN0IHNpZGViYXIgPSB7XHJcbiAgb3BlbjogKGhlaWdodCA9IDgwMCkgPT4gKHtcclxuICAgIGNsaXBQYXRoOiBgY2lyY2xlKCR7aGVpZ2h0ICogMiArIDIwMH1weCBhdCAzMjBweCAzMHB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIHR5cGU6ICdzcHJpbmcnLFxyXG4gICAgICBzdGlmZm5lc3M6IDIwLFxyXG4gICAgICByZXN0RGVsdGE6IDIsXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4gIGNsb3NlZDoge1xyXG4gICAgY2xpcFBhdGg6ICdjaXJjbGUoMjVweCBhdCAzMjBweCAzMHB4KScsXHJcblxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkZWxheTogMC4zLFxyXG4gICAgICB0eXBlOiAnc3ByaW5nJyxcclxuICAgICAgc3RpZmZuZXNzOiA1MDAsXHJcbiAgICAgIGRhbXBpbmc6IDQwLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gTWVudUJ1dHRvbih7Y2hpbGRyZW59KSB7XHJcbiAgY29uc3QgaXNPcGVuID0gdXNlTWVudSgpLmlzT3BlbjtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoTWVudTtcclxuICAvLyBjb25zb2xlLmxvZyhtZW51KTtcclxuXHJcbiAgLy8gY29uc3QgW2lzT3BlbiwgdG9nZ2xlT3Blbl0gPSB1c2VDeWNsZShtZW51LCB0cnVlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgaW5pdGlhbD17ZmFsc2V9XHJcbiAgICAgIGFuaW1hdGU9e2lzT3BlbiA/ICdvcGVuJyA6ICdjbG9zZWQnfVxyXG4gICAgPlxyXG4gICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2JhY2tncm91bmR9IHZhcmlhbnRzPXtzaWRlYmFyfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPE1lbnVUb2dnbGUgdG9nZ2xlPXsoKSA9PiBkaXNwYXRjaCh7dHlwZTogc2VsZWN0QWN0aW9ucy5UT0dHTEVfTUVOVX0pfSAvPlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVCdXR0b247XHJcbiIsImV4cG9ydCBjb25zdCBzZWxlY3RBY3Rpb25zID0ge1xyXG4gIFRPR0dMRV9NRU5VOiAnVE9HR0xFX01FTlUnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpc09wZW46IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1lbnVSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIHNlbGVjdEFjdGlvbnMuVE9HR0xFX01FTlU6XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlzT3BlbjogIWlzT3Blbn07XHJcbiAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9