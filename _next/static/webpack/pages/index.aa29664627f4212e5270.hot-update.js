webpackHotUpdate_N_E("pages/index",{

/***/ "./component/gallery/Galerry.js":
false,

/***/ "./component/gallery/Galerry.module.scss":
false,

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gallery.module.scss */ "./component/gallery/Gallery.module.scss");
/* harmony import */ var _Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _galleryArr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./galleryArr */ "./component/gallery/galleryArr.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");

var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\component\\gallery\\Gallery.js";





function Galerry() {
  var _this = this;

  console.log(_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['id-0']);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: _galleryArr__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (src, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "".concat(_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__wrapper, " ").concat(_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['container__wrapper__' + i]),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].img, {
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
          className: _Gallery_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container__wrapper__img,
          src: src,
          transition: {
            duration: 0.3,
            ease: 'linear'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_c = Galerry;
/* harmony default export */ __webpack_exports__["default"] = (Galerry);

var _c;

$RefreshReg$(_c, "Galerry");

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

/***/ "./component/gallery/Gallery.module.scss":
/*!***********************************************!*\
  !*** ./component/gallery/Gallery.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Gallery.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./component/gallery/Gallery.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Gallery.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./component/gallery/Gallery.module.scss",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Gallery.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./component/gallery/Gallery.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./component/gallery/Galerry.module.scss":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./component/gallery/Gallery.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./component/gallery/Gallery.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* colors */\n.Gallery_container__1LLMr {\n  width: 100%;\n  max-width: 1024px;\n  height: 60rem;\n  margin-top: 10rem;\n  margin-bottom: 10rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: repeat(5, 1fr);\n  grid-column-gap: 3rem;\n  -webkit-column-gap: 3rem;\n          column-gap: 3rem;\n  grid-row-gap: 3rem;\n  row-gap: 3rem;\n}\n@media screen and (max-width: 1280px) {\n  .Gallery_container__1LLMr {\n    max-width: 840px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .Gallery_container__1LLMr {\n    max-width: 768px;\n  }\n}\n@media screen and (max-width: 940px) {\n  .Gallery_container__1LLMr {\n    max-width: 720px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .Gallery_container__1LLMr {\n    grid-template-columns: repeat(2, 1fr);\n    padding: 0 3rem;\n    grid-template-rows: auto;\n    height: 90rem;\n  }\n}\n@media screen and (max-width: 425px) {\n  .Gallery_container__1LLMr {\n    grid-template-columns: repeat(1, 1fr);\n    padding: 0 3rem;\n    height: 180rem;\n  }\n}\n.Gallery_container__wrapper__10DS6 {\n  width: 100%;\n  overflow: hidden;\n  cursor: pointer;\n  -webkit-box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 5.5px 10px rgba(0, 0, 0, 0.06), 0 12.3px 17.9px rgba(0, 0, 0, 0.072), 0 11.8px 23.4px rgba(0, 0, 0, 0.086), 0 50px 80px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 5.5px 10px rgba(0, 0, 0, 0.06), 0 12.3px 17.9px rgba(0, 0, 0, 0.072), 0 11.8px 23.4px rgba(0, 0, 0, 0.086), 0 50px 80px rgba(0, 0, 0, 0.12);\n}\n.Gallery_container__wrapper__img__3Jg3b {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}", "",{"version":3,"sources":["webpack://../../styles/_varriables.scss","webpack://Gallery.module.scss"],"names":[],"mappings":"AAAA,WAAA;ACEA;EACE,WAAA;EACA,iBAAA;EACA,aAAA;EAGA,iBAAA;EACA,oBAAA;EAEA,aAAA;EACA,sCAAA;EACA,kCAAA;EACA,qBAAA;EAAA,wBAAA;UAAA,gBAAA;EACA,kBAAA;EAAA,aAAA;AAHF;AAKE;EAfF;IAgBI,gBAAA;EAFF;AACF;AAIE;EAnBF;IAoBI,gBAAA;EADF;AACF;AAGE;EAvBF;IAwBI,gBAAA;EAAF;AACF;AAEE;EA3BF;IA4BI,qCAAA;IACA,eAAA;IACA,wBAAA;IACA,aAAA;EACF;AACF;AACE;EAlCF;IAmCI,qCAAA;IACA,eAAA;IACA,cAAA;EAEF;AACF;AAAE;EAGE,WAAA;EACA,gBAAA;EACA,eAAA;EACA,yOAAA;UAAA,iOAAA;AAAJ;AAKI;EACE,YAAA;EACA,WAAA;EACA,iBAAA;AAHN","sourcesContent":["/* colors */\r\n$primary-color: #121212;\r\n$secondary-color: #242323;\r\n$subtitle-color: #383838;\r\n","@import '../../styles/varriables';\r\n\r\n.container {\r\n  width: 100%;\r\n  max-width: 1024px;\r\n  height: 60rem;\r\n  // height: 100%;\r\n\r\n  margin-top: 10rem;\r\n  margin-bottom: 10rem;\r\n\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  grid-template-rows: repeat(5, 1fr);\r\n  column-gap: 3rem;\r\n  row-gap: 3rem;\r\n\r\n  @media screen and (max-width: 1280px) {\r\n    max-width: 840px;\r\n  }\r\n\r\n  @media screen and (max-width: 1024px) {\r\n    max-width: 768px;\r\n  }\r\n\r\n  @media screen and (max-width: 940px) {\r\n    max-width: 720px;\r\n  }\r\n\r\n  @media screen and (max-width: 768px) {\r\n    grid-template-columns: repeat(2, 1fr);\r\n    padding: 0 3rem;\r\n    grid-template-rows: auto;\r\n    height: 90rem;\r\n  }\r\n\r\n  @media screen and (max-width: 425px) {\r\n    grid-template-columns: repeat(1, 1fr);\r\n    padding: 0 3rem;\r\n    height: 180rem;\r\n  }\r\n\r\n  &__wrapper {\r\n    // border: $subtitle-color 1px solid;\r\n    // height: 20rem;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 5.5px 10px rgba(0, 0, 0, 0.06),\r\n      0 12.3px 17.9px rgba(0, 0, 0, 0.072), 0 11.8px 23.4px rgba(0, 0, 0, 0.086),\r\n      0 50px 80px rgba(0, 0, 0, 0.12);\r\n\r\n    &__img {\r\n      height: 100%;\r\n      width: 100%;\r\n      object-fit: cover;\r\n    }\r\n\r\n    // @media screen and (min-width: 768px) {\r\n    //   &__0 {\r\n    //     grid-column: 1/3;\r\n    //     grid-row: 1/3;\r\n    //   }\r\n\r\n    //   &__1 {\r\n    //     grid-column: 3;\r\n    //     grid-row: 1;\r\n    //   }\r\n\r\n    //   &__2 {\r\n    //     grid-column: 4;\r\n    //     grid-row: 1;\r\n    //   }\r\n\r\n    //   &__4 {\r\n    //     grid-column: 3/5;\r\n    //     grid-row: 2/4;\r\n    //   }\r\n\r\n    //   &__7 {\r\n    //     grid-column: 1/3;\r\n    //     grid-row: 4/6;\r\n    //   }\r\n    // }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Gallery_container__1LLMr",
	"container__wrapper": "Gallery_container__wrapper__10DS6",
	"container__wrapper__img": "Gallery_container__wrapper__img__3Jg3b"
};
module.exports = ___CSS_LOADER_EXPORT___;


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
/* harmony import */ var _component_gallery_Gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/gallery/Gallery */ "./component/gallery/Gallery.js");
/* harmony import */ var _component_imgSlider_ImgSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/imgSlider/ImgSlider */ "./component/imgSlider/ImgSlider.js");
/* harmony import */ var _component_navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/navbar/Navbar */ "./component/navbar/Navbar.js");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.scss */ "./styles/Home.module.scss");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Mariusz\\Desktop\\IMAGO\\imago\\pages\\index.js";





function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_imgSlider_ImgSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(About, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_gallery_Gallery__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2dhbGxlcnkvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2dhbGxlcnkvR2FsbGVyeS5tb2R1bGUuc2Nzcz8yMDk1Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvZ2FsbGVyeS9HYWxsZXJ5Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHYWxlcnJ5IiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImNvbnRhaW5lciIsImdhbGxlcnlBcnIiLCJtYXAiLCJzcmMiLCJpIiwiY29udGFpbmVyX193cmFwcGVyIiwib3BhY2l0eSIsInNjYWxlIiwiY29udGFpbmVyX193cmFwcGVyX19pbWciLCJkdXJhdGlvbiIsImVhc2UiLCJIb21lIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUNqQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlDLDJEQUFNLENBQUMsTUFBRCxDQUFsQjtBQUVBLHNCQUNFO0FBQVMsYUFBUyxFQUFFQSwyREFBTSxDQUFDQyxTQUEzQjtBQUFBLGNBQ0dDLG1EQUFVLENBQUNDLEdBQVgsQ0FBZSxVQUFDQyxHQUFELEVBQU1DLENBQU4sRUFBWTtBQUMxQiwwQkFDRTtBQUVFLGlCQUFTLFlBQUtMLDJEQUFNLENBQUNNLGtCQUFaLGNBQ1BOLDJEQUFNLENBQUMseUJBQXlCSyxDQUExQixDQURDLENBRlg7QUFBQSwrQkFNRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxpQkFBTyxFQUFFO0FBQUNFLG1CQUFPLEVBQUU7QUFBVixXQURYO0FBRUUsb0JBQVUsRUFBRTtBQUNWQyxpQkFBSyxFQUFFLEdBREc7QUFFVkQsbUJBQU8sRUFBRTtBQUZDLFdBRmQ7QUFNRSxrQkFBUSxFQUFFO0FB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aW5kZXguYWEyOTY2NDYyN2Y0MjEyZTUyNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9HYWxsZXJ5Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGdhbGxlcnlBcnIgZnJvbSAnLi9nYWxsZXJ5QXJyJztcclxuaW1wb3J0IHttb3Rpb259IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gR2FsZXJyeSgpIHtcclxuICBjb25zb2xlLmxvZyhzdHlsZXNbJ2lkLTAnXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICB7Z2FsbGVyeUFyci5tYXAoKHNyYywgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyX193cmFwcGVyfSAke1xyXG4gICAgICAgICAgICAgIHN0eWxlc1snY29udGFpbmVyX193cmFwcGVyX18nICsgaV1cclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uaW1nXHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6IDAuOX19XHJcbiAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgc2NhbGU6IDEuMSxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB3aGlsZVRhcD17e3NjYWxlOiAwLjl9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcl9fd3JhcHBlcl9faW1nfVxyXG4gICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjogMC4zLCBlYXNlOiAnbGluZWFyJ319XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYWxlcnJ5O1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0dhbGxlcnkubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0dhbGxlcnkubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9HYWxsZXJ5Lm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGNvbG9ycyAqL1xcbi5HYWxsZXJ5X2NvbnRhaW5lcl9fMUxMTXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMjRweDtcXG4gIGhlaWdodDogNjByZW07XFxuICBtYXJnaW4tdG9wOiAxMHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gIGdyaWQtY29sdW1uLWdhcDogM3JlbTtcXG4gIC13ZWJraXQtY29sdW1uLWdhcDogM3JlbTtcXG4gICAgICAgICAgY29sdW1uLWdhcDogM3JlbTtcXG4gIGdyaWQtcm93LWdhcDogM3JlbTtcXG4gIHJvdy1nYXA6IDNyZW07XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xcbiAgLkdhbGxlcnlfY29udGFpbmVyX18xTExNciB7XFxuICAgIG1heC13aWR0aDogODQwcHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLkdhbGxlcnlfY29udGFpbmVyX18xTExNciB7XFxuICAgIG1heC13aWR0aDogNzY4cHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk0MHB4KSB7XFxuICAuR2FsbGVyeV9jb250YWluZXJfXzFMTE1yIHtcXG4gICAgbWF4LXdpZHRoOiA3MjBweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5HYWxsZXJ5X2NvbnRhaW5lcl9fMUxMTXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgaGVpZ2h0OiA5MHJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXG4gIC5HYWxsZXJ5X2NvbnRhaW5lcl9fMUxMTXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxuICAgIGhlaWdodDogMTgwcmVtO1xcbiAgfVxcbn1cXG4uR2FsbGVyeV9jb250YWluZXJfX3dyYXBwZXJfXzEwRFM2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSwgMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSwgMCA1LjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMTIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDcyKSwgMCAxMS44cHggMjMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wODYpLCAwIDUwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMzQpLCAwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLCAwIDUuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAxMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLCAwIDExLjhweCAyMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4NiksIDAgNTBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5HYWxsZXJ5X2NvbnRhaW5lcl9fd3JhcHBlcl9faW1nX18zSmczYiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vc3R5bGVzL192YXJyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly9HYWxsZXJ5Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQUE7QUNFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFHQSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsYUFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUFBLHdCQUFBO1VBQUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUFBLGFBQUE7QUFIRjtBQUtFO0VBZkY7SUFnQkksZ0JBQUE7RUFGRjtBQUNGO0FBSUU7RUFuQkY7SUFvQkksZ0JBQUE7RUFERjtBQUNGO0FBR0U7RUF2QkY7SUF3QkksZ0JBQUE7RUFBRjtBQUNGO0FBRUU7RUEzQkY7SUE0QkkscUNBQUE7SUFDQSxlQUFBO0lBQ0Esd0JBQUE7SUFDQSxhQUFBO0VBQ0Y7QUFDRjtBQUNFO0VBbENGO0lBbUNJLHFDQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7RUFFRjtBQUNGO0FBQUU7RUFHRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseU9BQUE7VUFBQSxpT0FBQTtBQUFKO0FBS0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBSE5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogY29sb3JzICovXFxyXFxuJHByaW1hcnktY29sb3I6ICMxMjEyMTI7XFxyXFxuJHNlY29uZGFyeS1jb2xvcjogIzI0MjMyMztcXHJcXG4kc3VidGl0bGUtY29sb3I6ICMzODM4Mzg7XFxyXFxuXCIsXCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvdmFycmlhYmxlcyc7XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogMTAyNHB4O1xcclxcbiAgaGVpZ2h0OiA2MHJlbTtcXHJcXG4gIC8vIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gIG1hcmdpbi10b3A6IDEwcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcclxcbiAgY29sdW1uLWdhcDogM3JlbTtcXHJcXG4gIHJvdy1nYXA6IDNyZW07XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA4NDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcclxcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTQwcHgpIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA3MjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDkwcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXHJcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcclxcbiAgICBoZWlnaHQ6IDE4MHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3dyYXBwZXIge1xcclxcbiAgICAvLyBib3JkZXI6ICRzdWJ0aXRsZS1jb2xvciAxcHggc29saWQ7XFxyXFxuICAgIC8vIGhlaWdodDogMjByZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXFxyXFxuICAgICAgMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSwgMCA1LjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXFxyXFxuICAgICAgMCAxMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLCAwIDExLjhweCAyMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4NiksXFxyXFxuICAgICAgMCA1MHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXHJcXG5cXHJcXG4gICAgJl9faW1nIHtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLy8gICAmX18wIHtcXHJcXG4gICAgLy8gICAgIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxuICAgIC8vICAgICBncmlkLXJvdzogMS8zO1xcclxcbiAgICAvLyAgIH1cXHJcXG5cXHJcXG4gICAgLy8gICAmX18xIHtcXHJcXG4gICAgLy8gICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgICAvLyAgICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgIC8vICAgfVxcclxcblxcclxcbiAgICAvLyAgICZfXzIge1xcclxcbiAgICAvLyAgICAgZ3JpZC1jb2x1bW46IDQ7XFxyXFxuICAgIC8vICAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgLy8gICB9XFxyXFxuXFxyXFxuICAgIC8vICAgJl9fNCB7XFxyXFxuICAgIC8vICAgICBncmlkLWNvbHVtbjogMy81O1xcclxcbiAgICAvLyAgICAgZ3JpZC1yb3c6IDIvNDtcXHJcXG4gICAgLy8gICB9XFxyXFxuXFxyXFxuICAgIC8vICAgJl9fNyB7XFxyXFxuICAgIC8vICAgICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgICAvLyAgICAgZ3JpZC1yb3c6IDQvNjtcXHJcXG4gICAgLy8gICB9XFxyXFxuICAgIC8vIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiR2FsbGVyeV9jb250YWluZXJfXzFMTE1yXCIsXG5cdFwiY29udGFpbmVyX193cmFwcGVyXCI6IFwiR2FsbGVyeV9jb250YWluZXJfX3dyYXBwZXJfXzEwRFM2XCIsXG5cdFwiY29udGFpbmVyX193cmFwcGVyX19pbWdcIjogXCJHYWxsZXJ5X2NvbnRhaW5lcl9fd3JhcHBlcl9faW1nX18zSmczYlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuLi9jb21wb25lbnQvZ2FsbGVyeS9HYWxsZXJ5JztcbmltcG9ydCBJbWdTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50L2ltZ1NsaWRlci9JbWdTbGlkZXInO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnQvbmF2YmFyL05hdmJhcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPEltZ1NsaWRlciAvPlxuICAgICAgICA8QWJvdXQgLz5cbiAgICAgICAgPEdhbGxlcnkgLz5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgey8qIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieXsnICd9XG4gICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==