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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: href,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].a, {
        animate: active === i ? 'active' : 'inactive',
        variants: variants,
        href: href,
        onClick: function onClick() {
          setActive(i);
          console.log(active);
        },
        className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navbar__flexContainer__links__link,
        children: [title, active === i && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
          className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.underline,
          layoutId: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.underline
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this);
  }, "Y6FuICYJzDb6TlHGi2E9xySoafE="));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NavbarSpace
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
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
              lineNumber: 55,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
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
              lineNumber: 67,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navbar__flexContainer__logo__subtitle,
            children: "Stolarnia"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_menuButton_MenuButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["AnimateSharedLayout"], {
            children: navItems
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navbar__flexContainer__links,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["AnimateSharedLayout"], {
            children: navItems
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L25hdmJhci9OYXZiYXIuanMiXSwibmFtZXMiOlsidmFyaWFudHMiLCJhY3RpdmUiLCJzY2FsZSIsImluYWN0aXZlIiwiYm9yZGVyQWN0aXZlIiwid2lkdGgiLCJCb3JkZXJJbmFjdGl2ZSIsIk5hdmJhciIsInVzZVN0YXRlIiwic2V0QWN0aXZlIiwibmF2SXRlbXMiLCJsaW5rcyIsIm1hcCIsImkiLCJ0aXRsZSIsImhyZWYiLCJ0b2dnbGUiLCJ1c2VDb250ZXh0IiwibWVudUNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiTmF2YmFyX19mbGV4Q29udGFpbmVyX19saW5rc19fbGluayIsInVuZGVybGluZSIsIk5hdmJhclNwYWNlIiwiTmF2YmFyX19zb2NpYWxDb250YWluZXIiLCJOYXZiYXJfX3NvY2lhbENvbnRhaW5lcl9faXRlbXMiLCJzb2NpYWxMaW5rcyIsImljb24iLCJOYXZiYXJfX2ZsZXhDb250YWluZXIiLCJOYXZiYXJfX2ZsZXhDb250YWluZXJfX2xvZ28iLCJOYXZiYXJfX2ZsZXhDb250YWluZXJfX2xvZ29fX3RpdGxlIiwiTmF2YmFyX19mbGV4Q29udGFpbmVyX19sb2dvX19zdWJ0aXRsZSIsIk5hdmJhcl9fZmxleENvbnRhaW5lcl9fbGlua3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDZkMsUUFBTSxFQUFFO0FBQUNDLFNBQUssRUFBRTtBQUFSLEdBRE87QUFFZkMsVUFBUSxFQUFFO0FBQUNELFNBQUssRUFBRTtBQUFSLEdBRks7QUFHZkUsY0FBWSxFQUFFO0FBQUNDLFNBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxNQUFKO0FBQVIsR0FIQztBQUlmQyxnQkFBYyxFQUFFO0FBQUNELFNBQUssRUFBRTtBQUFSO0FBSkQsQ0FBakI7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LENBQUNZLDRCQUF2QjtBQUFBLGlDQUNFLHFFQUFDLGlFQUFEO0FBQUEsc0JBQXNCdkI7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFzQ0Q7O0lBckVRSCxNOztLQUFBQSxNO0FBdUVNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNGUzZjU0YTAzZjgyMDYzMjdiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmJhci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7bGlua3N9IGZyb20gJy4vbGlua3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7bW90aW9uLCBBbmltYXRlU2hhcmVkTGF5b3V0fSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSAnLi4vbWVudUJ1dHRvbi9NZW51QnV0dG9uJztcclxuaW1wb3J0IHtzb2NpYWxMaW5rc30gZnJvbSAnLi9zb2NpYWxMaW5rcyc7XHJcbmltcG9ydCBtZW51Q29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21lbnVDb250ZXh0L21lbnVDb250ZXh0JztcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIGFjdGl2ZToge3NjYWxlOiAxLjN9LFxyXG4gIGluYWN0aXZlOiB7c2NhbGU6IDF9LFxyXG4gIGJvcmRlckFjdGl2ZToge3dpZHRoOiBbMCwgJzEwMCUnXX0sXHJcbiAgQm9yZGVySW5hY3RpdmU6IHt3aWR0aDogMH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBuYXZJdGVtcyA9IGxpbmtzLm1hcCgoe3RpdGxlLCBocmVmfSwgaSkgPT4ge1xyXG4gICAgY29uc3QgdG9nZ2xlID0gdXNlQ29udGV4dChtZW51Q29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExpbmsgaHJlZj17aHJlZn0ga2V5PXtpfT5cclxuICAgICAgICA8bW90aW9uLmFcclxuICAgICAgICAgIGFuaW1hdGU9e2FjdGl2ZSA9PT0gaSA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJ31cclxuICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZShpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aXZlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5OYXZiYXJfX2ZsZXhDb250YWluZXJfX2xpbmtzX19saW5rfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIHthY3RpdmUgPT09IGkgJiYgKFxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnVuZGVybGluZX1cclxuICAgICAgICAgICAgICBsYXlvdXRJZD17c3R5bGVzLnVuZGVybGluZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9tb3Rpb24uYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyU3BhY2V9PjwvZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZiYXJfX3NvY2lhbENvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhcl9fc29jaWFsQ29udGFpbmVyX19pdGVtc30+XHJcbiAgICAgICAgICAgIHtzb2NpYWxMaW5rcy5tYXAoKHtocmVmLCBpY29ufSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2hyZWZ9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICB7aWNvbn1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyX19mbGV4Q29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyX19mbGV4Q29udGFpbmVyX19sb2dvfT5cclxuICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9eycvJ30+XHJcbiAgICAgICAgICAgICAgPGE+ICovfVxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyX19mbGV4Q29udGFpbmVyX19sb2dvX190aXRsZX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4+aW1hZ28uPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyX19mbGV4Q29udGFpbmVyX19sb2dvX19zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgU3RvbGFybmlhXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIHsvKiA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8TWVudUJ1dHRvbj5cclxuICAgICAgICAgICAgPEFuaW1hdGVTaGFyZWRMYXlvdXQ+e25hdkl0ZW1zfTwvQW5pbWF0ZVNoYXJlZExheW91dD5cclxuICAgICAgICAgIDwvTWVudUJ1dHRvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyX19mbGV4Q29udGFpbmVyX19saW5rc30+XHJcbiAgICAgICAgICAgIDxBbmltYXRlU2hhcmVkTGF5b3V0PntuYXZJdGVtc308L0FuaW1hdGVTaGFyZWRMYXlvdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=