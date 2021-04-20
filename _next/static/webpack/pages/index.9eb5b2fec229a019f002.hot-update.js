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
  }, [img]);

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
  }; // useEffect(() => {
  //   const interval = setInterval(() => {
  //     imgHandler(1);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [img]);


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
            lineNumber: 72,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ImgSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__buttonNext,
        onClick: function onClick() {
          return imgHandler(1);
        },
        children: '‣'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ImgSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__buttonPrev,
        onClick: function onClick() {
          return imgHandler(-1);
        },
        children: '‣'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(ImgSlider, "CV31i7PGNoNDbrR0TKrmSvCecIk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2ltZ1NsaWRlci9JbWdTbGlkZXIuanMiXSwibmFtZXMiOlsic3dpcGVDb25maWRlbmNlVGhyZXNob2xkIiwic3dpcGVQb3dlciIsIm9mZnNldCIsInZlbG9jaXR5IiwiTWF0aCIsImFicyIsIkltZ1NsaWRlciIsInVzZVN0YXRlIiwiaW1nIiwiaW1nRGlyZWN0aW9uIiwic2V0SW1nIiwiaW1nUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwib3BhY2l0eSIsInpJbmRleCIsInZhcmlhbnRzIiwiZW50ZXIiLCJjZW50ZXIiLCJleGl0IiwiaW1nSGFuZGxlciIsImRpcmVjdGlvbiIsImltZ0Ftb3VudCIsImltZ0FyciIsImxlbmd0aCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1hcCIsImkiLCJlbCIsIngiLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImR1cmF0aW9uIiwibGVmdCIsInJpZ2h0IiwiZSIsInN3aXBlIiwiY29udGFpbmVyX19idXR0b25OZXh0IiwiY29udGFpbmVyX19idXR0b25QcmV2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHdCQUF3QixHQUFHLEtBQWpDOztBQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE1BQUQsRUFBU0MsUUFBVCxFQUFzQjtBQUN2QyxTQUFPQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0gsTUFBVCxJQUFtQkMsUUFBMUI7QUFDRCxDQUZEOztBQUlBLFNBQVNHLFNBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDbUJDLHNEQUFRLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFELENBRDNCO0FBQUE7QUFBQSxNQUNYQyxHQURXO0FBQUEsTUFDTkMsWUFETTtBQUFBLE1B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QUFBQSxTQUZYO0FBQUEsa0JBSUc7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBa0ZEOztHQXZJUW5CLFM7O0tBQUFBLFM7QUF5SU1BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjllYjViMmZlYzIyOWEwMTlmMDAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0FuaW1hdGVQcmVzZW5jZX0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBpbWdBcnIgZnJvbSAnLi9pbWdBcnInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW1nU2xpZGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IE1vdGlvbkltYWdlIGZyb20gJy4vTW90aW9uSW1hZ2UnO1xyXG5cclxuY29uc3Qgc3dpcGVDb25maWRlbmNlVGhyZXNob2xkID0gMTAwMDA7XHJcbmNvbnN0IHN3aXBlUG93ZXIgPSAob2Zmc2V0LCB2ZWxvY2l0eSkgPT4ge1xyXG4gIHJldHVybiBNYXRoLmFicyhvZmZzZXQpICogdmVsb2NpdHk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBJbWdTbGlkZXIoKSB7XHJcbiAgY29uc3QgW1tpbWcsIGltZ0RpcmVjdGlvbl0sIHNldEltZ10gPSB1c2VTdGF0ZShbMCwgMF0pO1xyXG5cclxuICBjb25zdCBpbWdSZWYgPSB1c2VSZWYoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW1nUmVmLmN1cnJlbnQgPSBpbWdSZWYuY3VycmVudC5zbGljZSgwLCAzKTtcclxuICAgIGNvbnNvbGUubG9nKGltZ1JlZi5jdXJyZW50WzJdLnN0eWxlLm9wYWNpdHkpO1xyXG5cclxuICAgIGltZ1JlZi5jdXJyZW50WzJdLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgaW1nUmVmLmN1cnJlbnRbMl0uc3R5bGUuekluZGV4ID0gMDtcclxuXHJcbiAgICBpbWdSZWYuY3VycmVudFsxXS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGltZ1JlZi5jdXJyZW50WzFdLnN0eWxlLnpJbmRleCA9IDA7XHJcbiAgfSwgW2ltZ10pO1xyXG5cclxuICBjb25zdCB2YXJpYW50cyA9IChpbWdEaXJlY3Rpb24pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVudGVyOiB7XHJcbiAgICAgICAgLy8geDogaW1nRGlyZWN0aW9uID4gMCA/IC0yMDAwIDogMjAwMCxcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgY2VudGVyOiB7XHJcbiAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgIC8vIHg6IDAsXHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgfSxcclxuICAgICAgZXhpdDoge1xyXG4gICAgICAgIHpJbmRleDogMCxcclxuICAgICAgICAvLyB4OiBpbWdEaXJlY3Rpb24gPCAwID8gLTIwMDAgOiAyMDAwLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgLy8gICAgIGltZ0hhbmRsZXIoMSk7XHJcbiAgLy8gICB9LCA1MDAwKTtcclxuICAvLyAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAvLyB9LCBbaW1nXSk7XHJcblxyXG4gIGNvbnN0IGltZ0hhbmRsZXIgPSAoZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpbWcpO1xyXG5cclxuICAgIGNvbnN0IGltZ0Ftb3VudCA9IGltZ0Fyci5sZW5ndGg7XHJcbiAgICBpZiAoZGlyZWN0aW9uID4gMCkge1xyXG4gICAgICByZXR1cm4gc2V0SW1nKFsoaW1nICsgZGlyZWN0aW9uKSAlIGltZ0Ftb3VudCwgZGlyZWN0aW9uXSk7XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA8IDApIHtcclxuICAgICAgcmV0dXJuIHNldEltZyhbKGltZyArIGRpcmVjdGlvbiArIGltZ0Ftb3VudCkgJSBpbWdBbW91bnQsIGRpcmVjdGlvbl0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0gY3VzdG9tPXtpbWdEaXJlY3Rpb259PlxyXG4gICAgICAgICAge2ltZ0Fyci5tYXAoKGltZywgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbWcpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxNb3Rpb25JbWFnZVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbWd9XHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXsoZWwpID0+IChpbWdSZWYuY3VycmVudFtpXSA9IGVsKX1cclxuICAgICAgICAgICAgICAgIGN1c3RvbT17aW1nRGlyZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzKGltZ0RpcmVjdGlvbil9XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPVwiZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBleGl0PVwiZXhpdFwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndHdlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0aWZmbmVzczogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhbXBpbmc6IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiB7ZHVyYXRpb246IDAuM30sXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXtpbWd9XHJcbiAgICAgICAgICAgICAgICBkcmFnPVwieFwiXHJcbiAgICAgICAgICAgICAgICBkcmFnQ29uc3RyYWludHM9e3tsZWZ0OiAwLCByaWdodDogMH19XHJcbiAgICAgICAgICAgICAgICBkcmFnRWxhc3RpYz17MX1cclxuICAgICAgICAgICAgICAgIG9uRHJhZ0VuZD17KGUsIHtvZmZzZXQsIHZlbG9jaXR5fSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBzd2lwZSA9IHN3aXBlUG93ZXIob2Zmc2V0LngsIHZlbG9jaXR5LngpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaWYgKHN3aXBlIDwgc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nSGFuZGxlcigtMSk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3dpcGUgPiAtc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nSGFuZGxlcigxKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgey8qIDxNb3Rpb25JbWFnZVxyXG4gICAgICAgICAgICBrZXk9e2ltZ31cclxuICAgICAgICAgICAgY3VzdG9tPXtpbWdEaXJlY3Rpb259XHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50cyhpbWdEaXJlY3Rpb24pfVxyXG4gICAgICAgICAgICBpbml0aWFsPVwiZW50ZXJcIlxyXG4gICAgICAgICAgICBhbmltYXRlPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgZXhpdD1cImV4aXRcIlxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgeDoge3R5cGU6ICd0d2VlbicsIHN0aWZmbmVzczogMjAwLCBkYW1waW5nOiAzMCwgZHVyYXRpb246IDF9LFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IHtkdXJhdGlvbjogMC4zfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3JjPXtpbWdBcnJbaW1nXX1cclxuICAgICAgICAgICAgZHJhZz1cInhcIlxyXG4gICAgICAgICAgICBkcmFnQ29uc3RyYWludHM9e3tsZWZ0OiAwLCByaWdodDogMH19XHJcbiAgICAgICAgICAgIGRyYWdFbGFzdGljPXsxfVxyXG4gICAgICAgICAgICBvbkRyYWdFbmQ9eyhlLCB7b2Zmc2V0LCB2ZWxvY2l0eX0pID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBzd2lwZSA9IHN3aXBlUG93ZXIob2Zmc2V0LngsIHZlbG9jaXR5LngpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoc3dpcGUgPCBzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgIGltZ0hhbmRsZXIoLTEpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3dpcGUgPiAtc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdIYW5kbGVyKDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fYnV0dG9uTmV4dH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGltZ0hhbmRsZXIoMSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyfigKMnfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fYnV0dG9uUHJldn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGltZ0hhbmRsZXIoLTEpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsn4oCjJ31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWdTbGlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=