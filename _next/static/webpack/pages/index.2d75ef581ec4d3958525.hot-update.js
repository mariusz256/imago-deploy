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
___CSS_LOADER_EXPORT___.push([module.i, "/* colors */\n.ImgSlider_container__293gU {\n  width: 100%;\n  max-width: 1440px;\n  min-width: 100%;\n  height: 25rem;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 10rem;\n}\n.ImgSlider_container__helper__1VS7C {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 25rem;\n  top: 0;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  -webkit-transition: opacity 0.3s;\n  transition: opacity 0.3s;\n}\n.ImgSlider_container__buttonNext__B8hr7, .ImgSlider_container__buttonPrev__7vRuC {\n  position: absolute;\n  display: flex;\n  top: calc(50% - 2.5rem);\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  width: 5rem;\n  height: 5rem;\n  background-color: rgba(255, 255, 255, 0.5);\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #242323;\n  z-index: 2;\n}\n@media screen and (max-width: 768px) {\n  .ImgSlider_container__buttonNext__B8hr7, .ImgSlider_container__buttonPrev__7vRuC {\n    display: none;\n  }\n}\n.ImgSlider_container__buttonNext__B8hr7 {\n  right: 2.5rem;\n}\n.ImgSlider_container__buttonPrev__7vRuC {\n  left: 2.5rem;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.ImgSlider_container__img__20T10 {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: 50% 60%;\n  /* default position */\n}", "",{"version":3,"sources":["webpack://../../styles/_varriables.scss","webpack://ImgSlider.module.scss"],"names":[],"mappings":"AAAA,WAAA;ACEA;EACE,WAAA;EACA,iBAAA;EACA,eAAA;EACA,aAAA;EAEA,kBAAA;EACA,gBAAA;EACA,oBAAA;AADF;AAGE;EACE,kBAAA;EACA,OAAA;EACA,WAAA;EACA,aAAA;EACA,MAAA;EAEA,UAAA;EACA,SAAA;EAEA,gBAAA;EAEA,gCAAA;EAAA,wBAAA;AAJJ;AAOE;EAEE,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,0CAAA;EACA,iBAAA;EACA,gBAAA;EACA,cDvCc;ECwCd,UAAA;AANJ;AAQI;EAjBF;IAkBI,aAAA;EALJ;AACF;AAQE;EACE,aAAA;AANJ;AAQE;EACE,YAAA;EACA,iCAAA;UAAA,yBAAA;AANJ;AASE;EAEE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,wBAAA;EAA0B,qBAAA;AAP9B","sourcesContent":["/* colors */\r\n$primary-color: #121212;\r\n$secondary-color: #242323;\r\n$subtitle-color: #383838;\r\n","@import '../../styles/varriables';\r\n\r\n.container {\r\n  width: 100%;\r\n  max-width: 1440px;\r\n  min-width: 100%;\r\n  height: 25rem;\r\n  // overflow: hidden;\r\n  position: relative;\r\n  overflow: hidden;\r\n  margin-bottom: 10rem;\r\n\r\n  &__helper {\r\n    position: absolute;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 25rem;\r\n    top: 0;\r\n    // background-color: $primary-color;\r\n    padding: 0;\r\n    margin: 0;\r\n    // position: relative;\r\n    overflow: hidden;\r\n\r\n    transition: opacity 0.3s;\r\n  }\r\n\r\n  &__buttonNext,\r\n  &__buttonPrev {\r\n    position: absolute;\r\n    display: flex;\r\n    top: calc(50% - 2.5rem);\r\n    cursor: pointer;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 50%;\r\n    width: 5rem;\r\n    height: 5rem;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    font-size: 2.5rem;\r\n    font-weight: 700;\r\n    color: $secondary-color;\r\n    z-index: 2;\r\n\r\n    @media screen and (max-width: 768px) {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  &__buttonNext {\r\n    right: 2.5rem;\r\n  }\r\n  &__buttonPrev {\r\n    left: 2.5rem;\r\n    transform: rotate(180deg);\r\n  }\r\n\r\n  &__img {\r\n    // position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    object-position: 50% 60%; /* default position */\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2ltZ1NsaWRlci9JbWdTbGlkZXIubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDhDQUE4QyxnQkFBZ0Isc0JBQXNCLG9CQUFvQixrQkFBa0IsdUJBQXVCLHFCQUFxQix5QkFBeUIsR0FBRyx1Q0FBdUMsdUJBQXVCLFlBQVksZ0JBQWdCLGtCQUFrQixXQUFXLGVBQWUsY0FBYyxxQkFBcUIscUNBQXFDLDZCQUE2QixHQUFHLG9GQUFvRix1QkFBdUIsa0JBQWtCLDRCQUE0QixvQkFBb0IsNEJBQTRCLHdCQUF3Qix1QkFBdUIsZ0JBQWdCLGlCQUFpQiwrQ0FBK0Msc0JBQXNCLHFCQUFxQixtQkFBbUIsZUFBZSxHQUFHLHdDQUF3QyxzRkFBc0Ysb0JBQW9CLEtBQUssR0FBRywyQ0FBMkMsa0JBQWtCLEdBQUcsMkNBQTJDLGlCQUFpQixzQ0FBc0Msc0NBQXNDLEdBQUcsb0NBQW9DLGdCQUFnQixpQkFBaUIsc0JBQXNCLDZCQUE2Qiw2QkFBNkIsT0FBTyxxSUFBcUksS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLE1BQU0sV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLGtFQUFrRSw4QkFBOEIsNkJBQTZCLHlDQUF5QyxvQkFBb0Isa0JBQWtCLHdCQUF3QixzQkFBc0Isb0JBQW9CLDBCQUEwQix5QkFBeUIsdUJBQXVCLDJCQUEyQixxQkFBcUIsMkJBQTJCLGdCQUFnQixvQkFBb0Isc0JBQXNCLGVBQWUsNENBQTRDLG1CQUFtQixrQkFBa0IsOEJBQThCLHlCQUF5QixxQ0FBcUMsT0FBTyw2Q0FBNkMsMkJBQTJCLHNCQUFzQixnQ0FBZ0Msd0JBQXdCLGdDQUFnQyw0QkFBNEIsMkJBQTJCLG9CQUFvQixxQkFBcUIsbURBQW1ELDBCQUEwQix5QkFBeUIsZ0NBQWdDLG1CQUFtQixrREFBa0Qsd0JBQXdCLFNBQVMsT0FBTyx5QkFBeUIsc0JBQXNCLE9BQU8scUJBQXFCLHFCQUFxQixrQ0FBa0MsT0FBTyxrQkFBa0IsOEJBQThCLG9CQUFvQixxQkFBcUIsMEJBQTBCLGlDQUFpQyw4QkFBOEIsS0FBSyx1QkFBdUI7QUFDcC9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yZDc1ZWY1ODFlYzRkMzk1ODUyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogY29sb3JzICovXFxuLkltZ1NsaWRlcl9jb250YWluZXJfXzI5M2dVIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDI1cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcmVtO1xcbn1cXG4uSW1nU2xpZGVyX2NvbnRhaW5lcl9faGVscGVyX18xVlM3QyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDI1cmVtO1xcbiAgdG9wOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcXG59XFxuLkltZ1NsaWRlcl9jb250YWluZXJfX2J1dHRvbk5leHRfX0I4aHI3LCAuSW1nU2xpZGVyX2NvbnRhaW5lcl9fYnV0dG9uUHJldl9fN3ZSdUMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRvcDogY2FsYyg1MCUgLSAyLjVyZW0pO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDVyZW07XFxuICBoZWlnaHQ6IDVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzI0MjMyMztcXG4gIHotaW5kZXg6IDI7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuSW1nU2xpZGVyX2NvbnRhaW5lcl9fYnV0dG9uTmV4dF9fQjhocjcsIC5JbWdTbGlkZXJfY29udGFpbmVyX19idXR0b25QcmV2X183dlJ1QyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi5JbWdTbGlkZXJfY29udGFpbmVyX19idXR0b25OZXh0X19COGhyNyB7XFxuICByaWdodDogMi41cmVtO1xcbn1cXG4uSW1nU2xpZGVyX2NvbnRhaW5lcl9fYnV0dG9uUHJldl9fN3ZSdUMge1xcbiAgbGVmdDogMi41cmVtO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4uSW1nU2xpZGVyX2NvbnRhaW5lcl9faW1nX18yMFQxMCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgNjAlO1xcbiAgLyogZGVmYXVsdCBwb3NpdGlvbiAqL1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vc3R5bGVzL192YXJyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly9JbWdTbGlkZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBQTtBQ0VBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFERjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBRUEsVUFBQTtFQUNBLFNBQUE7RUFFQSxnQkFBQTtFQUVBLGdDQUFBO0VBQUEsd0JBQUE7QUFKSjtBQU9FO0VBRUUsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRHZDYztFQ3dDZCxVQUFBO0FBTko7QUFRSTtFQWpCRjtJQWtCSSxhQUFBO0VBTEo7QUFDRjtBQVFFO0VBQ0UsYUFBQTtBQU5KO0FBUUU7RUFDRSxZQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBQU5KO0FBU0U7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFBMEIscUJBQUE7QUFQOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogY29sb3JzICovXFxyXFxuJHByaW1hcnktY29sb3I6ICMxMjEyMTI7XFxyXFxuJHNlY29uZGFyeS1jb2xvcjogIzI0MjMyMztcXHJcXG4kc3VidGl0bGUtY29sb3I6ICMzODM4Mzg7XFxyXFxuXCIsXCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvdmFycmlhYmxlcyc7XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogMTQ0MHB4O1xcclxcbiAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyNXJlbTtcXHJcXG4gIC8vIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XFxyXFxuXFxyXFxuICAmX19oZWxwZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDI1cmVtO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fYnV0dG9uTmV4dCxcXHJcXG4gICZfX2J1dHRvblByZXYge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHRvcDogY2FsYyg1MCUgLSAyLjVyZW0pO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHdpZHRoOiA1cmVtO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcblxcclxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2J1dHRvbk5leHQge1xcclxcbiAgICByaWdodDogMi41cmVtO1xcclxcbiAgfVxcclxcbiAgJl9fYnV0dG9uUHJldiB7XFxyXFxuICAgIGxlZnQ6IDIuNXJlbTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ltZyB7XFxyXFxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDYwJTsgLyogZGVmYXVsdCBwb3NpdGlvbiAqL1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJJbWdTbGlkZXJfY29udGFpbmVyX18yOTNnVVwiLFxuXHRcImNvbnRhaW5lcl9faGVscGVyXCI6IFwiSW1nU2xpZGVyX2NvbnRhaW5lcl9faGVscGVyX18xVlM3Q1wiLFxuXHRcImNvbnRhaW5lcl9fYnV0dG9uTmV4dFwiOiBcIkltZ1NsaWRlcl9jb250YWluZXJfX2J1dHRvbk5leHRfX0I4aHI3XCIsXG5cdFwiY29udGFpbmVyX19idXR0b25QcmV2XCI6IFwiSW1nU2xpZGVyX2NvbnRhaW5lcl9fYnV0dG9uUHJldl9fN3ZSdUNcIixcblx0XCJjb250YWluZXJfX2ltZ1wiOiBcIkltZ1NsaWRlcl9jb250YWluZXJfX2ltZ19fMjBUMTBcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9