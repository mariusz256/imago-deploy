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
  var isOpen = Object(_context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_4__["useMenu"])().isOpen; // console.log(menu);
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
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MenuToggle__WEBPACK_IMPORTED_MODULE_3__["MenuToggle"], {
      toggle: function toggle() {
        return toggleOpen();
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21lbnVCdXR0b24vTWVudUJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJzaWRlYmFyIiwib3BlbiIsImhlaWdodCIsImNsaXBQYXRoIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJyZXN0RGVsdGEiLCJjbG9zZWQiLCJkZWxheSIsImRhbXBpbmciLCJNZW51QnV0dG9uIiwiY2hpbGRyZW4iLCJpc09wZW4iLCJ1c2VNZW51Iiwic3R5bGVzIiwiY29udGFpbmVyIiwiY29udGFpbmVyX19iYWNrZ3JvdW5kIiwidG9nZ2xlT3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRztBQUNkQyxNQUFJLEVBQUU7QUFBQSxRQUFDQyxNQUFELHVFQUFVLEdBQVY7QUFBQSxXQUFtQjtBQUN2QkMsY0FBUSxtQkFBWUQsTUFBTSxHQUFHLENBQVQsR0FBYSxHQUF6QixzQkFEZTtBQUV2QkUsZ0JBQVUsRUFBRTtBQUNWQyxZQUFJLEVBQUUsUUFESTtBQUVWQyxpQkFBUyxFQUFFLEVBRkQ7QUFHVkMsaUJBQVMsRUFBRTtBQUhEO0FBRlcsS0FBbkI7QUFBQSxHQURRO0FBU2RDLFFBQU0sRUFBRTtBQUNOTCxZQUFRLEVBQUUsNEJBREo7QUFHTkMsY0FBVSxFQUFFO0FBQ1ZLLFdBQUssRUFBRSxHQURHO0FBRVZKLFVBQUksRUFBRSxRQUZJO0FBR1ZDLGVBQVMsRUFBRSxHQUhEO0FBSVZJLGFBQU8sRUFBRTtBQUpDO0FBSE47QUFUTSxDQUFoQjs7QUFxQkEsU0FBU0MsVUFBVCxPQUFnQztBQUFBOztBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVztBQUM5QixNQUFNQyxNQUFNLEdBQUdDLGdGQUFPLEdBQUdELE1BQXpCLENBRDhCLENBRTlCO0FBRUE7O0FBRUEsc0JBQ0UscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsYUFBUyxFQUFFRSw4REFBTSxDQUFDQyxTQURwQjtBQUVFLFdBQU8sRUFBRSxLQUZYO0FBR0UsV0FBTyxFQUFFSCxNQUFNLEdBQUcsTUFBSCxHQUFZLFFBSDdCO0FBQUEsNEJBS0UscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksZUFBUyxFQUFFRSw4REFBTSxDQUFDRSxxQkFBOUI7QUFBcUQsY0FBUSxFQUFFakIsT0FBL0Q7QUFBQSxnQkFDR1k7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFRRSxxRUFBQyxzREFBRDtBQUFZLFlBQU0sRUFBRTtBQUFBLGVBQU1NLFVBQVUsRUFBaEI7QUFBQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7R0FsQlFQLFU7VUFDUUcsd0U7OztLQURSSCxVO0FBb0JNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YmJjNzdkZjNkZWU3ODdmZWFmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL21lbnVCdXR0b24ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge21vdGlvbiwgdXNlQ3ljbGV9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQge01lbnVUb2dnbGV9IGZyb20gJy4vTWVudVRvZ2dsZSc7XHJcbmltcG9ydCB7dXNlTWVudX0gZnJvbSAnLi4vLi4vY29udGV4dC9tZW51Q29udGV4dC9tZW51Q29udGV4dCc7XHJcblxyXG5jb25zdCBzaWRlYmFyID0ge1xyXG4gIG9wZW46IChoZWlnaHQgPSA4MDApID0+ICh7XHJcbiAgICBjbGlwUGF0aDogYGNpcmNsZSgke2hlaWdodCAqIDIgKyAyMDB9cHggYXQgMzIwcHggMzBweClgLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICB0eXBlOiAnc3ByaW5nJyxcclxuICAgICAgc3RpZmZuZXNzOiAyMCxcclxuICAgICAgcmVzdERlbHRhOiAyLFxyXG4gICAgfSxcclxuICB9KSxcclxuICBjbG9zZWQ6IHtcclxuICAgIGNsaXBQYXRoOiAnY2lyY2xlKDI1cHggYXQgMzIwcHggMzBweCknLFxyXG5cclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgZGVsYXk6IDAuMyxcclxuICAgICAgdHlwZTogJ3NwcmluZycsXHJcbiAgICAgIHN0aWZmbmVzczogNTAwLFxyXG4gICAgICBkYW1waW5nOiA0MCxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIE1lbnVCdXR0b24oe2NoaWxkcmVufSkge1xyXG4gIGNvbnN0IGlzT3BlbiA9IHVzZU1lbnUoKS5pc09wZW47XHJcbiAgLy8gY29uc29sZS5sb2cobWVudSk7XHJcblxyXG4gIC8vIGNvbnN0IFtpc09wZW4sIHRvZ2dsZU9wZW5dID0gdXNlQ3ljbGUobWVudSwgdHJ1ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgIGluaXRpYWw9e2ZhbHNlfVxyXG4gICAgICBhbmltYXRlPXtpc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJ31cclxuICAgID5cclxuICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19iYWNrZ3JvdW5kfSB2YXJpYW50cz17c2lkZWJhcn0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgIDxNZW51VG9nZ2xlIHRvZ2dsZT17KCkgPT4gdG9nZ2xlT3BlbigpfSAvPlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVCdXR0b247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=