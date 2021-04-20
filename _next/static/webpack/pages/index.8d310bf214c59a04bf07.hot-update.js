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

  var interval = setInterval(function () {
    imgHandler(1);
  }, 5000);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return function () {
      return clearInterval(interval);
    };
  }, []);

  var imgHandler = function imgHandler(direction) {
    console.log(direction);
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
          lineNumber: 57,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ImgSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__buttonNext,
        onClick: function onClick() {
          return imgHandler(1);
        },
        children: '‣'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ImgSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__buttonPrev,
        onClick: function onClick() {
          return imgHandler(-1);
        },
        children: '‣'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2ltZ1NsaWRlci9JbWdTbGlkZXIuanMiXSwibmFtZXMiOlsic3dpcGVDb25maWRlbmNlVGhyZXNob2xkIiwic3dpcGVQb3dlciIsIm9mZnNldCIsInZlbG9jaXR5IiwiTWF0aCIsImFicyIsIkltZ1NsaWRlciIsInVzZVN0YXRlIiwiaW1nIiwiaW1nRGlyZWN0aW9uIiwic2V0SW1nIiwidmFyaWFudHMiLCJlbnRlciIsIm9wYWNpdHkiLCJjZW50ZXIiLCJ6SW5kZXgiLCJleGl0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImltZ0hhbmRsZXIiLCJ1c2VFZmZlY3QiLCJjbGVhckludGVydmFsIiwiZGlyZWN0aW9uIiwiY29uc29sZSIsImxvZyIsImltZ0Ftb3VudCIsImltZ0FyciIsImxlbmd0aCIsInN0eWxlcyIsImNvbnRhaW5lciIsIngiLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImR1cmF0aW9uIiwibGVmdCIsInJpZ2h0IiwiZSIsInN3aXBlIiwiY29udGFpbmVyX19idXR0b25OZXh0IiwiY29udGFpbmVyX19idXR0b25QcmV2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHdCQUF3QixHQUFHLEtBQWpDOztBQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE1BQUQsRUFBU0MsUUFBVCxFQUFzQjtBQUN2QyxTQUFPQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0gsTUFBVCxJQUFtQkMsUUFBMUI7QUFDRCxDQUZEOztBQUlBLFNBQVNHLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFDbUJDLHNEQUFRLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFELENBRDNCO0FBQUE7QUFBQSxNQUNYQyxHQURXO0FBQUEsTUFDTkMsWUFETTtBQUFBLE1BQ1NDLE1BRFQ7O0FBR25CLE1BQU1DLFFB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O0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUE0QkU7QUFDRSxpQkFBUyxFQUFFb0IsNkRBQU0sQ0FBQ1cscUJBRHBCO0FBRUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1wQixVQUFVLENBQUMsQ0FBRCxDQUFoQjtBQUFBLFNBRlg7QUFBQSxrQkFJRztBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1QkYsZUFrQ0U7QUFDRSxpQkFBUyxFQUFFUyw2REFBTSxDQUFDWSxxQkFEcEI7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFBTXJCLFVBQVUsQ0FBQyxDQUFDLENBQUYsQ0FBaEI7QUFBQSxTQUZYO0FBQUEsa0JBSUc7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBNkNEOztHQXRGUWIsUzs7S0FBQUEsUztBQXdGTUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGQzMTBiZjIxNGM1OWEwNGJmMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0FuaW1hdGVQcmVzZW5jZX0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBpbWdBcnIgZnJvbSAnLi9pbWdBcnInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW1nU2xpZGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IE1vdGlvbkltYWdlIGZyb20gJy4vTW90aW9uSW1hZ2UnO1xyXG5cclxuY29uc3Qgc3dpcGVDb25maWRlbmNlVGhyZXNob2xkID0gMTAwMDA7XHJcbmNvbnN0IHN3aXBlUG93ZXIgPSAob2Zmc2V0LCB2ZWxvY2l0eSkgPT4ge1xyXG4gIHJldHVybiBNYXRoLmFicyhvZmZzZXQpICogdmVsb2NpdHk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBJbWdTbGlkZXIoKSB7XHJcbiAgY29uc3QgW1tpbWcsIGltZ0RpcmVjdGlvbl0sIHNldEltZ10gPSB1c2VTdGF0ZShbMCwgMF0pO1xyXG5cclxuICBjb25zdCB2YXJpYW50cyA9IChpbWdEaXJlY3Rpb24pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVudGVyOiB7XHJcbiAgICAgICAgLy8geDogaW1nRGlyZWN0aW9uID4gMCA/IC0yMDAwIDogMjAwMCxcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgY2VudGVyOiB7XHJcbiAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgIC8vIHg6IDAsXHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgfSxcclxuICAgICAgZXhpdDoge1xyXG4gICAgICAgIHpJbmRleDogMCxcclxuICAgICAgICAvLyB4OiBpbWdEaXJlY3Rpb24gPCAwID8gLTIwMDAgOiAyMDAwLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgIGltZ0hhbmRsZXIoMSk7XHJcbiAgfSwgNTAwMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBpbWdIYW5kbGVyID0gKGRpcmVjdGlvbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGlyZWN0aW9uKTtcclxuXHJcbiAgICBjb25zdCBpbWdBbW91bnQgPSBpbWdBcnIubGVuZ3RoO1xyXG4gICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcclxuICAgICAgcmV0dXJuIHNldEltZyhbKGltZyArIGRpcmVjdGlvbikgJSBpbWdBbW91bnQsIGRpcmVjdGlvbl0pO1xyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPCAwKSB7XHJcbiAgICAgIHJldHVybiBzZXRJbWcoWyhpbWcgKyBkaXJlY3Rpb24gKyBpbWdBbW91bnQpICUgaW1nQW1vdW50LCBkaXJlY3Rpb25dKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9IGN1c3RvbT17aW1nRGlyZWN0aW9ufT5cclxuICAgICAgICAgIDxNb3Rpb25JbWFnZVxyXG4gICAgICAgICAgICBrZXk9e2ltZ31cclxuICAgICAgICAgICAgY3VzdG9tPXtpbWdEaXJlY3Rpb259XHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50cyhpbWdEaXJlY3Rpb24pfVxyXG4gICAgICAgICAgICBpbml0aWFsPVwiZW50ZXJcIlxyXG4gICAgICAgICAgICBhbmltYXRlPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgZXhpdD1cImV4aXRcIlxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgeDoge3R5cGU6ICd0d2VlbicsIHN0aWZmbmVzczogMjAwLCBkYW1waW5nOiAzMCwgZHVyYXRpb246IDF9LFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IHtkdXJhdGlvbjogMC4zfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3JjPXtpbWdBcnJbaW1nXX1cclxuICAgICAgICAgICAgZHJhZz1cInhcIlxyXG4gICAgICAgICAgICBkcmFnQ29uc3RyYWludHM9e3tsZWZ0OiAwLCByaWdodDogMH19XHJcbiAgICAgICAgICAgIGRyYWdFbGFzdGljPXsxfVxyXG4gICAgICAgICAgICBvbkRyYWdFbmQ9eyhlLCB7b2Zmc2V0LCB2ZWxvY2l0eX0pID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBzd2lwZSA9IHN3aXBlUG93ZXIob2Zmc2V0LngsIHZlbG9jaXR5LngpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoc3dpcGUgPCBzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgIGltZ0hhbmRsZXIoLTEpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3dpcGUgPiAtc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdIYW5kbGVyKDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19idXR0b25OZXh0fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaW1nSGFuZGxlcigxKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7J+KAoyd9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19idXR0b25QcmV2fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaW1nSGFuZGxlcigtMSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyfigKMnfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltZ1NsaWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==