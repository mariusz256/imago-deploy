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
  console.log(imgRef.current[2]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    imgRef.current = imgRef.current.slice(0, 3);
  }, []);

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
            lineNumber: 67,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ImgSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__buttonNext,
        onClick: function onClick() {
          return imgHandler(1);
        },
        children: '‣'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ImgSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__buttonPrev,
        onClick: function onClick() {
          return imgHandler(-1);
        },
        children: '‣'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2ltZ1NsaWRlci9JbWdTbGlkZXIuanMiXSwibmFtZXMiOlsic3dpcGVDb25maWRlbmNlVGhyZXNob2xkIiwic3dpcGVQb3dlciIsIm9mZnNldCIsInZlbG9jaXR5IiwiTWF0aCIsImFicyIsIkltZ1NsaWRlciIsInVzZVN0YXRlIiwiaW1nIiwiaW1nRGlyZWN0aW9uIiwic2V0SW1nIiwiaW1nUmVmIiwidXNlUmVmIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJ1c2VFZmZlY3QiLCJzbGljZSIsInZhcmlhbnRzIiwiZW50ZXIiLCJvcGFjaXR5IiwiY2VudGVyIiwiekluZGV4IiwiZXhpdCIsImltZ0hhbmRsZXIiLCJkaXJlY3Rpb24iLCJpbWdBbW91bnQiLCJpbWdBcnIiLCJsZW5ndGgiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYXAiLCJpIiwiZWwiLCJ4IiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJkdXJhdGlvbiIsImxlZnQiLCJyaWdodCIsImUiLCJzd2lwZSIsImNvbnRhaW5lcl9fYnV0dG9uTmV4dCIsImNvbnRhaW5lcl9fYnV0dG9uUHJldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSx3QkFBd0IsR0FBRyxLQUFqQzs7QUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQVNDLFFBQVQsRUFBc0I7QUFDdkMsU0FBT0MsSUFBSSxDQUFDQyxHQUFMLENBQVNILE1BQVQsSUFBbUJDLFFBQTFCO0FBQ0QsQ0FGRDs7QUFJQSxTQUFTRyxTQUFULEdBQXFCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ21CQyxzREFBUSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxDQUQzQjtBQUFBO0FBQUEsTUFDWEMsR0FEVztBQUFBLE1BQ05DLFlBRE07QUFBQSxNQUNTQyxNQURU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UUFBYztBQUNwQyxrQkFBTXVDLEtBQUssR0FBR3pDLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDZ0MsQ0FBUixFQUFXL0IsUUFBUSxDQUFDK0IsQ0FBcEIsQ0FBeEI7O0FBRUEsa0JBQUlRLEtBQUssR0FBRzFDLHdCQUFaLEVBQXNDO0FBQ3BDd0IsMEJBQVUsQ0FBQyxDQUFDLENBQUYsQ0FBVjtBQUNELGVBRkQsTUFFTyxJQUFJa0IsS0FBSyxHQUFHLENBQUMxQyx3QkFBYixFQUF1QztBQUM1Q3dCLDBCQUFVLENBQUMsQ0FBRCxDQUFWO0FBQ0Q7QUFDRjtBQTdCSCxhQUNPaEIsR0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBaUNELFNBbkNBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBaUVFO0FBQ0UsaUJBQVMsRUFBRXFCLDZEQUFNLENBQUNjLHFCQURwQjtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNbkIsVUFBVSxDQUFDLENBQUQsQ0FBaEI7QUFBQSxTQUZYO0FBQUEsa0JBSUc7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakVGLGVBdUVFO0FBQ0UsaUJBQVMsRUFBRUssNkRBQU0sQ0FBQ2UscUJBRHBCO0FBRUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1wQixVQUFVLENBQUMsQ0FBQyxDQUFGLENBQWhCO0FBQUEsU0FGWDtBQUFBLGtCQUlHO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWtGRDs7R0FsSVFsQixTOztLQUFBQSxTO0FBb0lNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMzVmMDUwZmY4ZWFkYjUxOTE2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtBbmltYXRlUHJlc2VuY2V9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgaW1nQXJyIGZyb20gJy4vaW1nQXJyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ltZ1NsaWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBNb3Rpb25JbWFnZSBmcm9tICcuL01vdGlvbkltYWdlJztcclxuXHJcbmNvbnN0IHN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCA9IDEwMDAwO1xyXG5jb25zdCBzd2lwZVBvd2VyID0gKG9mZnNldCwgdmVsb2NpdHkpID0+IHtcclxuICByZXR1cm4gTWF0aC5hYnMob2Zmc2V0KSAqIHZlbG9jaXR5O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gSW1nU2xpZGVyKCkge1xyXG4gIGNvbnN0IFtbaW1nLCBpbWdEaXJlY3Rpb25dLCBzZXRJbWddID0gdXNlU3RhdGUoWzAsIDBdKTtcclxuXHJcbiAgY29uc3QgaW1nUmVmID0gdXNlUmVmKFtdKTtcclxuXHJcbiAgY29uc29sZS5sb2coaW1nUmVmLmN1cnJlbnRbMl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW1nUmVmLmN1cnJlbnQgPSBpbWdSZWYuY3VycmVudC5zbGljZSgwLCAzKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHZhcmlhbnRzID0gKGltZ0RpcmVjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZW50ZXI6IHtcclxuICAgICAgICAvLyB4OiBpbWdEaXJlY3Rpb24gPiAwID8gLTIwMDAgOiAyMDAwLFxyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBjZW50ZXI6IHtcclxuICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgLy8geDogMCxcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB9LFxyXG4gICAgICBleGl0OiB7XHJcbiAgICAgICAgekluZGV4OiAwLFxyXG4gICAgICAgIC8vIHg6IGltZ0RpcmVjdGlvbiA8IDAgPyAtMjAwMCA6IDIwMDAsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAvLyAgICAgaW1nSGFuZGxlcigxKTtcclxuICAvLyAgIH0sIDUwMDApO1xyXG4gIC8vICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIC8vIH0sIFtpbWddKTtcclxuXHJcbiAgY29uc3QgaW1nSGFuZGxlciA9IChkaXJlY3Rpb24pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGltZyk7XHJcblxyXG4gICAgY29uc3QgaW1nQW1vdW50ID0gaW1nQXJyLmxlbmd0aDtcclxuICAgIGlmIChkaXJlY3Rpb24gPiAwKSB7XHJcbiAgICAgIHJldHVybiBzZXRJbWcoWyhpbWcgKyBkaXJlY3Rpb24pICUgaW1nQW1vdW50LCBkaXJlY3Rpb25dKTtcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uIDwgMCkge1xyXG4gICAgICByZXR1cm4gc2V0SW1nKFsoaW1nICsgZGlyZWN0aW9uICsgaW1nQW1vdW50KSAlIGltZ0Ftb3VudCwgZGlyZWN0aW9uXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfSBjdXN0b209e2ltZ0RpcmVjdGlvbn0+XHJcbiAgICAgICAgICB7aW1nQXJyLm1hcCgoaW1nLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZyk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPE1vdGlvbkltYWdlXHJcbiAgICAgICAgICAgICAgICBrZXk9e2ltZ31cclxuICAgICAgICAgICAgICAgIGZvcndhcmRSZWY9eyhlbCkgPT4gKGltZ1JlZi5jdXJyZW50W2ldID0gZWwpfVxyXG4gICAgICAgICAgICAgICAgY3VzdG9tPXtpbWdEaXJlY3Rpb259XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHMoaW1nRGlyZWN0aW9uKX1cclxuICAgICAgICAgICAgICAgIGluaXRpYWw9XCJlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIGV4aXQ9XCJleGl0XCJcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgICAgICAgeDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0d2VlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RpZmZuZXNzOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGFtcGluZzogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHtkdXJhdGlvbjogMC4zfSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9e2ltZ31cclxuICAgICAgICAgICAgICAgIGRyYWc9XCJ4XCJcclxuICAgICAgICAgICAgICAgIGRyYWdDb25zdHJhaW50cz17e2xlZnQ6IDAsIHJpZ2h0OiAwfX1cclxuICAgICAgICAgICAgICAgIGRyYWdFbGFzdGljPXsxfVxyXG4gICAgICAgICAgICAgICAgb25EcmFnRW5kPXsoZSwge29mZnNldCwgdmVsb2NpdHl9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHN3aXBlID0gc3dpcGVQb3dlcihvZmZzZXQueCwgdmVsb2NpdHkueCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAoc3dpcGUgPCBzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWdIYW5kbGVyKC0xKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzd2lwZSA+IC1zd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWdIYW5kbGVyKDEpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICB7LyogPE1vdGlvbkltYWdlXHJcbiAgICAgICAgICAgIGtleT17aW1nfVxyXG4gICAgICAgICAgICBjdXN0b209e2ltZ0RpcmVjdGlvbn1cclxuICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzKGltZ0RpcmVjdGlvbil9XHJcbiAgICAgICAgICAgIGluaXRpYWw9XCJlbnRlclwiXHJcbiAgICAgICAgICAgIGFuaW1hdGU9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBleGl0PVwiZXhpdFwiXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgICB4OiB7dHlwZTogJ3R3ZWVuJywgc3RpZmZuZXNzOiAyMDAsIGRhbXBpbmc6IDMwLCBkdXJhdGlvbjogMX0sXHJcbiAgICAgICAgICAgICAgb3BhY2l0eToge2R1cmF0aW9uOiAwLjN9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzcmM9e2ltZ0FycltpbWddfVxyXG4gICAgICAgICAgICBkcmFnPVwieFwiXHJcbiAgICAgICAgICAgIGRyYWdDb25zdHJhaW50cz17e2xlZnQ6IDAsIHJpZ2h0OiAwfX1cclxuICAgICAgICAgICAgZHJhZ0VsYXN0aWM9ezF9XHJcbiAgICAgICAgICAgIG9uRHJhZ0VuZD17KGUsIHtvZmZzZXQsIHZlbG9jaXR5fSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN3aXBlID0gc3dpcGVQb3dlcihvZmZzZXQueCwgdmVsb2NpdHkueCk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChzd2lwZSA8IHN3aXBlQ29uZmlkZW5jZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgaW1nSGFuZGxlcigtMSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChzd2lwZSA+IC1zd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgIGltZ0hhbmRsZXIoMSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19idXR0b25OZXh0fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaW1nSGFuZGxlcigxKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7J+KAoyd9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19idXR0b25QcmV2fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaW1nSGFuZGxlcigtMSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyfigKMnfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltZ1NsaWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==