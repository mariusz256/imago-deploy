webpackHotUpdate_N_E("pages/index",{

/***/ "./component/gallery/Galerry.js":
/*!**************************************!*\
  !*** ./component/gallery/Galerry.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Galerry_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Galerry.module.scss */ "./component/gallery/Galerry.module.scss");
/* harmony import */ var _Galerry_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Galerry_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _galleryArr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./galleryArr */ "./component/gallery/galleryArr.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");

var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\gallery\\Galerry.js";





function Galerry() {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _Galerry_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: _galleryArr__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (src, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Galerry_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__wrapper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].img, {
          initial: {
            opacity: 0.9
          },
          whileHover: {
            scale: 1.1,
            opacity: 1 // x: [-5, 5, 5, -5, -5],
            // y: [-5, -5, 5, 5, -5],

          },
          whileTap: {
            scale: 0.9
          },
          className: _Galerry_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__wrapper__img,
          src: src,
          transition: {
            duration: 1,
            loop: Infinity,
            ease: 'linear'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, _this), ";"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

_c = Galerry;
/* harmony default export */ __webpack_exports__["default"] = (Galerry);

var _c;

$RefreshReg$(_c, "Galerry");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2dhbGxlcnkvR2FsZXJyeS5qcyJdLCJuYW1lcyI6WyJHYWxlcnJ5Iiwic3R5bGVzIiwiY29udGFpbmVyIiwiZ2FsbGVyeUFyciIsIm1hcCIsInNyYyIsImkiLCJjb250YWluZXJfX3dyYXBwZXIiLCJvcGFjaXR5Iiwic2NhbGUiLCJjb250YWluZXJfX3dyYXBwZXJfX2ltZyIsImR1cmF0aW9uIiwibG9vcCIsIkluZmluaXR5IiwiZWFzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUNqQixzQkFDRTtBQUFTLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ0MsU0FBM0I7QUFBQSxjQUNHQyxtREFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFDMUIsMEJBQ0U7QUFBSyxpQkFBUyxFQUFFTCwyREFBTSxDQUFDTSxrQkFBdkI7QUFBQSxnQ0FDRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxpQkFBTyxFQUFFO0FBQUNDLG1CQUFPLEVBQUU7QUFBVixXQURYO0FBRUUsb0JBQVUsRUFBRTtBQUNWQyxpQkFBSyxFQUFFLEdBREc7QUFFVkQsbUJBQU8sRUFBRSxDQUZDLENBR1Y7QUFDQTs7QUFKVSxXQUZkO0FBUUUsa0JBQVEsRUFBRTtBQUFDQyxpQkFBSyxFQUFFO0FBQVIsV0FSWjtBQVNFLG1CQUFTLEVBQUVSLDJEQUFNLENBQUNTLHVCQVRwQjtBQVVFLGFBQUcsRUFBRUwsR0FWUDtBQVdFLG9CQUFVLEVBQUU7QUFBQ00sb0JBQVEsRUFBRSxDQUFYO0FBQWNDLGdCQUFJLEVBQUVDLFFBQXBCO0FBQThCQyxnQkFBSSxFQUFFO0FBQXBDO0FBWGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWtCRCxLQW5CQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7S0F6QlFkLE87QUEyQk1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIwMGQ5NWNhNDExNDM5NjVjMjUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vR2FsZXJyeS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBnYWxsZXJ5QXJyIGZyb20gJy4vZ2FsbGVyeUFycic7XHJcbmltcG9ydCB7bW90aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmZ1bmN0aW9uIEdhbGVycnkoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIHtnYWxsZXJ5QXJyLm1hcCgoc3JjLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX193cmFwcGVyfT5cclxuICAgICAgICAgICAgPG1vdGlvbi5pbWdcclxuICAgICAgICAgICAgICBpbml0aWFsPXt7b3BhY2l0eTogMC45fX1cclxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICBzY2FsZTogMS4xLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgIC8vIHg6IFstNSwgNSwgNSwgLTUsIC01XSxcclxuICAgICAgICAgICAgICAgIC8vIHk6IFstNSwgLTUsIDUsIDUsIC01XSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHdoaWxlVGFwPXt7c2NhbGU6IDAuOX19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX193cmFwcGVyX19pbWd9XHJcbiAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAxLCBsb29wOiBJbmZpbml0eSwgZWFzZTogJ2xpbmVhcid9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYWxlcnJ5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9