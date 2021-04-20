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

  console.log(_Galerry_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['id-0']);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _Galerry_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: _galleryArr__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (src, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "".concat(_Galerry_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__wrapper, " ").concat(_Galerry_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['container__wrapper__' + i]),
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
          lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2dhbGxlcnkvR2FsZXJyeS5qcyJdLCJuYW1lcyI6WyJHYWxlcnJ5IiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImNvbnRhaW5lciIsImdhbGxlcnlBcnIiLCJtYXAiLCJzcmMiLCJpIiwiY29udGFpbmVyX193cmFwcGVyIiwib3BhY2l0eSIsInNjYWxlIiwiY29udGFpbmVyX193cmFwcGVyX19pbWciLCJkdXJhdGlvbiIsImVhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFDakJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQywyREFBTSxDQUFDLE1BQUQsQ0FBbEI7QUFFQSxzQkFDRTtBQUFTLGFBQVMsRUFBRUEsMkRBQU0sQ0FBQ0MsU0FBM0I7QUFBQSxjQUNHQyxtREFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFDMUIsMEJBQ0U7QUFFRSxpQkFBUyxZQUFLTCwyREFBTSxDQUFDTSxrQkFBWixjQUNQTiwyREFBTSxDQUFDLHlCQUF5QkssQ0FBMUIsQ0FEQyxDQUZYO0FBQUEsK0JBTUUscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsaUJBQU8sRUFBRTtBQUFDRSxtQkFBTyxFQUFFO0FBQVYsV0FEWDtBQUVFLG9CQUFVLEVBQUU7QUFDVkMsaUJBQUssRUFBRSxHQURHO0FBRVZELG1CQUFPLEVBQUU7QUFGQyxXQUZkO0FBTUUsa0JBQVEsRUFBRTtBQUFDQyxpQkFBSyxFQUFFO0FBQVIsV0FOWjtBQU9FLG1CQUFTLEVBQUVSLDJEQUFNLENBQUNTLHVCQVBwQjtBQVFFLGFBQUcsRUFBRUwsR0FSUDtBQVNFLG9CQUFVLEVBQUU7QUFBQ00sb0JBQVEsRUFBRSxHQUFYO0FBQWdCQyxnQkFBSSxFQUFFO0FBQXRCO0FBVGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GLFNBQ09OLENBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBb0JELEtBckJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEJEOztLQTdCUVIsTztBQStCTUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTc5YjA3NDY0NjcyNmY1YjI5MmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9HYWxlcnJ5Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGdhbGxlcnlBcnIgZnJvbSAnLi9nYWxsZXJ5QXJyJztcclxuaW1wb3J0IHttb3Rpb259IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gR2FsZXJyeSgpIHtcclxuICBjb25zb2xlLmxvZyhzdHlsZXNbJ2lkLTAnXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICB7Z2FsbGVyeUFyci5tYXAoKHNyYywgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyX193cmFwcGVyfSAke1xyXG4gICAgICAgICAgICAgIHN0eWxlc1snY29udGFpbmVyX193cmFwcGVyX18nICsgaV1cclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uaW1nXHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6IDAuOX19XHJcbiAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgc2NhbGU6IDEuMSxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB3aGlsZVRhcD17e3NjYWxlOiAwLjl9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fd3JhcHBlcl9faW1nfVxyXG4gICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjogMC4zLCBlYXNlOiAnbGluZWFyJ319XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYWxlcnJ5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9