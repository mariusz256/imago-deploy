webpackHotUpdate_N_E("pages/index",{

/***/ "./hooks/useScroll.js":
/*!****************************!*\
  !*** ./hooks/useScroll.js ***!
  \****************************/
/*! exports provided: useScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScroll", function() { return useScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


function useScroll(amountRef) {
  _s();

  var elementsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
  useEffect(function () {
    itemsRef.current = itemsRef.current.slice(0, 5);
  }, [props.items]);
  console.log(elementsRef); // const scroll = elementRef.current.scrollIntoView();
  // return [elementRef, scroll];
}

_s(useScroll, "Z3czLv2T88IszI7epnRpheYnz3U=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_about_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/about/About */ "./component/about/About.js");
/* harmony import */ var _component_contact_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/contact/Contact */ "./component/contact/Contact.js");
/* harmony import */ var _component_cooperation_Cooperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/cooperation/Cooperation */ "./component/cooperation/Cooperation.js");
/* harmony import */ var _component_footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/footer/Footer */ "./component/footer/Footer.js");
/* harmony import */ var _component_gallery_Gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/gallery/Gallery */ "./component/gallery/Gallery.js");
/* harmony import */ var _component_imgSlider_ImgSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/imgSlider/ImgSlider */ "./component/imgSlider/ImgSlider.js");
/* harmony import */ var _component_navbar_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/navbar/Navbar */ "./component/navbar/Navbar.js");
/* harmony import */ var _component_offer_Offer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/offer/Offer */ "./component/offer/Offer.js");
/* harmony import */ var _context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../context/menuContext/menuContext */ "./context/menuContext/menuContext.js");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Home.module.scss */ "./styles/Home.module.scss");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hooks_useScroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../hooks/useScroll */ "./hooks/useScroll.js");


var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\pages\\index.js",
    _s = $RefreshSig$();














function Home() {
  _s();

  var aboutRef = Object(react__WEBPACK_IMPORTED_MODULE_12__["useRef"])();
  var galleryRef = Object(react__WEBPACK_IMPORTED_MODULE_12__["useRef"])();
  var offerRef = Object(react__WEBPACK_IMPORTED_MODULE_12__["useRef"])();
  var cooperationRef = Object(react__WEBPACK_IMPORTED_MODULE_12__["useRef"])();
  var contactRef = Object(react__WEBPACK_IMPORTED_MODULE_12__["useRef"])();
  console.log(Object(_hooks_useScroll__WEBPACK_IMPORTED_MODULE_13__["useScroll"])());
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "assets/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_menuContext_menuContext__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_navbar_Navbar__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_imgSlider_ImgSlider__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_about_About__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_gallery_Gallery__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_offer_Offer__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_cooperation_Cooperation__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_contact_Contact__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_s(Home, "09AqffgqWknrsRQEdVGrLYH1AVA=", false, function () {
  return [_hooks_useScroll__WEBPACK_IMPORTED_MODULE_13__["useScroll"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlU2Nyb2xsLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VTY3JvbGwiLCJhbW91bnRSZWYiLCJlbGVtZW50c1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsIml0ZW1zUmVmIiwiY3VycmVudCIsInNsaWNlIiwicHJvcHMiLCJpdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJIb21lIiwiYWJvdXRSZWYiLCJnYWxsZXJ5UmVmIiwib2ZmZXJSZWYiLCJjb29wZXJhdGlvblJlZiIsImNvbnRhY3RSZWYiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxTQUFTQSxTQUFULENBQW1CQyxTQUFuQixFQUE4QjtBQUFBOztBQUNuQyxNQUFNQyxXQUFXLEdBQUdDLG9EQUFNLENBQUMsRUFBRCxDQUExQjtBQUVBQyxXQUFTLENBQUMsWUFBTTtBQUNkQyxZQUFRLENBQUNDLE9BQVQsR0FBbUJELFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQkMsS0FBakIsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBbkI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0MsS0FBSyxDQUFDQyxLQUFQLENBRk0sQ0FBVDtBQUlBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVQsV0FBWixFQVBtQyxDQVFuQztBQUVBO0FBQ0Q7O0dBWGVGLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTWSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLFFBQVEsR0FBR1YscURBQU0sRUFBdkI7QUFDQSxNQUFNVyxVQUFVLEdBQUdYLHFEQUFNLEVBQXpCO0FBQ0EsTUFBTVksUUFBUSxHQUFHWixxREFBTSxFQUF2QjtBQUNBLE1BQU1hLGNBQWMsR0FBR2IscURBQU0sRUFBN0I7QUFDQSxNQUFNYyxVQUFVLEdBQUdkLHFEQUFNLEVBQXpCO0FBRUFPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWCxtRUFBUyxFQUFyQjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFa0IsZ0VBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFNLGVBQVMsRUFBRUQsZ0VBQU0sQ0FBQ0UsSUFBeEI7QUFBQSw4QkFDRSxxRUFBQyx5RUFBRDtBQUFBLCtCQUNFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSxxRUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFRRSxxRUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsZUFTRSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFpQkUscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDs7R0E5QnVCUixJO1VBT1ZaLDJEOzs7S0FQVVksSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kYWZlYTFkMTQ4N2Q3YTMxMjY4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTY3JvbGwoYW1vdW50UmVmKSB7XHJcbiAgY29uc3QgZWxlbWVudHNSZWYgPSB1c2VSZWYoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaXRlbXNSZWYuY3VycmVudCA9IGl0ZW1zUmVmLmN1cnJlbnQuc2xpY2UoMCwgNSk7XHJcbiAgfSwgW3Byb3BzLml0ZW1zXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGVsZW1lbnRzUmVmKTtcclxuICAvLyBjb25zdCBzY3JvbGwgPSBlbGVtZW50UmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoKTtcclxuXHJcbiAgLy8gcmV0dXJuIFtlbGVtZW50UmVmLCBzY3JvbGxdO1xyXG59XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50L2Fib3V0L0Fib3V0JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL2NvbXBvbmVudC9jb250YWN0L0NvbnRhY3QnO1xuaW1wb3J0IENvb3BlcmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudC9jb29wZXJhdGlvbi9Db29wZXJhdGlvbic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudC9mb290ZXIvRm9vdGVyJztcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4uL2NvbXBvbmVudC9nYWxsZXJ5L0dhbGxlcnknO1xuaW1wb3J0IEltZ1NsaWRlciBmcm9tICcuLi9jb21wb25lbnQvaW1nU2xpZGVyL0ltZ1NsaWRlcic7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudC9uYXZiYXIvTmF2YmFyJztcbmltcG9ydCBPZmZlciBmcm9tICcuLi9jb21wb25lbnQvb2ZmZXIvT2ZmZXInO1xuaW1wb3J0IE1lbnVDb250ZXh0UHJvdmlkZXIgZnJvbSAnLi4vY29udGV4dC9tZW51Q29udGV4dC9tZW51Q29udGV4dCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7dXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVNjcm9sbH0gZnJvbSAnLi8uLi9ob29rcy91c2VTY3JvbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBhYm91dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBnYWxsZXJ5UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IG9mZmVyUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGNvb3BlcmF0aW9uUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGNvbnRhY3RSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zb2xlLmxvZyh1c2VTY3JvbGwoKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiYXNzZXRzL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxNZW51Q29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPC9NZW51Q29udGV4dFByb3ZpZGVyPlxuICAgICAgICA8SW1nU2xpZGVyIC8+XG4gICAgICAgIDxBYm91dCAvPlxuICAgICAgICA8R2FsbGVyeSAvPlxuICAgICAgICA8T2ZmZXIgLz5cbiAgICAgICAgPENvb3BlcmF0aW9uIC8+XG4gICAgICAgIDxDb250YWN0IC8+XG4gICAgICA8L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9