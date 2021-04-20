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
        children: _imgArr__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (img, i) {
          console.log(img);
          return img === i && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MotionImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
            lineNumber: 60,
            columnNumber: 17
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
      lineNumber: 54,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(ImgSlider, "o4VwvlsXDyaj66AGjIvpqwHps7U=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2ltZ1NsaWRlci9JbWdTbGlkZXIuanMiXSwibmFtZXMiOlsic3dpcGVDb25maWRlbmNlVGhyZXNob2xkIiwic3dpcGVQb3dlciIsIm9mZnNldCIsInZlbG9jaXR5IiwiTWF0aCIsImFicyIsIkltZ1NsaWRlciIsInVzZVN0YXRlIiwiaW1nIiwiaW1nRGlyZWN0aW9uIiwic2V0SW1nIiwidmFyaWFudHMiLCJlbnRlciIsIm9wYWNpdHkiLCJjZW50ZXIiLCJ6SW5kZXgiLCJleGl0IiwiaW1nSGFuZGxlciIsImRpcmVjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJpbWdBbW91bnQiLCJpbWdBcnIiLCJsZW5ndGgiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYXAiLCJpIiwieCIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZHVyYXRpb24iLCJsZWZ0IiwicmlnaHQiLCJlIiwic3dpcGUiLCJjb250YWluZXJfX2J1dHRvbk5leHQiLCJjb250YWluZXJfX2J1dHRvblByZXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsd0JBQXdCLEdBQUcsS0FBakM7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsTUFBRCxFQUFTQyxRQUFULEVBQXNCO0FBQ3ZDLFNBQU9DLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxNQUFULElBQW1CQyxRQUExQjtBQUNELENBRkQ7O0FBSUEsU0FBU0csU0FBVCxHQUFxQjtBQUFBOztBQUFBOztBQUFBLGtCQUNtQkMsc0RBQVEsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsQ0FEM0I7QUFBQTtBQUFBLE1BQ1hDLEdBRFc7QUFBQSxNQUNOQyxZQURNO0FBQUEsTUFDU0MsTUFEVDs7QUFHbkIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0YsWUFBRCxFQUFrQjtB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TSxDQUFDYSxxQkFEcEI7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFBTXBCLFVBQVUsQ0FBQyxDQUFELENBQWhCO0FBQUEsU0FGWDtBQUFBLGtCQUlHO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxFRixlQXdFRTtBQUNFLGlCQUFTLEVBQUVPLDZEQUFNLENBQUNjLHFCQURwQjtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNckIsVUFBVSxDQUFDLENBQUMsQ0FBRixDQUFoQjtBQUFBLFNBRlg7QUFBQSxrQkFJRztBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFtRkQ7O0dBM0hRWCxTOztLQUFBQSxTO0FBNkhNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMjFjZTUwNWMxZWJkOGQ3NjU0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QW5pbWF0ZVByZXNlbmNlfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGltZ0FyciBmcm9tICcuL2ltZ0Fycic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbWdTbGlkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgTW90aW9uSW1hZ2UgZnJvbSAnLi9Nb3Rpb25JbWFnZSc7XHJcblxyXG5jb25zdCBzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQgPSAxMDAwMDtcclxuY29uc3Qgc3dpcGVQb3dlciA9IChvZmZzZXQsIHZlbG9jaXR5KSA9PiB7XHJcbiAgcmV0dXJuIE1hdGguYWJzKG9mZnNldCkgKiB2ZWxvY2l0eTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIEltZ1NsaWRlcigpIHtcclxuICBjb25zdCBbW2ltZywgaW1nRGlyZWN0aW9uXSwgc2V0SW1nXSA9IHVzZVN0YXRlKFswLCAwXSk7XHJcblxyXG4gIGNvbnN0IHZhcmlhbnRzID0gKGltZ0RpcmVjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZW50ZXI6IHtcclxuICAgICAgICAvLyB4OiBpbWdEaXJlY3Rpb24gPiAwID8gLTIwMDAgOiAyMDAwLFxyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBjZW50ZXI6IHtcclxuICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgLy8geDogMCxcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB9LFxyXG4gICAgICBleGl0OiB7XHJcbiAgICAgICAgekluZGV4OiAwLFxyXG4gICAgICAgIC8vIHg6IGltZ0RpcmVjdGlvbiA8IDAgPyAtMjAwMCA6IDIwMDAsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAvLyAgICAgaW1nSGFuZGxlcigxKTtcclxuICAvLyAgIH0sIDUwMDApO1xyXG4gIC8vICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIC8vIH0sIFtpbWddKTtcclxuXHJcbiAgY29uc3QgaW1nSGFuZGxlciA9IChkaXJlY3Rpb24pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRpcmVjdGlvbik7XHJcblxyXG4gICAgY29uc3QgaW1nQW1vdW50ID0gaW1nQXJyLmxlbmd0aDtcclxuICAgIGlmIChkaXJlY3Rpb24gPiAwKSB7XHJcbiAgICAgIHJldHVybiBzZXRJbWcoWyhpbWcgKyBkaXJlY3Rpb24pICUgaW1nQW1vdW50LCBkaXJlY3Rpb25dKTtcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uIDwgMCkge1xyXG4gICAgICByZXR1cm4gc2V0SW1nKFsoaW1nICsgZGlyZWN0aW9uICsgaW1nQW1vdW50KSAlIGltZ0Ftb3VudCwgZGlyZWN0aW9uXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfSBjdXN0b209e2ltZ0RpcmVjdGlvbn0+XHJcbiAgICAgICAgICB7aW1nQXJyLm1hcCgoaW1nLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZyk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgaW1nID09PSBpICYmIChcclxuICAgICAgICAgICAgICAgIDxNb3Rpb25JbWFnZVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2ltZ31cclxuICAgICAgICAgICAgICAgICAgY3VzdG9tPXtpbWdEaXJlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50cyhpbWdEaXJlY3Rpb24pfVxyXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPVwiZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBhbmltYXRlPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgZXhpdD1cImV4aXRcIlxyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgeDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3R3ZWVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHN0aWZmbmVzczogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGFtcGluZzogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHtkdXJhdGlvbjogMC4zfSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWd9XHJcbiAgICAgICAgICAgICAgICAgIGRyYWc9XCJ4XCJcclxuICAgICAgICAgICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7bGVmdDogMCwgcmlnaHQ6IDB9fVxyXG4gICAgICAgICAgICAgICAgICBkcmFnRWxhc3RpYz17MX1cclxuICAgICAgICAgICAgICAgICAgb25EcmFnRW5kPXsoZSwge29mZnNldCwgdmVsb2NpdHl9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3dpcGUgPSBzd2lwZVBvd2VyKG9mZnNldC54LCB2ZWxvY2l0eS54KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN3aXBlIDwgc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWdIYW5kbGVyKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlID4gLXN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaW1nSGFuZGxlcigxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgIHsvKiA8TW90aW9uSW1hZ2VcclxuICAgICAgICAgICAga2V5PXtpbWd9XHJcbiAgICAgICAgICAgIGN1c3RvbT17aW1nRGlyZWN0aW9ufVxyXG4gICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHMoaW1nRGlyZWN0aW9uKX1cclxuICAgICAgICAgICAgaW5pdGlhbD1cImVudGVyXCJcclxuICAgICAgICAgICAgYW5pbWF0ZT1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIGV4aXQ9XCJleGl0XCJcclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgIHg6IHt0eXBlOiAndHdlZW4nLCBzdGlmZm5lc3M6IDIwMCwgZGFtcGluZzogMzAsIGR1cmF0aW9uOiAxfSxcclxuICAgICAgICAgICAgICBvcGFjaXR5OiB7ZHVyYXRpb246IDAuM30sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHNyYz17aW1nQXJyW2ltZ119XHJcbiAgICAgICAgICAgIGRyYWc9XCJ4XCJcclxuICAgICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7bGVmdDogMCwgcmlnaHQ6IDB9fVxyXG4gICAgICAgICAgICBkcmFnRWxhc3RpYz17MX1cclxuICAgICAgICAgICAgb25EcmFnRW5kPXsoZSwge29mZnNldCwgdmVsb2NpdHl9KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3dpcGUgPSBzd2lwZVBvd2VyKG9mZnNldC54LCB2ZWxvY2l0eS54KTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHN3aXBlIDwgc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdIYW5kbGVyKC0xKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlID4gLXN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgaW1nSGFuZGxlcigxKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPiAqL31cclxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2J1dHRvbk5leHR9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbWdIYW5kbGVyKDEpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsn4oCjJ31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2J1dHRvblByZXZ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbWdIYW5kbGVyKC0xKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7J+KAoyd9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1nU2xpZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9