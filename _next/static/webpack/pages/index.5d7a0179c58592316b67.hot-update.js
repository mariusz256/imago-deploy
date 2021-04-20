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
___CSS_LOADER_EXPORT___.push([module.i, "/* colors */\n.Galerry_container___sr_G {\n  width: 100%;\n  max-width: 1024px;\n  height: 60rem;\n  margin-top: 10rem;\n  margin-bottom: 10rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: repeat(5, 1fr);\n  grid-column-gap: 3rem;\n  -webkit-column-gap: 3rem;\n          column-gap: 3rem;\n  grid-row-gap: 3rem;\n  row-gap: 3rem;\n}\n.Galerry_container__wrapper__1Dy_s {\n  width: 100%;\n  overflow: hidden;\n  cursor: pointer;\n  -webkit-box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 21.8px 23.4px rgba(0, 0, 0, 0.086), 0 50px 80px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 21.8px 23.4px rgba(0, 0, 0, 0.086), 0 50px 80px rgba(0, 0, 0, 0.12);\n}\n.Galerry_container__wrapper__img__2B1JZ {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.Galerry_container__wrapper__0__24GFU {\n  grid-column: 1/3;\n  grid-row: 1/3;\n}\n.Galerry_container__wrapper__1__lsUCJ {\n  grid-column: 3;\n  grid-row: 1;\n}\n.Galerry_container__wrapper__2__3HzIS {\n  grid-column: 4;\n  grid-row: 1;\n}\n.Galerry_container__wrapper__4__2Koyi {\n  grid-column: 3/5;\n  grid-row: 2/4;\n}\n.Galerry_container__wrapper__7__1hvlZ {\n  grid-column: 1/3;\n  grid-row: 4/6;\n}", "",{"version":3,"sources":["webpack://../../styles/_varriables.scss","webpack://Galerry.module.scss"],"names":[],"mappings":"AAAA,WAAA;ACEA;EACE,WAAA;EACA,iBAAA;EACA,aAAA;EAGA,iBAAA;EACA,oBAAA;EAEA,aAAA;EACA,sCAAA;EACA,kCAAA;EACA,qBAAA;EAAA,wBAAA;UAAA,gBAAA;EACA,kBAAA;EAAA,aAAA;AAHF;AAKE;EAGE,WAAA;EACA,gBAAA;EACA,eAAA;EACA,0OAAA;UAAA,kOAAA;AALJ;AAUI;EACE,YAAA;EACA,WAAA;EACA,iBAAA;AARN;AAUI;EACE,gBAAA;EACA,aAAA;AARN;AAWI;EACE,cAAA;EACA,WAAA;AATN;AAYI;EACE,cAAA;EACA,WAAA;AAVN;AAaI;EACE,gBAAA;EACA,aAAA;AAXN;AAcI;EACE,gBAAA;EACA,aAAA;AAZN","sourcesContent":["/* colors */\r\n$primary-color: #121212;\r\n$secondary-color: #242323;\r\n$subtitle-color: #383838;\r\n","@import '../../styles/varriables';\r\n\r\n.container {\r\n  width: 100%;\r\n  max-width: 1024px;\r\n  height: 60rem;\r\n  // height: 100%;\r\n\r\n  margin-top: 10rem;\r\n  margin-bottom: 10rem;\r\n\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  grid-template-rows: repeat(5, 1fr);\r\n  column-gap: 3rem;\r\n  row-gap: 3rem;\r\n\r\n  &__wrapper {\r\n    // border: $subtitle-color 1px solid;\r\n    // height: 20rem;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 21.8px 23.4px rgba(0, 0, 0, 0.086),\r\n      0 50px 80px rgba(0, 0, 0, 0.12);\r\n\r\n    &__img {\r\n      height: 100%;\r\n      width: 100%;\r\n      object-fit: cover;\r\n    }\r\n    &__0 {\r\n      grid-column: 1/3;\r\n      grid-row: 1/3;\r\n    }\r\n\r\n    &__1 {\r\n      grid-column: 3;\r\n      grid-row: 1;\r\n    }\r\n\r\n    &__2 {\r\n      grid-column: 4;\r\n      grid-row: 1;\r\n    }\r\n\r\n    &__4 {\r\n      grid-column: 3/5;\r\n      grid-row: 2/4;\r\n    }\r\n\r\n    &__7 {\r\n      grid-column: 1/3;\r\n      grid-row: 4/6;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2dhbGxlcnkvR2FsZXJyeS5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNENBQTRDLGdCQUFnQixzQkFBc0Isa0JBQWtCLHNCQUFzQix5QkFBeUIsa0JBQWtCLDJDQUEyQyx1Q0FBdUMsMEJBQTBCLDZCQUE2Qiw2QkFBNkIsdUJBQXVCLGtCQUFrQixHQUFHLHNDQUFzQyxnQkFBZ0IscUJBQXFCLG9CQUFvQiwrT0FBK08sK09BQStPLEdBQUcsMkNBQTJDLGlCQUFpQixnQkFBZ0Isc0JBQXNCLEdBQUcseUNBQXlDLHFCQUFxQixrQkFBa0IsR0FBRyx5Q0FBeUMsbUJBQW1CLGdCQUFnQixHQUFHLHlDQUF5QyxtQkFBbUIsZ0JBQWdCLEdBQUcseUNBQXlDLHFCQUFxQixrQkFBa0IsR0FBRyx5Q0FBeUMscUJBQXFCLGtCQUFrQixHQUFHLE9BQU8sbUlBQW1JLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsaUVBQWlFLDhCQUE4Qiw2QkFBNkIseUNBQXlDLG9CQUFvQixrQkFBa0Isd0JBQXdCLG9CQUFvQixzQkFBc0IsNEJBQTRCLDJCQUEyQix3QkFBd0IsNkNBQTZDLHlDQUF5Qyx1QkFBdUIsb0JBQW9CLHNCQUFzQiw2Q0FBNkMseUJBQXlCLG9CQUFvQix5QkFBeUIsd0JBQXdCLHNRQUFzUSxvQkFBb0IsdUJBQXVCLHNCQUFzQiw0QkFBNEIsU0FBUyxjQUFjLDJCQUEyQix3QkFBd0IsU0FBUyxrQkFBa0IseUJBQXlCLHNCQUFzQixTQUFTLGtCQUFrQix5QkFBeUIsc0JBQXNCLFNBQVMsa0JBQWtCLDJCQUEyQix3QkFBd0IsU0FBUyxrQkFBa0IsMkJBQTJCLHdCQUF3QixTQUFTLE9BQU8sS0FBSyx1QkFBdUI7QUFDNTNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZDdhMDE3OWM1ODU5MjMxNmI2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogY29sb3JzICovXFxuLkdhbGVycnlfY29udGFpbmVyX19fc3JfRyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAyNHB4O1xcbiAgaGVpZ2h0OiA2MHJlbTtcXG4gIG1hcmdpbi10b3A6IDEwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAzcmVtO1xcbiAgLXdlYmtpdC1jb2x1bW4tZ2FwOiAzcmVtO1xcbiAgICAgICAgICBjb2x1bW4tZ2FwOiAzcmVtO1xcbiAgZ3JpZC1yb3ctZ2FwOiAzcmVtO1xcbiAgcm93LWdhcDogM3JlbTtcXG59XFxuLkdhbGVycnlfY29udGFpbmVyX193cmFwcGVyX18xRHlfcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksIDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLCAwIDIxLjhweCAyMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4NiksIDAgNTBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksIDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLCAwIDIxLjhweCAyMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4NiksIDAgNTBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5HYWxlcnJ5X2NvbnRhaW5lcl9fd3JhcHBlcl9faW1nX18yQjFKWiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4uR2FsZXJyeV9jb250YWluZXJfX3dyYXBwZXJfXzBfXzI0R0ZVIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBncmlkLXJvdzogMS8zO1xcbn1cXG4uR2FsZXJyeV9jb250YWluZXJfX3dyYXBwZXJfXzFfX2xzVUNKIHtcXG4gIGdyaWQtY29sdW1uOiAzO1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcbi5HYWxlcnJ5X2NvbnRhaW5lcl9fd3JhcHBlcl9fMl9fM0h6SVMge1xcbiAgZ3JpZC1jb2x1bW46IDQ7XFxuICBncmlkLXJvdzogMTtcXG59XFxuLkdhbGVycnlfY29udGFpbmVyX193cmFwcGVyX180X18yS295aSB7XFxuICBncmlkLWNvbHVtbjogMy81O1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG59XFxuLkdhbGVycnlfY29udGFpbmVyX193cmFwcGVyX183X18xaHZsWiB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDQvNjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uL3N0eWxlcy9fdmFycmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vR2FsZXJyeS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFBO0FDRUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBR0EsaUJBQUE7RUFDQSxvQkFBQTtFQUVBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFBQSx3QkFBQTtVQUFBLGdCQUFBO0VBQ0Esa0JBQUE7RUFBQSxhQUFBO0FBSEY7QUFLRTtFQUdFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwT0FBQTtVQUFBLGtPQUFBO0FBTEo7QUFVSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFSTjtBQVVJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBUk47QUFXSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBVE47QUFZSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBVk47QUFhSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQVhOO0FBY0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFaTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBjb2xvcnMgKi9cXHJcXG4kcHJpbWFyeS1jb2xvcjogIzEyMTIxMjtcXHJcXG4kc2Vjb25kYXJ5LWNvbG9yOiAjMjQyMzIzO1xcclxcbiRzdWJ0aXRsZS1jb2xvcjogIzM4MzgzODtcXHJcXG5cIixcIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy92YXJyaWFibGVzJztcXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XFxyXFxuICBoZWlnaHQ6IDYwcmVtO1xcclxcbiAgLy8gaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgbWFyZ2luLXRvcDogMTByZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxyXFxuICBjb2x1bW4tZ2FwOiAzcmVtO1xcclxcbiAgcm93LWdhcDogM3JlbTtcXHJcXG5cXHJcXG4gICZfX3dyYXBwZXIge1xcclxcbiAgICAvLyBib3JkZXI6ICRzdWJ0aXRsZS1jb2xvciAxcHggc29saWQ7XFxyXFxuICAgIC8vIGhlaWdodDogMjByZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXFxyXFxuICAgICAgMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSwgMCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxcclxcbiAgICAgIDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDcyKSwgMCAyMS44cHggMjMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wODYpLFxcclxcbiAgICAgIDAgNTBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxyXFxuXFxyXFxuICAgICZfX2ltZyB7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICB9XFxyXFxuICAgICZfXzAge1xcclxcbiAgICAgIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxuICAgICAgZ3JpZC1yb3c6IDEvMztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX18xIHtcXHJcXG4gICAgICBncmlkLWNvbHVtbjogMztcXHJcXG4gICAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX18yIHtcXHJcXG4gICAgICBncmlkLWNvbHVtbjogNDtcXHJcXG4gICAgICBncmlkLXJvdzogMTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX180IHtcXHJcXG4gICAgICBncmlkLWNvbHVtbjogMy81O1xcclxcbiAgICAgIGdyaWQtcm93OiAyLzQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fNyB7XFxyXFxuICAgICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgICBncmlkLXJvdzogNC82O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkdhbGVycnlfY29udGFpbmVyX19fc3JfR1wiLFxuXHRcImNvbnRhaW5lcl9fd3JhcHBlclwiOiBcIkdhbGVycnlfY29udGFpbmVyX193cmFwcGVyX18xRHlfc1wiLFxuXHRcImNvbnRhaW5lcl9fd3JhcHBlcl9faW1nXCI6IFwiR2FsZXJyeV9jb250YWluZXJfX3dyYXBwZXJfX2ltZ19fMkIxSlpcIixcblx0XCJjb250YWluZXJfX3dyYXBwZXJfXzBcIjogXCJHYWxlcnJ5X2NvbnRhaW5lcl9fd3JhcHBlcl9fMF9fMjRHRlVcIixcblx0XCJjb250YWluZXJfX3dyYXBwZXJfXzFcIjogXCJHYWxlcnJ5X2NvbnRhaW5lcl9fd3JhcHBlcl9fMV9fbHNVQ0pcIixcblx0XCJjb250YWluZXJfX3dyYXBwZXJfXzJcIjogXCJHYWxlcnJ5X2NvbnRhaW5lcl9fd3JhcHBlcl9fMl9fM0h6SVNcIixcblx0XCJjb250YWluZXJfX3dyYXBwZXJfXzRcIjogXCJHYWxlcnJ5X2NvbnRhaW5lcl9fd3JhcHBlcl9fNF9fMktveWlcIixcblx0XCJjb250YWluZXJfX3dyYXBwZXJfXzdcIjogXCJHYWxlcnJ5X2NvbnRhaW5lcl9fd3JhcHBlcl9fN19fMWh2bFpcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9