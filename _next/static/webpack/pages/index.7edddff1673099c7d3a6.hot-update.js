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
        children: [_imgArr__WEBPACK_IMPORTED_MODULE_4__["default"].map = function (img, i) {
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
            lineNumber: 59,
            columnNumber: 17
          }, _this);
        }, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MotionImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
          onDragEnd: function onDragEnd(e, _ref2) {
            var offset = _ref2.offset,
                velocity = _ref2.velocity;
            var swipe = swipePower(offset.x, velocity.x);

            if (swipe < swipeConfidenceThreshold) {
              imgHandler(-1);
            } else if (swipe > -swipeConfidenceThreshold) {
              imgHandler(1);
            }
          }
        }, img, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
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
        lineNumber: 119,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ImgSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__buttonPrev,
        onClick: function onClick() {
          return imgHandler(-1);
        },
        children: '‣'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2ltZ1NsaWRlci9JbWdTbGlkZXIuanMiXSwibmFtZXMiOlsic3dpcGVDb25maWRlbmNlVGhyZXNob2xkIiwic3dpcGVQb3dlciIsIm9mZnNldCIsInZlbG9jaXR5IiwiTWF0aCIsImFicyIsIkltZ1NsaWRlciIsInVzZVN0YXRlIiwiaW1nIiwiaW1nRGlyZWN0aW9uIiwic2V0SW1nIiwidmFyaWFudHMiLCJlbnRlciIsIm9wYWNpdHkiLCJjZW50ZXIiLCJ6SW5kZXgiLCJleGl0IiwidXNlRWZmZWN0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImltZ0hhbmRsZXIiLCJjbGVhckludGVydmFsIiwiZGlyZWN0aW9uIiwiY29uc29sZSIsImxvZyIsImltZ0Ftb3VudCIsImltZ0FyciIsImxlbmd0aCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1hcCIsImkiLCJ4IiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJkdXJhdGlvbiIsImxlZnQiLCJyaWdodCIsImUiLCJzd2lwZSIsImNvbnRhaW5lcl9fYnV0dG9uTmV4dCIsImNvbnRhaW5lcl9fYnV0dG9uUHJldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSx3QkFBd0IsR0FBRyxLQUFqQzs7QUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQVNDLFFBQVQsRUFBc0I7QUFDdkMsU0FBT0MsSUFBSSxDQUFDQyxHQUFMLENBQVNILE1BQVQsSUFBbUJDLFFBQTFCO0FBQ0QsQ0FGRDs7QUFJQSxTQUFTRyxTQUFULEdBQXFCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ21CQyxzREFBUSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxDQUQzQjtBQUFBO0FBQUEsTUFDWEMsR0FEVztBQUFBLE1BQ05DLFlBRE07QUFBQSxNQUNTQyxNQURU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NUNvQix3QkFBVSxDQUFDLENBQUQsQ0FBVjtBQUNEO0FBQ0Y7QUF2QkgsV0FDT1osR0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWlFRTtBQUNFLGlCQUFTLEVBQUVvQiw2REFBTSxDQUFDYSxxQkFEcEI7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFBTXJCLFVBQVUsQ0FBQyxDQUFELENBQWhCO0FBQUEsU0FGWDtBQUFBLGtCQUlHO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpFRixlQXVFRTtBQUNFLGlCQUFTLEVBQUVRLDZEQUFNLENBQUNjLHFCQURwQjtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNdEIsVUFBVSxDQUFDLENBQUMsQ0FBRixDQUFoQjtBQUFBLFNBRlg7QUFBQSxrQkFJRztBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFrRkQ7O0dBMUhRZCxTOztLQUFBQSxTO0FBNEhNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZWRkZGZmMTY3MzA5OWM3ZDNhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QW5pbWF0ZVByZXNlbmNlfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IGltZ0FyciBmcm9tICcuL2ltZ0Fycic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbWdTbGlkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgTW90aW9uSW1hZ2UgZnJvbSAnLi9Nb3Rpb25JbWFnZSc7XHJcblxyXG5jb25zdCBzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQgPSAxMDAwMDtcclxuY29uc3Qgc3dpcGVQb3dlciA9IChvZmZzZXQsIHZlbG9jaXR5KSA9PiB7XHJcbiAgcmV0dXJuIE1hdGguYWJzKG9mZnNldCkgKiB2ZWxvY2l0eTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIEltZ1NsaWRlcigpIHtcclxuICBjb25zdCBbW2ltZywgaW1nRGlyZWN0aW9uXSwgc2V0SW1nXSA9IHVzZVN0YXRlKFswLCAwXSk7XHJcblxyXG4gIGNvbnN0IHZhcmlhbnRzID0gKGltZ0RpcmVjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZW50ZXI6IHtcclxuICAgICAgICAvLyB4OiBpbWdEaXJlY3Rpb24gPiAwID8gLTIwMDAgOiAyMDAwLFxyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBjZW50ZXI6IHtcclxuICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgLy8geDogMCxcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB9LFxyXG4gICAgICBleGl0OiB7XHJcbiAgICAgICAgekluZGV4OiAwLFxyXG4gICAgICAgIC8vIHg6IGltZ0RpcmVjdGlvbiA8IDAgPyAtMjAwMCA6IDIwMDAsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaW1nSGFuZGxlcigxKTtcclxuICAgIH0sIDUwMDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtpbWddKTtcclxuXHJcbiAgY29uc3QgaW1nSGFuZGxlciA9IChkaXJlY3Rpb24pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRpcmVjdGlvbik7XHJcblxyXG4gICAgY29uc3QgaW1nQW1vdW50ID0gaW1nQXJyLmxlbmd0aDtcclxuICAgIGlmIChkaXJlY3Rpb24gPiAwKSB7XHJcbiAgICAgIHJldHVybiBzZXRJbWcoWyhpbWcgKyBkaXJlY3Rpb24pICUgaW1nQW1vdW50LCBkaXJlY3Rpb25dKTtcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uIDwgMCkge1xyXG4gICAgICByZXR1cm4gc2V0SW1nKFsoaW1nICsgZGlyZWN0aW9uICsgaW1nQW1vdW50KSAlIGltZ0Ftb3VudCwgZGlyZWN0aW9uXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfSBjdXN0b209e2ltZ0RpcmVjdGlvbn0+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIChpbWdBcnIubWFwID0gKGltZywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TW90aW9uSW1hZ2VcclxuICAgICAgICAgICAgICAgICAga2V5PXtpbWd9XHJcbiAgICAgICAgICAgICAgICAgIGN1c3RvbT17aW1nRGlyZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHMoaW1nRGlyZWN0aW9uKX1cclxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImVudGVyXCJcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIGV4aXQ9XCJleGl0XCJcclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0d2VlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdGlmZm5lc3M6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICAgIGRhbXBpbmc6IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiB7ZHVyYXRpb246IDAuM30sXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1nQXJyW2ltZ119XHJcbiAgICAgICAgICAgICAgICAgIGRyYWc9XCJ4XCJcclxuICAgICAgICAgICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7bGVmdDogMCwgcmlnaHQ6IDB9fVxyXG4gICAgICAgICAgICAgICAgICBkcmFnRWxhc3RpYz17MX1cclxuICAgICAgICAgICAgICAgICAgb25EcmFnRW5kPXsoZSwge29mZnNldCwgdmVsb2NpdHl9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3dpcGUgPSBzd2lwZVBvd2VyKG9mZnNldC54LCB2ZWxvY2l0eS54KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN3aXBlIDwgc3dpcGVDb25maWRlbmNlVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWdIYW5kbGVyKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlID4gLXN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaW1nSGFuZGxlcigxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgPE1vdGlvbkltYWdlXHJcbiAgICAgICAgICAgIGtleT17aW1nfVxyXG4gICAgICAgICAgICBjdXN0b209e2ltZ0RpcmVjdGlvbn1cclxuICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzKGltZ0RpcmVjdGlvbil9XHJcbiAgICAgICAgICAgIGluaXRpYWw9XCJlbnRlclwiXHJcbiAgICAgICAgICAgIGFuaW1hdGU9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBleGl0PVwiZXhpdFwiXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgICB4OiB7dHlwZTogJ3R3ZWVuJywgc3RpZmZuZXNzOiAyMDAsIGRhbXBpbmc6IDMwLCBkdXJhdGlvbjogMX0sXHJcbiAgICAgICAgICAgICAgb3BhY2l0eToge2R1cmF0aW9uOiAwLjN9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzcmM9e2ltZ0FycltpbWddfVxyXG4gICAgICAgICAgICBkcmFnPVwieFwiXHJcbiAgICAgICAgICAgIGRyYWdDb25zdHJhaW50cz17e2xlZnQ6IDAsIHJpZ2h0OiAwfX1cclxuICAgICAgICAgICAgZHJhZ0VsYXN0aWM9ezF9XHJcbiAgICAgICAgICAgIG9uRHJhZ0VuZD17KGUsIHtvZmZzZXQsIHZlbG9jaXR5fSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN3aXBlID0gc3dpcGVQb3dlcihvZmZzZXQueCwgdmVsb2NpdHkueCk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChzd2lwZSA8IHN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgaW1nSGFuZGxlcigtMSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChzd2lwZSA+IC1zd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgIGltZ0hhbmRsZXIoMSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2J1dHRvbk5leHR9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbWdIYW5kbGVyKDEpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsn4oCjJ31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2J1dHRvblByZXZ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbWdIYW5kbGVyKC0xKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7J+KAoyd9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1nU2xpZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9