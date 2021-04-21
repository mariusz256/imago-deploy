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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: href,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].a, {
        animate: active === i ? 'active' : 'inactive',
        variants: variants,
        href: href,
        onClick: function onClick() {
          setActive(i);
          console.log(active);
          toggleMenu();
        },
        className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navbar__flexContainer__links__link,
        children: [title, active === i && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
          className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.underline,
          layoutId: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.underline
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)
    }, i, false, {
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
      lineNumber: 57,
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
              lineNumber: 62,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
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
              lineNumber: 74,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navbar__flexContainer__logo__subtitle,
            children: "Stolarnia"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_menuButton_MenuButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navbar__flexContainer__links,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["AnimateSharedLayout"], {
            children: navItems
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L25hdmJhci9OYXZiYXIuanMiXSwibmFtZXMiOlsidmFyaWFudHMiLCJhY3RpdmUiLCJzY2FsZSIsImluYWN0aXZlIiwiYm9yZGVyQWN0aXZlIiwid2lkdGgiLCJCb3JkZXJJbmFjdGl2ZSIsIk5hdmJhciIsInVzZVN0YXRlIiwic2V0QWN0aXZlIiwiaXNPcGVuIiwidXNlTWVudSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2hNZW51IiwidG9nZ2xlTWVudSIsInR5cGUiLCJzZWxlY3RBY3Rpb25zIiwiVE9HR0xFX01FTlUiLCJwYXlsb2FkIiwibmF2SXRlbXMiLCJsaW5rcyIsIm1hcCIsImkiLCJ0aXRsZSIsImhyZWYiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiTmF2YmFyX19mbGV4Q29udGFpbmVyX19saW5rc19fbGluayIsInVuZGVybGluZSIsIk5hdmJhclNwYWNlIiwiTmF2YmFyX19zb2NpYWxDb250YWluZXIiLCJOYXZiYXJfX3NvY2lhbENvbnRhaW5lcl9faXRlbXMiLCJzb2NpYWxMaW5rcyIsImljb24iLCJOYXZiYXJfX2ZsZXhDb250YWluZXIiLCJOYXZiYXJfX2ZsZXhDb250YWluZXJfX2xvZ28iLCJOYXZiYXJfX2ZsZXhDb250YWluZXJfX2xvZ29fX3RpdGxlIiwiTmF2YmFyX19mbGV4Q29udGFpbmVyX19sb2dvX19zdWJ0aXRsZSIsIk5hdmJhcl9fZmxleENvbnRhaW5lcl9fbGlua3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRztBQUNmQyxRQUFNLEVBQUU7QUFBQ0MsU0FBSyxFQUFFO0FBQVIsR0FETztBQUVmQyxVQUFRLEVBQUU7QUFBQ0QsU0FBSyxFQUFFO0FBQVIsR0FGSztBQUdmRSxjQUFZLEVBQUU7QUFBQ0MsU0FBSyxF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QUFBQSxrQkFIRixlQU1FO0FBQUkscUJBQVMsRUFBRVYsMERBQU0sQ0FBQ1cscUNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQWNFLHFFQUFDLDhEQUFEO0FBQUEsaUNBQ0UscUVBQUMsaUVBQUQ7QUFBQSxzQkFBc0JuQjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRixlQWlCRTtBQUFLLG1CQUFTLEVBQUVRLDBEQUFNLENBQUNZLDRCQUF2QjtBQUFBLGlDQUNFLHFFQUFDLGlFQUFEO0FBQUEsc0JBQXNCcEI7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFzQ0Q7O0dBMUVRWixNO1VBR1FJLHdFLEVBQ0VFLGdGOzs7S0FKVk4sTTtBQTRFTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODhiZjQ1NmI3YjM5NTI4YWU4OTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZiYXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge2xpbmtzfSBmcm9tICcuL2xpbmtzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge21vdGlvbiwgQW5pbWF0ZVNoYXJlZExheW91dH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBNZW51QnV0dG9uIGZyb20gJy4uL21lbnVCdXR0b24vTWVudUJ1dHRvbic7XHJcbmltcG9ydCB7c29jaWFsTGlua3N9IGZyb20gJy4vc29jaWFsTGlua3MnO1xyXG5pbXBvcnQge3VzZU1lbnV9IGZyb20gJy4uLy4uL2NvbnRleHQvbWVudUNvbnRleHQvbWVudUNvbnRleHQnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoTWVudX0gZnJvbSAnLi8uLi8uLi9jb250ZXh0L21lbnVDb250ZXh0L21lbnVDb250ZXh0JztcclxuaW1wb3J0IHtzZWxlY3RBY3Rpb25zfSBmcm9tICcuLy4uLy4uL3JlZHVjZXJzL21lbnVSZWR1Y2VyJztcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIGFjdGl2ZToge3NjYWxlOiAxLjN9LFxyXG4gIGluYWN0aXZlOiB7c2NhbGU6IDF9LFxyXG4gIGJvcmRlckFjdGl2ZToge3dpZHRoOiBbMCwgJzEwMCUnXX0sXHJcbiAgQm9yZGVySW5hY3RpdmU6IHt3aWR0aDogMH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBpc09wZW4gPSB1c2VNZW51KCkuaXNPcGVuO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2hNZW51KCk7XHJcbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHt0eXBlOiBzZWxlY3RBY3Rpb25zLlRPR0dMRV9NRU5VLCBwYXlsb2FkOiAhaXNPcGVufSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbmF2SXRlbXMgPSBsaW5rcy5tYXAoKHt0aXRsZSwgaHJlZn0sIGkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGtleT17aX0+XHJcbiAgICAgICAgPG1vdGlvbi5hXHJcbiAgICAgICAgICBhbmltYXRlPXthY3RpdmUgPT09IGkgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSd9XHJcbiAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgICAgICBocmVmPXtocmVmfVxyXG4gICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRBY3RpdmUoaSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZSk7XHJcbiAgICAgICAgICAgIHRvZ2dsZU1lbnUoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5OYXZiYXJfX2ZsZXhDb250YWluZXJfX2xpbmtzX19saW5rfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIHthY3RpdmUgPT09IGkgJiYgKFxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnVuZGVybGluZX1cclxuICAgICAgICAgICAgICBsYXlvdXRJZD17c3R5bGVzLnVuZGVybGluZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9tb3Rpb24uYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyU3BhY2V9PjwvZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZiYXJfX3NvY2lhbENvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhcl9fc29jaWFsQ29udGFpbmVyX19pdGVtc30+XHJcbiAgICAgICAgICAgIHtzb2NpYWxMaW5rcy5tYXAoKHtocmVmLCBpY29ufSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2hyZWZ9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICB7aWNvbn1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyX19mbGV4Q29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyX19mbGV4Q29udGFpbmVyX19sb2dvfT5cclxuICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9eycvJ30+XHJcbiAgICAgICAgICAgICAgPGE+ICovfVxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyX19mbGV4Q29udGFpbmVyX19sb2dvX190aXRsZX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4+aW1hZ28uPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyX19mbGV4Q29udGFpbmVyX19sb2dvX19zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgU3RvbGFybmlhXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIHsvKiA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8TWVudUJ1dHRvbj5cclxuICAgICAgICAgICAgPEFuaW1hdGVTaGFyZWRMYXlvdXQ+e25hdkl0ZW1zfTwvQW5pbWF0ZVNoYXJlZExheW91dD5cclxuICAgICAgICAgIDwvTWVudUJ1dHRvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyX19mbGV4Q29udGFpbmVyX19saW5rc30+XHJcbiAgICAgICAgICAgIDxBbmltYXRlU2hhcmVkTGF5b3V0PntuYXZJdGVtc308L0FuaW1hdGVTaGFyZWRMYXlvdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=