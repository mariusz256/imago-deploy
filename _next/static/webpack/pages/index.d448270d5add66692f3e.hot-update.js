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

  console.log(_Galerry_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _Galerry_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: _galleryArr__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (src, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Galerry_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__wrapper,
        id: "id-".concat(i),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].img, {
          initial: {
            opacity: 0.9
          },
          whileHover: {
            scale: 1.1,
            opacity: 1
          },
          whileTap: {
            scale: 0.9
          },
          className: _Galerry_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__wrapper__img,
          src: src,
          transition: {
            duration: 0.3,
            ease: 'linear'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2dhbGxlcnkvR2FsZXJyeS5qcyJdLCJuYW1lcyI6WyJHYWxlcnJ5IiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImNvbnRhaW5lciIsImdhbGxlcnlBcnIiLCJtYXAiLCJzcmMiLCJpIiwiY29udGFpbmVyX193cmFwcGVyIiwib3BhY2l0eSIsInNjYWxlIiwiY29udGFpbmVyX193cmFwcGVyX19pbWciLCJkdXJhdGlvbiIsImVhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFDakJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQywyREFBWjtBQUVBLHNCQUNFO0FBQVMsYUFBUyxFQUFFQSwyREFBTSxDQUFDQyxTQUEzQjtBQUFBLGNBQ0dDLG1EQUFVLENBQUNDLEdBQVgsQ0FBZSxVQUFDQyxHQUFELEVBQU1DLENBQU4sRUFBWTtBQUMxQiwwQkFDRTtBQUFhLGlCQUFTLEVBQUVMLDJEQUFNLENBQUNNLGtCQUEvQjtBQUFtRCxVQUFFLGVBQVFELENBQVIsQ0FBckQ7QUFBQSwrQkFDRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxpQkFBTyxFQUFFO0FBQUNFLG1CQUFPLEVBQUU7QUFBVixXQURYO0FBRUUsb0JBQVUsRUFBRTtBQUNWQyxpQkFBSyxFQUFFLEdBREc7QUFFVkQsbUJBQU8sRUFBRTtBQUZDLFdBRmQ7QUFNRSxrQkFBUSxFQUFFO0FBQUNDLGlCQUFLLEVBQUU7QUFBUixXQU5aO0FBT0UsbUJBQVMsRUFBRVIsMkRBQU0sQ0FBQ1MsdUJBUHBCO0FBUUUsYUFBRyxFQUFFTCxHQVJQO0FBU0Usb0JBQVUsRUFBRTtBQUFDTSxvQkFBUSxFQUFFLEdBQVg7QUFBZ0JDLGdCQUFJLEVBQUU7QUFBdEI7QUFUZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBVU4sQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFlRCxLQWhCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDs7S0F4QlFSLE87QUEwQk1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ0NDgyNzBkNWFkZDY2NjkyZjNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vR2FsZXJyeS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBnYWxsZXJ5QXJyIGZyb20gJy4vZ2FsbGVyeUFycic7XHJcbmltcG9ydCB7bW90aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmZ1bmN0aW9uIEdhbGVycnkoKSB7XHJcbiAgY29uc29sZS5sb2coc3R5bGVzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIHtnYWxsZXJ5QXJyLm1hcCgoc3JjLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX3dyYXBwZXJ9IGlkPXtgaWQtJHtpfWB9PlxyXG4gICAgICAgICAgICA8bW90aW9uLmltZ1xyXG4gICAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OiAwLjl9fVxyXG4gICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3tcclxuICAgICAgICAgICAgICAgIHNjYWxlOiAxLjEsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgd2hpbGVUYXA9e3tzY2FsZTogMC45fX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX3dyYXBwZXJfX2ltZ31cclxuICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDAuMywgZWFzZTogJ2xpbmVhcid9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FsZXJyeTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==