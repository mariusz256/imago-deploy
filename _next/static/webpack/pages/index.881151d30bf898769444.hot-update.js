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

  var toggleMenu = function toggleMenu() {
    dispatch({
      type: _reducers_menuReducer__WEBPACK_IMPORTED_MODULE_5__["selectActions"].TOGGLE_MENU
    });
  }; // const [isOpen, toggleOpen] = useCycle(menu, true);


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    className: _menuButton_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container // initial={false}
    ,
    animate: isOpen ? 'open' : 'closed',
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
      className: _menuButton_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container__background,
      variants: sidebar,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MenuToggle__WEBPACK_IMPORTED_MODULE_3__["MenuToggle"], {
      toggle: toggleMenu
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21lbnVCdXR0b24vTWVudUJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJzaWRlYmFyIiwib3BlbiIsImhlaWdodCIsImNsaXBQYXRoIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJyZXN0RGVsdGEiLCJjbG9zZWQiLCJkZWxheSIsImRhbXBpbmciLCJNZW51QnV0dG9uIiwiY2hpbGRyZW4iLCJpc09wZW4iLCJ1c2VNZW51IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaE1lbnUiLCJ0b2dnbGVNZW51Iiwic2VsZWN0QWN0aW9ucyIsIlRPR0dMRV9NRU5VIiwic3R5bGVzIiwiY29udGFpbmVyIiwiY29udGFpbmVyX19iYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUc7QUFDZEMsTUFBSSxFQUFFO0FBQUEsUUFBQ0MsTUFBRCx1RUFBVSxHQUFWO0FBQUEsV0FBbUI7QUFDdkJDLGNBQVEsbUJBQVlELE1BQU0sR0FBRyxDQUFULEdBQWEsR0FBekIsc0JBRGU7QUFFdkJFLGdCQUFVLEVBQUU7QUFDVkMsWUFBSSxFQUFFLFFBREk7QUFFVkMsaUJBQVMsRUFBRSxFQUZEO0FBR1ZDLGlCQUFTLEVBQUU7QUFIRDtBQUZXLEtBQW5CO0FBQUEsR0FEUTtBQVNkQyxRQUFNLEVBQUU7QUFDTkwsWUFBUSxFQUFFLDRCQURKO0FBR05DLGNBQVUsRUFBRTtBQUNWSyxXQUFLLEVBQUUsR0FERztBQUVWSixVQUFJLEVBQUUsUUFGSTtBQUdWQyxlQUFTLEVBQUUsR0FIRDtBQUlWSSxhQUFPLEVBQUU7QUFKQztBQUhOO0FBVE0sQ0FBaEI7O0FBcUJBLFNBQVNDLFVBQVQsT0FBZ0M7QUFBQTs7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDOUIsTUFBTUMsTUFBTSxHQUFHQyxnRkFBTyxHQUFHRCxNQUF6QjtBQUNBLE1BQU1FLFFBQVEsR0FBR0MsZ0ZBQWpCLENBRjhCLENBRzlCOztBQUNBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJGLFlBQVEsQ0FBQztBQUFDVixVQUFJLEVBQUVhLG1FQUFhLENBQUNDO0FBQXJCLEtBQUQsQ0FBUjtBQUNELEdBRkQsQ0FKOEIsQ0FROUI7OztBQUVBLHNCQUNFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsU0FEcEIsQ0FFRTtBQUZGO0FBR0UsV0FBTyxFQUFFUixNQUFNLEdBQUcsTUFBSCxHQUFZLFFBSDdCO0FBQUEsNEJBS0UscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksZUFBUyxFQUFFTyw4REFBTSxDQUFDRSxxQkFBOUI7QUFBcUQsY0FBUSxFQUFFdEIsT0FBL0Q7QUFBQSxnQkFDR1k7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFRRSxxRUFBQyxzREFBRDtBQUFZLFlBQU0sRUFBRUs7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0dBdEJRTixVO1VBQ1FHLHdFOzs7S0FEUkgsVTtBQXdCTUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODgxMTUxZDMwYmY4OTg3Njk0NDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9tZW51QnV0dG9uLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHttb3Rpb24sIHVzZUN5Y2xlfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHtNZW51VG9nZ2xlfSBmcm9tICcuL01lbnVUb2dnbGUnO1xyXG5pbXBvcnQge3VzZU1lbnV9IGZyb20gJy4uLy4uL2NvbnRleHQvbWVudUNvbnRleHQvbWVudUNvbnRleHQnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoTWVudX0gZnJvbSAnLi8uLi8uLi9jb250ZXh0L21lbnVDb250ZXh0L21lbnVDb250ZXh0JztcclxuaW1wb3J0IHtzZWxlY3RBY3Rpb25zfSBmcm9tICcuLy4uLy4uL3JlZHVjZXJzL21lbnVSZWR1Y2VyJztcclxuXHJcbmNvbnN0IHNpZGViYXIgPSB7XHJcbiAgb3BlbjogKGhlaWdodCA9IDgwMCkgPT4gKHtcclxuICAgIGNsaXBQYXRoOiBgY2lyY2xlKCR7aGVpZ2h0ICogMiArIDIwMH1weCBhdCAzMjBweCAzMHB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIHR5cGU6ICdzcHJpbmcnLFxyXG4gICAgICBzdGlmZm5lc3M6IDIwLFxyXG4gICAgICByZXN0RGVsdGE6IDIsXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4gIGNsb3NlZDoge1xyXG4gICAgY2xpcFBhdGg6ICdjaXJjbGUoMjVweCBhdCAzMjBweCAzMHB4KScsXHJcblxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkZWxheTogMC4zLFxyXG4gICAgICB0eXBlOiAnc3ByaW5nJyxcclxuICAgICAgc3RpZmZuZXNzOiA1MDAsXHJcbiAgICAgIGRhbXBpbmc6IDQwLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gTWVudUJ1dHRvbih7Y2hpbGRyZW59KSB7XHJcbiAgY29uc3QgaXNPcGVuID0gdXNlTWVudSgpLmlzT3BlbjtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoTWVudTtcclxuICAvLyBjb25zb2xlLmxvZyhtZW51KTtcclxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe3R5cGU6IHNlbGVjdEFjdGlvbnMuVE9HR0xFX01FTlV9KTtcclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBbaXNPcGVuLCB0b2dnbGVPcGVuXSA9IHVzZUN5Y2xlKG1lbnUsIHRydWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAvLyBpbml0aWFsPXtmYWxzZX1cclxuICAgICAgYW5pbWF0ZT17aXNPcGVuID8gJ29wZW4nIDogJ2Nsb3NlZCd9XHJcbiAgICA+XHJcbiAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fYmFja2dyb3VuZH0gdmFyaWFudHM9e3NpZGViYXJ9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICA8TWVudVRvZ2dsZSB0b2dnbGU9e3RvZ2dsZU1lbnV9IC8+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUJ1dHRvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==