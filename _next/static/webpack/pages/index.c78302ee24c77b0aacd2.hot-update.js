webpackHotUpdate_N_E("pages/index",{

/***/ "./component/gallery/Gallery.js":
/*!**************************************!*\
  !*** ./component/gallery/Gallery.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Gallery.module.scss */ "./component/gallery/Gallery.module.scss");
/* harmony import */ var _Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _galleryArr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./galleryArr */ "./component/gallery/galleryArr.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var _shared_animate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/animate */ "./shared/animate.js");



var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\gallery\\Gallery.js",
    _s = $RefreshSig$();








function Gallery() {
  _s();

  var _this = this;

  var controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_5__["useAnimation"])();

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__["useInView"])(),
      _useInView2 = Object(C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__["default"]) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].section, {
    className: _Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    ref: ref,
    animate: controls,
    initial: "hidden",
    variants: _shared_animate__WEBPACK_IMPORTED_MODULE_7__["variants"],
    transition: _shared_animate__WEBPACK_IMPORTED_MODULE_7__["transition"],
    children: _galleryArr__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (src, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "".concat(_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__wrapper, " ").concat(_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['container__wrapper__' + i]),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].img, {
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
          className: _Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__wrapper__img,
          src: src,
          transition: {
            duration: 0.3,
            ease: 'linear'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_s(Gallery, "2NEUvrxzw09dl1eC0Q0pbm0pOIE=", false, function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_5__["useAnimation"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__["useInView"]];
});

_c = Gallery;
/* harmony default export */ __webpack_exports__["default"] = (Gallery);

var _c;

$RefreshReg$(_c, "Gallery");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2dhbGxlcnkvR2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwiY29udHJvbHMiLCJ1c2VBbmltYXRpb24iLCJ1c2VJblZpZXciLCJyZWYiLCJpblZpZXciLCJ1c2VFZmZlY3QiLCJJblZpZXciLCJzdGFydCIsInN0eWxlcyIsImNvbnRhaW5lciIsInZhcmlhbnRzIiwidHJhbnNpdGlvbiIsImdhbGxlcnlBcnIiLCJtYXAiLCJzcmMiLCJpIiwiY29udGFpbmVyX193cmFwcGVyIiwib3BhY2l0eSIsInNjYWxlIiwiY29udGFpbmVyX193cmFwcGVyX19pbWciLCJkdXJhdGlvbiIsImVhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUNqQixNQUFNQyxRQUFRLEdBQUdDLGtFQUFZLEVBQTdCOztBQURpQixtQkFFS0MsNkVBQVMsRUFGZDtBQUFBO0FBQUEsTUFFVkMsR0FGVTtBQUFBLE1BRUxDLE1BRks7O0FBSWpCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxtRUFBSixFQUFZO0FBQ1ZOLGNBQVEsQ0FBQ08sS0FBVCxDQUFlLFNBQWY7QUFDRDtBQUNGLEdBSlEsRUFJTixDQUFDUCxRQUFELEVBQVdJLE1BQVgsQ0FKTSxDQUFUO0FBTUEsc0JBQ0UscUVBQUMsb0RBQUQsQ0FBUSxPQUFSO0FBQ0UsYUFBUyxFQUFFSSwyREFBTSxDQUFDQyxTQURwQjtBQUVFLE9BQUcsRUFBRU4sR0FGUDtBQUdFLFdBQU8sRUFBRUgsUUFIWDtBQUlFLFdBQU8sRUFBQyxRQUpWO0FBS0UsWUFBUSxFQUFFVSx3REFMWjtBQU1FLGNBQVUsRUFBRUMsMERBTmQ7QUFBQSxjQVFHQyxtREFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFDMUIsMEJBQ0U7QUFFRSxpQkFBUyxZQUFLUCwyREFBTSxDQUFDUSxrQkFBWixjQUNQUiwyREFBTSxDQUFDLHlCQUF5Qk8sQ0FBMUIsQ0FEQyxDQUZYO0FBQUEsK0JBTUUscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsaUJBQU8sRUFBRTtBQUFDRSxtQkFBTyxFQUFFO0FBQVYsV0FEWDtBQUVFLG9CQUFVLEVBQUU7QUFDVkMsaUJBQUssRUFBRSxHQURHO0FBRVZELG1CQUFPLEVBQUU7QUFGQyxXQUZkO0FBTUUsa0JBQVEsRUFBRTtBQUFDQyxpQkFBSyxFQUFFO0FBQVIsV0FOWjtBQU9FLG1CQUFTLEVBQUVWLDJEQUFNLENBQUNXLHVCQVBwQjtBQVFFLGFBQUcsRUFBRUwsR0FSUDtBQVNFLG9CQUFVLEVBQUU7QUFBQ00sb0JBQVEsRUFBRSxHQUFYO0FBQWdCQyxnQkFBSSxFQUFFO0FBQXRCO0FBVGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GLFNBQ09OLENBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBb0JELEtBckJBO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUNEOztHQTNDUWhCLE87VUFDVUUsMEQsRUFDS0MscUU7OztLQUZmSCxPO0FBNkNNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNzgzMDJlZTI0Yzc3YjBhYWNkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9HYWxsZXJ5Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGdhbGxlcnlBcnIgZnJvbSAnLi9nYWxsZXJ5QXJyJztcclxuaW1wb3J0IHttb3Rpb24sIHVzZUFuaW1hdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBJblZpZXcsIHt1c2VJblZpZXd9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcbmltcG9ydCB7dmFyaWFudHMsIHRyYW5zaXRpb259IGZyb20gJy4uLy4uL3NoYXJlZC9hbmltYXRlJztcclxuXHJcbmZ1bmN0aW9uIEdhbGxlcnkoKSB7XHJcbiAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKTtcclxuICBjb25zdCBbcmVmLCBpblZpZXddID0gdXNlSW5WaWV3KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoSW5WaWV3KSB7XHJcbiAgICAgIGNvbnRyb2xzLnN0YXJ0KCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgfSwgW2NvbnRyb2xzLCBpblZpZXddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uc2VjdGlvblxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBhbmltYXRlPXtjb250cm9sc31cclxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgdHJhbnNpdGlvbj17dHJhbnNpdGlvbn1cclxuICAgID5cclxuICAgICAge2dhbGxlcnlBcnIubWFwKChzcmMsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcl9fd3JhcHBlcn0gJHtcclxuICAgICAgICAgICAgICBzdHlsZXNbJ2NvbnRhaW5lcl9fd3JhcHBlcl9fJyArIGldXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8bW90aW9uLmltZ1xyXG4gICAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OiAwLjl9fVxyXG4gICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3tcclxuICAgICAgICAgICAgICAgIHNjYWxlOiAxLjEsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgd2hpbGVUYXA9e3tzY2FsZTogMC45fX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX3dyYXBwZXJfX2ltZ31cclxuICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDAuMywgZWFzZTogJ2xpbmVhcid9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L21vdGlvbi5zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=