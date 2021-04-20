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
            opacity: 1,
            x: [-5, 5, 5, -5, -5],
            y: [-5, -5, 5, 5, -5]
          },
          whileTap: {
            scale: 0.9
          },
          className: _Galerry_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__wrapper__img,
          src: src,
          transition: {
            opacity: {
              duration: 0.3,
              ease: 'linear'
            },
            x: {
              duration: 1.3,
              loop: Infinity,
              ease: 'linear'
            },
            y: {
              duration: 1.3,
              loop: Infinity,
              ease: 'linear'
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2dhbGxlcnkvR2FsZXJyeS5qcyJdLCJuYW1lcyI6WyJHYWxlcnJ5Iiwic3R5bGVzIiwiY29udGFpbmVyIiwiZ2FsbGVyeUFyciIsIm1hcCIsInNyYyIsImkiLCJjb250YWluZXJfX3dyYXBwZXIiLCJvcGFjaXR5Iiwic2NhbGUiLCJ4IiwieSIsImNvbnRhaW5lcl9fd3JhcHBlcl9faW1nIiwiZHVyYXRpb24iLCJlYXNlIiwibG9vcCIsIkluZmluaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQ2pCLHNCQUNFO0FBQVMsYUFBUyxFQUFFQywyREFBTSxDQUFDQyxTQUEzQjtBQUFBLGNBQ0dDLG1EQUFVLENBQUNDLEdBQVgsQ0FBZSxVQUFDQyxHQUFELEVBQU1DLENBQU4sRUFBWTtBQUMxQiwwQkFDRTtBQUFLLGlCQUFTLEVBQUVMLDJEQUFNLENBQUNNLGtCQUF2QjtBQUFBLGdDQUNFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLGlCQUFPLEVBQUU7QUFBQ0MsbUJBQU8sRUFBRTtBQUFWLFdBRFg7QUFFRSxvQkFBVSxFQUFFO0FBQ1ZDLGlCQUFLLEVBQUUsR0FERztBQUVWRCxtQkFBTyxFQUFFLENBRkM7QUFHVkUsYUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFDLENBQVosRUFBZSxDQUFDLENBQWhCLENBSE87QUFJVkMsYUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBQyxDQUFOLEVBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFDLENBQWhCO0FBSk8sV0FGZDtBQVFFLGtCQUFRLEVBQUU7QUFBQ0YsaUJBQUssRUFBRTtBQUFSLFdBUlo7QUFTRSxtQkFBUyxFQUFFUiwyREFBTSxDQUFDVyx1QkFUcEI7QUFVRSxhQUFHLEVBQUVQLEdBVlA7QUFXRSxvQkFBVSxFQUFFO0FBQ1ZHLG1CQUFPLEVBQUU7QUFBQ0ssc0JBQVEsRUFBRSxHQUFYO0FBQWdCQyxrQkFBSSxFQUFFO0FBQXRCLGFBREM7QUFFVkosYUFBQyxFQUFFO0FBQUNHLHNCQUFRLEVBQUUsR0FBWDtBQUFnQkUsa0JBQUksRUFBRUMsUUFBdEI7QUFBZ0NGLGtCQUFJLEVBQUU7QUFBdEMsYUFGTztBQUdWSCxhQUFDLEVBQUU7QUFBQ0Usc0JBQVEsRUFBRSxHQUFYO0FBQWdCRSxrQkFBSSxFQUFFQyxRQUF0QjtBQUFnQ0Ysa0JBQUksRUFBRTtBQUF0QztBQUhPO0FBWGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXNCRCxLQXZCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRCRDs7S0E3QlFkLE87QUErQk1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNjOTAyNGZlMWEzYmE2NTAwM2QxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vR2FsZXJyeS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBnYWxsZXJ5QXJyIGZyb20gJy4vZ2FsbGVyeUFycic7XHJcbmltcG9ydCB7bW90aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmZ1bmN0aW9uIEdhbGVycnkoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIHtnYWxsZXJ5QXJyLm1hcCgoc3JjLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX193cmFwcGVyfT5cclxuICAgICAgICAgICAgPG1vdGlvbi5pbWdcclxuICAgICAgICAgICAgICBpbml0aWFsPXt7b3BhY2l0eTogMC45fX1cclxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICBzY2FsZTogMS4xLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgIHg6IFstNSwgNSwgNSwgLTUsIC01XSxcclxuICAgICAgICAgICAgICAgIHk6IFstNSwgLTUsIDUsIDUsIC01XSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHdoaWxlVGFwPXt7c2NhbGU6IDAuOX19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX193cmFwcGVyX19pbWd9XHJcbiAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eToge2R1cmF0aW9uOiAwLjMsIGVhc2U6ICdsaW5lYXInfSxcclxuICAgICAgICAgICAgICAgIHg6IHtkdXJhdGlvbjogMS4zLCBsb29wOiBJbmZpbml0eSwgZWFzZTogJ2xpbmVhcid9LFxyXG4gICAgICAgICAgICAgICAgeToge2R1cmF0aW9uOiAxLjMsIGxvb3A6IEluZmluaXR5LCBlYXNlOiAnbGluZWFyJ30sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FsZXJyeTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==