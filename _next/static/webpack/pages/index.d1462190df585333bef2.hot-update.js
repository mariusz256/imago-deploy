webpackHotUpdate_N_E("pages/index",{

/***/ "./component/Section/Section.js":
/*!**************************************!*\
  !*** ./component/Section/Section.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section.module.scss */ "./component/Section/Section.module.scss");
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Section_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useFadeAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useFadeAnimation */ "./hooks/useFadeAnimation.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");



var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\Section\\Section.js",
    _s = $RefreshSig$();


 // import {about} from './content';




function Section(_ref) {
  _s();

  var _this = this;

  var content = _ref.content;

  var _useFadeAnimation = Object(_hooks_useFadeAnimation__WEBPACK_IMPORTED_MODULE_4__["useFadeAnimation"])(),
      _useFadeAnimation2 = Object(C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useFadeAnimation, 4),
      ref = _useFadeAnimation2[0],
      controls = _useFadeAnimation2[1],
      variants = _useFadeAnimation2[2],
      transition = _useFadeAnimation2[3];
  /* props to motion 
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={variants}
    transition={transition}
  */


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].section, {
    className: _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    ref: ref,
    animate: controls,
    initial: "hidden",
    variants: variants,
    transition: transition,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: content.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), content.paragraph.map(function (el, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__paragraph,
        children: el
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_s(Section, "nXZonBP/D8/mIgNqvrF2Zytoahg=", false, function () {
  return [_hooks_useFadeAnimation__WEBPACK_IMPORTED_MODULE_4__["useFadeAnimation"]];
});

_c = Section;
/* harmony default export */ __webpack_exports__["default"] = (Section);

var _c;

$RefreshReg$(_c, "Section");

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

/***/ }),

/***/ "./component/Section/SectionWithList.js":
/*!**********************************************!*\
  !*** ./component/Section/SectionWithList.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section.module.scss */ "./component/Section/Section.module.scss");
/* harmony import */ var _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Section_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useFadeAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useFadeAnimation */ "./hooks/useFadeAnimation.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");



var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\Section\\SectionWithList.js",
    _s = $RefreshSig$();






function SectionWithList(_ref) {
  _s();

  var _this = this;

  var content = _ref.content,
      listStyle = _ref.listStyle;

  var _useFadeAnimation = Object(_hooks_useFadeAnimation__WEBPACK_IMPORTED_MODULE_4__["useFadeAnimation"])(),
      _useFadeAnimation2 = Object(C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useFadeAnimation, 4),
      ref = _useFadeAnimation2[0],
      controls = _useFadeAnimation2[1],
      variants = _useFadeAnimation2[2],
      transition = _useFadeAnimation2[3];
  /* props to motion 
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={variants}
    transition={transition}
  */


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].section, {
    className: _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    ref: ref,
    animate: controls,
    initial: "hidden",
    variants: variants,
    transition: transition,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: content.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), content.subtitle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__paragraph,
      children: content.subtitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "".concat(_Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__list, " ").concat(_Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a["container__".concat(listStyle)]),
      children: content.paragraph.map(function (el, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: _Section_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__list__el,
          children: el
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

_s(SectionWithList, "nXZonBP/D8/mIgNqvrF2Zytoahg=", false, function () {
  return [_hooks_useFadeAnimation__WEBPACK_IMPORTED_MODULE_4__["useFadeAnimation"]];
});

_c = SectionWithList;
/* harmony default export */ __webpack_exports__["default"] = (SectionWithList);

var _c;

$RefreshReg$(_c, "SectionWithList");

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

/***/ }),

/***/ "./component/contact/Contact.js":
/*!**************************************!*\
  !*** ./component/contact/Contact.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Contact_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact.module.scss */ "./component/contact/Contact.module.scss");
/* harmony import */ var _Contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Contact_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useFadeAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useFadeAnimation */ "./hooks/useFadeAnimation.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");



var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\contact\\Contact.js",
    _s = $RefreshSig$();






function Contact() {
  _s();

  var _useFadeAnimation = Object(_hooks_useFadeAnimation__WEBPACK_IMPORTED_MODULE_4__["useFadeAnimation"])(),
      _useFadeAnimation2 = Object(C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useFadeAnimation, 4),
      ref = _useFadeAnimation2[0],
      controls = _useFadeAnimation2[1],
      variants = _useFadeAnimation2[2],
      transition = _useFadeAnimation2[3];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].section, {
    className: _Contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    ref: ref,
    animate: controls,
    initial: "hidden",
    variants: variants,
    transition: transition,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Kontakt"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "".concat(_Contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__paragraph, " ").concat(_Contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__center),
      children: "Mateusz Mika"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "".concat(_Contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__paragraph, " ").concat(_Contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__center),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: 'tel:+48791172008',
        children: "Tel: 791 172 008"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "".concat(_Contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__paragraph, " ").concat(_Contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__center),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: 'mailto:mika_mateusz@02.pl',
        children: "email: mika_mateusz@o2.pl"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: 'Zrealizuj z nami swoje pomysły !'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_s(Contact, "nXZonBP/D8/mIgNqvrF2Zytoahg=", false, function () {
  return [_hooks_useFadeAnimation__WEBPACK_IMPORTED_MODULE_4__["useFadeAnimation"]];
});

_c = Contact;
/* harmony default export */ __webpack_exports__["default"] = (Contact);

var _c;

$RefreshReg$(_c, "Contact");

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

/***/ }),

/***/ "./component/gallery/Gallery.js":
/*!**************************************!*\
  !*** ./component/gallery/Gallery.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Gallery.module.scss */ "./component/gallery/Gallery.module.scss");
/* harmony import */ var _Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _galleryArr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./galleryArr */ "./component/gallery/galleryArr.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _hooks_useFadeAnimation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useFadeAnimation */ "./hooks/useFadeAnimation.js");



var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\gallery\\Gallery.js",
    _s = $RefreshSig$();







function Gallery() {
  _s();

  var _this = this;

  var _useFadeAnimation = Object(_hooks_useFadeAnimation__WEBPACK_IMPORTED_MODULE_6__["useFadeAnimation"])(),
      _useFadeAnimation2 = Object(C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useFadeAnimation, 4),
      ref = _useFadeAnimation2[0],
      controls = _useFadeAnimation2[1],
      variants = _useFadeAnimation2[2],
      transition = _useFadeAnimation2[3];
  /* props to motion 
  ref={ref}
  animate={controls}
  initial="hidden"
  variants={variants}
  transition={transition}
  */


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].section, {
    className: _Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    ref: ref,
    animate: controls,
    initial: "hidden",
    variants: variants,
    transition: transition,
    children: _galleryArr__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (src, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "".concat(_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__wrapper, " ").concat(_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['container__wrapper__' + i]),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].img, {
          initial: {
            opacity: 0.9
          },
          whileHover: {
            scale: 1.1,
            opacity: 1
          },
          whileTap: {
            scale: 0.9
          },
          className: _Gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container__wrapper__img,
          src: src,
          transition: {
            duration: 0.3,
            ease: 'linear'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_s(Gallery, "nXZonBP/D8/mIgNqvrF2Zytoahg=", false, function () {
  return [_hooks_useFadeAnimation__WEBPACK_IMPORTED_MODULE_6__["useFadeAnimation"]];
});

_c = Gallery;
/* harmony default export */ __webpack_exports__["default"] = (Gallery);

var _c;

$RefreshReg$(_c, "Gallery");

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

/***/ }),

/***/ "./hooks/useFadeAnimation.js":
/*!***********************************!*\
  !*** ./hooks/useFadeAnimation.js ***!
  \***********************************/
/*! exports provided: useFadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFadeAnimation", function() { return useFadeAnimation; });
/* harmony import */ var C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");


var _s = $RefreshSig$();




var variants = {
  visible: {
    opacity: 1,
    scale: 1
  },
  hidden: {
    opacity: 0,
    scale: 1
  }
};
var transition = {
  duration: 0.5,
  delay: 0.2
};
function useFadeAnimation() {
  _s();

  //  const [ref, controls, variants, transition] = useFadeAnimation();
  // ref={ref}
  // animate={controls}
  // initial="hidden"
  // variants={variants}
  // transition={transition}
  var controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])();

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"])(),
      _useInView2 = Object(C_Users_Mariusz_Desktop_IMAGO_imago_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return [ref, controls, variants, transition];
}

_s(useFadeAnimation, "2NEUvrxzw09dl1eC0Q0pbm0pOIE=", false, function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"]];
});

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

/***/ "./shared/animate.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1NlY3Rpb24vU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1NlY3Rpb24vU2VjdGlvbldpdGhMaXN0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvY29udGFjdC9Db250YWN0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvZ2FsbGVyeS9HYWxsZXJ5LmpzIiwid2VicGFjazovL19OX0UvLi9zaGFyZWQvYW5pbWF0ZS5qcyJdLCJuYW1lcyI6WyJTZWN0aW9uIiwiY29udGVudCIsInVzZUZhZGVBbmltYXRpb24iLCJyZWYiLCJjb250cm9scyIsInZhcmlhbnRzIiwidHJhbnNpdGlvbiIsInN0eWxlcyIsImNvbnRhaW5lciIsInRpdGxlIiwicGFyYWdyYXBoIiwibWFwIiwiZWwiLCJpIiwiY29udGFpbmVyX19wYXJhZ3JhcGgiLCJTZWN0aW9uV2l0aExpc3QiLCJsaXN0U3R5bGUiLCJzdWJ0aXRsZSIsImNvbnRhaW5lcl9fbGlzdCIsImNvbnRhaW5lcl9fbGlzdF9fZWwiLCJDb250YWN0IiwiY29udGFpbmVyX19jZW50ZXIiLCJHYWxsZXJ5IiwiZ2FsbGVyeUFyciIsInNyYyIsImNvbnRhaW5lcl9fd3JhcHBlciIsIm9wYWNpdHkiLCJzY2FsZSIsImNvbnRhaW5lcl9fd3JhcHBlcl9faW1nIiwiZHVyYXRpb24iLCJlYXNlIiwidmlzaWJsZSIsImhpZGRlbiIsImRlbGF5IiwidXNlQW5pbWF0aW9uIiwidXNlSW5WaWV3IiwiaW5WaWV3IiwidXNlRWZmZWN0Iiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsT0FBNEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFWQyxPQUFVLFFBQVZBLE9BQVU7O0FBQUEsMEJBQ29CQyxnRkFBZ0IsRUFEcEM7QUFBQTtBQUFBLE1BQ25C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cy9pbmRleC5kMTQ2MjE5MGRmNTg1MzMzYmVmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlY3Rpb24ubW9kdWxlLnNjc3MnO1xyXG4vLyBpbXBvcnQge2Fib3V0fSBmcm9tICcuL2NvbnRlbnQnO1xyXG5pbXBvcnQge3VzZUZhZGVBbmltYXRpb259IGZyb20gJy4uLy4uL2hvb2tzL3VzZUZhZGVBbmltYXRpb24nO1xyXG5pbXBvcnQge21vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5mdW5jdGlvbiBTZWN0aW9uKHtjb250ZW50fSkge1xyXG4gIGNvbnN0IFtyZWYsIGNvbnRyb2xzLCB2YXJpYW50cywgdHJhbnNpdGlvbl0gPSB1c2VGYWRlQW5pbWF0aW9uKCk7XHJcbiAgLyogcHJvcHMgdG8gbW90aW9uIFxyXG4gICAgcmVmPXtyZWZ9XHJcbiAgICBhbmltYXRlPXtjb250cm9sc31cclxuICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgdHJhbnNpdGlvbj17dHJhbnNpdGlvbn1cclxuICAqL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5zZWN0aW9uXHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxyXG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICAgPlxyXG4gICAgICA8aDI+e2NvbnRlbnQudGl0bGV9PC9oMj5cclxuICAgICAge2NvbnRlbnQucGFyYWdyYXBoLm1hcCgoZWwsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19wYXJhZ3JhcGh9IGtleT17aX0+XHJcbiAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvbW90aW9uLnNlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlY3Rpb24ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge3VzZUZhZGVBbmltYXRpb259IGZyb20gJy4uLy4uL2hvb2tzL3VzZUZhZGVBbmltYXRpb24nO1xyXG5pbXBvcnQge21vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5mdW5jdGlvbiBTZWN0aW9uV2l0aExpc3Qoe2NvbnRlbnQsIGxpc3RTdHlsZX0pIHtcclxuICBjb25zdCBbcmVmLCBjb250cm9scywgdmFyaWFudHMsIHRyYW5zaXRpb25dID0gdXNlRmFkZUFuaW1hdGlvbigpO1xyXG4gIC8qIHByb3BzIHRvIG1vdGlvbiBcclxuICAgIHJlZj17cmVmfVxyXG4gICAgYW5pbWF0ZT17Y29udHJvbHN9XHJcbiAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgIHRyYW5zaXRpb249e3RyYW5zaXRpb259XHJcbiAgKi9cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uc2VjdGlvblxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBhbmltYXRlPXtjb250cm9sc31cclxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgdHJhbnNpdGlvbj17dHJhbnNpdGlvbn1cclxuICAgID5cclxuICAgICAgPGgyPntjb250ZW50LnRpdGxlfTwvaDI+XHJcbiAgICAgIHtjb250ZW50LnN1YnRpdGxlICYmIChcclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX3BhcmFncmFwaH0+e2NvbnRlbnQuc3VidGl0bGV9PC9wPlxyXG4gICAgICApfVxyXG4gICAgICA8dWxcclxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJfX2xpc3R9ICR7XHJcbiAgICAgICAgICBzdHlsZXNbYGNvbnRhaW5lcl9fJHtsaXN0U3R5bGV9YF1cclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIHtjb250ZW50LnBhcmFncmFwaC5tYXAoKGVsLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX19saXN0X19lbH0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9tb3Rpb24uc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uV2l0aExpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250YWN0Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHt1c2VGYWRlQW5pbWF0aW9ufSBmcm9tICcuLi8uLi9ob29rcy91c2VGYWRlQW5pbWF0aW9uJztcclxuaW1wb3J0IHttb3Rpb259IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gQ29udGFjdCgpIHtcclxuICBjb25zdCBbcmVmLCBjb250cm9scywgdmFyaWFudHMsIHRyYW5zaXRpb25dID0gdXNlRmFkZUFuaW1hdGlvbigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5zZWN0aW9uXHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxyXG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICAgPlxyXG4gICAgICA8aDI+S29udGFrdDwvaDI+XHJcbiAgICAgIDxwXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyX19wYXJhZ3JhcGh9ICR7c3R5bGVzLmNvbnRhaW5lcl9fY2VudGVyfWB9XHJcbiAgICAgID5cclxuICAgICAgICBNYXRldXN6IE1pa2FcclxuICAgICAgPC9wPlxyXG4gICAgICA8cFxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcl9fcGFyYWdyYXBofSAke3N0eWxlcy5jb250YWluZXJfX2NlbnRlcn1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGEgaHJlZj17J3RlbDorNDg3OTExNzIwMDgnfT5UZWw6IDc5MSAxNzIgMDA4PC9hPlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyX19wYXJhZ3JhcGh9ICR7c3R5bGVzLmNvbnRhaW5lcl9fY2VudGVyfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8YSBocmVmPXsnbWFpbHRvOm1pa2FfbWF0ZXVzekAwMi5wbCd9PmVtYWlsOiBtaWthX21hdGV1c3pAbzIucGw8L2E+XHJcbiAgICAgIDwvcD5cclxuICAgICAgPGgyPnsnWnJlYWxpenVqIHogbmFtaSBzd29qZSBwb215c8WCeSAhJ308L2gyPlxyXG4gICAgPC9tb3Rpb24uc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0dhbGxlcnkubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgZ2FsbGVyeUFyciBmcm9tICcuL2dhbGxlcnlBcnInO1xyXG5pbXBvcnQge21vdGlvbiwgdXNlQW5pbWF0aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHt1c2VGYWRlQW5pbWF0aW9ufSBmcm9tICcuLi8uLi9ob29rcy91c2VGYWRlQW5pbWF0aW9uJztcclxuXHJcbmZ1bmN0aW9uIEdhbGxlcnkoKSB7XHJcbiAgY29uc3QgW3JlZiwgY29udHJvbHMsIHZhcmlhbnRzLCB0cmFuc2l0aW9uXSA9IHVzZUZhZGVBbmltYXRpb24oKTtcclxuXHJcbiAgLyogcHJvcHMgdG8gbW90aW9uIFxyXG4gIHJlZj17cmVmfVxyXG4gIGFuaW1hdGU9e2NvbnRyb2xzfVxyXG4gIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4qL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5zZWN0aW9uXHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxyXG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICAgPlxyXG4gICAgICB7Z2FsbGVyeUFyci5tYXAoKHNyYywgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyX193cmFwcGVyfSAke1xyXG4gICAgICAgICAgICAgIHN0eWxlc1snY29udGFpbmVyX193cmFwcGVyX18nICsgaV1cclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uaW1nXHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6IDAuOX19XHJcbiAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgc2NhbGU6IDEuMSxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB3aGlsZVRhcD17e3NjYWxlOiAwLjl9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fd3JhcHBlcl9faW1nfVxyXG4gICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjogMC4zLCBlYXNlOiAnbGluZWFyJ319XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvbW90aW9uLnNlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTtcclxuIiwiaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VBbmltYXRpb259IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQge3VzZUluVmlld30gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIHZpc2libGU6IHtvcGFjaXR5OiAxLCBzY2FsZTogMX0sXHJcbiAgaGlkZGVuOiB7b3BhY2l0eTogMCwgc2NhbGU6IDF9LFxyXG59O1xyXG5cclxuY29uc3QgdHJhbnNpdGlvbiA9IHtkdXJhdGlvbjogMC41LCBkZWxheTogMC4yfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VGYWRlQW5pbWF0aW9uKCkge1xyXG4gIC8vICBjb25zdCBbcmVmLCBjb250cm9scywgdmFyaWFudHMsIHRyYW5zaXRpb25dID0gdXNlRmFkZUFuaW1hdGlvbigpO1xyXG4gIC8vIHJlZj17cmVmfVxyXG4gIC8vIGFuaW1hdGU9e2NvbnRyb2xzfVxyXG4gIC8vIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gIC8vIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAvLyB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG5cclxuICBjb25zdCBjb250cm9scyA9IHVzZUFuaW1hdGlvbigpO1xyXG4gIGNvbnN0IFtyZWYsIGluVmlld10gPSB1c2VJblZpZXcoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpblZpZXcpIHtcclxuICAgICAgY29udHJvbHMuc3RhcnQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuICB9LCBbY29udHJvbHMsIGluVmlld10pO1xyXG5cclxuICByZXR1cm4gW3JlZiwgY29udHJvbHMsIHZhcmlhbnRzLCB0cmFuc2l0aW9uXTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9