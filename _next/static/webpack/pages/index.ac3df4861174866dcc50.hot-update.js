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
/* harmony import */ var C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _menuButton_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuButton.module.scss */ "./component/menuButton/menuButton.module.scss");
/* harmony import */ var _menuButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menuButton_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _MenuToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuToggle */ "./component/menuButton/MenuToggle.js");
/* harmony import */ var _context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../context/menuContext/menuContext */ "./context/menuContext/menuContext.js");



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

  var _useCycle = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__["useCycle"])(false, true),
      _useCycle2 = Object(C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useCycle, 2),
      isOpen = _useCycle2[0],
      toggleOpen = _useCycle2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    className: _menuButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    initial: false,
    animate: isOpen ? 'open' : 'closed',
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
      className: _menuButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__background,
      variants: sidebar,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
        menu: false,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MenuToggle__WEBPACK_IMPORTED_MODULE_4__["MenuToggle"], {
      toggle: function toggle() {
        return toggleOpen();
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

_s(MenuButton, "+wbUvvGXeT7WCWUG5HoDDMwmX2w=", false, function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_3__["useCycle"]];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21lbnVCdXR0b24vTWVudUJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJzaWRlYmFyIiwib3BlbiIsImhlaWdodCIsImNsaXBQYXRoIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJyZXN0RGVsdGEiLCJjbG9zZWQiLCJkZWxheSIsImRhbXBpbmciLCJNZW51QnV0dG9uIiwiY2hpbGRyZW4iLCJ1c2VDeWNsZSIsImlzT3BlbiIsInRvZ2dsZU9wZW4iLCJzdHlsZXMiLCJjb250YWluZXIiLCJjb250YWluZXJfX2JhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRztBQUNkQyxNQUFJLEVBQUU7QUFBQSxRQUFDQyxNQUFELHVFQUFVLEdBQVY7QUFBQSxXQUFtQjtBQUN2QkMsY0FBUSxtQkFBWUQsTUFBTSxHQUFHLENBQVQsR0FBYSxHQUF6QixzQkFEZTtBQUV2QkUsZ0JBQVUsRUFBRTtBQUNWQyxZQUFJLEVBQUUsUUFESTtBQUVWQyxpQkFBUyxFQUFFLEVBRkQ7QUFHVkMsaUJBQVMsRUFBRTtBQUhEO0FBRlcsS0FBbkI7QUFBQSxHQURRO0FBU2RDLFFBQU0sRUFBRTtBQUNOTCxZQUFRLEVBQUUsNEJBREo7QUFHTkMsY0FBVSxFQUFFO0FBQ1ZLLFdBQUssRUFBRSxHQURHO0FBRVZKLFVBQUksRUFBRSxRQUZJO0FBR1ZDLGVBQVMsRUFBRSxHQUhEO0FBSVZJLGFBQU8sRUFBRTtBQUpDO0FBSE47QUFUTSxDQUFoQjs7QUFxQkEsU0FBU0MsVUFBVCxPQUFnQztBQUFBOztBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVzs7QUFBQSxrQkFDREMsOERBQVEsQ0FBQyxLQUFELEVBQVEsSUFBUixDQURQO0FBQUE7QUFBQSxNQUN2QkMsTUFEdUI7QUFBQSxNQUNmQyxVQURlOztBQUc5QixzQkFDRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxhQUFTLEVBQUVDLDhEQUFNLENBQUNDLFNBRHBCO0FBRUUsV0FBTyxFQUFFLEtBRlg7QUFHRSxXQUFPLEVBQUVILE1BQU0sR0FBRyxNQUFILEdBQVksUUFIN0I7QUFBQSw0QkFLRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxlQUFTLEVBQUVFLDhEQUFNLENBQUNFLHFCQUE5QjtBQUFxRCxjQUFRLEVBQUVsQixPQUEvRDtBQUFBLDZCQUNFLHFFQUFDLHdFQUFELENBQWEsUUFBYjtBQUFzQixZQUFJLEVBQUUsS0FBNUI7QUFBQSxrQkFBb0NZO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFRRSxxRUFBQyxzREFBRDtBQUFZLFlBQU0sRUFBRTtBQUFBLGVBQU1HLFVBQVUsRUFBaEI7QUFBQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7R0FmUUosVTtVQUNzQkUsc0Q7OztLQUR0QkYsVTtBQWlCTUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWMzZGY0ODYxMTc0ODY2ZGNjNTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9tZW51QnV0dG9uLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHttb3Rpb24sIHVzZUN5Y2xlfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHtNZW51VG9nZ2xlfSBmcm9tICcuL01lbnVUb2dnbGUnO1xyXG5pbXBvcnQgbWVudUNvbnRleHQgZnJvbSAnLi8uLi8uLi9jb250ZXh0L21lbnVDb250ZXh0L21lbnVDb250ZXh0JztcclxuXHJcbmNvbnN0IHNpZGViYXIgPSB7XHJcbiAgb3BlbjogKGhlaWdodCA9IDgwMCkgPT4gKHtcclxuICAgIGNsaXBQYXRoOiBgY2lyY2xlKCR7aGVpZ2h0ICogMiArIDIwMH1weCBhdCAzMjBweCAzMHB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIHR5cGU6ICdzcHJpbmcnLFxyXG4gICAgICBzdGlmZm5lc3M6IDIwLFxyXG4gICAgICByZXN0RGVsdGE6IDIsXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4gIGNsb3NlZDoge1xyXG4gICAgY2xpcFBhdGg6ICdjaXJjbGUoMjVweCBhdCAzMjBweCAzMHB4KScsXHJcblxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkZWxheTogMC4zLFxyXG4gICAgICB0eXBlOiAnc3ByaW5nJyxcclxuICAgICAgc3RpZmZuZXNzOiA1MDAsXHJcbiAgICAgIGRhbXBpbmc6IDQwLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gTWVudUJ1dHRvbih7Y2hpbGRyZW59KSB7XHJcbiAgY29uc3QgW2lzT3BlbiwgdG9nZ2xlT3Blbl0gPSB1c2VDeWNsZShmYWxzZSwgdHJ1ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgIGluaXRpYWw9e2ZhbHNlfVxyXG4gICAgICBhbmltYXRlPXtpc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJ31cclxuICAgID5cclxuICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19iYWNrZ3JvdW5kfSB2YXJpYW50cz17c2lkZWJhcn0+XHJcbiAgICAgICAgPG1lbnVDb250ZXh0LlByb3ZpZGVyIG1lbnU9e2ZhbHNlfT57Y2hpbGRyZW59PC9tZW51Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICA8TWVudVRvZ2dsZSB0b2dnbGU9eygpID0+IHRvZ2dsZU9wZW4oKX0gLz5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51QnV0dG9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9