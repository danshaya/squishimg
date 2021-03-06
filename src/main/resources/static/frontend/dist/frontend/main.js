(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 7063:
/*!******************************************!*\
  !*** ./services/image-upload.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageUploadService": () => (/* binding */ ImageUploadService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



class ImageUploadService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    uploadImage(formData) {
        const request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest('POST', '/image/upload', formData, {
            reportProgress: true
        });
        return this.httpClient.request(request);
    }
    getCompressedImageUri(uploadedImage) {
        return '/image/' + uploadedImage.finalName;
    }
    downloadCompressedImage(uploadedImage) {
        let url = this.getCompressedImageUri(uploadedImage);
        return this.httpClient.get(url, { responseType: 'blob', observe: 'response' });
    }
}
ImageUploadService.??fac = function ImageUploadService_Factory(t) { return new (t || ImageUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
ImageUploadService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: ImageUploadService, factory: ImageUploadService.??fac, providedIn: 'root' });


/***/ }),

/***/ 6698:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.??fac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploader/uploader.component */ 9869);
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq/faq.component */ 6701);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);






const routes = [
    { path: '', component: _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_0__.UploaderComponent },
    { path: 'faq', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_1__.FaqComponent },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent },
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 970);




class AppComponent {
    constructor() {
        this.title = 'SquishImg';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-file-drop */ 721);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uploader/uploader.component */ 9869);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq/faq.component */ 6701);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-clipboard */ 948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);












class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            ngx_file_drop__WEBPACK_IMPORTED_MODULE_9__.NgxFileDropModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_11__.ClipboardModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent,
        _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_3__.UploaderComponent,
        _about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent,
        _faq_faq_component__WEBPACK_IMPORTED_MODULE_5__.FaqComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        ngx_file_drop__WEBPACK_IMPORTED_MODULE_9__.NgxFileDropModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        ngx_clipboard__WEBPACK_IMPORTED_MODULE_11__.ClipboardModule] }); })();


/***/ }),

/***/ 6701:
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqComponent": () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class FaqComponent {
    constructor() { }
    ngOnInit() {
    }
}
FaqComponent.??fac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(); };
FaqComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 2, vars: 0, template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "faq works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 24, vars: 0, consts: [["id", "footer"], [1, "row"], [1, "col-lg-12"], ["href", "https://thomaspark.co/"], ["href", "https://github.com/thomaspark/bootswatch/blob/master/LICENSE"], ["href", "https://getbootstrap.com/", "rel", "nofollow"], ["href", "https://fontawesome.com/", "rel", "nofollow"], ["href", "https://fonts.google.com/", "rel", "nofollow"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Bootstrap theme made by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Thomas Park");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Code released under the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "MIT License");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Based on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, ". Icons from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Font Awesome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, ". Web fonts from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6313:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.??fac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 17, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-dark", "bg-primary"], [1, "container"], ["href", "../", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/faq", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "SquishImg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 731:
/*!******************************************************!*\
  !*** ./src/app/uploader/uploader-file-drop-entry.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploaderFileDropEntry": () => (/* binding */ UploaderFileDropEntry)
/* harmony export */ });
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-file-drop */ 721);
/* harmony import */ var _uploader_file_drop_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploader-file-drop-status */ 2268);


class UploaderFileDropEntry extends ngx_file_drop__WEBPACK_IMPORTED_MODULE_1__.NgxFileDropEntry {
    constructor(fileDropEntry) {
        super(fileDropEntry.relativePath, fileDropEntry.fileEntry);
        this.status = new _uploader_file_drop_status__WEBPACK_IMPORTED_MODULE_0__.UploaderFileDropStatus();
    }
}


/***/ }),

/***/ 2268:
/*!*******************************************************!*\
  !*** ./src/app/uploader/uploader-file-drop-status.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploaderFileDropStatus": () => (/* binding */ UploaderFileDropStatus)
/* harmony export */ });
class UploaderFileDropStatus {
    constructor() {
        this.progress = 0;
        this.statusCode = UploaderFileDropStatus.STATUS_PENDING;
        this.message = '';
        this.level = '';
        this.setStatusCode(UploaderFileDropStatus.STATUS_PENDING);
    }
    getLevel() {
        return this.level;
    }
    getMessage() {
        return this.message;
    }
    setStatusCode(statusCode) {
        this.statusCode = statusCode;
        switch (statusCode) {
            case UploaderFileDropStatus.STATUS_PENDING:
                this.message = 'uploading';
                this.level = 'info';
                break;
            case UploaderFileDropStatus.STATUS_SUCCESS:
                this.message = 'upload complete';
                this.level = 'secondary';
                break;
            case UploaderFileDropStatus.STATUS_IS_DIRECTORY:
                this.message = 'you cannot upload a directory';
                this.level = 'danger';
                break;
            case UploaderFileDropStatus.STATUS_FAILED:
                this.message = 'upload/compression failed';
                this.level = 'danger';
                break;
            case UploaderFileDropStatus.STATUS_RESPONSE_RECEIVED:
                this.message = 'compression complete';
                this.level = 'success';
                break;
            default:
                throw new Error('unknown status code');
        }
    }
}
UploaderFileDropStatus.STATUS_PENDING = 0;
UploaderFileDropStatus.STATUS_SUCCESS = 1;
UploaderFileDropStatus.STATUS_FAILED = 2;
UploaderFileDropStatus.STATUS_IS_DIRECTORY = 3;
UploaderFileDropStatus.STATUS_RESPONSE_RECEIVED = 4;


/***/ }),

/***/ 9869:
/*!************************************************!*\
  !*** ./src/app/uploader/uploader.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploaderComponent": () => (/* binding */ UploaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _uploader_file_drop_entry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploader-file-drop-entry */ 731);
/* harmony import */ var _uploader_file_drop_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploader-file-drop-status */ 2268);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ 9457);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var services_image_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/image-upload.service */ 7063);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-clipboard */ 948);
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-file-drop */ 721);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);









function UploaderComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](0, " Drop image files here or \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function UploaderComponent_ng_template_6_Template_button_click_1_listener() { const openFileSelector_r2 = ctx.openFileSelector; return openFileSelector_r2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, "Click to browse files");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function UploaderComponent_tr_22_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function UploaderComponent_tr_22_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r9); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r7.downloadCompressedImage(item_r4.uploadResponse); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function UploaderComponent_tr_22_div_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r9); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r10.compressedImageUrlToClipboard(item_r4.uploadResponse); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](4, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function UploaderComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](11, UploaderComponent_tr_22_div_11_Template, 5, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](item_r4.relativePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????classMapInterpolate1"]("text-", item_r4.status.getLevel(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", item_r4.status.getMessage(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????styleProp"]("width", item_r4.status.progress + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????attribute"]("aria-valuenow", item_r4.status.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", item_r4.uploadResponse);
} }
class UploaderComponent {
    constructor(uploadService, clipboardService) {
        this.uploadService = uploadService;
        this.clipboardService = clipboardService;
        this.files = [];
    }
    ngOnInit() { }
    compressedImageUrlToClipboard(uploadedImage) {
        const uri = this.uploadService.getCompressedImageUri(uploadedImage);
        const url = window.location.protocol + '//' + window.location.host + uri;
        console.log(url);
        this.clipboardService.copy(url);
    }
    downloadCompressedImage(uploadedImage) {
        this.uploadService.downloadCompressedImage(uploadedImage).subscribe((result) => {
            const body = result.body;
            (0,file_saver__WEBPACK_IMPORTED_MODULE_2__.saveAs)(body, uploadedImage.finalName);
        });
    }
    dropped(files) {
        const self = this;
        for (const rawDroppedFile of files) {
            const droppedFile = new _uploader_file_drop_entry__WEBPACK_IMPORTED_MODULE_0__.UploaderFileDropEntry(rawDroppedFile);
            self.files.push(droppedFile);
            if (droppedFile.fileEntry.isFile) {
                const fileEntry = droppedFile.fileEntry;
                fileEntry.file((file) => {
                    const formData = new FormData();
                    formData.append('image', file, droppedFile.relativePath);
                    const req = this.uploadService.uploadImage(formData);
                    req.subscribe((event) => {
                        var _a;
                        switch (event.type) {
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpEventType.UploadProgress:
                                let uploadPercent = Math.round(event.loaded / ((_a = event.total) !== null && _a !== void 0 ? _a : 0) * 100);
                                droppedFile.status.progress = uploadPercent;
                                break;
                            case _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpEventType.Response:
                                droppedFile.uploadResponse = event.body;
                                droppedFile.status.setStatusCode(_uploader_file_drop_status__WEBPACK_IMPORTED_MODULE_1__.UploaderFileDropStatus.STATUS_SUCCESS);
                                break;
                        }
                    }, (error) => droppedFile.status.setStatusCode(_uploader_file_drop_status__WEBPACK_IMPORTED_MODULE_1__.UploaderFileDropStatus.STATUS_FAILED));
                });
            }
            else {
                droppedFile.status.setStatusCode(_uploader_file_drop_status__WEBPACK_IMPORTED_MODULE_1__.UploaderFileDropStatus.STATUS_IS_DIRECTORY);
            }
        }
    }
}
UploaderComponent.??fac = function UploaderComponent_Factory(t) { return new (t || UploaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](services_image_upload_service__WEBPACK_IMPORTED_MODULE_3__.ImageUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](ngx_clipboard__WEBPACK_IMPORTED_MODULE_6__.ClipboardService)); };
UploaderComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: UploaderComponent, selectors: [["app-uploader"]], decls: 23, vars: 2, consts: [[1, "row"], [1, "col-12", "mb-2"], ["src", "/img/banner.jpg", "alt", "banner image", 1, "rounded", "img-fluid"], [1, "col-12", "mt-2", "mb-2"], [1, "center"], ["dropZoneLabel", "Drop files here", "dropZoneClassName", "dropZone-style", "contentClassName", "dropZoneContent-style", "accept", ".png,.jpg,.jpeg,.gif", 3, "directory", "onFileDrop"], ["ngx-file-drop-content-tmp", ""], [1, "text-center", "mt-1", "mb-2"], [1, "upload-table"], [1, "table", "table-hover"], ["scope", "col", 2, "width", "50%"], ["scope", "col", 2, "width", "20%"], ["scope", "col", 2, "width", "10%"], [1, "upload-name-style"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "progress", "mb-0", 2, "height", "20px"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar"], ["class", "btn-group", "role", "group", "aria-label", "Actions", 4, "ngIf"], ["role", "group", "aria-label", "Actions", 1, "btn-group"], ["title", "download compressed image", "type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "fa", "fa-arrow-down"], ["title", "copy to clipboard", "type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "fa", "fa-clipboard"]], template: function UploaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "ngx-file-drop", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("onFileDrop", function UploaderComponent_Template_ngx_file_drop_onFileDrop_5_listener($event) { return ctx.dropped($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](6, UploaderComponent_ng_template_6_Template, 3, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8, "allowed extensions: png, jpg, jpeg, gif");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](14, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](16, "status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](18, "progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](20, "action");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](21, "tbody", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](22, UploaderComponent_tr_22_Template, 12, 9, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("directory", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", ctx.files);
    } }, directives: [ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__.NgxFileDropComponent, ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__.NgxFileDropContentTemplateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWRlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map