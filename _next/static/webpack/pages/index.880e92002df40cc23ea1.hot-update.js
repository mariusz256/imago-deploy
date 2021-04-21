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
/* harmony import */ var _context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_5__);



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
      children: children
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

/***/ }),

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
/* harmony import */ var _context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_8__);



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
    var toggle = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_8___default.a);
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

/***/ }),

/***/ "./context/menuContext/menuContext.js":
/*!********************************************!*\
  !*** ./context/menuContext/menuContext.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21lbnVCdXR0b24vTWVudUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L25hdmJhci9OYXZiYXIuanMiXSwibmFtZXMiOlsic2lkZWJhciIsIm9wZW4iLCJoZWlnaHQiLCJjbGlwUGF0aCIsInRyYW5zaXRpb24iLCJ0eXBlIiwic3RpZmZuZXNzIiwicmVzdERlbHRhIiwiY2xvc2VkIiwiZGVsYXkiLCJkYW1waW5nIiwiTWVudUJ1dHRvbiIsImNoaWxkcmVuIiwidXNlQ3ljbGUiLCJpc09wZW4iLCJ0b2dnbGVPcGVuIiwic3R5bGVzIiwiY29udGFpbmVyIiwiY29udGFpbmVyX19iYWNrZ3JvdW5kIiwidmFyaWFudHMiLCJhY3RpdmUiLCJzY2FsZSIsImluYWN0aXZlIiwiYm9yZGVyQWN0aXZlIiwid2lkdGgiLCJCb3JkZXJJbmFjdGl2ZSIsIk5hdmJhciIsInVzZVN0YXRlIiwic2V0QWN0aXZlIiwibmF2SXRlbXMiLCJsaW5rcyIsIm1hcCIsImkiLCJ0aXRsZSIsImhyZWYiLCJ0b2dnbGUiLCJ1c2VDb250ZXh0IiwibWVudUNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiTmF2YmFyX19mbGV4Q29udGFpbmVyX19saW5rc19fbGluayIsInVuZGVybGluZSIsIk5hdmJhclNwYWNlIiwiTmF2YmFyX19zb2NpYWxDb250YWluZXIiLCJOYXZiYXJfX3NvY2lhbENvbnRhaW5lcl9faXRlbXMiLCJzb2NpYWxMaW5rcyIsImljb24iLCJOYXZiYXJfX2ZsZXhDb250YWluZXIiLCJOYXZiYXJfX2ZsZXhDb250YWluZXJfX2xvZ28iLCJOYXZiYXJfX2ZsZXhDb250YWluZXJfX2xvZ29fX3RpdGxlIiwiTmF2YmFyX19mbGV4Q29udGFpbmVyX19sb2dvX19zdWJ0aXRsZSIsIk5hdmJhcl9fZmxleENvbnRhaW5lcl9fbGlua3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7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QUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFXRTtBQUFLLGlCQUFTLEVBQUVoQiwwREFBTSxDQUFDK0IscUJBQXZCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFL0IsMERBQU0sQ0FBQ2dDLDJCQUF2QjtBQUFBLGtDQUdFO0FBQUkscUJBQVMsRUFBRWhDLDBEQUFNLENBQUNpQyxrQ0FBdEI7QUFBQSxtQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEYsZUFNRTtBQUFJLHFCQUFTLEVBQUVqQywwREFBTSxDQUFDa0MscUNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQWNFLHFFQUFDLDhEQUFEO0FBQUEsaUNBQ0UscUVBQUMsaUVBQUQ7QUFBQSxzQkFBc0JyQjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRixlQWlCRTtBQUFLLG1CQUFTLEVBQUViLDBEQUFNLENBQUNtQyw0QkFBdkI7QUFBQSxpQ0FDRSxxRUFBQyxpRUFBRDtBQUFBLHNCQUFzQnRCO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBc0NEOztJQXZFUUgsTTs7S0FBQUEsTTtBQXlFTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODgwZTkyMDAyZGY0MGNjMjNlYTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9tZW51QnV0dG9uLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHttb3Rpb24sIHVzZUN5Y2xlfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHtNZW51VG9nZ2xlfSBmcm9tICcuL01lbnVUb2dnbGUnO1xyXG5pbXBvcnQgbWVudUNvbnRleHQgZnJvbSAnLi8uLi8uLi9jb250ZXh0L21lbnVDb250ZXh0L21lbnVDb250ZXh0JztcclxuXHJcbmNvbnN0IHNpZGViYXIgPSB7XHJcbiAgb3BlbjogKGhlaWdodCA9IDgwMCkgPT4gKHtcclxuICAgIGNsaXBQYXRoOiBgY2lyY2xlKCR7aGVpZ2h0ICogMiArIDIwMH1weCBhdCAzMjBweCAzMHB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIHR5cGU6ICdzcHJpbmcnLFxyXG4gICAgICBzdGlmZm5lc3M6IDIwLFxyXG4gICAgICByZXN0RGVsdGE6IDIsXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4gIGNsb3NlZDoge1xyXG4gICAgY2xpcFBhdGg6ICdjaXJjbGUoMjVweCBhdCAzMjBweCAzMHB4KScsXHJcblxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkZWxheTogMC4zLFxyXG4gICAgICB0eXBlOiAnc3ByaW5nJyxcclxuICAgICAgc3RpZmZuZXNzOiA1MDAsXHJcbiAgICAgIGRhbXBpbmc6IDQwLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gTWVudUJ1dHRvbih7Y2hpbGRyZW59KSB7XHJcbiAgY29uc3QgW2lzT3BlbiwgdG9nZ2xlT3Blbl0gPSB1c2VDeWNsZShmYWxzZSwgdHJ1ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgIGluaXRpYWw9e2ZhbHNlfVxyXG4gICAgICBhbmltYXRlPXtpc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJ31cclxuICAgID5cclxuICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19iYWNrZ3JvdW5kfSB2YXJpYW50cz17c2lkZWJhcn0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgIDxNZW51VG9nZ2xlIHRvZ2dsZT17KCkgPT4gdG9nZ2xlT3BlbigpfSAvPlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVCdXR0b247XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZiYXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge2xpbmtzfSBmcm9tICcuL2xpbmtzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge21vdGlvbiwgQW5pbWF0ZVNoYXJlZExheW91dH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBNZW51QnV0dG9uIGZyb20gJy4uL21lbnVCdXR0b24vTWVudUJ1dHRvbic7XHJcbmltcG9ydCB7c29jaWFsTGlua3N9IGZyb20gJy4vc29jaWFsTGlua3MnO1xyXG5pbXBvcnQgbWVudUNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9tZW51Q29udGV4dC9tZW51Q29udGV4dCc7XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICBhY3RpdmU6IHtzY2FsZTogMS4zfSxcclxuICBpbmFjdGl2ZToge3NjYWxlOiAxfSxcclxuICBib3JkZXJBY3RpdmU6IHt3aWR0aDogWzAsICcxMDAlJ119LFxyXG4gIEJvcmRlckluYWN0aXZlOiB7d2lkdGg6IDB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgbmF2SXRlbXMgPSBsaW5rcy5tYXAoKHt0aXRsZSwgaHJlZn0sIGkpID0+IHtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IHVzZUNvbnRleHQobWVudUNvbnRleHQpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHRvZ2dsZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGluayBocmVmPXtocmVmfSBrZXk9e2l9PlxyXG4gICAgICAgIDxtb3Rpb24uYVxyXG4gICAgICAgICAgYW5pbWF0ZT17YWN0aXZlID09PSBpID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnfVxyXG4gICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0QWN0aXZlKGkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmUpO1xyXG4gICAgICAgICAgICB0b2dnbGUoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5OYXZiYXJfX2ZsZXhDb250YWluZXJfX2xpbmtzX19saW5rfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIHthY3RpdmUgPT09IGkgJiYgKFxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnVuZGVybGluZX1cclxuICAgICAgICAgICAgICBsYXlvdXRJZD17c3R5bGVzLnVuZGVybGluZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9tb3Rpb24uYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyU3BhY2V9PjwvZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZiYXJfX3NvY2lhbENvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhcl9fc29jaWFsQ29udGFpbmVyX19pdGVtc30+XHJcbiAgICAgICAgICAgIHtzb2NpYWxMaW5rcy5tYXAoKHtocmVmLCBpY29ufSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2hyZWZ9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICB7aWNvbn1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyX19mbGV4Q29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyX19mbGV4Q29udGFpbmVyX19sb2dvfT5cclxuICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9eycvJ30+XHJcbiAgICAgICAgICAgICAgPGE+ICovfVxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyX19mbGV4Q29udGFpbmVyX19sb2dvX190aXRsZX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4+aW1hZ28uPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyX19mbGV4Q29udGFpbmVyX19sb2dvX19zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgU3RvbGFybmlhXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIHsvKiA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8TWVudUJ1dHRvbj5cclxuICAgICAgICAgICAgPEFuaW1hdGVTaGFyZWRMYXlvdXQ+e25hdkl0ZW1zfTwvQW5pbWF0ZVNoYXJlZExheW91dD5cclxuICAgICAgICAgIDwvTWVudUJ1dHRvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2YmFyX19mbGV4Q29udGFpbmVyX19saW5rc30+XHJcbiAgICAgICAgICAgIDxBbmltYXRlU2hhcmVkTGF5b3V0PntuYXZJdGVtc308L0FuaW1hdGVTaGFyZWRMYXlvdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=