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

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([0, 0]),
      _useState$ = Object(C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState[0], 2),
      img = _useState$[0],
      imgDirection = _useState$[1],
      setImg = _useState[1];

  var imgRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    imgRef.current = imgRef.current.slice(0, 3);
    console.log(imgRef.current[2].style.opacity);
    imgRef.current[2].style.opacity = 0;
    imgRef.current[2].style.zIndex = 0;
    imgRef.current[1].style.opacity = 0;
    imgRef.current[1].style.zIndex = 0;
    imgRef.current[0].style.opacity = 0;
    imgRef.current[0].style.zIndex = 0;
    imgRef.current[img].style.opacity = 1;
    imgRef.current[img].style.zIndex = 1;
  }, [img]); // const variants = (imgDirection) => {
  //   return {
  //     enter: {
  //       // x: imgDirection > 0 ? -2000 : 2000,
  //       opacity: 0,
  //     },
  //     center: {
  //       zIndex: 1,
  //       // x: 0,
  //       opacity: 1,
  //     },
  //     exit: {
  //       zIndex: 0,
  //       // x: imgDirection < 0 ? -2000 : 2000,
  //     },
  //   };
  // };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var interval = setInterval(function () {
      imgHandler(1);
    }, 5000);
    return function () {
      return clearInterval(interval);
    };
  }, [img]);

  var imgHandler = function imgHandler(direction) {
    console.log(img);
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
        children: _imgArr__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (img, i) {
          console.log(img);
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MotionImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
            forwardRef: function forwardRef(el) {
              return imgRef.current[i] = el;
            } // custom={imgDirection}
            // variants={variants(imgDirection)}
            // initial="enter"
            // animate="center"
            // exit="exit"
            ,
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
            src: img,
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
            lineNumber: 78,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ImgSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__buttonNext,
        onClick: function onClick() {
          return imgHandler(1);
        },
        children: '‣'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ImgSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__buttonPrev,
        onClick: function onClick() {
          return imgHandler(-1);
        },
        children: '‣'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(ImgSlider, "AqMT7uIzMv9KKrKUCEouUvnjsr4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2ltZ1NsaWRlci9JbWdTbGlkZXIuanMiXSwibmFtZXMiOlsic3dpcGVDb25maWRlbmNlVGhyZXNob2xkIiwic3dpcGVQb3dlciIsIm9mZnNldCIsInZlbG9jaXR5IiwiTWF0aCIsImFicyIsIkltZ1NsaWRlciIsInVzZVN0YXRlIiwiaW1nIiwiaW1nRGlyZWN0aW9uIiwic2V0SW1nIiwiaW1nUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwib3BhY2l0eSIsInpJbmRleCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJpbWdIYW5kbGVyIiwiY2xlYXJJbnRlcnZhbCIsImRpcmVjdGlvbiIsImltZ0Ftb3VudCIsImltZ0FyciIsImxlbmd0aCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1hcCIsImkiLCJlbCIsIngiLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImR1cmF0aW9uIiwibGVmdCIsInJpZ2h0IiwiZSIsInN3aXBlIiwiY29udGFpbmVyX19idXR0b25OZXh0IiwiY29udGFpbmVyX19idXR0b25QcmV2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHdCQUF3QixHQUFHLEtBQWpDOztBQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE1BQUQsRUFBU0MsUUFBVCxFQUFzQjtBQUN2QyxTQUFPQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0gsTUFBVCxJQUFtQkMsUUFBMUI7QUFDRCxDQUZEOztBQUlBLFNBQVNHLFNBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDbUJDLHNEQUFRLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFELENBRDNCO0FBQUE7QUFBQSxNQUNYQyxHQURXO0FBQUEsTUFDTkMsWUFETTtB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QURwQjtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNcEIsVUFBVSxDQUFDLENBQUQsQ0FBaEI7QUFBQSxTQUZYO0FBQUEsa0JBSUc7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakVGLGVBdUVFO0FBQ0UsaUJBQVMsRUFBRU0sNkRBQU0sQ0FBQ2UscUJBRHBCO0FBRUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1yQixVQUFVLENBQUMsQ0FBQyxDQUFGLENBQWhCO0FBQUEsU0FGWDtBQUFBLGtCQUlHO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWtGRDs7R0E3SVFqQixTOztLQUFBQSxTO0FBK0lNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NDE0YjliZWJiOTllYzUwZDk1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtBbmltYXRlUHJlc2VuY2V9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgaW1nQXJyIGZyb20gJy4vaW1nQXJyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ltZ1NsaWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBNb3Rpb25JbWFnZSBmcm9tICcuL01vdGlvbkltYWdlJztcclxuXHJcbmNvbnN0IHN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCA9IDEwMDAwO1xyXG5jb25zdCBzd2lwZVBvd2VyID0gKG9mZnNldCwgdmVsb2NpdHkpID0+IHtcclxuICByZXR1cm4gTWF0aC5hYnMob2Zmc2V0KSAqIHZlbG9jaXR5O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gSW1nU2xpZGVyKCkge1xyXG4gIGNvbnN0IFtbaW1nLCBpbWdEaXJlY3Rpb25dLCBzZXRJbWddID0gdXNlU3RhdGUoWzAsIDBdKTtcclxuXHJcbiAgY29uc3QgaW1nUmVmID0gdXNlUmVmKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGltZ1JlZi5jdXJyZW50ID0gaW1nUmVmLmN1cnJlbnQuc2xpY2UoMCwgMyk7XHJcbiAgICBjb25zb2xlLmxvZyhpbWdSZWYuY3VycmVudFsyXS5zdHlsZS5vcGFjaXR5KTtcclxuXHJcbiAgICBpbWdSZWYuY3VycmVudFsyXS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGltZ1JlZi5jdXJyZW50WzJdLnN0eWxlLnpJbmRleCA9IDA7XHJcblxyXG4gICAgaW1nUmVmLmN1cnJlbnRbMV0uc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICBpbWdSZWYuY3VycmVudFsxXS5zdHlsZS56SW5kZXggPSAwO1xyXG5cclxuICAgIGltZ1JlZi5jdXJyZW50WzBdLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgaW1nUmVmLmN1cnJlbnRbMF0uc3R5bGUuekluZGV4ID0gMDtcclxuXHJcbiAgICBpbWdSZWYuY3VycmVudFtpbWddLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgaW1nUmVmLmN1cnJlbnRbaW1nXS5zdHlsZS56SW5kZXggPSAxO1xyXG4gIH0sIFtpbWddKTtcclxuXHJcbiAgLy8gY29uc3QgdmFyaWFudHMgPSAoaW1nRGlyZWN0aW9uKSA9PiB7XHJcbiAgLy8gICByZXR1cm4ge1xyXG4gIC8vICAgICBlbnRlcjoge1xyXG4gIC8vICAgICAgIC8vIHg6IGltZ0RpcmVjdGlvbiA+IDAgPyAtMjAwMCA6IDIwMDAsXHJcbiAgLy8gICAgICAgb3BhY2l0eTogMCxcclxuICAvLyAgICAgfSxcclxuXHJcbiAgLy8gICAgIGNlbnRlcjoge1xyXG4gIC8vICAgICAgIHpJbmRleDogMSxcclxuICAvLyAgICAgICAvLyB4OiAwLFxyXG4gIC8vICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIGV4aXQ6IHtcclxuICAvLyAgICAgICB6SW5kZXg6IDAsXHJcbiAgLy8gICAgICAgLy8geDogaW1nRGlyZWN0aW9uIDwgMCA/IC0yMDAwIDogMjAwMCxcclxuICAvLyAgICAgfSxcclxuICAvLyAgIH07XHJcbiAgLy8gfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpbWdIYW5kbGVyKDEpO1xyXG4gICAgfSwgNTAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW2ltZ10pO1xyXG5cclxuICBjb25zdCBpbWdIYW5kbGVyID0gKGRpcmVjdGlvbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaW1nKTtcclxuXHJcbiAgICBjb25zdCBpbWdBbW91bnQgPSBpbWdBcnIubGVuZ3RoO1xyXG4gICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcclxuICAgICAgcmV0dXJuIHNldEltZyhbKGltZyArIGRpcmVjdGlvbikgJSBpbWdBbW91bnQsIGRpcmVjdGlvbl0pO1xyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPCAwKSB7XHJcbiAgICAgIHJldHVybiBzZXRJbWcoWyhpbWcgKyBkaXJlY3Rpb24gKyBpbWdBbW91bnQpICUgaW1nQW1vdW50LCBkaXJlY3Rpb25dKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9IGN1c3RvbT17aW1nRGlyZWN0aW9ufT5cclxuICAgICAgICAgIHtpbWdBcnIubWFwKChpbWcsIGkpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW1nKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TW90aW9uSW1hZ2VcclxuICAgICAgICAgICAgICAgIGtleT17aW1nfVxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZFJlZj17KGVsKSA9PiAoaW1nUmVmLmN1cnJlbnRbaV0gPSBlbCl9XHJcbiAgICAgICAgICAgICAgICAvLyBjdXN0b209e2ltZ0RpcmVjdGlvbn1cclxuICAgICAgICAgICAgICAgIC8vIHZhcmlhbnRzPXt2YXJpYW50cyhpbWdEaXJlY3Rpb24pfVxyXG4gICAgICAgICAgICAgICAgLy8gaW5pdGlhbD1cImVudGVyXCJcclxuICAgICAgICAgICAgICAgIC8vIGFuaW1hdGU9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgLy8gZXhpdD1cImV4aXRcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICB4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3R3ZWVuJyxcclxuICAgICAgICAgICAgICAgICAgICBzdGlmZm5lc3M6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICBkYW1waW5nOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eToge2R1cmF0aW9uOiAwLjN9LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17aW1nfVxyXG4gICAgICAgICAgICAgICAgZHJhZz1cInhcIlxyXG4gICAgICAgICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7bGVmdDogMCwgcmlnaHQ6IDB9fVxyXG4gICAgICAgICAgICAgICAgZHJhZ0VsYXN0aWM9ezF9XHJcbiAgICAgICAgICAgICAgICBvbkRyYWdFbmQ9eyhlLCB7b2Zmc2V0LCB2ZWxvY2l0eX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgc3dpcGUgPSBzd2lwZVBvd2VyKG9mZnNldC54LCB2ZWxvY2l0eS54KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmIChzd2lwZSA8IHN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ0hhbmRsZXIoLTEpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlID4gLXN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ0hhbmRsZXIoMSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgIHsvKiA8TW90aW9uSW1hZ2VcclxuICAgICAgICAgICAga2V5PXtpbWd9XHJcbiAgICAgICAgICAgIGN1c3RvbT17aW1nRGlyZWN0aW9ufVxyXG4gICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHMoaW1nRGlyZWN0aW9uKX1cclxuICAgICAgICAgICAgaW5pdGlhbD1cImVudGVyXCJcclxuICAgICAgICAgICAgYW5pbWF0ZT1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIGV4aXQ9XCJleGl0XCJcclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgIHg6IHt0eXBlOiAndHdlZW4nLCBzdGlmZm5lc3M6IDIwMCwgZGFtcGluZzogMzAsIGR1cmF0aW9uOiAxfSxcclxuICAgICAgICAgICAgICBvcGFjaXR5OiB7ZHVyYXRpb246IDAuM30sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHNyYz17aW1nQXJyW2ltZ119XHJcbiAgICAgICAgICAgIGRyYWc9XCJ4XCJcclxuICAgICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7bGVmdDogMCwgcmlnaHQ6IDB9fVxyXG4gICAgICAgICAgICBkcmFnRWxhc3RpYz17MX1cclxuICAgICAgICAgICAgb25EcmFnRW5kPXsoZSwge29mZnNldCwgdmVsb2NpdHl9KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3dpcGUgPSBzd2lwZVBvd2VyKG9mZnNldC54LCB2ZWxvY2l0eS54KTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHN3aXBlIDwgc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdIYW5kbGVyKC0xKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlID4gLXN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgaW1nSGFuZGxlcigxKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPiAqL31cclxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2J1dHRvbk5leHR9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbWdIYW5kbGVyKDEpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsn4oCjJ31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2J1dHRvblByZXZ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbWdIYW5kbGVyKC0xKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7J+KAoyd9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1nU2xpZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9