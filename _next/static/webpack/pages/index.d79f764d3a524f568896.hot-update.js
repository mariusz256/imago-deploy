webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./component/Section/Section.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./component/Section/Section.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* colors */\n.Section_container__2w_K6 {\n  max-width: 1024px;\n  width: 100%;\n  margin-bottom: 10rem;\n}\n.Section_container__paragraph__10et0 {\n  font-size: 1rem;\n  line-height: 1.5;\n  font-weight: 500;\n}\n@media screen and (max-width: 768px) {\n  .Section_container__paragraph__10et0 {\n    font-size: 0.875rem;\n  }\n}\n@media screen and (max-width: 425px) {\n  .Section_container__paragraph__10et0 {\n    font-size: 0.75rem;\n  }\n}\n@media screen and (max-width: 1280px) {\n  .Section_container__2w_K6 {\n    max-width: 840px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .Section_container__2w_K6 {\n    max-width: 768px;\n  }\n}\n@media screen and (max-width: 940px) {\n  .Section_container__2w_K6 {\n    max-width: 720px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .Section_container__2w_K6 {\n    padding: 0 3rem;\n  }\n}\n@media screen and (max-width: 425px) {\n  .Section_container__2w_K6 {\n    padding: 0 3rem;\n  }\n}\n.Section_container__2w_K6 h2 {\n  font-size: 3rem;\n  color: #383838;\n  text-align: center;\n  font-family: \"Parisienne\", cursive;\n}\n\n.Section_container__list__1Z1a4 {\n  list-style: circle;\n  padding: 16px;\n  display: flex;\n}\n.Section_container__list__el__1cx8Z {\n  line-height: 1.5;\n  font-weight: 500;\n  margin: 0.5rem 0;\n}\n.Section_container__listNumeric__SPoEQ {\n  list-style: decimal;\n}", "",{"version":3,"sources":["webpack://../../styles/_varriables.scss","webpack://../../styles/_base.scss","webpack://Section.module.scss"],"names":[],"mappings":"AAAA,WAAA;ACAA;EACE,iBAAA;EACA,WAAA;EACA,oBAAA;ACEF;ADAE;EACE,eAAA;EACA,gBAAA;EACA,gBAAA;ACEJ;ADAI;EALF;IAMI,mBAAA;ECGJ;AACF;ADDI;EATF;IAUI,kBAAA;ECIJ;AACF;ADDE;EAnBF;IAoBI,gBAAA;ECIF;AACF;ADFE;EAvBF;IAwBI,gBAAA;ECKF;AACF;ADHE;EA3BF;IA4BI,gBAAA;ECMF;AACF;ADJE;EA/BF;IAgCI,eAAA;ECOF;AACF;ADLE;EAnCF;IAoCI,eAAA;ECQF;AACF;ADNE;EACE,eAAA;EACA,cDtCa;ECuCb,kBAAA;EACA,kCAAA;ACQJ;;AA/CE;EACE,kBAAA;EACA,aAAA;EACA,aAAA;AAkDJ;AAhDI;EACE,gBAAA;EACA,gBAAA;EACA,gBAAA;AAkDN;AA/CE;EACE,mBAAA;AAiDJ","sourcesContent":["/* colors */\r\n$primary-color: #121212;\r\n$secondary-color: #242323;\r\n$subtitle-color: #383838;\r\n",".container {\r\n  max-width: 1024px;\r\n  width: 100%;\r\n  margin-bottom: 10rem;\r\n\r\n  &__paragraph {\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    font-weight: 500;\r\n\r\n    @media screen and (max-width: 768px) {\r\n      font-size: 0.875rem;\r\n    }\r\n\r\n    @media screen and (max-width: 425px) {\r\n      font-size: 0.75rem;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 1280px) {\r\n    max-width: 840px;\r\n  }\r\n\r\n  @media screen and (max-width: 1024px) {\r\n    max-width: 768px;\r\n  }\r\n\r\n  @media screen and (max-width: 940px) {\r\n    max-width: 720px;\r\n  }\r\n\r\n  @media screen and (max-width: 768px) {\r\n    padding: 0 3rem;\r\n  }\r\n\r\n  @media screen and (max-width: 425px) {\r\n    padding: 0 3rem;\r\n  }\r\n\r\n  & h2 {\r\n    font-size: 3rem;\r\n    color: $subtitle-color;\r\n    text-align: center;\r\n    font-family: 'Parisienne', cursive;\r\n  }\r\n}\r\n","/* colors */\n.container {\n  max-width: 1024px;\n  width: 100%;\n  margin-bottom: 10rem;\n}\n.container__paragraph {\n  font-size: 1rem;\n  line-height: 1.5;\n  font-weight: 500;\n}\n@media screen and (max-width: 768px) {\n  .container__paragraph {\n    font-size: 0.875rem;\n  }\n}\n@media screen and (max-width: 425px) {\n  .container__paragraph {\n    font-size: 0.75rem;\n  }\n}\n@media screen and (max-width: 1280px) {\n  .container {\n    max-width: 840px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .container {\n    max-width: 768px;\n  }\n}\n@media screen and (max-width: 940px) {\n  .container {\n    max-width: 720px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .container {\n    padding: 0 3rem;\n  }\n}\n@media screen and (max-width: 425px) {\n  .container {\n    padding: 0 3rem;\n  }\n}\n.container h2 {\n  font-size: 3rem;\n  color: #383838;\n  text-align: center;\n  font-family: \"Parisienne\", cursive;\n}\n\n.container__list {\n  list-style: circle;\n  padding: 16px;\n  display: flex;\n}\n.container__list__el {\n  line-height: 1.5;\n  font-weight: 500;\n  margin: 0.5rem 0;\n}\n.container__listNumeric {\n  list-style: decimal;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Section_container__2w_K6",
	"container__paragraph": "Section_container__paragraph__10et0",
	"container__list": "Section_container__list__1Z1a4",
	"container__list__el": "Section_container__list__el__1cx8Z",
	"container__listNumeric": "Section_container__listNumeric__SPoEQ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1NlY3Rpb24vU2VjdGlvbi5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNENBQTRDLHNCQUFzQixnQkFBZ0IseUJBQXlCLEdBQUcsd0NBQXdDLG9CQUFvQixxQkFBcUIscUJBQXFCLEdBQUcsd0NBQXdDLDBDQUEwQywwQkFBMEIsS0FBSyxHQUFHLHdDQUF3QywwQ0FBMEMseUJBQXlCLEtBQUssR0FBRyx5Q0FBeUMsK0JBQStCLHVCQUF1QixLQUFLLEdBQUcseUNBQXlDLCtCQUErQix1QkFBdUIsS0FBSyxHQUFHLHdDQUF3QywrQkFBK0IsdUJBQXVCLEtBQUssR0FBRyx3Q0FBd0MsK0JBQStCLHNCQUFzQixLQUFLLEdBQUcsd0NBQXdDLCtCQUErQixzQkFBc0IsS0FBSyxHQUFHLGdDQUFnQyxvQkFBb0IsbUJBQW1CLHVCQUF1Qix5Q0FBeUMsR0FBRyxxQ0FBcUMsdUJBQXVCLGtCQUFrQixrQkFBa0IsR0FBRyx1Q0FBdUMscUJBQXFCLHFCQUFxQixxQkFBcUIsR0FBRywwQ0FBMEMsd0JBQXdCLEdBQUcsT0FBTyx1S0FBdUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssTUFBTSxZQUFZLEtBQUssS0FBSyxLQUFLLE1BQU0sWUFBWSxLQUFLLEtBQUssS0FBSyxNQUFNLFlBQVksS0FBSyxLQUFLLEtBQUssTUFBTSxXQUFXLEtBQUssS0FBSyxLQUFLLE1BQU0sV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsa0VBQWtFLDhCQUE4Qiw2QkFBNkIsbUJBQW1CLHdCQUF3QixrQkFBa0IsMkJBQTJCLHdCQUF3Qix3QkFBd0IseUJBQXlCLHlCQUF5QixrREFBa0QsOEJBQThCLFNBQVMsa0RBQWtELDZCQUE2QixTQUFTLE9BQU8saURBQWlELHlCQUF5QixPQUFPLGlEQUFpRCx5QkFBeUIsT0FBTyxnREFBZ0QseUJBQXlCLE9BQU8sZ0RBQWdELHdCQUF3QixPQUFPLGdEQUFnRCx3QkFBd0IsT0FBTyxnQkFBZ0Isd0JBQXdCLCtCQUErQiwyQkFBMkIsMkNBQTJDLE9BQU8sS0FBSyxpQ0FBaUMsc0JBQXNCLGdCQUFnQix5QkFBeUIsR0FBRyx5QkFBeUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsR0FBRyx3Q0FBd0MsMkJBQTJCLDBCQUEwQixLQUFLLEdBQUcsd0NBQXdDLDJCQUEyQix5QkFBeUIsS0FBSyxHQUFHLHlDQUF5QyxnQkFBZ0IsdUJBQXVCLEtBQUssR0FBRyx5Q0FBeUMsZ0JBQWdCLHVCQUF1QixLQUFLLEdBQUcsd0NBQXdDLGdCQUFnQix1QkFBdUIsS0FBSyxHQUFHLHdDQUF3QyxnQkFBZ0Isc0JBQXNCLEtBQUssR0FBRyx3Q0FBd0MsZ0JBQWdCLHNCQUFzQixLQUFLLEdBQUcsaUJBQWlCLG9CQUFvQixtQkFBbUIsdUJBQXVCLHlDQUF5QyxHQUFHLHNCQUFzQix1QkFBdUIsa0JBQWtCLGtCQUFrQixHQUFHLHdCQUF3QixxQkFBcUIscUJBQXFCLHFCQUFxQixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyxtQkFBbUI7QUFDcHNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNzlmNzY0ZDNhNTI0ZjU2ODg5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogY29sb3JzICovXFxuLlNlY3Rpb25fY29udGFpbmVyX18yd19LNiB7XFxuICBtYXgtd2lkdGg6IDEwMjRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XFxufVxcbi5TZWN0aW9uX2NvbnRhaW5lcl9fcGFyYWdyYXBoX18xMGV0MCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5TZWN0aW9uX2NvbnRhaW5lcl9fcGFyYWdyYXBoX18xMGV0MCB7XFxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxuICAuU2VjdGlvbl9jb250YWluZXJfX3BhcmFncmFwaF9fMTBldDAge1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xcbiAgLlNlY3Rpb25fY29udGFpbmVyX18yd19LNiB7XFxuICAgIG1heC13aWR0aDogODQwcHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLlNlY3Rpb25fY29udGFpbmVyX18yd19LNiB7XFxuICAgIG1heC13aWR0aDogNzY4cHg7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk0MHB4KSB7XFxuICAuU2VjdGlvbl9jb250YWluZXJfXzJ3X0s2IHtcXG4gICAgbWF4LXdpZHRoOiA3MjBweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5TZWN0aW9uX2NvbnRhaW5lcl9fMndfSzYge1xcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxuICAuU2VjdGlvbl9jb250YWluZXJfXzJ3X0s2IHtcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcbiAgfVxcbn1cXG4uU2VjdGlvbl9jb250YWluZXJfXzJ3X0s2IGgyIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiAjMzgzODM4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQYXJpc2llbm5lXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuLlNlY3Rpb25fY29udGFpbmVyX19saXN0X18xWjFhNCB7XFxuICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLlNlY3Rpb25fY29udGFpbmVyX19saXN0X19lbF9fMWN4OFoge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG4uU2VjdGlvbl9jb250YWluZXJfX2xpc3ROdW1lcmljX19TUG9FUSB7XFxuICBsaXN0LXN0eWxlOiBkZWNpbWFsO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vc3R5bGVzL192YXJyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovL1NlY3Rpb24ubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBQTtBQ0FBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNFRjtBREFFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBREFJO0VBTEY7SUFNSSxtQkFBQTtFQ0dKO0FBQ0Y7QURESTtFQVRGO0lBVUksa0JBQUE7RUNJSjtBQUNGO0FEREU7RUFuQkY7SUFvQkksZ0JBQUE7RUNJRjtBQUNGO0FERkU7RUF2QkY7SUF3QkksZ0JBQUE7RUNLRjtBQUNGO0FESEU7RUEzQkY7SUE0QkksZ0JBQUE7RUNNRjtBQUNGO0FESkU7RUEvQkY7SUFnQ0ksZUFBQTtFQ09GO0FBQ0Y7QURMRTtFQW5DRjtJQW9DSSxlQUFBO0VDUUY7QUFDRjtBRE5FO0VBQ0UsZUFBQTtFQUNBLGNEdENhO0VDdUNiLGtCQUFBO0VBQ0Esa0NBQUE7QUNRSjs7QUEvQ0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBa0RKO0FBaERJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBa0ROO0FBL0NFO0VBQ0UsbUJBQUE7QUFpREpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogY29sb3JzICovXFxyXFxuJHByaW1hcnktY29sb3I6ICMxMjEyMTI7XFxyXFxuJHNlY29uZGFyeS1jb2xvcjogIzI0MjMyMztcXHJcXG4kc3VidGl0bGUtY29sb3I6ICMzODM4Mzg7XFxyXFxuXCIsXCIuY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTAyNHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcXHJcXG5cXHJcXG4gICZfX3BhcmFncmFwaCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA4NDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcclxcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTQwcHgpIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA3MjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxyXFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgaDIge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGNvbG9yOiAkc3VidGl0bGUtY29sb3I7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQYXJpc2llbm5lJywgY3Vyc2l2ZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIvKiBjb2xvcnMgKi9cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTAyNHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcXG59XFxuLmNvbnRhaW5lcl9fcGFyYWdyYXBoIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbnRhaW5lcl9fcGFyYWdyYXBoIHtcXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXG4gIC5jb250YWluZXJfX3BhcmFncmFwaCB7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA4NDBweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTQwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDcyMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxuICB9XFxufVxcbi5jb250YWluZXIgaDIge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6ICMzODM4Mzg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlBhcmlzaWVubmVcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG4uY29udGFpbmVyX19saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY29udGFpbmVyX19saXN0X19lbCB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxufVxcbi5jb250YWluZXJfX2xpc3ROdW1lcmljIHtcXG4gIGxpc3Qtc3R5bGU6IGRlY2ltYWw7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNlY3Rpb25fY29udGFpbmVyX18yd19LNlwiLFxuXHRcImNvbnRhaW5lcl9fcGFyYWdyYXBoXCI6IFwiU2VjdGlvbl9jb250YWluZXJfX3BhcmFncmFwaF9fMTBldDBcIixcblx0XCJjb250YWluZXJfX2xpc3RcIjogXCJTZWN0aW9uX2NvbnRhaW5lcl9fbGlzdF9fMVoxYTRcIixcblx0XCJjb250YWluZXJfX2xpc3RfX2VsXCI6IFwiU2VjdGlvbl9jb250YWluZXJfX2xpc3RfX2VsX18xY3g4WlwiLFxuXHRcImNvbnRhaW5lcl9fbGlzdE51bWVyaWNcIjogXCJTZWN0aW9uX2NvbnRhaW5lcl9fbGlzdE51bWVyaWNfX1NQb0VRXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==