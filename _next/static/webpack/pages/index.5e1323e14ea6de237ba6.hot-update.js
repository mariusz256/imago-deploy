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
___CSS_LOADER_EXPORT___.push([module.i, "/* colors */\n.ImgSlider_container__293gU {\n  width: 100%;\n  max-width: 1440px;\n  min-width: 100%;\n  height: 25rem;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 10rem;\n}\n.ImgSlider_container__helper__1VS7C {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 25rem;\n  top: 0;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  -webkit-transition: opacity 0.3s;\n  transition: opacity 0.3s;\n}\n.ImgSlider_container__buttonNext__B8hr7, .ImgSlider_container__buttonPrev__7vRuC {\n  position: absolute;\n  display: flex;\n  top: calc(50% - 2.5rem);\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  width: 5rem;\n  height: 5rem;\n  background-color: rgba(255, 255, 255, 0.5);\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #242323;\n  z-index: 2;\n}\n@media screen and (max-width: 768px) {\n  .ImgSlider_container__buttonNext__B8hr7, .ImgSlider_container__buttonPrev__7vRuC {\n    display: none;\n  }\n}\n.ImgSlider_container__buttonNext__B8hr7 {\n  right: 2.5rem;\n}\n.ImgSlider_container__buttonPrev__7vRuC {\n  left: 2.5rem;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.ImgSlider_container__img__20T10 {\n  width: 100%;\n  height: 100%;\n  object-fit: scale-down;\n}", "",{"version":3,"sources":["webpack://../../styles/_varriables.scss","webpack://ImgSlider.module.scss"],"names":[],"mappings":"AAAA,WAAA;ACEA;EACE,WAAA;EACA,iBAAA;EACA,eAAA;EACA,aAAA;EAEA,kBAAA;EACA,gBAAA;EACA,oBAAA;AADF;AAGE;EACE,kBAAA;EACA,OAAA;EACA,WAAA;EACA,aAAA;EACA,MAAA;EAEA,UAAA;EACA,SAAA;EAEA,gBAAA;EAEA,gCAAA;EAAA,wBAAA;AAJJ;AAOE;EAEE,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,0CAAA;EACA,iBAAA;EACA,gBAAA;EACA,cDvCc;ECwCd,UAAA;AANJ;AAQI;EAjBF;IAkBI,aAAA;EALJ;AACF;AAQE;EACE,aAAA;AANJ;AAQE;EACE,YAAA;EACA,iCAAA;UAAA,yBAAA;AANJ;AASE;EAEE,WAAA;EACA,YAAA;EACA,sBAAA;AARJ","sourcesContent":["/* colors */\r\n$primary-color: #121212;\r\n$secondary-color: #242323;\r\n$subtitle-color: #383838;\r\n","@import '../../styles/varriables';\r\n\r\n.container {\r\n  width: 100%;\r\n  max-width: 1440px;\r\n  min-width: 100%;\r\n  height: 25rem;\r\n  // overflow: hidden;\r\n  position: relative;\r\n  overflow: hidden;\r\n  margin-bottom: 10rem;\r\n\r\n  &__helper {\r\n    position: absolute;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 25rem;\r\n    top: 0;\r\n    // background-color: $primary-color;\r\n    padding: 0;\r\n    margin: 0;\r\n    // position: relative;\r\n    overflow: hidden;\r\n\r\n    transition: opacity 0.3s;\r\n  }\r\n\r\n  &__buttonNext,\r\n  &__buttonPrev {\r\n    position: absolute;\r\n    display: flex;\r\n    top: calc(50% - 2.5rem);\r\n    cursor: pointer;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50%;\r\n    width: 5rem;\r\n    height: 5rem;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    font-size: 2.5rem;\r\n    font-weight: 700;\r\n    color: $secondary-color;\r\n    z-index: 2;\r\n\r\n    @media screen and (max-width: 768px) {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  &__buttonNext {\r\n    right: 2.5rem;\r\n  }\r\n  &__buttonPrev {\r\n    left: 2.5rem;\r\n    transform: rotate(180deg);\r\n  }\r\n\r\n  &__img {\r\n    // position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: scale-down;\r\n    // object-position: bottom; /* default position */\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2ltZ1NsaWRlci9JbWdTbGlkZXIubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDhDQUE4QyxnQkFBZ0Isc0JBQXNCLG9CQUFvQixrQkFBa0IsdUJBQXVCLHFCQUFxQix5QkFBeUIsR0FBRyx1Q0FBdUMsdUJBQXVCLFlBQVksZ0JBQWdCLGtCQUFrQixXQUFXLGVBQWUsY0FBYyxxQkFBcUIscUNBQXFDLDZCQUE2QixHQUFHLG9GQUFvRix1QkFBdUIsa0JBQWtCLDRCQUE0QixvQkFBb0IsNEJBQTRCLHdCQUF3Qix1QkFBdUIsZ0JBQWdCLGlCQUFpQiwrQ0FBK0Msc0JBQXNCLHFCQUFxQixtQkFBbUIsZUFBZSxHQUFHLHdDQUF3QyxzRkFBc0Ysb0JBQW9CLEtBQUssR0FBRywyQ0FBMkMsa0JBQWtCLEdBQUcsMkNBQTJDLGlCQUFpQixzQ0FBc0Msc0NBQXNDLEdBQUcsb0NBQW9DLGdCQUFnQixpQkFBaUIsMkJBQTJCLEdBQUcsT0FBTyxxSUFBcUksS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLE1BQU0sV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsaUVBQWlFLDhCQUE4Qiw2QkFBNkIseUNBQXlDLG9CQUFvQixrQkFBa0Isd0JBQXdCLHNCQUFzQixvQkFBb0IsMEJBQTBCLHlCQUF5Qix1QkFBdUIsMkJBQTJCLHFCQUFxQiwyQkFBMkIsZ0JBQWdCLG9CQUFvQixzQkFBc0IsZUFBZSw0Q0FBNEMsbUJBQW1CLGtCQUFrQiw4QkFBOEIseUJBQXlCLHFDQUFxQyxPQUFPLDZDQUE2QywyQkFBMkIsc0JBQXNCLGdDQUFnQyx3QkFBd0IsZ0NBQWdDLDRCQUE0QiwyQkFBMkIsb0JBQW9CLHFCQUFxQixtREFBbUQsMEJBQTBCLHlCQUF5QixnQ0FBZ0MsbUJBQW1CLGtEQUFrRCx3QkFBd0IsU0FBUyxPQUFPLHlCQUF5QixzQkFBc0IsT0FBTyxxQkFBcUIscUJBQXFCLGtDQUFrQyxPQUFPLGtCQUFrQiw4QkFBOEIsb0JBQW9CLHFCQUFxQiwrQkFBK0IsbUNBQW1DLDhCQUE4QixLQUFLLHVCQUF1QjtBQUNqN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVlMTMyM2UxNGVhNmRlMjM3YmE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBjb2xvcnMgKi9cXG4uSW1nU2xpZGVyX2NvbnRhaW5lcl9fMjkzZ1Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XFxufVxcbi5JbWdTbGlkZXJfY29udGFpbmVyX19oZWxwZXJfXzFWUzdDIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjVyZW07XFxuICB0b3A6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xcbn1cXG4uSW1nU2xpZGVyX2NvbnRhaW5lcl9fYnV0dG9uTmV4dF9fQjhocjcsIC5JbWdTbGlkZXJfY29udGFpbmVyX19idXR0b25QcmV2X183dlJ1QyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdG9wOiBjYWxjKDUwJSAtIDIuNXJlbSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogNXJlbTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjMjQyMzIzO1xcbiAgei1pbmRleDogMjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5JbWdTbGlkZXJfY29udGFpbmVyX19idXR0b25OZXh0X19COGhyNywgLkltZ1NsaWRlcl9jb250YWluZXJfX2J1dHRvblByZXZfXzd2UnVDIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLkltZ1NsaWRlcl9jb250YWluZXJfX2J1dHRvbk5leHRfX0I4aHI3IHtcXG4gIHJpZ2h0OiAyLjVyZW07XFxufVxcbi5JbWdTbGlkZXJfY29udGFpbmVyX19idXR0b25QcmV2X183dlJ1QyB7XFxuICBsZWZ0OiAyLjVyZW07XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5JbWdTbGlkZXJfY29udGFpbmVyX19pbWdfXzIwVDEwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uL3N0eWxlcy9fdmFycmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vSW1nU2xpZGVyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQUE7QUNFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBREY7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUVBLFVBQUE7RUFDQSxTQUFBO0VBRUEsZ0JBQUE7RUFFQSxnQ0FBQTtFQUFBLHdCQUFBO0FBSko7QUFPRTtFQUVFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0R2Q2M7RUN3Q2QsVUFBQTtBQU5KO0FBUUk7RUFqQkY7SUFrQkksYUFBQTtFQUxKO0FBQ0Y7QUFRRTtFQUNFLGFBQUE7QUFOSjtBQVFFO0VBQ0UsWUFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUFOSjtBQVNFO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQVJKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGNvbG9ycyAqL1xcclxcbiRwcmltYXJ5LWNvbG9yOiAjMTIxMjEyO1xcclxcbiRzZWNvbmRhcnktY29sb3I6ICMyNDIzMjM7XFxyXFxuJHN1YnRpdGxlLWNvbG9yOiAjMzgzODM4O1xcclxcblwiLFwiQGltcG9ydCAnLi4vLi4vc3R5bGVzL3ZhcnJpYWJsZXMnO1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDE0NDBweDtcXHJcXG4gIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjVyZW07XFxyXFxuICAvLyBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcmVtO1xcclxcblxcclxcbiAgJl9faGVscGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAyNXJlbTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2J1dHRvbk5leHQsXFxyXFxuICAmX19idXR0b25QcmV2IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB0b3A6IGNhbGMoNTAlIC0gMi41cmVtKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19idXR0b25OZXh0IHtcXHJcXG4gICAgcmlnaHQ6IDIuNXJlbTtcXHJcXG4gIH1cXHJcXG4gICZfX2J1dHRvblByZXYge1xcclxcbiAgICBsZWZ0OiAyLjVyZW07XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbWcge1xcclxcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxyXFxuICAgIC8vIG9iamVjdC1wb3NpdGlvbjogYm90dG9tOyAvKiBkZWZhdWx0IHBvc2l0aW9uICovXFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkltZ1NsaWRlcl9jb250YWluZXJfXzI5M2dVXCIsXG5cdFwiY29udGFpbmVyX19oZWxwZXJcIjogXCJJbWdTbGlkZXJfY29udGFpbmVyX19oZWxwZXJfXzFWUzdDXCIsXG5cdFwiY29udGFpbmVyX19idXR0b25OZXh0XCI6IFwiSW1nU2xpZGVyX2NvbnRhaW5lcl9fYnV0dG9uTmV4dF9fQjhocjdcIixcblx0XCJjb250YWluZXJfX2J1dHRvblByZXZcIjogXCJJbWdTbGlkZXJfY29udGFpbmVyX19idXR0b25QcmV2X183dlJ1Q1wiLFxuXHRcImNvbnRhaW5lcl9faW1nXCI6IFwiSW1nU2xpZGVyX2NvbnRhaW5lcl9faW1nX18yMFQxMFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=