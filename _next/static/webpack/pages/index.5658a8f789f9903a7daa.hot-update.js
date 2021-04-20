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
  }, [img]);
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
            },
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
            lineNumber: 59,
            columnNumber: 15
          }, _this);
        })
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
        lineNumber: 88,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ImgSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__buttonPrev,
        onClick: function onClick() {
          return imgHandler(-1);
        },
        children: '‣'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2ltZ1NsaWRlci9JbWdTbGlkZXIuanMiXSwibmFtZXMiOlsic3dpcGVDb25maWRlbmNlVGhyZXNob2xkIiwic3dpcGVQb3dlciIsIm9mZnNldCIsInZlbG9jaXR5IiwiTWF0aCIsImFicyIsIkltZ1NsaWRlciIsInVzZVN0YXRlIiwiaW1nIiwiaW1nRGlyZWN0aW9uIiwic2V0SW1nIiwiaW1nUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwib3BhY2l0eSIsInpJbmRleCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJpbWdIYW5kbGVyIiwiY2xlYXJJbnRlcnZhbCIsImRpcmVjdGlvbiIsImltZ0Ftb3VudCIsImltZ0FyciIsImxlbmd0aCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1hcCIsImkiLCJlbCIsIngiLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImR1cmF0aW9uIiwibGVmdCIsInJpZ2h0IiwiZSIsInN3aXBlIiwiY29udGFpbmVyX19idXR0b25OZXh0IiwiY29udGFpbmVyX19idXR0b25QcmV2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHdCQUF3QixHQUFHLEtBQWpDOztBQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE1BQUQsRUFBU0MsUUFBVCxFQUFzQjtBQUN2QyxTQUFPQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0gsTUFBVCxJQUFtQkMsUUFBMUI7QUFDRCxDQUZEOztBQUlBLFNBQVNHLFNBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDbUJDLHNEQUFRLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFELENBRDNCO0FBQUE7QUFBQSxNQUNYQyxHQURXO0FBQUEsTUFDTkMsWUFETTtB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QUFNLENBQUNlLHFCQURwQjtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNckIsVUFBVSxDQUFDLENBQUMsQ0FBRixDQUFoQjtBQUFBLFNBRlg7QUFBQSxrQkFJRztBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFtREQ7O0dBM0ZRakIsUzs7S0FBQUEsUztBQTZGTUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTY1OGE4Zjc4OWY5OTAzYTdkYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QW5pbWF0ZVByZXNlbmNlfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGltZ0FyciBmcm9tICcuL2ltZ0Fycic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbWdTbGlkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgTW90aW9uSW1hZ2UgZnJvbSAnLi9Nb3Rpb25JbWFnZSc7XHJcblxyXG5jb25zdCBzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQgPSAxMDAwMDtcclxuY29uc3Qgc3dpcGVQb3dlciA9IChvZmZzZXQsIHZlbG9jaXR5KSA9PiB7XHJcbiAgcmV0dXJuIE1hdGguYWJzKG9mZnNldCkgKiB2ZWxvY2l0eTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIEltZ1NsaWRlcigpIHtcclxuICBjb25zdCBbW2ltZywgaW1nRGlyZWN0aW9uXSwgc2V0SW1nXSA9IHVzZVN0YXRlKFswLCAwXSk7XHJcblxyXG4gIGNvbnN0IGltZ1JlZiA9IHVzZVJlZihbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbWdSZWYuY3VycmVudCA9IGltZ1JlZi5jdXJyZW50LnNsaWNlKDAsIDMpO1xyXG4gICAgY29uc29sZS5sb2coaW1nUmVmLmN1cnJlbnRbMl0uc3R5bGUub3BhY2l0eSk7XHJcblxyXG4gICAgaW1nUmVmLmN1cnJlbnRbMl0uc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICBpbWdSZWYuY3VycmVudFsyXS5zdHlsZS56SW5kZXggPSAwO1xyXG5cclxuICAgIGltZ1JlZi5jdXJyZW50WzFdLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgaW1nUmVmLmN1cnJlbnRbMV0uc3R5bGUuekluZGV4ID0gMDtcclxuXHJcbiAgICBpbWdSZWYuY3VycmVudFswXS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGltZ1JlZi5jdXJyZW50WzBdLnN0eWxlLnpJbmRleCA9IDA7XHJcblxyXG4gICAgaW1nUmVmLmN1cnJlbnRbaW1nXS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIGltZ1JlZi5jdXJyZW50W2ltZ10uc3R5bGUuekluZGV4ID0gMTtcclxuICB9LCBbaW1nXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaW1nSGFuZGxlcigxKTtcclxuICAgIH0sIDUwMDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtpbWddKTtcclxuXHJcbiAgY29uc3QgaW1nSGFuZGxlciA9IChkaXJlY3Rpb24pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGltZyk7XHJcblxyXG4gICAgY29uc3QgaW1nQW1vdW50ID0gaW1nQXJyLmxlbmd0aDtcclxuICAgIGlmIChkaXJlY3Rpb24gPiAwKSB7XHJcbiAgICAgIHJldHVybiBzZXRJbWcoWyhpbWcgKyBkaXJlY3Rpb24pICUgaW1nQW1vdW50LCBkaXJlY3Rpb25dKTtcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uIDwgMCkge1xyXG4gICAgICByZXR1cm4gc2V0SW1nKFsoaW1nICsgZGlyZWN0aW9uICsgaW1nQW1vdW50KSAlIGltZ0Ftb3VudCwgZGlyZWN0aW9uXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfSBjdXN0b209e2ltZ0RpcmVjdGlvbn0+XHJcbiAgICAgICAgICB7aW1nQXJyLm1hcCgoaW1nLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZyk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPE1vdGlvbkltYWdlXHJcbiAgICAgICAgICAgICAgICBrZXk9e2ltZ31cclxuICAgICAgICAgICAgICAgIGZvcndhcmRSZWY9eyhlbCkgPT4gKGltZ1JlZi5jdXJyZW50W2ldID0gZWwpfVxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICB4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3R3ZWVuJyxcclxuICAgICAgICAgICAgICAgICAgICBzdGlmZm5lc3M6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICBkYW1waW5nOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eToge2R1cmF0aW9uOiAwLjN9LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17aW1nfVxyXG4gICAgICAgICAgICAgICAgZHJhZz1cInhcIlxyXG4gICAgICAgICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7bGVmdDogMCwgcmlnaHQ6IDB9fVxyXG4gICAgICAgICAgICAgICAgZHJhZ0VsYXN0aWM9ezF9XHJcbiAgICAgICAgICAgICAgICBvbkRyYWdFbmQ9eyhlLCB7b2Zmc2V0LCB2ZWxvY2l0eX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgc3dpcGUgPSBzd2lwZVBvd2VyKG9mZnNldC54LCB2ZWxvY2l0eS54KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmIChzd2lwZSA8IHN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ0hhbmRsZXIoLTEpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlID4gLXN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ0hhbmRsZXIoMSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fYnV0dG9uTmV4dH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGltZ0hhbmRsZXIoMSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyfigKMnfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fYnV0dG9uUHJldn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGltZ0hhbmRsZXIoLTEpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsn4oCjJ31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWdTbGlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=