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
    className: _menuButton_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    initial: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21lbnVCdXR0b24vTWVudUJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJzaWRlYmFyIiwib3BlbiIsImhlaWdodCIsImNsaXBQYXRoIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJyZXN0RGVsdGEiLCJjbG9zZWQiLCJkZWxheSIsImRhbXBpbmciLCJNZW51QnV0dG9uIiwiY2hpbGRyZW4iLCJpc09wZW4iLCJ1c2VNZW51IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaE1lbnUiLCJ0b2dnbGVNZW51Iiwic2VsZWN0QWN0aW9ucyIsIlRPR0dMRV9NRU5VIiwic3R5bGVzIiwiY29udGFpbmVyIiwiY29udGFpbmVyX19iYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUc7QUFDZEMsTUFBSSxFQUFFO0FBQUEsUUFBQ0MsTUFBRCx1RUFBVSxHQUFWO0FBQUEsV0FBbUI7QUFDdkJDLGNBQVEsbUJBQVlELE1BQU0sR0FBRyxDQUFULEdBQWEsR0FBekIsc0JBRGU7QUFFdkJFLGdCQUFVLEVBQUU7QUFDVkMsWUFBSSxFQUFFLFFBREk7QUFFVkMsaUJBQVMsRUFBRSxFQUZEO0FBR1ZDLGlCQUFTLEVBQUU7QUFIRDtBQUZXLEtBQW5CO0FBQUEsR0FEUTtBQVNkQyxRQUFNLEVBQUU7QUFDTkwsWUFBUSxFQUFFLDRCQURKO0FBR05DLGNBQVUsRUFBRTtBQUNWSyxXQUFLLEVBQUUsR0FERztBQUVWSixVQUFJLEVBQUUsUUFGSTtBQUdWQyxlQUFTLEVBQUUsR0FIRDtBQUlWSSxhQUFPLEVBQUU7QUFKQztBQUhOO0FBVE0sQ0FBaEI7O0FBcUJBLFNBQVNDLFVBQVQsT0FBZ0M7QUFBQTs7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDOUIsTUFBTUMsTUFBTSxHQUFHQyxnRkFBTyxHQUFHRCxNQUF6QjtBQUNBLE1BQU1FLFFBQVEsR0FBR0MsZ0ZBQWpCLENBRjhCLENBRzlCOztBQUNBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJGLFlBQVEsQ0FBQztBQUFDVixVQUFJLEVBQUVhLG1FQUFhLENBQUNDO0FBQXJCLEtBQUQsQ0FBUjtBQUNELEdBRkQsQ0FKOEIsQ0FROUI7OztBQUVBLHNCQUNFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsU0FEcEI7QUFFRSxXQUFPLEVBQUUsS0FGWDtBQUdFLFdBQU8sRUFBRVIsTUFBTSxHQUFHLE1BQUgsR0FBWSxRQUg3QjtBQUFBLDRCQUtFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLGVBQVMsRUFBRU8sOERBQU0sQ0FBQ0UscUJBQTlCO0FBQXFELGNBQVEsRUFBRXRCLE9BQS9EO0FBQUEsZ0JBQ0dZO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBUUUscUVBQUMsc0RBQUQ7QUFBWSxZQUFNLEVBQUVLO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztHQXRCUU4sVTtVQUNRRyx3RTs7O0tBRFJILFU7QUF3Qk1BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlmZTU2Y2FlMWI2MDIwY2U0MjU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vbWVudUJ1dHRvbi5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7bW90aW9uLCB1c2VDeWNsZX0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7TWVudVRvZ2dsZX0gZnJvbSAnLi9NZW51VG9nZ2xlJztcclxuaW1wb3J0IHt1c2VNZW51fSBmcm9tICcuLi8uLi9jb250ZXh0L21lbnVDb250ZXh0L21lbnVDb250ZXh0JztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaE1lbnV9IGZyb20gJy4vLi4vLi4vY29udGV4dC9tZW51Q29udGV4dC9tZW51Q29udGV4dCc7XHJcbmltcG9ydCB7c2VsZWN0QWN0aW9uc30gZnJvbSAnLi8uLi8uLi9yZWR1Y2Vycy9tZW51UmVkdWNlcic7XHJcblxyXG5jb25zdCBzaWRlYmFyID0ge1xyXG4gIG9wZW46IChoZWlnaHQgPSA4MDApID0+ICh7XHJcbiAgICBjbGlwUGF0aDogYGNpcmNsZSgke2hlaWdodCAqIDIgKyAyMDB9cHggYXQgMzIwcHggMzBweClgLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICB0eXBlOiAnc3ByaW5nJyxcclxuICAgICAgc3RpZmZuZXNzOiAyMCxcclxuICAgICAgcmVzdERlbHRhOiAyLFxyXG4gICAgfSxcclxuICB9KSxcclxuICBjbG9zZWQ6IHtcclxuICAgIGNsaXBQYXRoOiAnY2lyY2xlKDI1cHggYXQgMzIwcHggMzBweCknLFxyXG5cclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgZGVsYXk6IDAuMyxcclxuICAgICAgdHlwZTogJ3NwcmluZycsXHJcbiAgICAgIHN0aWZmbmVzczogNTAwLFxyXG4gICAgICBkYW1waW5nOiA0MCxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIE1lbnVCdXR0b24oe2NoaWxkcmVufSkge1xyXG4gIGNvbnN0IGlzT3BlbiA9IHVzZU1lbnUoKS5pc09wZW47XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaE1lbnU7XHJcbiAgLy8gY29uc29sZS5sb2cobWVudSk7XHJcbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHt0eXBlOiBzZWxlY3RBY3Rpb25zLlRPR0dMRV9NRU5VfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc3QgW2lzT3BlbiwgdG9nZ2xlT3Blbl0gPSB1c2VDeWNsZShtZW51LCB0cnVlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgaW5pdGlhbD17ZmFsc2V9XHJcbiAgICAgIGFuaW1hdGU9e2lzT3BlbiA/ICdvcGVuJyA6ICdjbG9zZWQnfVxyXG4gICAgPlxyXG4gICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2JhY2tncm91bmR9IHZhcmlhbnRzPXtzaWRlYmFyfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPE1lbnVUb2dnbGUgdG9nZ2xlPXt0b2dnbGVNZW51fSAvPlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVCdXR0b247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=