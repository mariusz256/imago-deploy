webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./component/gallery/Galerry.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./component/gallery/Galerry.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* colors */\n.Galerry_container___sr_G {\n  width: 100%;\n  max-width: 1024px;\n  height: 60rem;\n  margin-top: 10rem;\n  margin-bottom: 10rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: repeat(5, 1fr);\n  grid-column-gap: 3rem;\n  -webkit-column-gap: 3rem;\n          column-gap: 3rem;\n  grid-row-gap: 3rem;\n  row-gap: 3rem;\n}\n@media screen and (max-width: 1280px) {\n  .Galerry_container___sr_G {\n    max-width: 840px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .Galerry_container___sr_G {\n    max-width: 768px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .Galerry_container___sr_G {\n    max-width: 768px;\n  }\n}\n.Galerry_container__wrapper__1Dy_s {\n  width: 100%;\n  overflow: hidden;\n  cursor: pointer;\n  -webkit-box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 5.5px 10px rgba(0, 0, 0, 0.06), 0 12.3px 17.9px rgba(0, 0, 0, 0.072), 0 11.8px 23.4px rgba(0, 0, 0, 0.086), 0 50px 80px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 5.5px 10px rgba(0, 0, 0, 0.06), 0 12.3px 17.9px rgba(0, 0, 0, 0.072), 0 11.8px 23.4px rgba(0, 0, 0, 0.086), 0 50px 80px rgba(0, 0, 0, 0.12);\n}\n.Galerry_container__wrapper__img__2B1JZ {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.Galerry_container__wrapper__0__24GFU {\n  grid-column: 1/3;\n  grid-row: 1/3;\n}\n.Galerry_container__wrapper__1__lsUCJ {\n  grid-column: 3;\n  grid-row: 1;\n}\n.Galerry_container__wrapper__2__3HzIS {\n  grid-column: 4;\n  grid-row: 1;\n}\n.Galerry_container__wrapper__4__2Koyi {\n  grid-column: 3/5;\n  grid-row: 2/4;\n}\n.Galerry_container__wrapper__7__1hvlZ {\n  grid-column: 1/3;\n  grid-row: 4/6;\n}", "",{"version":3,"sources":["webpack://../../styles/_varriables.scss","webpack://Galerry.module.scss"],"names":[],"mappings":"AAAA,WAAA;ACEA;EACE,WAAA;EACA,iBAAA;EACA,aAAA;EAGA,iBAAA;EACA,oBAAA;EAEA,aAAA;EACA,sCAAA;EACA,kCAAA;EACA,qBAAA;EAAA,wBAAA;UAAA,gBAAA;EACA,kBAAA;EAAA,aAAA;AAHF;AAKE;EAfF;IAgBI,gBAAA;EAFF;AACF;AAIE;EAnBF;IAoBI,gBAAA;EADF;AACF;AAGE;EAvBF;IAwBI,gBAAA;EAAF;AACF;AAEE;EAGE,WAAA;EACA,gBAAA;EACA,eAAA;EACA,yOAAA;UAAA,iOAAA;AAFJ;AAOI;EACE,YAAA;EACA,WAAA;EACA,iBAAA;AALN;AAOI;EACE,gBAAA;EACA,aAAA;AALN;AAQI;EACE,cAAA;EACA,WAAA;AANN;AASI;EACE,cAAA;EACA,WAAA;AAPN;AAUI;EACE,gBAAA;EACA,aAAA;AARN;AAWI;EACE,gBAAA;EACA,aAAA;AATN","sourcesContent":["/* colors */\r\n$primary-color: #121212;\r\n$secondary-color: #242323;\r\n$subtitle-color: #383838;\r\n","@import '../../styles/varriables';\r\n\r\n.container {\r\n  width: 100%;\r\n  max-width: 1024px;\r\n  height: 60rem;\r\n  // height: 100%;\r\n\r\n  margin-top: 10rem;\r\n  margin-bottom: 10rem;\r\n\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  grid-template-rows: repeat(5, 1fr);\r\n  column-gap: 3rem;\r\n  row-gap: 3rem;\r\n\r\n  @media screen and (max-width: 1280px) {\r\n    max-width: 840px;\r\n  }\r\n\r\n  @media screen and (max-width: 1024px) {\r\n    max-width: 768px;\r\n  }\r\n\r\n  @media screen and (max-width: 1024px) {\r\n    max-width: 768px;\r\n  }\r\n\r\n  &__wrapper {\r\n    // border: $subtitle-color 1px solid;\r\n    // height: 20rem;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 5.5px 10px rgba(0, 0, 0, 0.06),\r\n      0 12.3px 17.9px rgba(0, 0, 0, 0.072), 0 11.8px 23.4px rgba(0, 0, 0, 0.086),\r\n      0 50px 80px rgba(0, 0, 0, 0.12);\r\n\r\n    &__img {\r\n      height: 100%;\r\n      width: 100%;\r\n      object-fit: cover;\r\n    }\r\n    &__0 {\r\n      grid-column: 1/3;\r\n      grid-row: 1/3;\r\n    }\r\n\r\n    &__1 {\r\n      grid-column: 3;\r\n      grid-row: 1;\r\n    }\r\n\r\n    &__2 {\r\n      grid-column: 4;\r\n      grid-row: 1;\r\n    }\r\n\r\n    &__4 {\r\n      grid-column: 3/5;\r\n      grid-row: 2/4;\r\n    }\r\n\r\n    &__7 {\r\n      grid-column: 1/3;\r\n      grid-row: 4/6;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Galerry_container___sr_G",
	"container__wrapper": "Galerry_container__wrapper__1Dy_s",
	"container__wrapper__img": "Galerry_container__wrapper__img__2B1JZ",
	"container__wrapper__0": "Galerry_container__wrapper__0__24GFU",
	"container__wrapper__1": "Galerry_container__wrapper__1__lsUCJ",
	"container__wrapper__2": "Galerry_container__wrapper__2__3HzIS",
	"container__wrapper__4": "Galerry_container__wrapper__4__2Koyi",
	"container__wrapper__7": "Galerry_container__wrapper__7__1hvlZ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2dhbGxlcnkvR2FsZXJyeS5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNENBQTRDLGdCQUFnQixzQkFBc0Isa0JBQWtCLHNCQUFzQix5QkFBeUIsa0JBQWtCLDJDQUEyQyx1Q0FBdUMsMEJBQTBCLDZCQUE2Qiw2QkFBNkIsdUJBQXVCLGtCQUFrQixHQUFHLHlDQUF5QywrQkFBK0IsdUJBQXVCLEtBQUssR0FBRyx5Q0FBeUMsK0JBQStCLHVCQUF1QixLQUFLLEdBQUcseUNBQXlDLCtCQUErQix1QkFBdUIsS0FBSyxHQUFHLHNDQUFzQyxnQkFBZ0IscUJBQXFCLG9CQUFvQiw4T0FBOE8sOE9BQThPLEdBQUcsMkNBQTJDLGlCQUFpQixnQkFBZ0Isc0JBQXNCLEdBQUcseUNBQXlDLHFCQUFxQixrQkFBa0IsR0FBRyx5Q0FBeUMsbUJBQW1CLGdCQUFnQixHQUFHLHlDQUF5QyxtQkFBbUIsZ0JBQWdCLEdBQUcseUNBQXlDLHFCQUFxQixrQkFBa0IsR0FBRyx5Q0FBeUMscUJBQXFCLGtCQUFrQixHQUFHLE9BQU8sbUlBQW1JLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxZQUFZLEtBQUssS0FBSyxLQUFLLE1BQU0sWUFBWSxLQUFLLEtBQUssS0FBSyxNQUFNLFlBQVksS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsaUVBQWlFLDhCQUE4Qiw2QkFBNkIseUNBQXlDLG9CQUFvQixrQkFBa0Isd0JBQXdCLG9CQUFvQixzQkFBc0IsNEJBQTRCLDJCQUEyQix3QkFBd0IsNkNBQTZDLHlDQUF5Qyx1QkFBdUIsb0JBQW9CLGlEQUFpRCx5QkFBeUIsT0FBTyxpREFBaUQseUJBQXlCLE9BQU8saURBQWlELHlCQUF5QixPQUFPLHNCQUFzQiw2Q0FBNkMseUJBQXlCLG9CQUFvQix5QkFBeUIsd0JBQXdCLHFRQUFxUSxvQkFBb0IsdUJBQXVCLHNCQUFzQiw0QkFBNEIsU0FBUyxjQUFjLDJCQUEyQix3QkFBd0IsU0FBUyxrQkFBa0IseUJBQXlCLHNCQUFzQixTQUFTLGtCQUFrQix5QkFBeUIsc0JBQXNCLFNBQVMsa0JBQWtCLDJCQUEyQix3QkFBd0IsU0FBUyxrQkFBa0IsMkJBQTJCLHdCQUF3QixTQUFTLE9BQU8sS0FBSyx1QkFBdUI7QUFDbmdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZTI0OTdmMzc1NWM3NGE2OTEzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogY29sb3JzICovXFxuLkdhbGVycnlfY29udGFpbmVyX19fc3JfRyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAyNHB4O1xcbiAgaGVpZ2h0OiA2MHJlbTtcXG4gIG1hcmdpbi10b3A6IDEwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAzcmVtO1xcbiAgLXdlYmtpdC1jb2x1bW4tZ2FwOiAzcmVtO1xcbiAgICAgICAgICBjb2x1bW4tZ2FwOiAzcmVtO1xcbiAgZ3JpZC1yb3ctZ2FwOiAzcmVtO1xcbiAgcm93LWdhcDogM3JlbTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XFxuICAuR2FsZXJyeV9jb250YWluZXJfX19zcl9HIHtcXG4gICAgbWF4LXdpZHRoOiA4NDBweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAuR2FsZXJyeV9jb250YWluZXJfX19zcl9HIHtcXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAuR2FsZXJyeV9jb250YWluZXJfX19zcl9HIHtcXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcXG4gIH1cXG59XFxuLkdhbGVycnlfY29udGFpbmVyX193cmFwcGVyX18xRHlfcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksIDAgNS41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDEyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksIDAgMTEuOHB4IDIzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDg2KSwgMCA1MHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSwgMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSwgMCA1LjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMTIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDcyKSwgMCAxMS44cHggMjMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wODYpLCAwIDUwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4uR2FsZXJyeV9jb250YWluZXJfX3dyYXBwZXJfX2ltZ19fMkIxSloge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuLkdhbGVycnlfY29udGFpbmVyX193cmFwcGVyX18wX18yNEdGVSB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG59XFxuLkdhbGVycnlfY29udGFpbmVyX193cmFwcGVyX18xX19sc1VDSiB7XFxuICBncmlkLWNvbHVtbjogMztcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG4uR2FsZXJyeV9jb250YWluZXJfX3dyYXBwZXJfXzJfXzNIeklTIHtcXG4gIGdyaWQtY29sdW1uOiA0O1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcbi5HYWxlcnJ5X2NvbnRhaW5lcl9fd3JhcHBlcl9fNF9fMktveWkge1xcbiAgZ3JpZC1jb2x1bW46IDMvNTtcXG4gIGdyaWQtcm93OiAyLzQ7XFxufVxcbi5HYWxlcnJ5X2NvbnRhaW5lcl9fd3JhcHBlcl9fN19fMWh2bFoge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGdyaWQtcm93OiA0LzY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvX3ZhcnJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL0dhbGVycnkubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBQTtBQ0VBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUdBLGlCQUFBO0VBQ0Esb0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQUEsd0JBQUE7VUFBQSxnQkFBQTtFQUNBLGtCQUFBO0VBQUEsYUFBQTtBQUhGO0FBS0U7RUFmRjtJQWdCSSxnQkFBQTtFQUZGO0FBQ0Y7QUFJRTtFQW5CRjtJQW9CSSxnQkFBQTtFQURGO0FBQ0Y7QUFHRTtFQXZCRjtJQXdCSSxnQkFBQTtFQUFGO0FBQ0Y7QUFFRTtFQUdFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5T0FBQTtVQUFBLGlPQUFBO0FBRko7QUFPSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFMTjtBQU9JO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBTE47QUFRSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBTk47QUFTSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBUE47QUFVSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQVJOO0FBV0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFUTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBjb2xvcnMgKi9cXHJcXG4kcHJpbWFyeS1jb2xvcjogIzEyMTIxMjtcXHJcXG4kc2Vjb25kYXJ5LWNvbG9yOiAjMjQyMzIzO1xcclxcbiRzdWJ0aXRsZS1jb2xvcjogIzM4MzgzODtcXHJcXG5cIixcIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy92YXJyaWFibGVzJztcXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XFxyXFxuICBoZWlnaHQ6IDYwcmVtO1xcclxcbiAgLy8gaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgbWFyZ2luLXRvcDogMTByZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxyXFxuICBjb2x1bW4tZ2FwOiAzcmVtO1xcclxcbiAgcm93LWdhcDogM3JlbTtcXHJcXG5cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xcclxcbiAgICBtYXgtd2lkdGg6IDg0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAgIG1heC13aWR0aDogNzY4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3dyYXBwZXIge1xcclxcbiAgICAvLyBib3JkZXI6ICRzdWJ0aXRsZS1jb2xvciAxcHggc29saWQ7XFxyXFxuICAgIC8vIGhlaWdodDogMjByZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXFxyXFxuICAgICAgMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSwgMCA1LjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXFxyXFxuICAgICAgMCAxMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLCAwIDExLjhweCAyMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4NiksXFxyXFxuICAgICAgMCA1MHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXHJcXG5cXHJcXG4gICAgJl9faW1nIHtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgJl9fMCB7XFxyXFxuICAgICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgICBncmlkLXJvdzogMS8zO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfXzEge1xcclxcbiAgICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbiAgICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfXzIge1xcclxcbiAgICAgIGdyaWQtY29sdW1uOiA0O1xcclxcbiAgICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfXzQge1xcclxcbiAgICAgIGdyaWQtY29sdW1uOiAzLzU7XFxyXFxuICAgICAgZ3JpZC1yb3c6IDIvNDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX183IHtcXHJcXG4gICAgICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgICAgIGdyaWQtcm93OiA0LzY7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiR2FsZXJyeV9jb250YWluZXJfX19zcl9HXCIsXG5cdFwiY29udGFpbmVyX193cmFwcGVyXCI6IFwiR2FsZXJyeV9jb250YWluZXJfX3dyYXBwZXJfXzFEeV9zXCIsXG5cdFwiY29udGFpbmVyX193cmFwcGVyX19pbWdcIjogXCJHYWxlcnJ5X2NvbnRhaW5lcl9fd3JhcHBlcl9faW1nX18yQjFKWlwiLFxuXHRcImNvbnRhaW5lcl9fd3JhcHBlcl9fMFwiOiBcIkdhbGVycnlfY29udGFpbmVyX193cmFwcGVyX18wX18yNEdGVVwiLFxuXHRcImNvbnRhaW5lcl9fd3JhcHBlcl9fMVwiOiBcIkdhbGVycnlfY29udGFpbmVyX193cmFwcGVyX18xX19sc1VDSlwiLFxuXHRcImNvbnRhaW5lcl9fd3JhcHBlcl9fMlwiOiBcIkdhbGVycnlfY29udGFpbmVyX193cmFwcGVyX18yX18zSHpJU1wiLFxuXHRcImNvbnRhaW5lcl9fd3JhcHBlcl9fNFwiOiBcIkdhbGVycnlfY29udGFpbmVyX193cmFwcGVyX180X18yS295aVwiLFxuXHRcImNvbnRhaW5lcl9fd3JhcHBlcl9fN1wiOiBcIkdhbGVycnlfY29udGFpbmVyX193cmFwcGVyX183X18xaHZsWlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=