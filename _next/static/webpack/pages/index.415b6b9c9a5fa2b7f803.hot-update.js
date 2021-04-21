webpackHotUpdate_N_E("pages/index",{

/***/ "./component/navbar/Navbar.js":
/*!************************************!*\
  !*** ./component/navbar/Navbar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.module.scss */ "./component/navbar/Navbar.module.scss");
/* harmony import */ var _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./links */ "./component/navbar/links.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _menuButton_MenuButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../menuButton/MenuButton */ "./component/menuButton/MenuButton.js");
/* harmony import */ var _socialLinks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./socialLinks */ "./component/navbar/socialLinks.js");
/* harmony import */ var _context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/menuContext/menuContext */ "./context/menuContext/menuContext.js");
/* harmony import */ var _reducers_menuReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../reducers/menuReducer */ "./reducers/menuReducer.js");



var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\navbar\\Navbar.js",
    _s = $RefreshSig$();











var variants = {
  active: {
    scale: 1.3
  },
  inactive: {
    scale: 1
  },
  borderActive: {
    width: [0, '100%']
  },
  BorderInactive: {
    width: 0
  }
};

function Navbar() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      active = _useState[0],
      setActive = _useState[1];

  var isOpen = Object(_context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_8__["useMenu"])().isOpen;
  var dispatch = Object(_context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_8__["useDispatchMenu"])();

  var toggleMenu = function toggleMenu() {
    dispatch({
      type: _reducers_menuReducer__WEBPACK_IMPORTED_MODULE_9__["selectActions"].TOGGLE_MENU,
      payload: !isOpen
    });
  };

  var navItems = _links__WEBPACK_IMPORTED_MODULE_2__["links"].map(function (_ref, i) {
    var title = _ref.title,
        href = _ref.href;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].a, {
      animate: active === i ? 'active' : 'inactive',
      variants: variants,
      href: href,
      onClick: function onClick() {
        setActive(i);
        toggleMenu();
      },
      className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navbar__flexContainer__links__link,
      children: [title, active === i && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
        className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.underline,
        layoutId: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.underline
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, _this)]
    }, i, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NavbarSpace
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navbar,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navbar__socialContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navbar__socialContainer__items,
          children: _socialLinks__WEBPACK_IMPORTED_MODULE_7__["socialLinks"].map(function (_ref2, i) {
            var href = _ref2.href,
                icon = _ref2.icon;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              target: "_blank",
              href: href,
              children: icon
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navbar__flexContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navbar__flexContainer__logo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navbar__flexContainer__logo__title,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "imago."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navbar__flexContainer__logo__subtitle,
            children: "Stolarnia"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_menuButton_MenuButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["AnimateSharedLayout"], {
            children: navItems
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navbar__flexContainer__links,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["AnimateSharedLayout"], {
            children: navItems
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Navbar, "4IFp+8g06rd+hk1QE39drSUvBRk=", false, function () {
  return [_context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_8__["useMenu"], _context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_8__["useDispatchMenu"]];
});

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L25hdmJhci9OYXZiYXIuanMiXSwibmFtZXMiOlsidmFyaWFudHMiLCJhY3RpdmUiLCJzY2FsZSIsImluYWN0aXZlIiwiYm9yZGVyQWN0aXZlIiwid2lkdGgiLCJCb3JkZXJJbmFjdGl2ZSIsIk5hdmJhciIsInVzZVN0YXRlIiwic2V0QWN0aXZlIiwiaXNPcGVuIiwidXNlTWVudSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2hNZW51IiwidG9nZ2xlTWVudSIsInR5cGUiLCJzZWxlY3RBY3Rpb25zIiwiVE9HR0xFX01FTlUiLCJwYXlsb2FkIiwibmF2SXRlbXMiLCJsaW5rcyIsIm1hcCIsImkiLCJ0aXRsZSIsImhyZWYiLCJzdHlsZXMiLCJOYXZiYXJfX2ZsZXhDb250YWluZXJfX2xpbmtzX19saW5rIiwidW5kZXJsaW5lIiwiTmF2YmFyU3BhY2UiLCJOYXZiYXJfX3NvY2lhbENvbnRhaW5lciIsIk5hdmJhcl9fc29jaWFsQ29udGFpbmVyX19pdGVtcyIsInNvY2lhbExpbmtzIiwiaWNvbiIsIk5hdmJhcl9fZmxleENvbnRhaW5lciIsIk5hdmJhcl9fZmxleENvbnRhaW5lcl9fbG9nbyIsIk5hdmJhcl9fZmxleENvbnRhaW5lcl9fbG9nb19fdGl0bGUiLCJOYXZiYXJfX2ZsZXhDb250YWluZXJfX2xvZ29fX3N1YnRpdGxlIiwiTmF2YmFyX19mbGV4Q29udGFpbmVyX19saW5rcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2ZDLFFBQU0sRUFBRTtBQUFDQyxTQUFLLEVBQUU7QUFBUixHQURPO0FBRWZDLFVBQVEsRUFBRTtBQUFDRCxTQUFLLEVBQUU7QUFBUixHQUZLO0FBR2ZFLGNBQVksRUFBRTtBQUFDQyxTQUFLLEVBQUUsQ0FBQyxDQUFELEVB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QUFBQSxpQ0FDRSxxRUFBQyxpRUFBRDtBQUFBLHNCQUFzQmpCO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGLGVBaUJFO0FBQUssbUJBQVMsRUFBRU0sMERBQU0sQ0FBQ1ksNEJBQXZCO0FBQUEsaUNBQ0UscUVBQUMsaUVBQUQ7QUFBQSxzQkFBc0JsQjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQXNDRDs7R0F2RVFaLE07VUFHUUksd0UsRUFDRUUsZ0Y7OztLQUpWTixNO0FBeUVNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MTViNmI5YzlhNWZhMmI3ZjgwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmJhci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7bGlua3N9IGZyb20gJy4vbGlua3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7bW90aW9uLCBBbmltYXRlU2hhcmVkTGF5b3V0fSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSAnLi4vbWVudUJ1dHRvbi9NZW51QnV0dG9uJztcclxuaW1wb3J0IHtzb2NpYWxMaW5rc30gZnJvbSAnLi9zb2NpYWxMaW5rcyc7XHJcbmltcG9ydCB7dXNlTWVudX0gZnJvbSAnLi4vLi4vY29udGV4dC9tZW51Q29udGV4dC9tZW51Q29udGV4dCc7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2hNZW51fSBmcm9tICcuLy4uLy4uL2NvbnRleHQvbWVudUNvbnRleHQvbWVudUNvbnRleHQnO1xyXG5pbXBvcnQge3NlbGVjdEFjdGlvbnN9IGZyb20gJy4vLi4vLi4vcmVkdWNlcnMvbWVudVJlZHVjZXInO1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgYWN0aXZlOiB7c2NhbGU6IDEuM30sXHJcbiAgaW5hY3RpdmU6IHtzY2FsZTogMX0sXHJcbiAgYm9yZGVyQWN0aXZlOiB7d2lkdGg6IFswLCAnMTAwJSddfSxcclxuICBCb3JkZXJJbmFjdGl2ZToge3dpZHRoOiAwfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGlzT3BlbiA9IHVzZU1lbnUoKS5pc09wZW47XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaE1lbnUoKTtcclxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe3R5cGU6IHNlbGVjdEFjdGlvbnMuVE9HR0xFX01FTlUsIHBheWxvYWQ6ICFpc09wZW59KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBuYXZJdGVtcyA9IGxpbmtzLm1hcCgoe3RpdGxlLCBocmVmfSwgaSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPG1vdGlvbi5hXHJcbiAgICAgICAgYW5pbWF0ZT17YWN0aXZlID09PSBpID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnfVxyXG4gICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgICBocmVmPXtocmVmfVxyXG4gICAgICAgIGtleT17aX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRBY3RpdmUoaSk7XHJcbiAgICAgICAgICB0b2dnbGVNZW51KCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5OYXZiYXJfX2ZsZXhDb250YWluZXJfX2xpbmtzX19saW5rfVxyXG4gICAgICA+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIHthY3RpdmUgPT09IGkgJiYgKFxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudW5kZXJsaW5lfVxyXG4gICAgICAgICAgICBsYXlvdXRJZD17c3R5bGVzLnVuZGVybGluZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9tb3Rpb24uYT5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhclNwYWNlfT48L2Rpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZiYXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyX19zb2NpYWxDb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZiYXJfX3NvY2lhbENvbnRhaW5lcl9faXRlbXN9PlxyXG4gICAgICAgICAgICB7c29jaWFsTGlua3MubWFwKCh7aHJlZiwgaWNvbn0sIGkpID0+IChcclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtocmVmfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAge2ljb259XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhcl9fZmxleENvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhcl9fZmxleENvbnRhaW5lcl9fbG9nb30+XHJcbiAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXsnLyd9PlxyXG4gICAgICAgICAgICAgIDxhPiAqL31cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhcl9fZmxleENvbnRhaW5lcl9fbG9nb19fdGl0bGV9PlxyXG4gICAgICAgICAgICAgIDxzcGFuPmltYWdvLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhcl9fZmxleENvbnRhaW5lcl9fbG9nb19fc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgIFN0b2xhcm5pYVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICB7LyogPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPE1lbnVCdXR0b24+XHJcbiAgICAgICAgICAgIDxBbmltYXRlU2hhcmVkTGF5b3V0PntuYXZJdGVtc308L0FuaW1hdGVTaGFyZWRMYXlvdXQ+XHJcbiAgICAgICAgICA8L01lbnVCdXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhcl9fZmxleENvbnRhaW5lcl9fbGlua3N9PlxyXG4gICAgICAgICAgICA8QW5pbWF0ZVNoYXJlZExheW91dD57bmF2SXRlbXN9PC9BbmltYXRlU2hhcmVkTGF5b3V0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9