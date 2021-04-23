webpackHotUpdate_N_E("pages/index",{

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
___CSS_LOADER_EXPORT___.push([module.i, "/* colors */\n.Gallery_container__1LLMr {\n  width: 100%;\n  max-width: 1024px;\n  height: 70rem;\n  margin-bottom: 10rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-column-gap: 3rem;\n  -webkit-column-gap: 3rem;\n          column-gap: 3rem;\n  grid-row-gap: 3rem;\n  row-gap: 3rem;\n  scroll-margin-top: 15rem;\n}\n@media screen and (max-width: 1280px) {\n  .Gallery_container__1LLMr {\n    max-width: 840px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .Gallery_container__1LLMr {\n    max-width: 768px;\n  }\n}\n@media screen and (max-width: 940px) {\n  .Gallery_container__1LLMr {\n    max-width: 720px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .Gallery_container__1LLMr {\n    grid-template-columns: repeat(2, 1fr);\n    padding: 0 3rem;\n    grid-template-rows: auto;\n    height: 150rem;\n  }\n}\n@media screen and (max-width: 425px) {\n  .Gallery_container__1LLMr {\n    grid-template-columns: repeat(1, 1fr);\n    padding: 0 3rem;\n    height: 300rem;\n  }\n}\n.Gallery_container__wrapper__10DS6 {\n  width: 100%;\n  overflow: hidden;\n  cursor: pointer;\n  -webkit-box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 5.5px 10px rgba(0, 0, 0, 0.06), 0 12.3px 17.9px rgba(0, 0, 0, 0.072), 0 11.8px 23.4px rgba(0, 0, 0, 0.086), 0 50px 80px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 5.5px 10px rgba(0, 0, 0, 0.06), 0 12.3px 17.9px rgba(0, 0, 0, 0.072), 0 11.8px 23.4px rgba(0, 0, 0, 0.086), 0 50px 80px rgba(0, 0, 0, 0.12);\n}\n.Gallery_container__wrapper__img__3Jg3b {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}", "",{"version":3,"sources":["webpack://../../styles/_varriables.scss","webpack://Gallery.module.scss"],"names":[],"mappings":"AAAA,WAAA;ACEA;EACE,WAAA;EACA,iBAAA;EACA,aAAA;EAGA,oBAAA;EAGA,aAAA;EACA,sCAAA;EAEA,qBAAA;EAAA,wBAAA;UAAA,gBAAA;EACA,kBAAA;EAAA,aAAA;EACA,wBAAA;AALF;AAOE;EAhBF;IAiBI,gBAAA;EAJF;AACF;AAME;EApBF;IAqBI,gBAAA;EAHF;AACF;AAKE;EAxBF;IAyBI,gBAAA;EAFF;AACF;AAIE;EA5BF;IA6BI,qCAAA;IACA,eAAA;IACA,wBAAA;IACA,cAAA;EADF;AACF;AAGE;EAnCF;IAoCI,qCAAA;IACA,eAAA;IACA,cAAA;EAAF;AACF;AAEE;EAGE,WAAA;EACA,gBAAA;EACA,eAAA;EACA,yOAAA;UAAA,iOAAA;AAFJ;AAOI;EACE,YAAA;EACA,WAAA;EACA,iBAAA;AALN","sourcesContent":["/* colors */\r\n$primary-color: #121212;\r\n$secondary-color: #242323;\r\n$subtitle-color: #383838;\r\n","@import '../../styles/varriables';\r\n\r\n.container {\r\n  width: 100%;\r\n  max-width: 1024px;\r\n  height: 70rem;\r\n  // height: 100%;\r\n\r\n  margin-bottom: 10rem;\r\n  // margin-bottom: 10rem;\r\n\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  // grid-template-rows: repeat(5, 1fr);\r\n  column-gap: 3rem;\r\n  row-gap: 3rem;\r\n  scroll-margin-top: 15rem;\r\n\r\n  @media screen and (max-width: 1280px) {\r\n    max-width: 840px;\r\n  }\r\n\r\n  @media screen and (max-width: 1024px) {\r\n    max-width: 768px;\r\n  }\r\n\r\n  @media screen and (max-width: 940px) {\r\n    max-width: 720px;\r\n  }\r\n\r\n  @media screen and (max-width: 768px) {\r\n    grid-template-columns: repeat(2, 1fr);\r\n    padding: 0 3rem;\r\n    grid-template-rows: auto;\r\n    height: 150rem;\r\n  }\r\n\r\n  @media screen and (max-width: 425px) {\r\n    grid-template-columns: repeat(1, 1fr);\r\n    padding: 0 3rem;\r\n    height: 300rem;\r\n  }\r\n\r\n  &__wrapper {\r\n    // border: $subtitle-color 1px solid;\r\n    // height: 20rem;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 5.5px 10px rgba(0, 0, 0, 0.06),\r\n      0 12.3px 17.9px rgba(0, 0, 0, 0.072), 0 11.8px 23.4px rgba(0, 0, 0, 0.086),\r\n      0 50px 80px rgba(0, 0, 0, 0.12);\r\n\r\n    &__img {\r\n      height: 100%;\r\n      width: 100%;\r\n      object-fit: cover;\r\n    }\r\n\r\n    // @media screen and (min-width: 768px) {\r\n    //   &__0 {\r\n    //     grid-column: 1/3;\r\n    //     grid-row: 1/3;\r\n    //   }\r\n\r\n    //   &__1 {\r\n    //     grid-column: 3;\r\n    //     grid-row: 1;\r\n    //   }\r\n\r\n    //   &__2 {\r\n    //     grid-column: 4;\r\n    //     grid-row: 1;\r\n    //   }\r\n\r\n    //   &__4 {\r\n    //     grid-column: 3/5;\r\n    //     grid-row: 2/4;\r\n    //   }\r\n\r\n    //   &__7 {\r\n    //     grid-column: 1/3;\r\n    //     grid-row: 4/6;\r\n    //   }\r\n    // }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Gallery_container__1LLMr",
	"container__wrapper": "Gallery_container__wrapper__10DS6",
	"container__wrapper__img": "Gallery_container__wrapper__img__3Jg3b"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2dhbGxlcnkvR2FsbGVyeS5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNENBQTRDLGdCQUFnQixzQkFBc0Isa0JBQWtCLHlCQUF5QixrQkFBa0IsMkNBQTJDLDBCQUEwQiw2QkFBNkIsNkJBQTZCLHVCQUF1QixrQkFBa0IsNkJBQTZCLEdBQUcseUNBQXlDLCtCQUErQix1QkFBdUIsS0FBSyxHQUFHLHlDQUF5QywrQkFBK0IsdUJBQXVCLEtBQUssR0FBRyx3Q0FBd0MsK0JBQStCLHVCQUF1QixLQUFLLEdBQUcsd0NBQXdDLCtCQUErQiw0Q0FBNEMsc0JBQXNCLCtCQUErQixxQkFBcUIsS0FBSyxHQUFHLHdDQUF3QywrQkFBK0IsNENBQTRDLHNCQUFzQixxQkFBcUIsS0FBSyxHQUFHLHNDQUFzQyxnQkFBZ0IscUJBQXFCLG9CQUFvQiw4T0FBOE8sOE9BQThPLEdBQUcsMkNBQTJDLGlCQUFpQixnQkFBZ0Isc0JBQXNCLEdBQUcsT0FBTyxtSUFBbUksS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssTUFBTSxZQUFZLEtBQUssS0FBSyxLQUFLLE1BQU0sWUFBWSxLQUFLLEtBQUssS0FBSyxNQUFNLFlBQVksS0FBSyxLQUFLLEtBQUssTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLE1BQU0sWUFBWSxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxpRUFBaUUsOEJBQThCLDZCQUE2Qix5Q0FBeUMsb0JBQW9CLGtCQUFrQix3QkFBd0Isb0JBQW9CLHNCQUFzQiwrQkFBK0IsOEJBQThCLHdCQUF3Qiw2Q0FBNkMsNENBQTRDLHVCQUF1QixvQkFBb0IsK0JBQStCLGlEQUFpRCx5QkFBeUIsT0FBTyxpREFBaUQseUJBQXlCLE9BQU8sZ0RBQWdELHlCQUF5QixPQUFPLGdEQUFnRCw4Q0FBOEMsd0JBQXdCLGlDQUFpQyx1QkFBdUIsT0FBTyxnREFBZ0QsOENBQThDLHdCQUF3Qix1QkFBdUIsT0FBTyxzQkFBc0IsNkNBQTZDLHlCQUF5QixvQkFBb0IseUJBQXlCLHdCQUF3QixxUUFBcVEsb0JBQW9CLHVCQUF1QixzQkFBc0IsNEJBQTRCLFNBQVMscURBQXFELG1CQUFtQixnQ0FBZ0MsNkJBQTZCLGNBQWMsdUJBQXVCLDhCQUE4QiwyQkFBMkIsY0FBYyx1QkFBdUIsOEJBQThCLDJCQUEyQixjQUFjLHVCQUF1QixnQ0FBZ0MsNkJBQTZCLGNBQWMsdUJBQXVCLGdDQUFnQyw2QkFBNkIsY0FBYyxZQUFZLE9BQU8sS0FBSyx1QkFBdUI7QUFDNzVJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI4YjFiNTRmZWVjYmViMmNhZDBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBjb2xvcnMgKi9cXG4uR2FsbGVyeV9jb250YWluZXJfXzFMTE1yIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XFxuICBoZWlnaHQ6IDcwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLWNvbHVtbi1nYXA6IDNyZW07XFxuICAtd2Via2l0LWNvbHVtbi1nYXA6IDNyZW07XFxuICAgICAgICAgIGNvbHVtbi1nYXA6IDNyZW07XFxuICBncmlkLXJvdy1nYXA6IDNyZW07XFxuICByb3ctZ2FwOiAzcmVtO1xcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDE1cmVtO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcXG4gIC5HYWxsZXJ5X2NvbnRhaW5lcl9fMUxMTXIge1xcbiAgICBtYXgtd2lkdGg6IDg0MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5HYWxsZXJ5X2NvbnRhaW5lcl9fMUxMTXIge1xcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDBweCkge1xcbiAgLkdhbGxlcnlfY29udGFpbmVyX18xTExNciB7XFxuICAgIG1heC13aWR0aDogNzIwcHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuR2FsbGVyeV9jb250YWluZXJfXzFMTE1yIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGhlaWdodDogMTUwcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xcbiAgLkdhbGxlcnlfY29udGFpbmVyX18xTExNciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXG4gICAgaGVpZ2h0OiAzMDByZW07XFxuICB9XFxufVxcbi5HYWxsZXJ5X2NvbnRhaW5lcl9fd3JhcHBlcl9fMTBEUzYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMzQpLCAwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLCAwIDUuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAxMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLCAwIDExLjhweCAyMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4NiksIDAgNTBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksIDAgNS41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDEyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksIDAgMTEuOHB4IDIzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDg2KSwgMCA1MHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLkdhbGxlcnlfY29udGFpbmVyX193cmFwcGVyX19pbWdfXzNKZzNiIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvX3ZhcnJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL0dhbGxlcnkubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBQTtBQ0VBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUdBLG9CQUFBO0VBR0EsYUFBQTtFQUNBLHNDQUFBO0VBRUEscUJBQUE7RUFBQSx3QkFBQTtVQUFBLGdCQUFBO0VBQ0Esa0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7QUFMRjtBQU9FO0VBaEJGO0lBaUJJLGdCQUFBO0VBSkY7QUFDRjtBQU1FO0VBcEJGO0lBcUJJLGdCQUFBO0VBSEY7QUFDRjtBQUtFO0VBeEJGO0lBeUJJLGdCQUFBO0VBRkY7QUFDRjtBQUlFO0VBNUJGO0lBNkJJLHFDQUFBO0lBQ0EsZUFBQTtJQUNBLHdCQUFBO0lBQ0EsY0FBQTtFQURGO0FBQ0Y7QUFHRTtFQW5DRjtJQW9DSSxxQ0FBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VBQUY7QUFDRjtBQUVFO0VBR0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlPQUFBO1VBQUEsaU9BQUE7QUFGSjtBQU9JO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUxOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGNvbG9ycyAqL1xcclxcbiRwcmltYXJ5LWNvbG9yOiAjMTIxMjEyO1xcclxcbiRzZWNvbmRhcnktY29sb3I6ICMyNDIzMjM7XFxyXFxuJHN1YnRpdGxlLWNvbG9yOiAjMzgzODM4O1xcclxcblwiLFwiQGltcG9ydCAnLi4vLi4vc3R5bGVzL3ZhcnJpYWJsZXMnO1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDEwMjRweDtcXHJcXG4gIGhlaWdodDogNzByZW07XFxyXFxuICAvLyBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcXHJcXG4gIC8vIG1hcmdpbi1ib3R0b206IDEwcmVtO1xcclxcblxcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgLy8gZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXHJcXG4gIGNvbHVtbi1nYXA6IDNyZW07XFxyXFxuICByb3ctZ2FwOiAzcmVtO1xcclxcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDE1cmVtO1xcclxcblxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XFxyXFxuICAgIG1heC13aWR0aDogODQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk0MHB4KSB7XFxyXFxuICAgIG1heC13aWR0aDogNzIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAxNTByZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcclxcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxyXFxuICAgIGhlaWdodDogMzAwcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fd3JhcHBlciB7XFxyXFxuICAgIC8vIGJvcmRlcjogJHN1YnRpdGxlLWNvbG9yIDFweCBzb2xpZDtcXHJcXG4gICAgLy8gaGVpZ2h0OiAyMHJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSxcXHJcXG4gICAgICAwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLCAwIDUuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcXHJcXG4gICAgICAwIDEyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksIDAgMTEuOHB4IDIzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDg2KSxcXHJcXG4gICAgICAwIDUwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcclxcblxcclxcbiAgICAmX19pbWcge1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAvLyAgICZfXzAge1xcclxcbiAgICAvLyAgICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgLy8gICAgIGdyaWQtcm93OiAxLzM7XFxyXFxuICAgIC8vICAgfVxcclxcblxcclxcbiAgICAvLyAgICZfXzEge1xcclxcbiAgICAvLyAgICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICAgIC8vICAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgLy8gICB9XFxyXFxuXFxyXFxuICAgIC8vICAgJl9fMiB7XFxyXFxuICAgIC8vICAgICBncmlkLWNvbHVtbjogNDtcXHJcXG4gICAgLy8gICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICAvLyAgIH1cXHJcXG5cXHJcXG4gICAgLy8gICAmX180IHtcXHJcXG4gICAgLy8gICAgIGdyaWQtY29sdW1uOiAzLzU7XFxyXFxuICAgIC8vICAgICBncmlkLXJvdzogMi80O1xcclxcbiAgICAvLyAgIH1cXHJcXG5cXHJcXG4gICAgLy8gICAmX183IHtcXHJcXG4gICAgLy8gICAgIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxuICAgIC8vICAgICBncmlkLXJvdzogNC82O1xcclxcbiAgICAvLyAgIH1cXHJcXG4gICAgLy8gfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJHYWxsZXJ5X2NvbnRhaW5lcl9fMUxMTXJcIixcblx0XCJjb250YWluZXJfX3dyYXBwZXJcIjogXCJHYWxsZXJ5X2NvbnRhaW5lcl9fd3JhcHBlcl9fMTBEUzZcIixcblx0XCJjb250YWluZXJfX3dyYXBwZXJfX2ltZ1wiOiBcIkdhbGxlcnlfY29udGFpbmVyX193cmFwcGVyX19pbWdfXzNKZzNiXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==