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

  var _useFadeAnimation = Object(_shared_animate__WEBPACK_IMPORTED_MODULE_7__["useFadeAnimation"])(),
      _useFadeAnimation2 = Object(C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useFadeAnimation, 4),
      ref = _useFadeAnimation2[0],
      controls = _useFadeAnimation2[1],
      variants = _useFadeAnimation2[2],
      transition = _useFadeAnimation2[3];

  console.log(variants, transition); // const controls = useAnimation();
  // const [ref, inView] = useInView();

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
          lineNumber: 39,
          columnNumber: 13
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

_s(Gallery, "IAW5Jk1z1TZdtXJGsh8GIGpU+K8=", false, function () {
  return [_shared_animate__WEBPACK_IMPORTED_MODULE_7__["useFadeAnimation"]];
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
/*!***************************!*\
  !*** ./shared/animate.js ***!
  \***************************/
/*! exports provided: useFadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFadeAnimation", function() { return useFadeAnimation; });
/* harmony import */ var C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");


var _s = $RefreshSig$();




var variants = {
  visible: {
    opacity: 1,
    scale: 1
  },
  hidden: {
    opacity: 0,
    scale: 1
  }
};
var transition = {
  duration: 0.5
};
function useFadeAnimation() {
  _s();

  var controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])();

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"])(),
      _useInView2 = Object(C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return ref, controls, variants, transition;
}

_s(useFadeAnimation, "2NEUvrxzw09dl1eC0Q0pbm0pOIE=", false, function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"]];
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2dhbGxlcnkvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc2hhcmVkL2FuaW1hdGUuanMiXSwibmFtZXMiOlsiR2FsbGVyeSIsInVzZUZhZGVBbmltYXRpb24iLCJyZWYiLCJjb250cm9scyIsInZhcmlhbnRzIiwidHJhbnNpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJpblZpZXciLCJzdGFydCIsInN0eWxlcyIsImNvbnRhaW5lciIsImdhbGxlcnlBcnIiLCJtYXAiLCJzcmMiLCJpIiwiY29udGFpbmVyX193cmFwcGVyIiwib3BhY2l0eSIsInNjYWxlIiwiY29udGFpbmVyX193cmFwcGVyX19pbWciLCJkdXJhdGlvbiIsImVhc2UiLCJ2aXNpYmxlIiwiaGlkZGVuIiwidXNlQW5pbWF0aW9uIiwidXNlSW5WaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFBQSwwQkFDNkJDLHdFQUFnQixFQUQ3QztBQUFBO0FBQUEsTUFDVkMsR0FEVTtBQUFBLE1BQ0xDLFFBREs7QUFBQSxNQUNLQyxRQURMO0FBQUEsTUFDZUMsVUFEZjs7QUFHakJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFaLEVBQXNCQyxVQUF0QixFQUhpQixDQUtqQjtBQUNBOztBQUVBRyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxNQUFKLEVBQVk7QUFDVk4sY0FBUSxDQUFDTyxLQUFULENBQWUsU0FBZjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNQLFFBQUQsRUFBV00sTUFBWCxDQUpNLENBQVQ7QUFNQSxzQkFDRSxxRUFBQyxvREFBRCxDQUFRLE9BQVI7QUFDRSxhQUFTLEVBQUVFLDJEQUFNLENBQUNDLFNBRHBCO0FBRUUsT0FBRyxFQUFFVixHQUZQO0FBR0UsV0FBTyxFQUFFQyxRQUhYO0FBSUUsV0FBTyxFQUFDLFFBSlY7QUFLRSxZQUFRLEVBQUVDLFFBTFo7QUFNRSxjQUFVLEVBQUVDLFVBTmQ7QUFBQSxjQVFHUSxtREFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFDMUIsMEJBQ0U7QUFFRSxpQkFBUyxZQUFLTCwyREFBTSxDQUFDTSxrQkFBWixjQUNQTiwyREFBTSxDQUFDLHlCQUF5QkssQ0FBMUIsQ0FEQyxDQUZYO0FBQUEsK0JBTUUscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsaUJBQU8sRUFBRTtBQUFDRSxtQkFBTyxFQUFFO0FBQVYsV0FEWDtBQUVFLG9CQUFVLEVBQUU7QUFDVkMsaUJBQUssRUFBRSxHQURHO0FBRVZELG1CQUFPLEVBQUU7QUFGQyxXQUZkO0FBTUUsa0JBQVEsRUFBRTtBQUFDQyxpQkFBSyxFQUFFO0FBQVIsV0FOWjtBQU9FLG1CQUFTLEVBQUVSLDJEQUFNLENBQUNTLHVCQVBwQjtBQVFFLGFBQUcsRUFBRUwsR0FSUDtBQVNFLG9CQUFVLEVBQUU7QUFBQ00sb0JBQVEsRUFBRSxHQUFYO0FBQWdCQyxnQkFBSSxFQUFFO0FBQXRCO0FBVGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GLFNBQ09OLENBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBb0JELEtBckJBO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUNEOztHQS9DUWhCLE87VUFDdUNDLGdFOzs7S0FEdkNELE87QUFpRE1BLHNFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTtBQUNBO0FBRUEsSUFBTUksUUFBUSxHQUFHO0FBQ2ZtQixTQUFPLEVBQUU7QUFBQ0wsV0FBTyxFQUFFLENBQVY7QUFBYUMsU0FBSyxFQUFFO0FBQXBCLEdBRE07QUFFZkssUUFBTSxFQUFFO0FBQUNOLFdBQU8sRUFBRSxDQUFWO0FBQWFDLFNBQUssRUFBRTtBQUFwQjtBQUZPLENBQWpCO0FBS0EsSUFBTWQsVUFBVSxHQUFHO0FBQUNnQixVQUFRLEVBQUU7QUFBWCxDQUFuQjtBQUVPLFNBQVNwQixnQkFBVCxHQUE0QjtBQUFBOztBQUNqQyxNQUFNRSxRQUFRLEdBQUdzQixrRUFBWSxFQUE3Qjs7QUFEaUMsbUJBRVhDLDZFQUFTLEVBRkU7QUFBQTtBQUFBLE1BRTFCeEIsR0FGMEI7QUFBQSxNQUVyQk8sTUFGcUI7O0FBSWpDRCx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxNQUFKLEVBQVk7QUFDVk4sY0FBUSxDQUFDTyxLQUFULENBQWUsU0FBZjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNQLFFBQUQsRUFBV00sTUFBWCxDQUpNLENBQVQ7QUFNQSxTQUFPUCxHQUFHLEVBQUVDLFFBQUYsRUFBWUMsUUFBWixFQUFzQkMsVUFBaEM7QUFDRDs7R0FYZUosZ0I7VUFDR3dCLDBELEVBQ0tDLHFFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEyN2U2NWVlNTc1YjYwYzdlZDUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0dhbGxlcnkubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgZ2FsbGVyeUFyciBmcm9tICcuL2dhbGxlcnlBcnInO1xyXG5pbXBvcnQge21vdGlvbiwgdXNlQW5pbWF0aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHt1c2VJblZpZXd9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcbmltcG9ydCB7dXNlRmFkZUFuaW1hdGlvbn0gZnJvbSAnLi4vLi4vc2hhcmVkL2FuaW1hdGUnO1xyXG5cclxuZnVuY3Rpb24gR2FsbGVyeSgpIHtcclxuICBjb25zdCBbcmVmLCBjb250cm9scywgdmFyaWFudHMsIHRyYW5zaXRpb25dID0gdXNlRmFkZUFuaW1hdGlvbigpO1xyXG5cclxuICBjb25zb2xlLmxvZyh2YXJpYW50cywgdHJhbnNpdGlvbik7XHJcblxyXG4gIC8vIGNvbnN0IGNvbnRyb2xzID0gdXNlQW5pbWF0aW9uKCk7XHJcbiAgLy8gY29uc3QgW3JlZiwgaW5WaWV3XSA9IHVzZUluVmlldygpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGluVmlldykge1xyXG4gICAgICBjb250cm9scy5zdGFydCgndmlzaWJsZScpO1xyXG4gICAgfVxyXG4gIH0sIFtjb250cm9scywgaW5WaWV3XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLnNlY3Rpb25cclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XHJcbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgIHRyYW5zaXRpb249e3RyYW5zaXRpb259XHJcbiAgICA+XHJcbiAgICAgIHtnYWxsZXJ5QXJyLm1hcCgoc3JjLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJfX3dyYXBwZXJ9ICR7XHJcbiAgICAgICAgICAgICAgc3R5bGVzWydjb250YWluZXJfX3dyYXBwZXJfXycgKyBpXVxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG1vdGlvbi5pbWdcclxuICAgICAgICAgICAgICBpbml0aWFsPXt7b3BhY2l0eTogMC45fX1cclxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICBzY2FsZTogMS4xLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHdoaWxlVGFwPXt7c2NhbGU6IDAuOX19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX193cmFwcGVyX19pbWd9XHJcbiAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAwLjMsIGVhc2U6ICdsaW5lYXInfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9tb3Rpb24uc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5O1xyXG4iLCJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZUFuaW1hdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7dXNlSW5WaWV3fSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgdmlzaWJsZToge29wYWNpdHk6IDEsIHNjYWxlOiAxfSxcclxuICBoaWRkZW46IHtvcGFjaXR5OiAwLCBzY2FsZTogMX0sXHJcbn07XHJcblxyXG5jb25zdCB0cmFuc2l0aW9uID0ge2R1cmF0aW9uOiAwLjV9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZhZGVBbmltYXRpb24oKSB7XHJcbiAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKTtcclxuICBjb25zdCBbcmVmLCBpblZpZXddID0gdXNlSW5WaWV3KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW5WaWV3KSB7XHJcbiAgICAgIGNvbnRyb2xzLnN0YXJ0KCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbiAgfSwgW2NvbnRyb2xzLCBpblZpZXddKTtcclxuXHJcbiAgcmV0dXJuIHJlZiwgY29udHJvbHMsIHZhcmlhbnRzLCB0cmFuc2l0aW9uO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=