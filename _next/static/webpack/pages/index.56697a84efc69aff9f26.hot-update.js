webpackHotUpdate_N_E("pages/index",{

/***/ "./component/imgSlider/ImgSlider.js":
/*!******************************************!*\
  !*** ./component/imgSlider/ImgSlider.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _imgArr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgArr */ "./component/imgSlider/imgArr.js");
/* harmony import */ var _ImgSlider_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImgSlider.module.scss */ "./component/imgSlider/ImgSlider.module.scss");
/* harmony import */ var _ImgSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ImgSlider_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _MotionImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MotionImage */ "./component/imgSlider/MotionImage.js");




var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\imgSlider\\ImgSlider.js",
    _s = $RefreshSig$();






var swipeConfidenceThreshold = 10000;

var swipePower = function swipePower(offset, velocity) {
  return Math.abs(offset) * velocity;
};

function ImgSlider() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([0, 0]),
      _useState$ = Object(C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState[0], 2),
      img = _useState$[0],
      imgDirection = _useState$[1],
      setImg = _useState[1];

  var variants = function variants(imgDirection) {
    return {
      enter: {
        // x: imgDirection > 0 ? -2000 : 2000,
        opacity: 0
      },
      center: {
        zIndex: 1,
        // x: 0,
        opacity: 1
      },
      exit: {
        zIndex: 0 // x: imgDirection < 0 ? -2000 : 2000,

      }
    };
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var interval = setInterval(function () {
      imgHandler(1);
    }, 5000);
    return function () {
      return clearInterval(interval);
    };
  }, [img]);

  var imgHandler = function imgHandler(direction) {
    // console.log(direction);
    var imgAmount = _imgArr__WEBPACK_IMPORTED_MODULE_4__["default"].length;

    if (direction > 0) {
      return setImg([(img + direction) % imgAmount, direction]);
    } else if (direction < 0) {
      return setImg([(img + direction + imgAmount) % imgAmount, direction]);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _ImgSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], {
        initial: false,
        custom: imgDirection,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MotionImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
          custom: imgDirection,
          variants: variants(imgDirection),
          initial: "enter",
          animate: "center",
          exit: "exit",
          transition: {
            x: {
              type: 'tween',
              stiffness: 200,
              damping: 30,
              duration: 1
            },
            opacity: {
              duration: 0.3
            }
          },
          src: _imgArr__WEBPACK_IMPORTED_MODULE_4__["default"][img],
          drag: "x",
          dragConstraints: {
            left: 0,
            right: 0
          },
          dragElastic: 1,
          onDragEnd: function onDragEnd(e, _ref) {
            var offset = _ref.offset,
                velocity = _ref.velocity;
            var swipe = swipePower(offset.x, velocity.x);

            if (swipe < swipeConfidenceThreshold) {
              imgHandler(-1);
            } else if (swipe > -swipeConfidenceThreshold) {
              imgHandler(1);
            }
          }
        }, img, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ImgSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__buttonNext,
        onClick: function onClick() {
          return imgHandler(1);
        },
        children: '‣'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ImgSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__buttonPrev,
        onClick: function onClick() {
          return imgHandler(-1);
        },
        children: '‣'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(ImgSlider, "Xa0vsjeEAck6mDSXCpNJJfkmjj8=");

_c = ImgSlider;
/* harmony default export */ __webpack_exports__["default"] = (ImgSlider);

var _c;

$RefreshReg$(_c, "ImgSlider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2ltZ1NsaWRlci9JbWdTbGlkZXIuanMiXSwibmFtZXMiOlsic3dpcGVDb25maWRlbmNlVGhyZXNob2xkIiwic3dpcGVQb3dlciIsIm9mZnNldCIsInZlbG9jaXR5IiwiTWF0aCIsImFicyIsIkltZ1NsaWRlciIsInVzZVN0YXRlIiwiaW1nIiwiaW1nRGlyZWN0aW9uIiwic2V0SW1nIiwidmFyaWFudHMiLCJlbnRlciIsIm9wYWNpdHkiLCJjZW50ZXIiLCJ6SW5kZXgiLCJleGl0IiwidXNlRWZmZWN0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImltZ0hhbmRsZXIiLCJjbGVhckludGVydmFsIiwiZGlyZWN0aW9uIiwiaW1nQW1vdW50IiwiaW1nQXJyIiwibGVuZ3RoIiwic3R5bGVzIiwiY29udGFpbmVyIiwieCIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZHVyYXRpb24iLCJsZWZ0IiwicmlnaHQiLCJlIiwic3dpcGUiLCJjb250YWluZXJfX2J1dHRvbk5leHQiLCJjb250YWluZXJfX2J1dHRvblByZXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsd0JBQXdCLEdBQUcsS0FBakM7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsTUFBRCxFQUFTQyxRQUFULEVBQXNCO0FBQ3ZDLFNBQU9DLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxNQUFULElBQW1CQyxRQUExQjtBQUNELENBRkQ7O0FBSUEsU0FBU0csU0FBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUNtQkMsc0RBQVEsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsQ0FEM0I7QUFBQTtBQUFBLE1BQ1hDLEdBRFc7QUFBQSxNQUNOQyxZQURNO0FBQUEsTUFDU0MsTUFEVDs7QUFHbkIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFB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QURGLGVBNEJFO0FBQ0UsaUJBQVMsRUFBRWtCLDZEQUFNLENBQUNXLHFCQURwQjtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNakIsVUFBVSxDQUFDLENBQUQsQ0FBaEI7QUFBQSxTQUZYO0FBQUEsa0JBSUc7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUJGLGVBa0NFO0FBQ0UsaUJBQVMsRUFBRU0sNkRBQU0sQ0FBQ1kscUJBRHBCO0FBRUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1sQixVQUFVLENBQUMsQ0FBQyxDQUFGLENBQWhCO0FBQUEsU0FGWDtBQUFBLGtCQUlHO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTZDRDs7R0FyRlFkLFM7O0tBQUFBLFM7QUF1Rk1BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU2Njk3YTg0ZWZjNjlhZmY5ZjI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtBbmltYXRlUHJlc2VuY2V9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgaW1nQXJyIGZyb20gJy4vaW1nQXJyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ltZ1NsaWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBNb3Rpb25JbWFnZSBmcm9tICcuL01vdGlvbkltYWdlJztcclxuXHJcbmNvbnN0IHN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCA9IDEwMDAwO1xyXG5jb25zdCBzd2lwZVBvd2VyID0gKG9mZnNldCwgdmVsb2NpdHkpID0+IHtcclxuICByZXR1cm4gTWF0aC5hYnMob2Zmc2V0KSAqIHZlbG9jaXR5O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gSW1nU2xpZGVyKCkge1xyXG4gIGNvbnN0IFtbaW1nLCBpbWdEaXJlY3Rpb25dLCBzZXRJbWddID0gdXNlU3RhdGUoWzAsIDBdKTtcclxuXHJcbiAgY29uc3QgdmFyaWFudHMgPSAoaW1nRGlyZWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlbnRlcjoge1xyXG4gICAgICAgIC8vIHg6IGltZ0RpcmVjdGlvbiA+IDAgPyAtMjAwMCA6IDIwMDAsXHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGNlbnRlcjoge1xyXG4gICAgICAgIHpJbmRleDogMSxcclxuICAgICAgICAvLyB4OiAwLFxyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIGV4aXQ6IHtcclxuICAgICAgICB6SW5kZXg6IDAsXHJcbiAgICAgICAgLy8geDogaW1nRGlyZWN0aW9uIDwgMCA/IC0yMDAwIDogMjAwMCxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpbWdIYW5kbGVyKDEpO1xyXG4gICAgfSwgNTAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW2ltZ10pO1xyXG5cclxuICBjb25zdCBpbWdIYW5kbGVyID0gKGRpcmVjdGlvbikgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coZGlyZWN0aW9uKTtcclxuXHJcbiAgICBjb25zdCBpbWdBbW91bnQgPSBpbWdBcnIubGVuZ3RoO1xyXG4gICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcclxuICAgICAgcmV0dXJuIHNldEltZyhbKGltZyArIGRpcmVjdGlvbikgJSBpbWdBbW91bnQsIGRpcmVjdGlvbl0pO1xyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPCAwKSB7XHJcbiAgICAgIHJldHVybiBzZXRJbWcoWyhpbWcgKyBkaXJlY3Rpb24gKyBpbWdBbW91bnQpICUgaW1nQW1vdW50LCBkaXJlY3Rpb25dKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9IGN1c3RvbT17aW1nRGlyZWN0aW9ufT5cclxuICAgICAgICAgIDxNb3Rpb25JbWFnZVxyXG4gICAgICAgICAgICBrZXk9e2ltZ31cclxuICAgICAgICAgICAgY3VzdG9tPXtpbWdEaXJlY3Rpb259XHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50cyhpbWdEaXJlY3Rpb24pfVxyXG4gICAgICAgICAgICBpbml0aWFsPVwiZW50ZXJcIlxyXG4gICAgICAgICAgICBhbmltYXRlPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgZXhpdD1cImV4aXRcIlxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgeDoge3R5cGU6ICd0d2VlbicsIHN0aWZmbmVzczogMjAwLCBkYW1waW5nOiAzMCwgZHVyYXRpb246IDF9LFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IHtkdXJhdGlvbjogMC4zfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3JjPXtpbWdBcnJbaW1nXX1cclxuICAgICAgICAgICAgZHJhZz1cInhcIlxyXG4gICAgICAgICAgICBkcmFnQ29uc3RyYWludHM9e3tsZWZ0OiAwLCByaWdodDogMH19XHJcbiAgICAgICAgICAgIGRyYWdFbGFzdGljPXsxfVxyXG4gICAgICAgICAgICBvbkRyYWdFbmQ9eyhlLCB7b2Zmc2V0LCB2ZWxvY2l0eX0pID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBzd2lwZSA9IHN3aXBlUG93ZXIob2Zmc2V0LngsIHZlbG9jaXR5LngpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoc3dpcGUgPCBzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgIGltZ0hhbmRsZXIoLTEpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3dpcGUgPiAtc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdIYW5kbGVyKDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19idXR0b25OZXh0fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaW1nSGFuZGxlcigxKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7J+KAoyd9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19idXR0b25QcmV2fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaW1nSGFuZGxlcigtMSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyfigKMnfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltZ1NsaWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==