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
            opacity: {
              duration: 0.3,
              ease: 'linear'
            },
            x: {
              duration: 3.3,
              loop: Infinity,
              ease: 'linear'
            },
            y: {
              duration: 3.3,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2dhbGxlcnkvR2FsZXJyeS5qcyJdLCJuYW1lcyI6WyJHYWxlcnJ5Iiwic3R5bGVzIiwiY29udGFpbmVyIiwiZ2FsbGVyeUFyciIsIm1hcCIsInNyYyIsImkiLCJjb250YWluZXJfX3dyYXBwZXIiLCJvcGFjaXR5Iiwic2NhbGUiLCJjb250YWluZXJfX3dyYXBwZXJfX2ltZyIsImR1cmF0aW9uIiwiZWFzZSIsIngiLCJsb29wIiwiSW5maW5pdHkiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQ2pCLHNCQUNFO0FBQVMsYUFBUyxFQUFFQywyREFBTSxDQUFDQyxTQUEzQjtBQUFBLGNBQ0dDLG1EQUFVLENBQUNDLEdBQVgsQ0FBZSxVQUFDQyxHQUFELEVBQU1DLENBQU4sRUFBWTtBQUMxQiwwQkFDRTtBQUFLLGlCQUFTLEVBQUVMLDJEQUFNLENBQUNNLGtCQUF2QjtBQUFBLGdDQUNFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLGlCQUFPLEVBQUU7QUFBQ0MsbUJBQU8sRUFBRTtBQUFWLFdBRFg7QUFFRSxvQkFBVSxFQUFFO0FBQ1ZDLGlCQUFLLEVBQUUsR0FERztBQUVWRCxtQkFBTyxFQUFFLENBRkMsQ0FHVjtBQUNBOztBQUpVLFdBRmQ7QUFRRSxrQkFBUSxFQUFFO0FBQUNDLGlCQUFLLEVBQUU7QUFBUixXQVJaO0FBU0UsbUJBQVMsRUFBRVIsMkRBQU0sQ0FBQ1MsdUJBVHBCO0FBVUUsYUFBRyxFQUFFTCxHQVZQO0FBV0Usb0JBQVUsRUFBRTtBQUNWRyxtQkFBTyxFQUFFO0FBQUNHLHNCQUFRLEVBQUUsR0FBWDtBQUFnQkMsa0JBQUksRUFBRTtBQUF0QixhQURDO0FBRVZDLGFBQUMsRUFBRTtBQUFDRixzQkFBUSxFQUFFLEdBQVg7QUFBZ0JHLGtCQUFJLEVBQUVDLFFBQXRCO0FBQWdDSCxrQkFBSSxFQUFFO0FBQXRDLGFBRk87QUFHVkksYUFBQyxFQUFFO0FBQUNMLHNCQUFRLEVBQUUsR0FBWDtBQUFnQkcsa0JBQUksRUFBRUMsUUFBdEI7QUFBZ0NILGtCQUFJLEVBQUU7QUFBdEM7QUFITztBQVhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFzQkQsS0F2QkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0QkQ7O0tBN0JRWixPO0FBK0JNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MzhhYzM0MGRjOGFhM2E4ZmNkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0dhbGVycnkubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgZ2FsbGVyeUFyciBmcm9tICcuL2dhbGxlcnlBcnInO1xyXG5pbXBvcnQge21vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5mdW5jdGlvbiBHYWxlcnJ5KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICB7Z2FsbGVyeUFyci5tYXAoKHNyYywgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fd3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uaW1nXHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6IDAuOX19XHJcbiAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgc2NhbGU6IDEuMSxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAvLyB4OiBbLTUsIDUsIDUsIC01LCAtNV0sXHJcbiAgICAgICAgICAgICAgICAvLyB5OiBbLTUsIC01LCA1LCA1LCAtNV0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB3aGlsZVRhcD17e3NjYWxlOiAwLjl9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fd3JhcHBlcl9faW1nfVxyXG4gICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IHtkdXJhdGlvbjogMC4zLCBlYXNlOiAnbGluZWFyJ30sXHJcbiAgICAgICAgICAgICAgICB4OiB7ZHVyYXRpb246IDMuMywgbG9vcDogSW5maW5pdHksIGVhc2U6ICdsaW5lYXInfSxcclxuICAgICAgICAgICAgICAgIHk6IHtkdXJhdGlvbjogMy4zLCBsb29wOiBJbmZpbml0eSwgZWFzZTogJ2xpbmVhcid9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGVycnk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=