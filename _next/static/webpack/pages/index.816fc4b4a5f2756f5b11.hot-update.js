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



var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\gallery\\Gallery.js",
    _s = $RefreshSig$();







function Gallery() {
  _s();

  var _this = this;

  console.log(variants, transition);
  var controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_5__["useAnimation"])();

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__["useInView"])(),
      _useInView2 = Object(C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].section, {
    className: _Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    ref: ref,
    animate: controls,
    initial: "hidden",
    variants: variants,
    transition: transition,
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
          lineNumber: 36,
          columnNumber: 13
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
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

/***/ }),

/***/ "./shared/animate.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2dhbGxlcnkvR2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwiY29uc29sZSIsImxvZyIsInZhcmlhbnRzIiwidHJhbnNpdGlvbiIsImNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwidXNlSW5WaWV3IiwicmVmIiwiaW5WaWV3IiwidXNlRWZmZWN0Iiwic3RhcnQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJnYWxsZXJ5QXJyIiwibWFwIiwic3JjIiwiaSIsImNvbnRhaW5lcl9fd3JhcHBlciIsIm9wYWNpdHkiLCJzY2FsZSIsImNvbnRhaW5lcl9fd3JhcHBlcl9faW1nIiwiZHVyYXRpb24iLCJlYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFDakJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEVBQXNCQyxVQUF0QjtBQUVBLE1BQU1DLFFBQVEsR0FBR0Msa0VBQVksRUFBN0I7O0FBSGlCLG1CQUlLQyw2RUFBUyxFQUpkO0FBQUE7QUFBQSxNQUlWQyxHQUpVO0FBQUEsTUFJTEMsTUFKSzs7QUFNakJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlELE1BQUosRUFBWTtBQUNWSixjQUFRLENBQUNNLEtBQVQsQ0FBZSxTQUFmO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ04sUUFBRCxFQUFXSSxNQUFYLENBSk0sQ0FBVDtBQU1BLHNCQUNFLHFFQUFDLG9EQUFELENBQVEsT0FBUjtBQUNFLGFBQVMsRUFBRUcsMkRBQU0sQ0FBQ0MsU0FEcEI7QUFFRSxPQUFHLEVBQUVMLEdBRlA7QUFHRSxXQUFPLEVBQUVILFFBSFg7QUFJRSxXQUFPLEVBQUMsUUFKVjtBQUtFLFlBQVEsRUFBRUYsUUFMWjtBQU1FLGNBQVUsRUFBRUMsVUFOZDtBQUFBLGNBUUdVLG1EQUFVLENBQUNDLEdBQVgsQ0FBZSxVQUFDQyxHQUFELEVBQU1DLENBQU4sRUFBWTtBQUMxQiwwQkFDRTtBQUVFLGlCQUFTLFlBQUtMLDJEQUFNLENBQUNNLGtCQUFaLGNBQ1BOLDJEQUFNLENBQUMseUJBQXlCSyxDQUExQixDQURDLENBRlg7QUFBQSwrQkFNRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxpQkFBTyxFQUFFO0FBQUNFLG1CQUFPLEVBQUU7QUFBVixXQURYO0FBRUUsb0JBQVUsRUFBRTtBQUNWQyxpQkFBSyxFQUFFLEdBREc7QUFFVkQsbUJBQU8sRUFBRTtBQUZDLFdBRmQ7QUFNRSxrQkFBUSxFQUFFO0FBQUNDLGlCQUFLLEVBQUU7QUFBUixXQU5aO0FBT0UsbUJBQVMsRUFBRVIsMkRBQU0sQ0FBQ1MsdUJBUHBCO0FBUUUsYUFBRyxFQUFFTCxHQVJQO0FBU0Usb0JBQVUsRUFBRTtBQUFDTSxvQkFBUSxFQUFFLEdBQVg7QUFBZ0JDLGdCQUFJLEVBQUU7QUFBdEI7QUFUZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkYsU0FDT04sQ0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFvQkQsS0FyQkE7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQ0Q7O0dBN0NRakIsTztVQUdVTSwwRCxFQUNLQyxxRTs7O0tBSmZQLE87QUErQ01BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgxNmZjNGI0YTVmMjc1NmY1YjExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0dhbGxlcnkubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgZ2FsbGVyeUFyciBmcm9tICcuL2dhbGxlcnlBcnInO1xyXG5pbXBvcnQge21vdGlvbiwgdXNlQW5pbWF0aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHt1c2VJblZpZXd9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcblxyXG5mdW5jdGlvbiBHYWxsZXJ5KCkge1xyXG4gIGNvbnNvbGUubG9nKHZhcmlhbnRzLCB0cmFuc2l0aW9uKTtcclxuXHJcbiAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKTtcclxuICBjb25zdCBbcmVmLCBpblZpZXddID0gdXNlSW5WaWV3KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW5WaWV3KSB7XHJcbiAgICAgIGNvbnRyb2xzLnN0YXJ0KCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgfSwgW2NvbnRyb2xzLCBpblZpZXddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uc2VjdGlvblxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBhbmltYXRlPXtjb250cm9sc31cclxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgdHJhbnNpdGlvbj17dHJhbnNpdGlvbn1cclxuICAgID5cclxuICAgICAge2dhbGxlcnlBcnIubWFwKChzcmMsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcl9fd3JhcHBlcn0gJHtcclxuICAgICAgICAgICAgICBzdHlsZXNbJ2NvbnRhaW5lcl9fd3JhcHBlcl9fJyArIGldXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8bW90aW9uLmltZ1xyXG4gICAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OiAwLjl9fVxyXG4gICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3tcclxuICAgICAgICAgICAgICAgIHNjYWxlOiAxLjEsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgd2hpbGVUYXA9e3tzY2FsZTogMC45fX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX3dyYXBwZXJfX2ltZ31cclxuICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDAuMywgZWFzZTogJ2xpbmVhcid9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L21vdGlvbi5zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=