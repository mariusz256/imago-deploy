webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./component/imgSlider/ImgSlider.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./component/imgSlider/ImgSlider.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* colors */\n.ImgSlider_container__293gU {\n  width: 100%;\n  max-width: 1440px;\n  min-width: 100%;\n  height: 25rem;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 10rem;\n}\n.ImgSlider_container__helper__1VS7C {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 25rem;\n  top: 0;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  -webkit-transition: opacity 0.3s;\n  transition: opacity 0.3s;\n}\n.ImgSlider_container__buttonNext__B8hr7, .ImgSlider_container__buttonPrev__7vRuC {\n  position: absolute;\n  display: flex;\n  top: calc(50% - 2.5rem);\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  width: 5rem;\n  height: 5rem;\n  background-color: rgba(255, 255, 255, 0.5);\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #242323;\n  z-index: 2;\n}\n@media screen and (max-width: 768px) {\n  .ImgSlider_container__buttonNext__B8hr7, .ImgSlider_container__buttonPrev__7vRuC {\n    display: none;\n  }\n}\n.ImgSlider_container__buttonNext__B8hr7 {\n  right: 2.5rem;\n}\n.ImgSlider_container__buttonPrev__7vRuC {\n  left: 2.5rem;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.ImgSlider_container__img__20T10 {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}", "",{"version":3,"sources":["webpack://../../styles/_varriables.scss","webpack://ImgSlider.module.scss"],"names":[],"mappings":"AAAA,WAAA;ACEA;EACE,WAAA;EACA,iBAAA;EACA,eAAA;EACA,aAAA;EAEA,kBAAA;EACA,gBAAA;EACA,oBAAA;AADF;AAGE;EACE,kBAAA;EACA,OAAA;EACA,WAAA;EACA,aAAA;EACA,MAAA;EAEA,UAAA;EACA,SAAA;EAEA,gBAAA;EAEA,gCAAA;EAAA,wBAAA;AAJJ;AAOE;EAEE,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,0CAAA;EACA,iBAAA;EACA,gBAAA;EACA,cDvCc;ECwCd,UAAA;AANJ;AAQI;EAjBF;IAkBI,aAAA;EALJ;AACF;AAQE;EACE,aAAA;AANJ;AAQE;EACE,YAAA;EACA,iCAAA;UAAA,yBAAA;AANJ;AASE;EAEE,WAAA;EACA,YAAA;EACA,iBAAA;AARJ","sourcesContent":["/* colors */\r\n$primary-color: #121212;\r\n$secondary-color: #242323;\r\n$subtitle-color: #383838;\r\n","@import '../../styles/varriables';\r\n\r\n.container {\r\n  width: 100%;\r\n  max-width: 1440px;\r\n  min-width: 100%;\r\n  height: 25rem;\r\n  // overflow: hidden;\r\n  position: relative;\r\n  overflow: hidden;\r\n  margin-bottom: 10rem;\r\n\r\n  &__helper {\r\n    position: absolute;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 25rem;\r\n    top: 0;\r\n    // background-color: $primary-color;\r\n    padding: 0;\r\n    margin: 0;\r\n    // position: relative;\r\n    overflow: hidden;\r\n\r\n    transition: opacity 0.3s;\r\n  }\r\n\r\n  &__buttonNext,\r\n  &__buttonPrev {\r\n    position: absolute;\r\n    display: flex;\r\n    top: calc(50% - 2.5rem);\r\n    cursor: pointer;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50%;\r\n    width: 5rem;\r\n    height: 5rem;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    font-size: 2.5rem;\r\n    font-weight: 700;\r\n    color: $secondary-color;\r\n    z-index: 2;\r\n\r\n    @media screen and (max-width: 768px) {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  &__buttonNext {\r\n    right: 2.5rem;\r\n  }\r\n  &__buttonPrev {\r\n    left: 2.5rem;\r\n    transform: rotate(180deg);\r\n  }\r\n\r\n  &__img {\r\n    // position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    // object-position: bottom; /* default position */\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "ImgSlider_container__293gU",
	"container__helper": "ImgSlider_container__helper__1VS7C",
	"container__buttonNext": "ImgSlider_container__buttonNext__B8hr7",
	"container__buttonPrev": "ImgSlider_container__buttonPrev__7vRuC",
	"container__img": "ImgSlider_container__img__20T10"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2ltZ1NsaWRlci9JbWdTbGlkZXIubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDhDQUE4QyxnQkFBZ0Isc0JBQXNCLG9CQUFvQixrQkFBa0IsdUJBQXVCLHFCQUFxQix5QkFBeUIsR0FBRyx1Q0FBdUMsdUJBQXVCLFlBQVksZ0JBQWdCLGtCQUFrQixXQUFXLGVBQWUsY0FBYyxxQkFBcUIscUNBQXFDLDZCQUE2QixHQUFHLG9GQUFvRix1QkFBdUIsa0JBQWtCLDRCQUE0QixvQkFBb0IsNEJBQTRCLHdCQUF3Qix1QkFBdUIsZ0JBQWdCLGlCQUFpQiwrQ0FBK0Msc0JBQXNCLHFCQUFxQixtQkFBbUIsZUFBZSxHQUFHLHdDQUF3QyxzRkFBc0Ysb0JBQW9CLEtBQUssR0FBRywyQ0FBMkMsa0JBQWtCLEdBQUcsMkNBQTJDLGlCQUFpQixzQ0FBc0Msc0NBQXNDLEdBQUcsb0NBQW9DLGdCQUFnQixpQkFBaUIsc0JBQXNCLEdBQUcsT0FBTyxxSUFBcUksS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLE1BQU0sV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsaUVBQWlFLDhCQUE4Qiw2QkFBNkIseUNBQXlDLG9CQUFvQixrQkFBa0Isd0JBQXdCLHNCQUFzQixvQkFBb0IsMEJBQTBCLHlCQUF5Qix1QkFBdUIsMkJBQTJCLHFCQUFxQiwyQkFBMkIsZ0JBQWdCLG9CQUFvQixzQkFBc0IsZUFBZSw0Q0FBNEMsbUJBQW1CLGtCQUFrQiw4QkFBOEIseUJBQXlCLHFDQUFxQyxPQUFPLDZDQUE2QywyQkFBMkIsc0JBQXNCLGdDQUFnQyx3QkFBd0IsZ0NBQWdDLDRCQUE0QiwyQkFBMkIsb0JBQW9CLHFCQUFxQixtREFBbUQsMEJBQTBCLHlCQUF5QixnQ0FBZ0MsbUJBQW1CLGtEQUFrRCx3QkFBd0IsU0FBUyxPQUFPLHlCQUF5QixzQkFBc0IsT0FBTyxxQkFBcUIscUJBQXFCLGtDQUFrQyxPQUFPLGtCQUFrQiw4QkFBOEIsb0JBQW9CLHFCQUFxQiwwQkFBMEIsbUNBQW1DLDhCQUE4QixLQUFLLHVCQUF1QjtBQUN2Nkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjcwMjY5ZTdjMGIwODk3NzcyZDllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBjb2xvcnMgKi9cXG4uSW1nU2xpZGVyX2NvbnRhaW5lcl9fMjkzZ1Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XFxufVxcbi5JbWdTbGlkZXJfY29udGFpbmVyX19oZWxwZXJfXzFWUzdDIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjVyZW07XFxuICB0b3A6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xcbn1cXG4uSW1nU2xpZGVyX2NvbnRhaW5lcl9fYnV0dG9uTmV4dF9fQjhocjcsIC5JbWdTbGlkZXJfY29udGFpbmVyX19idXR0b25QcmV2X183dlJ1QyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdG9wOiBjYWxjKDUwJSAtIDIuNXJlbSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogNXJlbTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjMjQyMzIzO1xcbiAgei1pbmRleDogMjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5JbWdTbGlkZXJfY29udGFpbmVyX19idXR0b25OZXh0X19COGhyNywgLkltZ1NsaWRlcl9jb250YWluZXJfX2J1dHRvblByZXZfXzd2UnVDIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLkltZ1NsaWRlcl9jb250YWluZXJfX2J1dHRvbk5leHRfX0I4aHI3IHtcXG4gIHJpZ2h0OiAyLjVyZW07XFxufVxcbi5JbWdTbGlkZXJfY29udGFpbmVyX19idXR0b25QcmV2X183dlJ1QyB7XFxuICBsZWZ0OiAyLjVyZW07XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5JbWdTbGlkZXJfY29udGFpbmVyX19pbWdfXzIwVDEwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvX3ZhcnJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL0ltZ1NsaWRlci5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFBO0FDRUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQURGO0FBR0U7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFFQSxVQUFBO0VBQ0EsU0FBQTtFQUVBLGdCQUFBO0VBRUEsZ0NBQUE7RUFBQSx3QkFBQTtBQUpKO0FBT0U7RUFFRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNEdkNjO0VDd0NkLFVBQUE7QUFOSjtBQVFJO0VBakJGO0lBa0JJLGFBQUE7RUFMSjtBQUNGO0FBUUU7RUFDRSxhQUFBO0FBTko7QUFRRTtFQUNFLFlBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FBTko7QUFTRTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFSSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBjb2xvcnMgKi9cXHJcXG4kcHJpbWFyeS1jb2xvcjogIzEyMTIxMjtcXHJcXG4kc2Vjb25kYXJ5LWNvbG9yOiAjMjQyMzIzO1xcclxcbiRzdWJ0aXRsZS1jb2xvcjogIzM4MzgzODtcXHJcXG5cIixcIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy92YXJyaWFibGVzJztcXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XFxyXFxuICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDI1cmVtO1xcclxcbiAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcXHJcXG5cXHJcXG4gICZfX2hlbHBlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMjVyZW07XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19idXR0b25OZXh0LFxcclxcbiAgJl9fYnV0dG9uUHJldiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDIuNXJlbSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDVyZW07XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fYnV0dG9uTmV4dCB7XFxyXFxuICAgIHJpZ2h0OiAyLjVyZW07XFxyXFxuICB9XFxyXFxuICAmX19idXR0b25QcmV2IHtcXHJcXG4gICAgbGVmdDogMi41cmVtO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW1nIHtcXHJcXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgLy8gb2JqZWN0LXBvc2l0aW9uOiBib3R0b207IC8qIGRlZmF1bHQgcG9zaXRpb24gKi9cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSW1nU2xpZGVyX2NvbnRhaW5lcl9fMjkzZ1VcIixcblx0XCJjb250YWluZXJfX2hlbHBlclwiOiBcIkltZ1NsaWRlcl9jb250YWluZXJfX2hlbHBlcl9fMVZTN0NcIixcblx0XCJjb250YWluZXJfX2J1dHRvbk5leHRcIjogXCJJbWdTbGlkZXJfY29udGFpbmVyX19idXR0b25OZXh0X19COGhyN1wiLFxuXHRcImNvbnRhaW5lcl9fYnV0dG9uUHJldlwiOiBcIkltZ1NsaWRlcl9jb250YWluZXJfX2J1dHRvblByZXZfXzd2UnVDXCIsXG5cdFwiY29udGFpbmVyX19pbWdcIjogXCJJbWdTbGlkZXJfY29udGFpbmVyX19pbWdfXzIwVDEwXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==