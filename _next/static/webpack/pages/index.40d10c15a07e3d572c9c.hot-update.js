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

  var isOpen = useMenu().isOpen;
  var dispatch = useDispatchMenu();

  var toggleMenu = function toggleMenu() {
    dispatch({
      type: selectActions.TOGGLE_MENU,
      payload: !isOpen
    });
  };

  var navItems = _links__WEBPACK_IMPORTED_MODULE_2__["links"].map(function (_ref, i) {
    var title = _ref.title,
        href = _ref.href;
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
          lineNumber: 42,
          columnNumber: 13
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
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

_s(Navbar, "4IFp+8g06rd+hk1QE39drSUvBRk=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L25hdmJhci9OYXZiYXIuanMiXSwibmFtZXMiOlsidmFyaWFudHMiLCJhY3RpdmUiLCJzY2FsZSIsImluYWN0aXZlIiwiYm9yZGVyQWN0aXZlIiwid2lkdGgiLCJCb3JkZXJJbmFjdGl2ZSIsIk5hdmJhciIsInVzZVN0YXRlIiwic2V0QWN0aXZlIiwiaXNPcGVuIiwidXNlTWVudSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2hNZW51IiwidG9nZ2xlTWVudSIsInR5cGUiLCJzZWxlY3RBY3Rpb25zIiwiVE9HR0xFX01FTlUiLCJwYXlsb2FkIiwibmF2SXRlbXMiLCJsaW5rcyIsIm1hcCIsImkiLCJ0aXRsZSIsImhyZWYiLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlIiwic3R5bGVzIiwiTmF2YmFyX19mbGV4Q29udGFpbmVyX19saW5rc19fbGluayIsInVuZGVybGluZSIsIk5hdmJhclNwYWNlIiwiTmF2YmFyX19zb2NpYWxDb250YWluZXIiLCJOYXZiYXJfX3NvY2lhbENvbnRhaW5lcl9faXRlbXMiLCJzb2NpYWxMaW5rcyIsImljb24iLCJOYXZiYXJfX2ZsZXhDb250YWluZXIiLCJOYXZiYXJfX2ZsZXhDb250YWluZXJfX2xvZ28iLCJOYXZiYXJfX2ZsZXhDb250YWluZXJfX2xvZ29fX3RpdGxlIiwiTmF2YmFyX19mbGV4Q29udGFpbmVyX19sb2dvX19zdWJ0aXRsZSIsIk5hdmJhcl9fZmxleENvbnRhaW5lcl9fbGlua3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDZkMsUUFBTSxFQUFFO0FBQUNDLFNBQUssRUFBRTtBQUFSLEdBRE87QUFFZkMsVUFBUSxFQUFFO0FBQUNELFNBQUssRUFBRTtBQUFSLEdBRks7QUFHZkUsY0FBWSxFQUFFO0FBQUNDLFNBQUssRUFBRSxDQUFD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LGVBTUU7QUFBSSxxQkFBUyxFQUFFViwwREFBTSxDQUFDVyxxQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBY0UscUVBQUMsOERBQUQ7QUFBQSxpQ0FDRSxxRUFBQyxpRUFBRDtBQUFBLHNCQUFzQnBCO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGLGVBaUJFO0FBQUssbUJBQVMsRUFBRVMsMERBQU0sQ0FBQ1ksNEJBQXZCO0FBQUEsaUNBQ0UscUVBQUMsaUVBQUQ7QUFBQSxzQkFBc0JyQjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQXNDRDs7R0ExRVFaLE07O0tBQUFBLE07QUE0RU1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQwZDEwYzE1YTA3ZTNkNTcyYzljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2YmFyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHtsaW5rc30gZnJvbSAnLi9saW5rcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHttb3Rpb24sIEFuaW1hdGVTaGFyZWRMYXlvdXR9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgTWVudUJ1dHRvbiBmcm9tICcuLi9tZW51QnV0dG9uL01lbnVCdXR0b24nO1xyXG5pbXBvcnQge3NvY2lhbExpbmtzfSBmcm9tICcuL3NvY2lhbExpbmtzJztcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIGFjdGl2ZToge3NjYWxlOiAxLjN9LFxyXG4gIGluYWN0aXZlOiB7c2NhbGU6IDF9LFxyXG4gIGJvcmRlckFjdGl2ZToge3dpZHRoOiBbMCwgJzEwMCUnXX0sXHJcbiAgQm9yZGVySW5hY3RpdmU6IHt3aWR0aDogMH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBpc09wZW4gPSB1c2VNZW51KCkuaXNPcGVuO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2hNZW51KCk7XHJcbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHt0eXBlOiBzZWxlY3RBY3Rpb25zLlRPR0dMRV9NRU5VLCBwYXlsb2FkOiAhaXNPcGVufSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbmF2SXRlbXMgPSBsaW5rcy5tYXAoKHt0aXRsZSwgaHJlZn0sIGkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGtleT17aX0+XHJcbiAgICAgICAgPG1vdGlvbi5hXHJcbiAgICAgICAgICBhbmltYXRlPXthY3RpdmUgPT09IGkgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSd9XHJcbiAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgICAgICBocmVmPXtocmVmfVxyXG4gICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRBY3RpdmUoaSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZSk7XHJcbiAgICAgICAgICAgIHRvZ2dsZSgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhcl9fZmxleENvbnRhaW5lcl9fbGlua3NfX2xpbmt9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAge2FjdGl2ZSA9PT0gaSAmJiAoXHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudW5kZXJsaW5lfVxyXG4gICAgICAgICAgICAgIGxheW91dElkPXtzdHlsZXMudW5kZXJsaW5lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L21vdGlvbi5hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZiYXJTcGFjZX0+PC9kaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhcl9fc29jaWFsQ29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyX19zb2NpYWxDb250YWluZXJfX2l0ZW1zfT5cclxuICAgICAgICAgICAge3NvY2lhbExpbmtzLm1hcCgoe2hyZWYsIGljb259LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17aHJlZn0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgIHtpY29ufVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZiYXJfX2ZsZXhDb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZiYXJfX2ZsZXhDb250YWluZXJfX2xvZ299PlxyXG4gICAgICAgICAgICB7LyogPExpbmsgaHJlZj17Jy8nfT5cclxuICAgICAgICAgICAgICA8YT4gKi99XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5OYXZiYXJfX2ZsZXhDb250YWluZXJfX2xvZ29fX3RpdGxlfT5cclxuICAgICAgICAgICAgICA8c3Bhbj5pbWFnby48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5OYXZiYXJfX2ZsZXhDb250YWluZXJfX2xvZ29fX3N1YnRpdGxlfT5cclxuICAgICAgICAgICAgICBTdG9sYXJuaWFcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgey8qIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxNZW51QnV0dG9uPlxyXG4gICAgICAgICAgICA8QW5pbWF0ZVNoYXJlZExheW91dD57bmF2SXRlbXN9PC9BbmltYXRlU2hhcmVkTGF5b3V0PlxyXG4gICAgICAgICAgPC9NZW51QnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZiYXJfX2ZsZXhDb250YWluZXJfX2xpbmtzfT5cclxuICAgICAgICAgICAgPEFuaW1hdGVTaGFyZWRMYXlvdXQ+e25hdkl0ZW1zfTwvQW5pbWF0ZVNoYXJlZExheW91dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==