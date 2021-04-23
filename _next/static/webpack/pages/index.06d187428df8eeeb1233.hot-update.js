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
    imgRef.current = imgRef.current.slice(0, 4);
    imgRef.current[3].style.opacity = 0;
    imgRef.current[3].style.zIndex = 0;
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
            lineNumber: 58,
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
        lineNumber: 87,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ImgSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container__buttonPrev,
        onClick: function onClick() {
          return imgHandler(-1);
        },
        children: '‣'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2ltZ1NsaWRlci9JbWdTbGlkZXIuanMiXSwibmFtZXMiOlsic3dpcGVDb25maWRlbmNlVGhyZXNob2xkIiwic3dpcGVQb3dlciIsIm9mZnNldCIsInZlbG9jaXR5IiwiTWF0aCIsImFicyIsIkltZ1NsaWRlciIsInVzZVN0YXRlIiwiaW1nIiwiaW1nRGlyZWN0aW9uIiwic2V0SW1nIiwiaW1nUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInNsaWNlIiwic3R5bGUiLCJvcGFjaXR5IiwiekluZGV4IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImltZ0hhbmRsZXIiLCJjbGVhckludGVydmFsIiwiZGlyZWN0aW9uIiwiaW1nQW1vdW50IiwiaW1nQXJyIiwibGVuZ3RoIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFwIiwiaSIsImVsIiwieCIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZHVyYXRpb24iLCJsZWZ0IiwicmlnaHQiLCJlIiwic3dpcGUiLCJjb250YWluZXJfX2J1dHRvbk5leHQiLCJjb250YWluZXJfX2J1dHRvblByZXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsd0JBQXdCLEdBQUcsS0FBakM7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsTUFBRCxFQUFTQyxRQUFULEVBQXNCO0FBQ3ZDLFNBQU9DLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxNQUFULElBQW1CQyxRQUExQjtBQUNELENBRkQ7O0FBSUEsU0FBU0csU0FBVCxHQUFxQjtBQUFBOztBQUFBOztBQUFBLGtCQUNtQkMsc0RBQVEsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsQ0FEM0I7QUFBQTtBQUFBLE1BQ1hDLEdBRFc7QUFBQSxNQUNOQyxZQURNO0FBQUEsTUFDU0MsTUFEVDs7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TyxFQUFFO0FBQUEsaUJBQU1yQixVQUFVLENBQUMsQ0FBQyxDQUFGLENBQWhCO0FBQUEsU0FGWDtBQUFBLGtCQUlHO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWtERDs7R0ExRlFmLFM7O0tBQUFBLFM7QUE0Rk1BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA2ZDE4NzQyOGRmOGVlZWIxMjMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0FuaW1hdGVQcmVzZW5jZX0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBpbWdBcnIgZnJvbSAnLi9pbWdBcnInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW1nU2xpZGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IE1vdGlvbkltYWdlIGZyb20gJy4vTW90aW9uSW1hZ2UnO1xyXG5cclxuY29uc3Qgc3dpcGVDb25maWRlbmNlVGhyZXNob2xkID0gMTAwMDA7XHJcbmNvbnN0IHN3aXBlUG93ZXIgPSAob2Zmc2V0LCB2ZWxvY2l0eSkgPT4ge1xyXG4gIHJldHVybiBNYXRoLmFicyhvZmZzZXQpICogdmVsb2NpdHk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBJbWdTbGlkZXIoKSB7XHJcbiAgY29uc3QgW1tpbWcsIGltZ0RpcmVjdGlvbl0sIHNldEltZ10gPSB1c2VTdGF0ZShbMCwgMF0pO1xyXG5cclxuICBjb25zdCBpbWdSZWYgPSB1c2VSZWYoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW1nUmVmLmN1cnJlbnQgPSBpbWdSZWYuY3VycmVudC5zbGljZSgwLCA0KTtcclxuXHJcbiAgICBpbWdSZWYuY3VycmVudFszXS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGltZ1JlZi5jdXJyZW50WzNdLnN0eWxlLnpJbmRleCA9IDA7XHJcblxyXG4gICAgaW1nUmVmLmN1cnJlbnRbMl0uc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICBpbWdSZWYuY3VycmVudFsyXS5zdHlsZS56SW5kZXggPSAwO1xyXG5cclxuICAgIGltZ1JlZi5jdXJyZW50WzFdLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgaW1nUmVmLmN1cnJlbnRbMV0uc3R5bGUuekluZGV4ID0gMDtcclxuXHJcbiAgICBpbWdSZWYuY3VycmVudFswXS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGltZ1JlZi5jdXJyZW50WzBdLnN0eWxlLnpJbmRleCA9IDA7XHJcblxyXG4gICAgaW1nUmVmLmN1cnJlbnRbaW1nXS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIGltZ1JlZi5jdXJyZW50W2ltZ10uc3R5bGUuekluZGV4ID0gMTtcclxuICB9LCBbaW1nXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaW1nSGFuZGxlcigxKTtcclxuICAgIH0sIDUwMDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtpbWddKTtcclxuXHJcbiAgY29uc3QgaW1nSGFuZGxlciA9IChkaXJlY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IGltZ0Ftb3VudCA9IGltZ0Fyci5sZW5ndGg7XHJcbiAgICBpZiAoZGlyZWN0aW9uID4gMCkge1xyXG4gICAgICByZXR1cm4gc2V0SW1nKFsoaW1nICsgZGlyZWN0aW9uKSAlIGltZ0Ftb3VudCwgZGlyZWN0aW9uXSk7XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA8IDApIHtcclxuICAgICAgcmV0dXJuIHNldEltZyhbKGltZyArIGRpcmVjdGlvbiArIGltZ0Ftb3VudCkgJSBpbWdBbW91bnQsIGRpcmVjdGlvbl0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0gY3VzdG9tPXtpbWdEaXJlY3Rpb259PlxyXG4gICAgICAgICAge2ltZ0Fyci5tYXAoKGltZywgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxNb3Rpb25JbWFnZVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbWd9XHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkUmVmPXsoZWwpID0+IChpbWdSZWYuY3VycmVudFtpXSA9IGVsKX1cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgICAgICAgeDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0d2VlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RpZmZuZXNzOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGFtcGluZzogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHtkdXJhdGlvbjogMC4zfSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9e2ltZ31cclxuICAgICAgICAgICAgICAgIGRyYWc9XCJ4XCJcclxuICAgICAgICAgICAgICAgIGRyYWdDb25zdHJhaW50cz17e2xlZnQ6IDAsIHJpZ2h0OiAwfX1cclxuICAgICAgICAgICAgICAgIGRyYWdFbGFzdGljPXsxfVxyXG4gICAgICAgICAgICAgICAgb25EcmFnRW5kPXsoZSwge29mZnNldCwgdmVsb2NpdHl9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHN3aXBlID0gc3dpcGVQb3dlcihvZmZzZXQueCwgdmVsb2NpdHkueCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAoc3dpcGUgPCBzd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWdIYW5kbGVyKC0xKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzd2lwZSA+IC1zd2lwZUNvbmZpZGVuY2VUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWdIYW5kbGVyKDEpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2J1dHRvbk5leHR9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbWdIYW5kbGVyKDEpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsn4oCjJ31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2J1dHRvblByZXZ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbWdIYW5kbGVyKC0xKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7J+KAoyd9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1nU2xpZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9