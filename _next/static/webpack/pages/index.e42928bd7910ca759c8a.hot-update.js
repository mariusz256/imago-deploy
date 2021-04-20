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
            lineNumber: 61,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ImgSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__buttonNext,
        onClick: function onClick() {
          return imgHandler(1);
        },
        children: '‣'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ImgSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__buttonPrev,
        onClick: function onClick() {
          return imgHandler(-1);
        },
        children: '‣'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(ImgSlider, "AO0hvZUXLC9nNYZLfrAxlmCe6nM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2ltZ1NsaWRlci9JbWdTbGlkZXIuanMiXSwibmFtZXMiOlsic3dpcGVDb25maWRlbmNlVGhyZXNob2xkIiwic3dpcGVQb3dlciIsIm9mZnNldCIsInZlbG9jaXR5IiwiTWF0aCIsImFicyIsIkltZ1NsaWRlciIsInVzZVN0YXRlIiwiaW1nIiwiaW1nRGlyZWN0aW9uIiwic2V0SW1nIiwiaW1nUmVmIiwidXNlUmVmIiwidmFyaWFudHMiLCJlbnRlciIsIm9wYWNpdHkiLCJjZW50ZXIiLCJ6SW5kZXgiLCJleGl0IiwiaW1nSGFuZGxlciIsImRpcmVjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJpbWdBbW91bnQiLCJpbWdBcnIiLCJsZW5ndGgiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYXAiLCJpIiwieCIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZHVyYXRpb24iLCJsZWZ0IiwicmlnaHQiLCJlIiwic3dpcGUiLCJjb250YWluZXJfX2J1dHRvbk5leHQiLCJjb250YWluZXJfX2J1dHRvblByZXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsd0JBQXdCLEdBQUcsS0FBakM7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsTUFBRCxFQUFTQyxRQUFULEVBQXNCO0FBQ3ZDLFNBQU9DLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxNQUFULElBQW1CQyxRQUExQjtBQUNELENBRkQ7O0FBSUEsU0FBU0csU0FBVCxHQUFxQjtBQUFBOztBQUFBOztBQUFBLGtCQUNtQkMsc0RBQVEsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsQ0FEM0I7QUFBQTtBQUFBLE1BQ1hDLEdBRFc7QUFBQSxNQUNOQyxZQURNO0FBQUEsTUFDU0MsTUFEVDs7QUFHbkIsTUFBTUMsTUFBTSxHQUFHQyxvREFBTSxDQUFD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QUFBQSxjQURGLGVBZ0VFO0FBQ0UsaUJBQVMsRUFBRWtCLDZEQUFNLENBQUNhLHFCQURwQjtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNcEIsVUFBVSxDQUFDLENBQUQsQ0FBaEI7QUFBQSxTQUZYO0FBQUEsa0JBSUc7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEVGLGVBc0VFO0FBQ0UsaUJBQVMsRUFBRU8sNkRBQU0sQ0FBQ2MscUJBRHBCO0FBRUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1yQixVQUFVLENBQUMsQ0FBQyxDQUFGLENBQWhCO0FBQUEsU0FGWDtBQUFBLGtCQUlHO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWlGRDs7R0EzSFFiLFM7O0tBQUFBLFM7QUE2SE1BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU0MjkyOGJkNzkxMGNhNzU5YzhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0FuaW1hdGVQcmVzZW5jZX0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBpbWdBcnIgZnJvbSAnLi9pbWdBcnInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW1nU2xpZGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IE1vdGlvbkltYWdlIGZyb20gJy4vTW90aW9uSW1hZ2UnO1xyXG5cclxuY29uc3Qgc3dpcGVDb25maWRlbmNlVGhyZXNob2xkID0gMTAwMDA7XHJcbmNvbnN0IHN3aXBlUG93ZXIgPSAob2Zmc2V0LCB2ZWxvY2l0eSkgPT4ge1xyXG4gIHJldHVybiBNYXRoLmFicyhvZmZzZXQpICogdmVsb2NpdHk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBJbWdTbGlkZXIoKSB7XHJcbiAgY29uc3QgW1tpbWcsIGltZ0RpcmVjdGlvbl0sIHNldEltZ10gPSB1c2VTdGF0ZShbMCwgMF0pO1xyXG5cclxuICBjb25zdCBpbWdSZWYgPSB1c2VSZWYoW10pO1xyXG5cclxuICBjb25zdCB2YXJpYW50cyA9IChpbWdEaXJlY3Rpb24pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVudGVyOiB7XHJcbiAgICAgICAgLy8geDogaW1nRGlyZWN0aW9uID4gMCA/IC0yMDAwIDogMjAwMCxcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgY2VudGVyOiB7XHJcbiAgICAgICAgekluZGV4OiAxLFxyXG4gICAgICAgIC8vIHg6IDAsXHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgfSxcclxuICAgICAgZXhpdDoge1xyXG4gICAgICAgIHpJbmRleDogMCxcclxuICAgICAgICAvLyB4OiBpbWdEaXJlY3Rpb24gPCAwID8gLTIwMDAgOiAyMDAwLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgLy8gICAgIGltZ0hhbmRsZXIoMSk7XHJcbiAgLy8gICB9LCA1MDAwKTtcclxuICAvLyAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAvLyB9LCBbaW1nXSk7XHJcblxyXG4gIGNvbnN0IGltZ0hhbmRsZXIgPSAoZGlyZWN0aW9uKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpbWcpO1xyXG5cclxuICAgIGNvbnN0IGltZ0Ftb3VudCA9IGltZ0Fyci5sZW5ndGg7XHJcbiAgICBpZiAoZGlyZWN0aW9uID4gMCkge1xyXG4gICAgICByZXR1cm4gc2V0SW1nKFsoaW1nICsgZGlyZWN0aW9uKSAlIGltZ0Ftb3VudCwgZGlyZWN0aW9uXSk7XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA8IDApIHtcclxuICAgICAgcmV0dXJuIHNldEltZyhbKGltZyArIGRpcmVjdGlvbiArIGltZ0Ftb3VudCkgJSBpbWdBbW91bnQsIGRpcmVjdGlvbl0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0gY3VzdG9tPXtpbWdEaXJlY3Rpb259PlxyXG4gICAgICAgICAge2ltZ0Fyci5tYXAoKGltZywgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbWcpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxNb3Rpb25JbWFnZVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbWd9XHJcbiAgICAgICAgICAgICAgICBjdXN0b209e2ltZ0RpcmVjdGlvbn1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50cyhpbWdEaXJlY3Rpb24pfVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD1cImVudGVyXCJcclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgZXhpdD1cImV4aXRcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICB4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3R3ZWVuJyxcclxuICAgICAgICAgICAgICAgICAgICBzdGlmZm5lc3M6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICBkYW1waW5nOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eToge2R1cmF0aW9uOiAwLjN9LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17aW1nfVxyXG4gICAgICAgICAgICAgICAgZHJhZz1cInhcIlxyXG4gICAgICAgICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7bGVmdDogMCwgcmlnaHQ6IDB9fVxyXG4gICAgICAgICAgICAgICAgZHJhZ0VsYXN0aWM9ezF9XHJcbiAgICAgICAgICAgICAgICBvbkRyYWdFbmQ9eyhlLCB7b2Zmc2V0LCB2ZWxvY2l0eX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgc3dpcGUgPSBzd2lwZVBvd2VyKG9mZnNldC54LCB2ZWxvY2l0eS54KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmIChzd2lwZSA8IHN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ0hhbmRsZXIoLTEpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlID4gLXN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ0hhbmRsZXIoMSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgIHsvKiA8TW90aW9uSW1hZ2VcclxuICAgICAgICAgICAga2V5PXtpbWd9XHJcbiAgICAgICAgICAgIGN1c3RvbT17aW1nRGlyZWN0aW9ufVxyXG4gICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHMoaW1nRGlyZWN0aW9uKX1cclxuICAgICAgICAgICAgaW5pdGlhbD1cImVudGVyXCJcclxuICAgICAgICAgICAgYW5pbWF0ZT1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIGV4aXQ9XCJleGl0XCJcclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgIHg6IHt0eXBlOiAndHdlZW4nLCBzdGlmZm5lc3M6IDIwMCwgZGFtcGluZzogMzAsIGR1cmF0aW9uOiAxfSxcclxuICAgICAgICAgICAgICBvcGFjaXR5OiB7ZHVyYXRpb246IDAuM30sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHNyYz17aW1nQXJyW2ltZ119XHJcbiAgICAgICAgICAgIGRyYWc9XCJ4XCJcclxuICAgICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7bGVmdDogMCwgcmlnaHQ6IDB9fVxyXG4gICAgICAgICAgICBkcmFnRWxhc3RpYz17MX1cclxuICAgICAgICAgICAgb25EcmFnRW5kPXsoZSwge29mZnNldCwgdmVsb2NpdHl9KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3dpcGUgPSBzd2lwZVBvd2VyKG9mZnNldC54LCB2ZWxvY2l0eS54KTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHN3aXBlIDwgc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdIYW5kbGVyKC0xKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlID4gLXN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgaW1nSGFuZGxlcigxKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPiAqL31cclxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2J1dHRvbk5leHR9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbWdIYW5kbGVyKDEpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsn4oCjJ31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2J1dHRvblByZXZ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbWdIYW5kbGVyKC0xKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7J+KAoyd9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1nU2xpZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9