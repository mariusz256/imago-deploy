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



var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\navbar\\Navbar.js",
    _s2 = $RefreshSig$();









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
  _s2();

  var _this = this,
      _s = $RefreshSig$();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      active = _useState[0],
      setActive = _useState[1];

  var navItems = _links__WEBPACK_IMPORTED_MODULE_2__["links"].map(_s(function (_ref, i) {
    _s();

    var title = _ref.title,
        href = _ref.href;
    var toggle = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_8__["default"]);
    console.log(toggle);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: href,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].a, {
        animate: active === i ? 'active' : 'inactive',
        variants: variants,
        href: href,
        onClick: function onClick() {
          setActive(i);
          console.log(active);
          toggle();
        },
        className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navbar__flexContainer__links__link,
        children: [title, active === i && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
          className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.underline,
          layoutId: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.underline
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this);
  }, "Y6FuICYJzDb6TlHGi2E9xySoafE="));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NavbarSpace
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
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
              lineNumber: 57,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
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
              lineNumber: 69,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navbar__flexContainer__logo__subtitle,
            children: "Stolarnia"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_menuButton_MenuButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["AnimateSharedLayout"], {
            children: navItems
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navbar__flexContainer__links,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["AnimateSharedLayout"], {
            children: navItems
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s2(Navbar, "LYMHw6xE17pbh6ai9qaw76OM0Ms=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L25hdmJhci9OYXZiYXIuanMiXSwibmFtZXMiOlsidmFyaWFudHMiLCJhY3RpdmUiLCJzY2FsZSIsImluYWN0aXZlIiwiYm9yZGVyQWN0aXZlIiwid2lkdGgiLCJCb3JkZXJJbmFjdGl2ZSIsIk5hdmJhciIsInVzZVN0YXRlIiwic2V0QWN0aXZlIiwibmF2SXRlbXMiLCJsaW5rcyIsIm1hcCIsImkiLCJ0aXRsZSIsImhyZWYiLCJ0b2dnbGUiLCJ1c2VDb250ZXh0IiwibWVudUNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiTmF2YmFyX19mbGV4Q29udGFpbmVyX19saW5rc19fbGluayIsInVuZGVybGluZSIsIk5hdmJhclNwYWNlIiwiTmF2YmFyX19zb2NpYWxDb250YWluZXIiLCJOYXZiYXJfX3NvY2lhbENvbnRhaW5lcl9faXRlbXMiLCJzb2NpYWxMaW5rcyIsImljb24iLCJOYXZiYXJfX2ZsZXhDb250YWluZXIiLCJOYXZiYXJfX2ZsZXhDb250YWluZXJfX2xvZ28iLCJOYXZiYXJfX2ZsZXhDb250YWluZXJfX2xvZ29fX3RpdGxlIiwiTmF2YmFyX19mbGV4Q29udGFpbmVyX19sb2dvX19zdWJ0aXRsZSIsIk5hdmJhcl9fZmxleENvbnRhaW5lcl9fbGlua3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDZkMsUUFBTSxFQUFFO0FBQUNDLFNBQUssRUFBRTtBQUFSLEdBRE87QUFFZkMsVUFBUSxFQUFFO0FBQUNELFNBQUssRUFBRTtBQUFSLEdBRks7QUFHZkUsY0FBWSxFQUFFO0FBQUNDLFNBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxNQUFKO0FBQVIsR0FIQztBQUlmQyxnQkFBYyxFQUFFO0FBQUNELFNBQUssRUFBRTtBQUFSO0FBSkQsQ0FBakI7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QUFBQTtBQUFBLGdCQWRGLGVBaUJFO0FBQUssbUJBQVMsRUFBRVcsMERBQU0sQ0FBQ1ksNEJBQXZCO0FBQUEsaUNBQ0UscUVBQUMsaUVBQUQ7QUFBQSxzQkFBc0J2QjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQXNDRDs7SUF2RVFILE07O0tBQUFBLE07QUF5RU1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM1ZTdiMDIxOTQxZDg5M2I0MzkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2YmFyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHtsaW5rc30gZnJvbSAnLi9saW5rcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHttb3Rpb24sIEFuaW1hdGVTaGFyZWRMYXlvdXR9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgTWVudUJ1dHRvbiBmcm9tICcuLi9tZW51QnV0dG9uL01lbnVCdXR0b24nO1xyXG5pbXBvcnQge3NvY2lhbExpbmtzfSBmcm9tICcuL3NvY2lhbExpbmtzJztcclxuaW1wb3J0IG1lbnVDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWVudUNvbnRleHQvbWVudUNvbnRleHQnO1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgYWN0aXZlOiB7c2NhbGU6IDEuM30sXHJcbiAgaW5hY3RpdmU6IHtzY2FsZTogMX0sXHJcbiAgYm9yZGVyQWN0aXZlOiB7d2lkdGg6IFswLCAnMTAwJSddfSxcclxuICBCb3JkZXJJbmFjdGl2ZToge3dpZHRoOiAwfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IG5hdkl0ZW1zID0gbGlua3MubWFwKCh7dGl0bGUsIGhyZWZ9LCBpKSA9PiB7XHJcbiAgICBjb25zdCB0b2dnbGUgPSB1c2VDb250ZXh0KG1lbnVDb250ZXh0KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0b2dnbGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExpbmsgaHJlZj17aHJlZn0ga2V5PXtpfT5cclxuICAgICAgICA8bW90aW9uLmFcclxuICAgICAgICAgIGFuaW1hdGU9e2FjdGl2ZSA9PT0gaSA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJ31cclxuICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZShpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aXZlKTtcclxuICAgICAgICAgICAgdG9nZ2xlKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyX19mbGV4Q29udGFpbmVyX19saW5rc19fbGlua31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICB7YWN0aXZlID09PSBpICYmIChcclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51bmRlcmxpbmV9XHJcbiAgICAgICAgICAgICAgbGF5b3V0SWQ9e3N0eWxlcy51bmRlcmxpbmV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvbW90aW9uLmE+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhclNwYWNlfT48L2Rpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZiYXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyX19zb2NpYWxDb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZiYXJfX3NvY2lhbENvbnRhaW5lcl9faXRlbXN9PlxyXG4gICAgICAgICAgICB7c29jaWFsTGlua3MubWFwKCh7aHJlZiwgaWNvbn0sIGkpID0+IChcclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtocmVmfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAge2ljb259XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhcl9fZmxleENvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhcl9fZmxleENvbnRhaW5lcl9fbG9nb30+XHJcbiAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXsnLyd9PlxyXG4gICAgICAgICAgICAgIDxhPiAqL31cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhcl9fZmxleENvbnRhaW5lcl9fbG9nb19fdGl0bGV9PlxyXG4gICAgICAgICAgICAgIDxzcGFuPmltYWdvLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhcl9fZmxleENvbnRhaW5lcl9fbG9nb19fc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgIFN0b2xhcm5pYVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICB7LyogPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPE1lbnVCdXR0b24+XHJcbiAgICAgICAgICAgIDxBbmltYXRlU2hhcmVkTGF5b3V0PntuYXZJdGVtc308L0FuaW1hdGVTaGFyZWRMYXlvdXQ+XHJcbiAgICAgICAgICA8L01lbnVCdXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhcl9fZmxleENvbnRhaW5lcl9fbGlua3N9PlxyXG4gICAgICAgICAgICA8QW5pbWF0ZVNoYXJlZExheW91dD57bmF2SXRlbXN9PC9BbmltYXRlU2hhcmVkTGF5b3V0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9