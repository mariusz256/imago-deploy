webpackHotUpdate_N_E("pages/index",{

/***/ "./component/footer/Footer.js":
/*!************************************!*\
  !*** ./component/footer/Footer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.module.scss */ "./component/footer/Footer.module.scss");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _navbar_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/Navbar.module.scss */ "./component/navbar/Navbar.module.scss");
/* harmony import */ var _navbar_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_navbar_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navbar_socialLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../navbar/socialLinks */ "./component/navbar/socialLinks.js");

var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\footer\\Footer.js";





function Footer() {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__socialContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer__socialContainer__items,
        children: [function () {
          var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _navbar_socialLinks__WEBPACK_IMPORTED_MODULE_4__["socialLinks"][0],
              href = _ref.href,
              icon = _ref.icon;

          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            target: "_blank",
            href: href,
            children: icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, _this);
        }, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "imago"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), _navbar_socialLinks__WEBPACK_IMPORTED_MODULE_4__["socialLinks"].map(function (_ref2, i) {
          var href = _ref2.href,
              icon = _ref2.icon;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            target: "_blank",
            href: href,
            children: icon
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2Zvb3Rlci9Gb290ZXIuanMiXSwibmFtZXMiOlsiRm9vdGVyIiwic3R5bGVzIiwiZm9vdGVyIiwiZm9vdGVyX19zb2NpYWxDb250YWluZXIiLCJmb290ZXJfX3NvY2lhbENvbnRhaW5lcl9faXRlbXMiLCJzb2NpYWxMaW5rcyIsImhyZWYiLCJpY29uIiwibWFwIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDaEIsc0JBQ0U7QUFBUSxhQUFTLEVBQUVDLDBEQUFNLENBQUNDLE1BQTFCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVELDBEQUFNLENBQUNFLHVCQUF2QjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUYsMERBQU0sQ0FBQ0csOEJBQXZCO0FBQUEsbUJBQ0c7QUFBQSx5RkFBZ0JDLCtEQUFXLENBQUMsQ0FBRCxDQUEzQjtBQUFBLGNBQUVDLElBQUYsUUFBRUEsSUFBRjtBQUFBLGNBQVFDLElBQVIsUUFBUUEsSUFBUjs7QUFBQSw4QkFDQztBQUFHLGtCQUFNLEVBQUMsUUFBVjtBQUFtQixnQkFBSSxFQUFFRCxJQUF6QjtBQUFBLHNCQUNHQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQ7QUFBQSxTQURILGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsRUFPR0YsK0RBQVcsQ0FBQ0csR0FBWixDQUFnQixpQkFBZUMsQ0FBZjtBQUFBLGNBQUVILElBQUYsU0FBRUEsSUFBRjtBQUFBLGNBQVFDLElBQVIsU0FBUUEsSUFBUjtBQUFBLDhCQUNmO0FBQUcsa0JBQU0sRUFBQyxRQUFWO0FBQW1CLGdCQUFJLEVBQUVELElBQXpCO0FBQUEsc0JBQ0dDO0FBREgsYUFBb0NFLENBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGU7QUFBQSxTQUFoQixDQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0tBcEJRVCxNO0FBc0JNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wOGVlYmFiM2RhMjhhZDQwNDIxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb3Rlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBzb2NpYWxTdHlsZXMgZnJvbSAnLi4vbmF2YmFyL05hdmJhci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7c29jaWFsTGlua3N9IGZyb20gJy4vLi4vbmF2YmFyL3NvY2lhbExpbmtzJztcclxuXHJcbmZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcl9fc29jaWFsQ29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcl9fc29jaWFsQ29udGFpbmVyX19pdGVtc30+XHJcbiAgICAgICAgICB7KHtocmVmLCBpY29ufSA9IHNvY2lhbExpbmtzWzBdKSA9PiAoXHJcbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICAgIHtpY29ufVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGgyPmltYWdvPC9oMj5cclxuICAgICAgICAgIHtzb2NpYWxMaW5rcy5tYXAoKHtocmVmLCBpY29ufSwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtocmVmfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIHtpY29ufVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=