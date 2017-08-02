webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// routes
var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */] },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_jwt__ = __webpack_require__("../../../../ng2-jwt/ng2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_jwt__);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var firebaseConfig = {
    apiKey: 'AIzaSyAC8BvlIotworGYsiQyGHOoeBBirYQ46J4',
    authDomain: 'simprints-dev.firebaseapp.com',
    databaseURL: 'https://simprints-dev.firebaseio.com',
    projectId: 'simprints-dev',
    storageBucket: 'simprints-dev.appspot.com',
    messagingSenderId: '79630518081'
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_module__["a" /* DashboardModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_charts_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_smart_table__["a" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_page_scroll__["a" /* Ng2PageScrollModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyAC8BvlIotworGYsiQyGHOoeBBirYQ46J4'
            }),
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_14_ng_lightning_ng_lightning__["a" /* NglModule */],
            __WEBPACK_IMPORTED_MODULE_15_ng2_dragula_ng2_dragula__["DragulaModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17_angular2_cookie_services_cookies_service__["CookieService"],
            __WEBPACK_IMPORTED_MODULE_18_ng2_jwt__["JwtHelper"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var url = state.url;
        console.log("canActivate");
        return this.authService.isLoggedIn
            .map(function (auth) { return auth !== null; })
            .do(function (isAuthenticated) {
            if (isAuthenticated) {
                return true;
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(cookieService, afAuth) {
        this.cookieService = cookieService;
        this.afAuth = afAuth;
        this.isLoggedIn = this.afAuth.idToken;
    }
    AuthService.prototype.logout = function () {
        this.isLoggedIn = null;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/change_config/change-config.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".containerSettings{\n\tposition: absolute;\n\tleft: 30px;\n\ttop: 15vh;\n}\n\ninput[type=\"radio\"]{\n\topacity: 1;\n\tposition: relative;\n\tleft: 0px;\n\tmargin-right: 6px;\n\tmargin-left: 6px;\n}\n\ninput[type=\"range\"]{\n\tmargin-right: 5px;\n\tmargin-left: 5px;\n}\n\n.languageInput{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n}\n\n.selectLanguage{\n\tmargin-top: 5px;\n}\n\n.labelLanguage{\n\tmargin-top: 15px;\n\tmargin-right: 10px;\n}\n\n.inputThreshold{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n\tmargin-top: 10px;\n}\n\n.thresholdQuality{\n\tmargin-top: 10px;\n}\n\n.val{\n\tmargin-top: 10px;\n}\n\n.rightVal{\n\tmargin-left: 10px;\n\tmargin-top: 10px;\n}\n\n.containerButton{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n\tmargin-top: 10px;\n}\n\n.submitButton{\n\tmargin-left: 5px;\n}\n\n.cancelButton{\n\tbackground-color: white;\n\tborder: 0.5px solid grey;\n\tborder-radius: 5px;\n\twidth: 50px;\n\ttext-align: center;\n}\n\nbutton:disabled,\nbutton[disabled]{\n  border: 1px solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/change_config/change-config.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='project' class=\"containerSettings\">\n\t<form (ngSubmit)=\"onSubmit()\" #changeConfig=\"ngForm\">\n\t\n\t\t<div class=\"languageInput\">\n\t\t\t<label class=\"labelLanguage\" for=\"language\">Language: </label>\n\t\t\t<select class=\"selectLanguage\" (change)=\"changeSelect($event, language)\">\n\t\t\t\t<option *ngFor=\"let choice of language.choices\" [selected]=\"isDefault(language.value, choice)\">{{choice}}</option>\n\t\t\t</select>\n\t\t</div>\n\t\t<div class=\"thresholdQuality\" *ngIf='thresholdQuality.value'>\n\t\t\t<label for=\"thresholdQuality\">Threshold Quality: {{thresholdQuality.value}}</label>\n\t\t\t<div class=\"inputThreshold\">\n\t\t\t\t<span class=\"val\">{{thresholdQuality.min}}</span>\n\t\t\t\t<p class=\"range-field\">\n\t\t\t\t\t<input type=\"range\" name=\"thresholdQuality\" id=\"thresholdQuality\" [min]=\"thresholdQuality.min\" [max]=\"thresholdQuality.max\" [(ngModel)]=\"thresholdQuality.value\" (change)=\"changeSeek()\">\n\t\t\t\t</p>\n\t\t\t\t<span class=\"rightVal\">{{thresholdQuality.max}}</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div>\n\t\t\t<label for=\"syncSettings\">Sync Group: </label>\n\t\t\t<span *ngFor=\"let choice of syncSettings.choices\">\n\t\t\t<input class=\"with-gap\" type=\"radio\" name=\"syncSettings\" id=\"choice\" [checked]=\"isDefault(syncSettings.value, choice)\" (change)=\"changeCheck(syncSettings, choice)\">{{choice}}\n\t\t\t</span>\n\t\t</div>\n\t\t<div>\n\t\t\t<label for=\"searchSettings\">Match Group: </label>\n\t\t\t<span *ngFor=\"let choice of searchSettings.choices\">\n\t\t\t<input class=\"with-gap\" type=\"radio\" name=\"searchSettings\" id=\"choice\" [checked]=\"isDefault(searchSettings.value, choice)\" (change)=\"changeCheck(searchSettings, choice)\">{{choice}}\n\t\t\t</span>\n\t\t</div>\n\t\t<div class=\"containerButton\">\n\t\t\t<div class=\"cancelButton\" (click)=\"cancel()\">Cancel</div>\n\t\t\t<button class=\"submitButton\" type=\"submit\" [disabled]=\"!valueChange\">\n\t\t\t\tChange Configuration\n\t\t\t</button>\n\t\t</div>\n\t</form>\n</div>\n<div *ngIf='load'>\n\t\t<ngl-spinner size=\"large\" type=\"brand\" container=\"true\"></ngl-spinner>\n</div>"

/***/ }),

/***/ "../../../../../src/app/change_config/change-config.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_project__ = __webpack_require__("../../../../../src/app/class/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_config__ = __webpack_require__("../../../../../src/app/class/config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeConfigComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangeConfigComponent = (function () {
    function ChangeConfigComponent(database) {
        this.database = database;
        this.thresholdQuality = new __WEBPACK_IMPORTED_MODULE_3__class_config__["a" /* Config */]();
        this.language = new __WEBPACK_IMPORTED_MODULE_3__class_config__["a" /* Config */]();
        this.syncSettings = new __WEBPACK_IMPORTED_MODULE_3__class_config__["a" /* Config */]();
        this.searchSettings = new __WEBPACK_IMPORTED_MODULE_3__class_config__["a" /* Config */]();
        this.nudgeMode = new __WEBPACK_IMPORTED_MODULE_3__class_config__["a" /* Config */]();
        this.load = false;
        this.valueChange = false;
    }
    ChangeConfigComponent.prototype.ngOnChanges = function () {
        this.configs = [];
        if (this.project !== undefined) {
            this.configs = new Array();
            this.getDefinition();
        }
    };
    ChangeConfigComponent.prototype.getDefinition = function () {
        var _this = this;
        this.database.list('/config/definition')
            .subscribe(function (data) {
            data.forEach(function (item) {
                var newConfig = new __WEBPACK_IMPORTED_MODULE_3__class_config__["a" /* Config */]();
                newConfig.key = item.$key;
                newConfig.value = item.default;
                newConfig.min = item.min;
                newConfig.max = item.max;
                newConfig.defaultVal = item.default;
                if (item.type != "seek" && item.type != "button") {
                    newConfig.choices = [];
                    _this.database.list('/config/definition/' + newConfig.key + '/values')
                        .subscribe(function (data) {
                        data.forEach(function (item) {
                            newConfig.choices.push(item.$value);
                        });
                        _this.configs.push(newConfig);
                    });
                }
                else {
                    _this.configs.push(newConfig);
                }
            });
            console.log(_this.configs);
            _this.getData();
        });
    };
    ChangeConfigComponent.prototype.getData = function () {
        var _this = this;
        this.database.list('/config/projects/' + this.project.id)
            .subscribe(function (data) {
            data.forEach(function (item) {
                _this.changeValue(item.$value, item.$key);
            });
            console.log(_this.configs);
            _this.putIndex();
        });
    };
    ChangeConfigComponent.prototype.changeValue = function (newValue, key) {
        this.configs.forEach(function (config) {
            if (config.key == key) {
                config.value = newValue;
                config.defaultVal = newValue;
                return;
            }
        });
    };
    ChangeConfigComponent.prototype.putIndex = function () {
        for (var i = 0; i < this.configs.length; i++) {
            switch (this.configs[i].key) {
                case "thresholdQuality":
                    this.thresholdQuality = this.configs[i];
                    break;
                case "language":
                    this.language = this.configs[i];
                    break;
                case "syncSettings":
                    this.syncSettings = this.configs[i];
                    break;
                case "searchSettings":
                    this.searchSettings = this.configs[i];
                    break;
                case "nudgeMode":
                    this.nudgeMode = this.configs[i];
                    break;
            }
        }
    };
    ChangeConfigComponent.prototype.changeCheck = function (component, val) {
        this.valueChange = true;
        component.value = val;
    };
    ChangeConfigComponent.prototype.isDefault = function (defaultValue, val) {
        return defaultValue == val;
    };
    ChangeConfigComponent.prototype.changeSelect = function (e, component) {
        this.valueChange = true;
        component.value = e.target.value;
    };
    ChangeConfigComponent.prototype.changeSeek = function () {
        this.valueChange = true;
    };
    ChangeConfigComponent.prototype.cancel = function () {
        this.valueChange = false;
        this.configs.forEach(function (item) {
            item.value = item.defaultVal;
        });
    };
    ChangeConfigComponent.prototype.onSubmit = function () {
        var _this = this;
        if (confirm("Are you sure to change the settings of the project " + this.project.name)) {
            this.load = true;
            console.log(this.syncSettings);
            console.log(this.searchSettings);
            console.log(this.thresholdQuality);
            console.log(this.language);
            this.values = this.database.object('/config/projects/' + this.project.id);
            this.values.update({ language: this.language.value,
                searchSettings: this.searchSettings.value,
                syncSettings: this.syncSettings.value,
                thresholdQuality: this.thresholdQuality.value })
                .then(function (data) { return _this.load = false; });
            console.log("submit");
        }
    };
    return ChangeConfigComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__class_project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__class_project__["a" /* Project */]) === "function" && _a || Object)
], ChangeConfigComponent.prototype, "project", void 0);
ChangeConfigComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'change-config',
        template: __webpack_require__("../../../../../src/app/change_config/change-config.component.html"),
        styles: [__webpack_require__("../../../../../src/app/change_config/change-config.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], ChangeConfigComponent);

var _a, _b;
//# sourceMappingURL=change-config.component.js.map

/***/ }),

/***/ "../../../../../src/app/change_config_admin/change-config-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".containerSettings{\n\tposition: absolute;\n\tleft: 30px;\n\ttop: 15vh;\n}\n\n.itemBox{\n\tborder: 1px solid white;\n\tbackground-color: black;\n\tcolor: white;\n\twidth: 200px;\n\theight: 20px;\n\ttext-align: center;\n\tvertical-align: middle;\n}\n\n.buttonChange{\n\tmargin-top: 10px;\n\tmargin-left: 40px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/change_config_admin/change-config-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='project' class=\"containerSettings\">\n\t<div>{{msg}}</div>\n\t<ul [dragula]='\"bag-items\"' [dragulaModel]='items'>\n  \t\t<li class=\"itemBox\" *ngFor=\"let item of items\">{{item}}</li>\n\t</ul>\n\t<button (click)=\"changeOrder()\" class=\"buttonChange\">Change the order</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/change_config_admin/change-config-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_project__ = __webpack_require__("../../../../../src/app/class/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeConfigAdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangeConfigAdminComponent = (function () {
    function ChangeConfigAdminComponent(dragula, database) {
        this.dragula = dragula;
        this.database = database;
        this.msg = '';
        this.items = [];
    }
    ChangeConfigAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.database.list("/config/definition")
            .subscribe(function (data) {
            data.forEach(function (item) {
                _this.items[item.index] = item.$key;
            });
            //this.items.sort((a, b))
        });
    };
    ChangeConfigAdminComponent.prototype.changeOrder = function () {
        var _this = this;
        var i = 0;
        var value;
        this.items.forEach(function (item) {
            value = _this.database.object("/config/definition/" + item);
            value.update({ index: i });
            i++;
        });
        this.msg = "The change is good";
    };
    return ChangeConfigAdminComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__class_project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__class_project__["a" /* Project */]) === "function" && _a || Object)
], ChangeConfigAdminComponent.prototype, "project", void 0);
ChangeConfigAdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'change-config-admin',
        template: __webpack_require__("../../../../../src/app/change_config_admin/change-config-admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/change_config_admin/change-config-admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _c || Object])
], ChangeConfigAdminComponent);

var _a, _b, _c;
//# sourceMappingURL=change-config-admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".containerChart{\n  position: absolute;\n  left: 2vw;\n  top: 35vh;\n  padding-bottom: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-top: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='project' class=\"containerChart\">\n  <general-info *ngIf=\"project.name !== 'Global'\" [project]=\"project\"></general-info>\n  <project-impact *ngIf='load' [project]=\"project\"></project-impact>\n  <project-performance *ngIf='load' [project]=\"project\"></project-performance>\n  <project-error *ngIf='load' [project]=\"project\"></project-error>\n  <user-info *ngIf='load' [project]=\"project\"></user-info>\n</div>\n<div *ngIf='!load'>\n  <ngl-spinner size=\"large\" type=\"brand\" container=\"true\"></ngl-spinner>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_project__ = __webpack_require__("../../../../../src/app/class/project.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartComponent = (function () {
    function ChartComponent(database) {
        this.database = database;
        this.load = false;
    }
    ChartComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.load = false;
        this.database.list('/project-users/' + this.project.id)
            .subscribe(function (data) {
            _this.project.listUsers = [];
            data.forEach(function (user) {
                _this.project.listUsers.push(user.userId);
            });
            _this.project.listUsers.sort();
            _this.load = true;
        });
        //   this.load2 = false;
        //   let dateToday: Date = new Date(Date.now());
        //   dateToday.setUTCHours(0);
        //   dateToday.setUTCMinutes(0);
        //   dateToday.setUTCSeconds(0);
        //   dateToday.setUTCMilliseconds(0);
        //   this.today = dateToday.getUTCFullYear() + "-" + (dateToday.getUTCMonth() + 1) + "-" + dateToday.getUTCDate();
        //   if (!isUndefined(this.project)) {
        //     let url: string;
        //     if(this.project.name !== 'Global'){
        //       url = '/project-global-stats/' + this.project.id;
        //     }
        //     else{
        //       url = '/all-global-stats'
        //     }
        //     this.database.list(url + '/count-stats', {
        //       query: {
        //         orderByKey: true,
        //         startAt: '2017-6-10'
        //       }
        //     }).subscribe(data => {
        //         console.log(data);
        //         data.forEach(item => {
        //           if (item.$key === 'count-stats') {
        //             this.project.countStat = item;
        //           }
        //           if (item.$key === 'error-stats') {
        //             this.project.errorStat = item;
        //           }
        //           if (item.$key === 'info-stats') {
        //             this.project.infoStat = item;
        //           }
        //           if (item.$key === 'IDENTIFY-time-stats') {
        //             this.project.timeStat = item;
        //           }
        //         });
        //         this.load1 = true;
        //       });
        //     this.database.list(url + '/error-stats', {
        //       query: {
        //         orderByKey: true,
        //         startAt: '2017-6-10'
        //       }
        //     })
        //       .subscribe(data => {
        //         console.log(data);
        //         data.forEach(item => {
        //           if (item.$key === 'count-stats') {
        //             this.project.countStat = item;
        //           }
        //           if (item.$key === 'error-stats') {
        //             this.project.errorStat = item;
        //           }
        //           if (item.$key === 'info-stats') {
        //             this.project.infoStat = item;
        //           }
        //           if (item.$key === 'IDENTIFY-time-stats') {
        //             this.project.timeStat = item;
        //           }
        //         });
        //         this.load1 = true;
        //       });
        //     this.database.list(url + '/info-stats', {
        //       query: {
        //         orderByKey: true,
        //         startAt: '2017-6-10'
        //       }
        //     })
        //       .subscribe(data => {
        //         console.log(data);
        //         data.forEach(item => {
        //           if (item.$key === 'count-stats') {
        //             this.project.countStat = item;
        //           }
        //           if (item.$key === 'error-stats') {
        //             this.project.errorStat = item;
        //           }
        //           if (item.$key === 'info-stats') {
        //             this.project.infoStat = item;
        //           }
        //           if (item.$key === 'IDENTIFY-time-stats') {
        //             this.project.timeStat = item;
        //           }
        //         });
        //         this.load1 = true;
        //       });
        //     this.database.list(url + '/IDENTIFY-time-stats', {
        //       query: {
        //         orderByKey: true,
        //         startAt: '2017-6-10'
        //       }
        //     }).subscribe(data => {
        //         console.log(data);
        //         data.forEach(item => {
        //           if (item.$key === 'count-stats') {
        //             this.project.countStat = item;
        //           }
        //           if (item.$key === 'error-stats') {
        //             this.project.errorStat = item;
        //           }
        //           if (item.$key === 'info-stats') {
        //             this.project.infoStat = item;
        //           }
        //           if (item.$key === 'IDENTIFY-time-stats') {
        //             this.project.timeStat = item;
        //           }
        //         });
        //         this.load1 = true;
        //       });
        //     if(this.project.name !== 'Global') {
        //       this.database.list('/project-global-stats/' + this.project.id + '/users/ID-test188')
        //         .subscribe(data => {
        //           console.log("ok1");
        //           this.project.listUsers = [];
        //           data.forEach(user => {
        //             this.project.listUsers.push(user.$key);
        //             this.project.users[user.$key] = {};
        //             this.project.users[user.$key]['count-stats'] = user['count-stats'] || [];
        //             this.project.users[user.$key]['error-stats'] = user['error-stats'] || [];
        //             this.project.users[user.$key]['time-stats'] = user['IDENTIFY-time-stats'] || [];
        //           });
        //           this.load2 = true;
        //         });
        //     }
        //     else{
        //       this.load2 = true;
        //     }
        //   }
    };
    return ChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__class_project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__class_project__["a" /* Project */]) === "function" && _a || Object)
], ChartComponent.prototype, "project", void 0);
ChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chart',
        template: __webpack_require__("../../../../../src/app/chart/chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chart/chart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], ChartComponent);

var _a, _b;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/class/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = (function () {
    function Config() {
    }
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../../src/app/class/project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project() {
        this.countStat = {};
        this.errorStat = {};
        this.infoStat = {};
        this.timeStat = {};
        this.users = {};
        this.name = '';
    }
    return Project;
}());

//# sourceMappingURL=project.js.map

/***/ }),

/***/ "../../../../../src/app/class/projectCreate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectCreate; });
var ProjectCreate = (function () {
    function ProjectCreate() {
    }
    return ProjectCreate;
}());

//# sourceMappingURL=projectCreate.js.map

/***/ }),

/***/ "../../../../../src/app/class/session.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Session; });

var Session = (function () {
    function Session() {
        this.iconUrl = "../assets/";
    }
    Session.prototype.cpyInformation = function (info) {
        this.userId = info.userId;
        this.hardwareVersion = info.hardwareVersion;
        var date;
        if (info.startTime === undefined) {
            date = new Date(info.sessionStartTime);
        }
        else {
            date = new Date(info.startTime);
        }
        this.startTime = __WEBPACK_IMPORTED_MODULE_0_moment__(date).format("DD/MM/YYYY::HH:mm");
        this.latitude = info.latitude;
        this.longitude = info.longitude;
    };
    return Session;
}());

//# sourceMappingURL=session.js.map

/***/ }),

/***/ "../../../../../src/app/class/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/**
 * Created by yoann on 19/07/2017.
 */
var Utils = (function () {
    function Utils() {
    }
    Utils.generateRandomString = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
        for (var i = 0; i < 30; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    Utils.transformDateToTimestamp = function (date) {
        var dateSplit = date.split('-');
        return new Date(dateSplit[1] + "/" + dateSplit[2] + "/" + dateSplit[0]).getTime();
    };
    Utils.transformTimestampToDate = function (time) {
        var dateString = '';
        var date = new Date(time);
        date.setUTCHours(0);
        date.setUTCMinutes(0);
        date.setUTCSeconds(0);
        date.setUTCMilliseconds(0);
        dateString += date.getUTCFullYear() + "-";
        if ((date.getUTCMonth() + 1) / 10 < 1)
            dateString += '0' + (date.getUTCMonth() + 1) + "-";
        else
            dateString += (date.getUTCMonth() + 1) + "-";
        if ((date.getUTCDate()) / 10 < 1)
            dateString += '0' + date.getUTCDate();
        else
            dateString += date.getUTCDate();
        return dateString;
    };
    Utils.getTodayDate = function () {
        return Utils.transformTimestampToDate(Date.now());
    };
    Utils.computeDateArray = function (dateStart, dateEnd) {
        var tab = [];
        var dateStartSplit = dateStart.split("-");
        var dateStartTimeStamp = new Date(dateStartSplit[1] + "/" + dateStartSplit[2] + "/" + dateStartSplit[0]).getTime();
        var dateEndSplit = dateEnd.split("-");
        var dateEndTimeStamp = new Date(dateEndSplit[1] + "/" + dateEndSplit[2] + "/" + dateEndSplit[0]).getTime();
        while (dateStartTimeStamp <= dateEndTimeStamp) {
            dateStartTimeStamp += 24 * 3600 * 1000;
            tab.push(Utils.transformTimestampToDate(dateStartTimeStamp));
        }
        return tab;
    };
    Utils.convertActivity = function (tab) {
        var activity = [];
        if (tab[0])
            activity.push('IDENTIFY');
        if (tab[1])
            activity.push('REGISTER');
        if (tab[2])
            activity.push('VERIFY');
        return activity;
    };
    Utils.transformTab = function (data) {
        var newData = {};
        for (var i = 0; i < data.length; i++)
            newData[data[i].$key] = data[i];
        return newData;
    };
    return Utils;
}());

Utils.listBlueError = ['LOW_BATTERY', 'BLUETOOTH_NOT_ENABLED', 'MULTIPLE_PAIRED_SCANNERS',
    'NOT_PAIRED', 'DISCONNECTED'];
Utils.listRedError = ['UNEXPECTED_ERROR'];
Utils.listYellowError = ['MISSING_MODULE_ID', 'INVALID_API_KEY', 'MISSING_USER_ID'];
Utils.listGreyError = ['GUID_NOT_FOUND_OFFLINE', 'GUID_NOT_FOUND_ONLINE', 'UNVERIFIED_API_KEY'];
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../../../../src/app/create_project/create-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".containerCreateProject{\n\tposition: absolute;\n\tleft: 22vw;\n\ttop: 30vh;\n}\n\nbutton:disabled,\nbutton[disabled]{\n  border: 1px solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n}\n\ninput[type=\"radio\"]{\n\topacity: 1;\n\tposition: relative;\n\tleft: 0px;\n\tmargin-right: 6px;\n\tmargin-left: 6px;\n}\n\n.inline{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n}\n\n.marginLeft{\n\tmargin-left: 20px;\n}\n\n.inputWidth{\n\twidth: 200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create_project/create-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"containerCreateProject\">\n\t<form (ngSubmit)=\"onSubmit()\" #createProjectForm=\"ngForm\">\n\t\t<div class=\"inline\">\n\t\t\t<div class=\"form-group inputWidth\">\n\t          \t<label for=\"name\">Name</label>\n\t          \t<input type=\"text\" class=\"form-control\" id=\"name\"\n\t                 [(ngModel)]=\"project.name\" name=\"name\"\n\t                 #name=\"ngModel\" required=\"required\">\n\t        </div>\n\t        <div class=\"form-group marginLeft inputWidth\">\n\t          \t<label for=\"informations\">Informations</label>\n\t          \t<input type=\"text\" class=\"form-control\" id=\"informations\"\n\t                 [(ngModel)]=\"project.informations\" name=\"informations\"\n\t                 #informations=\"ngModel\" required=\"required\">\n\t        </div>\n\t    </div>\n\t    <div class=\"inline\">\n\t        <div class=\"form-group inputWidth\">\n\t         \t<label for=\"projectManager\">Project Manager</label>\n\t          \t<input type=\"text\" class=\"form-control\" id=\"projectManager\"\n\t                 [(ngModel)]=\"project.projectManager\" name=\"projectManager\"\n\t                 #projectManager=\"ngModel\" required=\"required\">\n\t        </div>\n\t        <div class=\"form-group marginLeft inputWidth\">\n\t         \t<label for=\"contract\">Contract </label>\n\t          \t<input type=\"text\" class=\"form-control\" id=\"contract\"\n\t                 [(ngModel)]=\"project.contract\" name=\"contract\"\n\t                 #contract=\"ngModel\" required=\"required\">\n\t        </div>\n\t    </div>\n\t    <div class=\"inline\">\n\t\t\t<div class=\"form-group inputWidth\">\n\t        \t<label for=\"dateStart\">Date start</label>\n\t        \t<input type=\"date\" name=\"dateStart\" id=\"dateStart\" class=\"datepicker\" [(ngModel)]=\"project.dateStart\" required>\n\t        </div>\n\t        <div class=\"form-group marginLeft inputWidth\">\n\t        \t<label for=\"dateEnd\">Date end</label>\n\t        \t<input type=\"date\" name=\"dateEnd\" id=\"dateEnd\" class=\"datepicker\" [(ngModel)]=\"project.dateEnd\" required>\n\t        </div>\n\t    </div>\n\t\t<div class=\"form-group\">\n        \t<label for=\"test\">Test : </label>\n        \t<input type=\"radio\" name=\"test\" value=\"true\" [checked]=\"test\"> Yes\n        \t<input type=\"radio\" name=\"test\" value=\"false\" [checked]='test == false'> No\n        </div>\n        <button type=\"submit\" \n        \t\t[disabled]=\"!createProjectForm.form.valid\">\n        \t\tCreate\n        </button>\n\t</form>\n\t<div *ngIf='load'>\n\t\t<ngl-spinner size=\"large\" type=\"brand\" container=\"true\"></ngl-spinner>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/create_project/create-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_projectCreate__ = __webpack_require__("../../../../../src/app/class/projectCreate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateProjectComponent = (function () {
    function CreateProjectComponent(http, authService, database) {
        this.http = http;
        this.authService = authService;
        this.database = database;
        this.project = new __WEBPACK_IMPORTED_MODULE_3__class_projectCreate__["a" /* ProjectCreate */]();
        this.test = true;
        this.load = false;
        this.key = "708ba617e56449ec8163e820c390a91d0046c5f9dd344ae7ac9fbb9b0ae80d8c";
        this.url = "https://create-project-dot-simprints-dev.appspot.com/createApi";
    }
    CreateProjectComponent.prototype.onSubmit = function () {
        var _this = this;
        this.project.test = this.test;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var data = {
            data: {
                Info: this.project.informations,
                Issuer: this.authService.login,
                Test: this.project.test
            },
            key: this.key
        };
        this.load = true;
        this.http.post(this.url, JSON.stringify(data), options)
            .map(function (response) {
            return response.json();
        }).subscribe(function (data) {
            _this.database.object("/project-informations/" + data.apiKey)
                .set({ projectManager: _this.project.projectManager,
                projectName: _this.project.name,
                contract: _this.project.contract,
                dateStart: _this.project.dateStart,
                dateEnd: _this.project.dateEnd })
                .then(function () {
                _this.load = false;
            });
        });
    };
    return CreateProjectComponent;
}());
CreateProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'create-project',
        template: __webpack_require__("../../../../../src/app/create_project/create-project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create_project/create-project.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _c || Object])
], CreateProjectComponent);

var _a, _b, _c;
//# sourceMappingURL=create-project.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n  height: 100vh;\n  overflow-y: scroll;\n  position: absolute;\n  top: 0;\n  left: 17vw;\n  width: 83vw;\n}\n\n.barTop{\n\theight: 25vh;\n\tcolor: white;\n\tfont-size: 250%;\n\ttext-align: center;\n}\n\n.imgTop{\n\twidth: 83vw;\n\theight: 25vh;\n}\n\n.textBarTop{\n\tposition: absolute;\n\ttop: 12vh;\n\tleft: 30vw;\n}\n\n.edit{\n  background-color: white;\n  position: absolute;\n  top: 21vh;\n  left: 74vw;\n  color: rgb(158, 159, 160);\n  font-size: 30%;\n  padding-right: 4px;\n  cursor: pointer;\n}\n\n.pencilEdit{\n  width: 10px;\n}\n\n.mainContainer{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\tbackground-color: rgb(241, 241, 241);\n  height: 75vh;\n}\n\n.mainTitle{\n\tmargin-top: 0;\n\tpadding-top: 30px;\n\tfont-size: 175%;\n\tpadding-left: 2vw;\n\tcolor: rgba(255, 255, 255, 0.5);\n}\n\n.logoTitle{\n\tpadding-top: 30px;\n\tpadding-left: 2vw;\n}\n\n.mainTitleNext{\n\tfont-size: 175%;\n\tpadding-left: 2vw;\n\tcolor: rgba(255, 255, 255, 0.5);\n}\n\n.borderSeparate{\n\tmargin-left: 1vw;\n\tmargin-right: 1vw;\n\tborder: 1px solid white;\n\theight: 2px;\n}\n\n.globalText{\n\tmargin-left: 2vw;\n\tmargin-top: 1vh;\n\tmargin-bottom: 1vh;\n}\n\n.selectMapChartSetting{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n\theight: 10vh;\n  font-size: 140%;\n}\n\n.blockTextBorder{\n\twidth: 150px;\n\theight: 50px;\n\tmargin-top: 20px;\n\tmargin-left: 30px;\n\tcolor: rgb(158, 159, 160);\n}\n\n.blueText{\n  color: rgb(71, 139, 202);\n}\n\n.blueBorder{\n  border: 1px solid rgb(71, 139, 202);\n\twidth: 150px;\n}\n\n.borderUnderline{\n\tborder: 1px solid rgb(175, 176, 177);\n\twidth: 150px;\n}\n\n.projectName{\n\tpadding-top: 15px;\n\tpadding-left: 2vw;\n}\n\n.selectProject{\n  color: rgb(71, 139, 202);\n}\n\n.listProject{\n\tbackground-color: rgba(33, 33, 33, 1);\n\tcolor: white;\n\tmargin-left: 0;\n\twidth: 17vw;\n\toverflow-y: scroll;\n\theight: 100%;\n\tcursor: pointer;\n}\n.createProject{\n\tmargin-left: 2vw;\n\tmargin-top: 2vh;\n\ttext-align: center;\n\tcolor: black;\n}\n\n.logout{\n\tmargin-left: 2vw;\n\tmargin-top: 2vh;\n\ttext-align: center;\n\tcolor: rgb(237, 28, 36);\n}\n\n.paddingBottom{\n\theight: 2vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"listProject\">\n  <!--<div class=\"mainTitle\">Simprints</div>-->\n  <img class=\"logoTitle\" src=\"../../assets/logoWithoutBackground.png\">\n  <div class=\"mainTitleNext\">Projects </div>\n  <div class=\"mainTitleNext\">Dashboards</div><br/>\n  <div class=\"borderSeparate\"></div>\n  <div class=\"globalText selectProject\" *ngIf=\"'Global' === selectedProject.name\" (click)=\"seeGlobal()\">Global</div>\n  <div class=\"globalText\" *ngIf=\"'Global' !== selectedProject.name\" (click)=\"seeGlobal()\">Global</div>\n  <div class=\"borderSeparate\"></div>\n  <div *ngFor='let project of projects'>\n    <div (click)=\"selectProject(project)\">\n      <div *ngIf='selectedProject && project.name == selectedProject.name' class=\"projectName selectProject\">\n        {{project.name}}\n      </div>\n      <div *ngIf='!selectedProject || project.name != selectedProject.name' class=\"projectName\" >\n        {{project.name}}\n      </div>\n    </div>\n  </div>\n  <button *ngIf=\"admin\" (click)=\"selectOption = 'CreateProject'; selectedProject = null\" class=\"createProject\">Create a project</button><br/>\n  <button class=\"logout\" (click)=\"logout()\">Logout</button>\n  <div class=\"paddingBottom\"></div>\n</div>\n<div class=\"container\">\n<div class=\"barTop\">\n  <img class=\"imgTop\" *ngIf=\"selectedProject.name === ''\" src=\"../../assets/backgroundTop.png\">\n  <img class=\"imgTop\" *ngIf=\"selectedProject.name !== ''\" src=\"{{selectedProject.backgroundUrl}}\">\n  <div *ngIf=\"selectedProject.name === ''\" class=\"textBarTop\">Your Dashboard</div>\n  <div *ngIf=\"selectedProject.name !== ''\" class=\"textBarTop\">{{selectedProject.name}}</div>\n  <div *ngIf=\"selectedProject.name !== ''\" class=\"edit\" (click)=\"openFileLoader('fileLoader')\">\n    <input type=\"file\" id=\"fileLoader\" style=\"display: none\" (change)=\"editPicture($event)\">\n    <img class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n    Edit picture\n  </div>\n</div>\n<div *ngIf=\"selectedProject.name !== ''\" id=\"container\" class=\"mainContainer\">\n  <div class=\"selectMapChartSetting\">\n    <div *ngIf=\"selectOption == 'Chart'\" class=\"blockTextBorder blueText\">\n      <div>Chart</div>\n      <div class=\"blueBorder\"></div>\n    </div>\n    <div *ngIf=\"selectOption != 'Chart'\" class=\"blockTextBorder\" (click)=\"selectOption = 'Chart'\">\n      <div>Chart</div>\n      <div class=\"borderUnderline\"></div>\n    </div>\n    <div *ngIf=\"selectOption == 'Map'\" class=\"blockTextBorder blueText\">\n      <div>Map</div>\n      <div class=\"blueBorder\"></div>\n    </div>\n    <div *ngIf=\"selectOption != 'Map'\" class=\"blockTextBorder\" (click)=\"selectOption = 'Map'\">\n      <div>Map</div>\n      <div class=\"borderUnderline\"></div>\n    </div>\n    <div *ngIf=\"selectOption == 'Table'\" class=\"blockTextBorder blueText\">\n      <div>Table</div>\n      <div class=\"blueBorder\"></div>\n    </div>\n    <div *ngIf=\"selectOption != 'Table'\" class=\"blockTextBorder\" (click)=\"selectOption = 'Table'\">\n      <div>Table</div>\n      <div class=\"borderUnderline\"></div>\n    </div>\n    <div *ngIf=\"selectOption == 'Settings'\" class=\"blockTextBorder blueText\">\n      <div>Settings</div>\n      <div class=\"blueBorder\"></div>\n    </div>\n    <div *ngIf=\"selectOption != 'Settings'\" class=\"blockTextBorder\" (click)=\"selectOption = 'Settings'\">\n      <div>Settings</div>\n      <div class=\"borderUnderline\"></div>\n    </div>\n  </div>\n  <chart *ngIf=\"selectOption == 'Chart'\" [project]=\"selectedProject\"></chart>\n  <map *ngIf=\"selectOption == 'Map'\" [project]=\"selectedProject\"></map>\n  <table *ngIf=\"selectOption == 'Table'\" [project]=\"selectedProject\"></table>\n  <change-config *ngIf=\"selectOption == 'Settings' && selectedProject.name != 'Global'\" [project]=\"selectedProject\"></change-config>\n  <change-config-admin *ngIf=\"selectOption == 'Settings' && selectedProject.name == 'Global'\" [project]=\"selectedProject\"></change-config-admin>\n</div>\n</div>\n<create-project *ngIf=\"selectOption == 'CreateProject'\"></create-project>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_project__ = __webpack_require__("../../../../../src/app/class/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_utils__ = __webpack_require__("../../../../../src/app/class/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_storage__ = __webpack_require__("../../../../firebase/storage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DashboardComponent = (function () {
    function DashboardComponent(database, afAuth, authService, router) {
        this.database = database;
        this.afAuth = afAuth;
        this.authService = authService;
        this.router = router;
        this.globalProject = new __WEBPACK_IMPORTED_MODULE_2__class_project__["a" /* Project */]();
        this.selectedProject = new __WEBPACK_IMPORTED_MODULE_2__class_project__["a" /* Project */]();
        this.admin = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('init');
        __WEBPACK_IMPORTED_MODULE_7_firebase_app__["storage"]().ref('backgroundDashboard/defaultBackground.png').getDownloadURL().then(function (data) {
            _this.imgBackgroundDefault = data;
            _this.imgBackground = data;
            _this.globalProject.backgroundUrl = data;
        });
        __WEBPACK_IMPORTED_MODULE_7_firebase_app__["storage"]().ref('profilePictureChampionDashboard/defaultProfile.png').getDownloadURL().then(function (data) {
            _this.imgProfileDefault = data;
            console.log(data);
        });
        this.globalProject.name = 'Global';
        this.database.list('/project-informations').subscribe(function (data) {
            _this.projects = [];
            data.forEach(function (item) {
                if (item.projectName !== undefined) {
                    _this.cpyInformation(item);
                }
            });
            _this.projects.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                else if (a.name > b.name) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            _this.globalProject.listUsers = [];
            _this.projects.forEach(function (it) { return _this.globalProject.listUsers.push(it.name); });
        });
    };
    DashboardComponent.prototype.openFileLoader = function (id) {
        $('#' + id).click();
    };
    DashboardComponent.prototype.editPicture = function (e) {
        var _this = this;
        var file = e.target.files[0];
        var randomName = __WEBPACK_IMPORTED_MODULE_6__class_utils__["a" /* Utils */].generateRandomString();
        this.selectedProject.background = randomName;
        __WEBPACK_IMPORTED_MODULE_7_firebase_app__["storage"]().ref('backgroundDashboard/' + randomName).put(file).then(function () {
            _this.database.object('project-informations/' + _this.selectedProject.id + '/background')
                .set(randomName);
            __WEBPACK_IMPORTED_MODULE_7_firebase_app__["storage"]().ref('backgroundDashboard/' + _this.selectedProject.background).getDownloadURL()
                .then(function (data) {
                _this.selectedProject.backgroundUrl = data;
            });
        });
    };
    DashboardComponent.prototype.cpyInformation = function (info) {
        var newProject = new __WEBPACK_IMPORTED_MODULE_2__class_project__["a" /* Project */]();
        newProject.id = info.$key;
        newProject.name = info.projectName;
        newProject.background = info.background;
        newProject.projectManager = info.projectManager;
        newProject.dateStart = info.dateStart;
        newProject.dateEnd = info.dateEnd;
        newProject.contract = info.contract;
        newProject.details = info.details;
        newProject.hqChampionName = info.hqChampionName;
        newProject.hqChampionLastDate = info.hqChampionLastDate;
        newProject.fieldChampionName = info.fieldChampionName;
        newProject.fieldChampionLastDate = info.fieldChampionLastDate;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isUndefined"])(info.hqChampionPicture)) {
            __WEBPACK_IMPORTED_MODULE_7_firebase_app__["storage"]().ref('profilePictureChampionDashboard/' + info.hqChampionPicture).getDownloadURL()
                .then(function (data) {
                newProject.hqChampionPicture = data;
            });
        }
        else {
            newProject.hqChampionPicture = this.imgProfileDefault;
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isUndefined"])(info.fieldChampionPicture)) {
            __WEBPACK_IMPORTED_MODULE_7_firebase_app__["storage"]().ref('profilePictureChampionDashboard/' + info.fieldChampionPicture).getDownloadURL()
                .then(function (data) {
                newProject.fieldChampionPicture = data;
            });
        }
        else {
            newProject.fieldChampionPicture = this.imgProfileDefault;
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isUndefined"])(newProject.background)) {
            __WEBPACK_IMPORTED_MODULE_7_firebase_app__["storage"]().ref('backgroundDashboard/' + newProject.background).getDownloadURL()
                .then(function (data) {
                newProject.backgroundUrl = data;
            });
        }
        else {
            newProject.backgroundUrl = this.imgBackgroundDefault;
        }
        this.projects.push(newProject);
    };
    DashboardComponent.prototype.selectProject = function (project) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isUndefined"])(project.backgroundUrl))
            project.backgroundUrl = this.imgBackgroundDefault;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isUndefined"])(project.fieldChampionPicture))
            project.fieldChampionPicture = this.imgProfileDefault;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_util__["isUndefined"])(project.hqChampionPicture))
            project.hqChampionPicture = this.imgProfileDefault;
        this.selectedProject = project;
        this.selectedProject.users = [];
        this.selectOption = 'Chart';
        console.log(project);
    };
    DashboardComponent.prototype.seeGlobal = function () {
        this.selectProject(this.globalProject);
    };
    DashboardComponent.prototype.logout = function () {
        this.authService.isLoggedIn = null;
        this.afAuth.auth.signOut();
        return this.router.navigate(['/login']);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_routing__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chart_chart_component__ = __webpack_require__("../../../../../src/app/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directive_drag_drop_directive__ = __webpack_require__("../../../../../src/app/directive/drag-drop.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__table_table_component__ = __webpack_require__("../../../../../src/app/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__map_event_map_event_component__ = __webpack_require__("../../../../../src/app/map_event/map-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__change_config_change_config_component__ = __webpack_require__("../../../../../src/app/change_config/change-config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__change_config_admin_change_config_admin_component__ = __webpack_require__("../../../../../src/app/change_config_admin/change-config-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__create_project_create_project_component__ = __webpack_require__("../../../../../src/app/create_project/create-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__general_info_general_information_component__ = __webpack_require__("../../../../../src/app/general-info/general-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__project_impact_project_impact_component__ = __webpack_require__("../../../../../src/app/project-impact/project-impact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__multiple_select_multiple_select_component__ = __webpack_require__("../../../../../src/app/multiple-select/multiple-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__project_error_project_error_component__ = __webpack_require__("../../../../../src/app/project-error/project-error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__project_performance_project_performance_component__ = __webpack_require__("../../../../../src/app/project-performance/project-performance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__user_info_user_info_component__ = __webpack_require__("../../../../../src/app/user-info/user-info.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__chart_chart_component__["a" /* ChartComponent */],
            __WEBPACK_IMPORTED_MODULE_10__directive_drag_drop_directive__["a" /* DragDropDirective */],
            __WEBPACK_IMPORTED_MODULE_11__table_table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_12__map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_13__map_event_map_event_component__["a" /* MapEventComponent */],
            __WEBPACK_IMPORTED_MODULE_18__change_config_change_config_component__["a" /* ChangeConfigComponent */],
            __WEBPACK_IMPORTED_MODULE_20__change_config_admin_change_config_admin_component__["a" /* ChangeConfigAdminComponent */],
            __WEBPACK_IMPORTED_MODULE_22__create_project_create_project_component__["a" /* CreateProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_23__general_info_general_information_component__["a" /* GeneralInformationComponent */],
            __WEBPACK_IMPORTED_MODULE_24__project_impact_project_impact_component__["a" /* ProjectImpactComponent */],
            __WEBPACK_IMPORTED_MODULE_25__multiple_select_multiple_select_component__["a" /* MultipleSelectComponent */],
            __WEBPACK_IMPORTED_MODULE_26__project_error_project_error_component__["a" /* ProjectErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_27__project_performance_project_performance_component__["a" /* ProjectPerformanceComponent */],
            __WEBPACK_IMPORTED_MODULE_28__user_info_user_info_component__["a" /* UserInfoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_routing__["a" /* DashboardRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_14__agm_core__["a" /* AgmCoreModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_15_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__["a" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_19_ng_lightning_ng_lightning__["a" /* NglModule */],
            __WEBPACK_IMPORTED_MODULE_21_ng2_dragula_ng2_dragula__["DragulaModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_17__auth_service__["a" /* AuthService */]
        ]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var chartRoutes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard_service__["a" /* AuthGuard */]] },
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(chartRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]
        ]
    })
], DashboardRoutingModule);

//# sourceMappingURL=dashboard.routing.js.map

/***/ }),

/***/ "../../../../../src/app/directive/drag-drop.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DragDropDirective = (function () {
    function DragDropDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.epsilon = 10; //The number of pixel to display the cursor size
        this.click = false;
        this.sizeWidth = false;
        this.clickSizeWidth = false;
        this.sizeHeight = false;
        this.clickSizeHeight = false;
    }
    DragDropDirective.prototype.onMouseMove = function (e) {
        var left = this.el.nativeElement.style.left.replace('px', '');
        var width = this.el.nativeElement.style.width.replace('px', '');
        var top = this.el.nativeElement.style.top.replace('px', '');
        var height = this.el.nativeElement.style.height.replace('px', '');
        if (this.click) {
            console.log(e);
            //if(e.clientX - this.leftStart >= 0){
            this.setLocation(e.clientX, e.clientY);
            //}
        }
        else if (this.clickSizeWidth) {
            this.setSize(e.layerX + 20, 'width');
        }
        else if (this.clickSizeHeight) {
            this.setSize(e.layerY + 20, 'height');
        }
        else if (width - e.layerX <= this.epsilon) {
            this.renderer.setElementStyle(this.el.nativeElement, 'cursor', 'e-resize');
            this.sizeWidth = true;
        }
        else if (height - e.layerY <= this.epsilon) {
            this.renderer.setElementStyle(this.el.nativeElement, 'cursor', 's-resize');
            this.sizeHeight = true;
        }
        else {
            this.sizeWidth = false;
            this.sizeHeight = false;
            this.renderer.setElementStyle(this.el.nativeElement, 'cursor', 'auto');
        }
    };
    DragDropDirective.prototype.onMouveLeave = function (e) {
        this.renderer.setElementStyle(this.el.nativeElement, 'cursor', 'auto');
    };
    DragDropDirective.prototype.onMouseDown = function (e) {
        if (this.sizeWidth) {
            this.clickSizeWidth = true;
            console.log("start width");
        }
        else if (this.sizeHeight) {
            this.clickSizeHeight = true;
            console.log("start height");
        }
        else {
            console.log("start click");
            var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
            console.log(this.el.nativeElement.style.top);
            this.click = true;
            this.topStart = e.layerY + scrollTop;
            this.leftStart = e.layerX;
            console.log(e, this.topStart, this.leftStart, scrollTop);
            this.renderer.setElementStyle(this.el.nativeElement, 'opacity', '0.5');
            this.renderer.setElementStyle(this.el.nativeElement, 'cursor', 'move');
        }
    };
    DragDropDirective.prototype.onMouseUp = function (e) {
        if (this.sizeWidth) {
            this.clickSizeWidth = false;
            console.log("end width");
        }
        else if (this.sizeHeight) {
            this.clickSizeHeight = false;
            console.log("end height");
        }
        else {
            this.click = false;
            console.log("end click");
            this.renderer.setElementStyle(this.el.nativeElement, 'opacity', '1');
            this.renderer.setElementStyle(this.el.nativeElement, 'cursor', 'auto');
        }
    };
    DragDropDirective.prototype.setSize = function (x, size) {
        console.log(x, size);
        this.renderer.setElementStyle(this.el.nativeElement, size, x + 'px');
    };
    DragDropDirective.prototype.setLocation = function (x, y) {
        var scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        this.renderer.setElementStyle(this.el.nativeElement, 'top', (y + scrollTop) - this.topStart + 'px');
        this.renderer.setElementStyle(this.el.nativeElement, 'left', x - this.leftStart + 'px');
    };
    return DragDropDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DragDropDirective.prototype, "onMouseMove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DragDropDirective.prototype, "onMouveLeave", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DragDropDirective.prototype, "onMouseDown", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DragDropDirective.prototype, "onMouseUp", null);
DragDropDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[drag-drop]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], DragDropDirective);

var _a, _b;
//# sourceMappingURL=drag-drop.directive.js.map

/***/ }),

/***/ "../../../../../src/app/general-info/general-information.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".containerGeneralInfo{\n  background-color: white;\n  margin-left: 3px;\n  width: 78vw;\n  padding-left: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.titleBlue{\n  color: rgb(71, 139, 202);\n  font-size: 140%;\n}\n\n.titleBlack{\n  color: black;\n  font-size: 140%;\n}\n\n.unrollMenu{\n  margin-right: 2vw;\n  margin-top: 1vh;\n  float: right;\n  font-size: 15px;\n}\n\n.borderSeparate{\n  border-bottom: 1px solid black;\n  width: 67vw;\n  margin-top: 7px;\n}\n\n.containerInfo{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-top: 7px;\n}\n\n.subtitleBlue{\n  color: rgb(71, 139, 202);\n}\n\n.hide{\n  width: 10px;\n  color: white;\n}\n\n.containerGeneral{\n  width: 33%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  text-align: right;\n  padding-right: 90px;\n}\n\n.containerDetail{\n  width: 33%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-right: 40px;\n}\n\n.textAreaDetail{\n  width: 100%;\n  height: 150px;\n}\n\n.containerPerson{\n  width: 33%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.imgPerson{\n  border: 1px solid rgb(71, 139, 202);\n  border-radius: 100%;\n  width: 100px;\n}\n\n.hqChampion{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.fieldChampion{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-left: 20px;\n}\n\n.pencilEdit{\n  width: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/general-info/general-information.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"containerGeneralInfo\">\n  <div>\n    <span *ngIf=\"displayGeneralInfo\" class=\"titleBlue\">General Information</span>\n    <span *ngIf=\"!displayGeneralInfo\" class=\"titleBlack\">General Information</span>\n    <i (click)=\"displayGeneralInfo = !displayGeneralInfo\" class=\"fa fa-caret-down unrollMenu\" aria-hidden=\"true\"></i>\n  </div>\n  <div *ngIf=\"displayGeneralInfo\" class=\"borderSeparate\"></div>\n  <div *ngIf=\"displayGeneralInfo\" class=\"containerInfo\">\n    <div class=\"containerGeneral\">\n      <div class=\"subtitleBlue\">Project Manager: <span class=\"hide\">c</span></div>\n      <div *ngIf=\"!changeValue[0]\">\n        {{project.projectManager}}\n        <img (click)=\"changeValue[0] = true\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n      </div>\n      <div *ngIf=\"changeValue[0]\">\n        <input type=\"text\" [(ngModel)]=\"project.projectManager\" (keypress)=\"commitEnter($event.key, 'projectManager', project.projectManager, 0)\">\n        <img (click)=\"commit('projectManager', project.projectManager, 0)\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n      </div>\n      <div class=\"subtitleBlue\">Start date: <span class=\"hide\">c</span></div>\n      <div *ngIf=\"!changeValue[1]\">\n        {{project.dateStart | date}}\n        <img (click)=\"changeValue[1] = true\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n      </div>\n      <div *ngIf=\"changeValue[1]\">\n        <input type=\"date\" [ngModel]=\"project.dateStart | date:'yyyy-MM-dd'\" (ngModelChange)=\"project.dateStart = $event\"\n               (keypress)=\"commitEnter($event.key, 'dateStart', project.dateStart, 1)\">\n        <img (click)=\"commit('dateStart', project.dateStart, 1)\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n      </div>\n      <div class=\"subtitleBlue\">End date: <span class=\"hide\">c</span></div>\n      <div *ngIf=\"!changeValue[2]\">\n        {{project.dateEnd | date}}\n        <img (click)=\"changeValue[2] = true\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n      </div>\n      <div *ngIf=\"changeValue[2]\">\n        <input type=\"date\" [ngModel]=\"project.dateEnd | date:'yyyy-MM-dd'\" (ngModelChange)=\"project.dateEnd = $event\"\n               (keypress)=\"commitEnter($event.key, 'dateEnd', project.dateEnd, 2)\">\n        <img (click)=\"commit('dateEnd', project.dateEnd, 2)\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n      </div>\n      <div class=\"subtitleBlue\">Contract: <span class=\"hide\">c</span></div>\n      <div *ngIf=\"!changeValue[3]\">\n        {{project.contract}}\n        <img (click)=\"changeValue[3] = true\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n      </div>\n      <div *ngIf=\"changeValue[3]\">\n        <input type=\"text\" [(ngModel)]=\"project.contract\" (keypress)=\"commitEnter($event.key, 'contract', project.contract, 3)\">\n        <img (click)=\"commit('contract', project.contract, 3)\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n      </div>\n    </div>\n    <div class=\"containerDetail\">\n      <div class=\"subtitleBlue\" *ngIf=\"!changeValue[4]\">\n        Details:\n        <img (click)=\"changeValue[4] = true\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n      </div>\n      <div class=\"textDetail\" *ngIf=\"!changeValue[4]\">\n        {{project.details}}\n      </div>\n      <div class=\"subtitleBlue\" *ngIf=\"changeValue[4]\">\n        Details:\n        <img (click)=\"commit('details', project.details, 4)\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n      </div>\n      <div class=\"textDetail\" *ngIf=\"changeValue[4]\">\n        <textarea class=\"textAreaDetail\" [(ngModel)]=\"project.details\"\n                  (keypress)=\"commitEnter($event.key, 'details', project.details, 4)\">\n        </textarea>\n      </div>\n    </div>\n    <div class=\"containerPerson\">\n      <div class=\"hqChampion\">\n        <img class=\"imgPerson\" src=\"{{project.hqChampionPicture}}\">\n        <img (click)=\"openFileLoader('fileLoaderHq')\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n        <div class=\"subtitleBlue\"><span class=\"hide\">c</span> HQ champion:</div>\n        <div *ngIf=\"!changeValue[5]\">\n          <img (click)=\"changeValue[5] = true\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n          {{project.hqChampionName}}\n        </div>\n        <div *ngIf=\"changeValue[5]\">\n          <img (click)=\"commit('hqChampionName', project.hqChampionName, 5)\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n          <input type=\"text\" [(ngModel)]=\"project.hqChampionName\"\n                 (keypress)=\"commitEnter($event.key, 'hqChampionName', project.hqChampionName, 5)\">\n        </div>\n        <div class=\"subtitleBlue\"><span class=\"hide\">c</span> Last contact:</div>\n        <div *ngIf=\"!changeValue[6]\">\n          <img (click)=\"changeValue[6] = true\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n          {{project.hqChampionLastDate | date}}\n        </div>\n        <div *ngIf=\"changeValue[6]\">\n          <img (click)=\"commit('hqChampionLastDate', project.hqChampionLastDate, 6)\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n          <input type=\"date\" [ngModel]=\"project.hqChampionLastDate\" (ngModelChange)=\"project.hqChampionLastDate = $event\"\n                 (keypress)=\"commitEnter($event.key, 'hqChampionLastDate', project.hqChampionLastDate, 6)\">\n        </div>\n      </div>\n      <div class=\"fieldChampion\">\n        <img class=\"imgPerson\" src=\"{{project.fieldChampionPicture}}\">\n        <img (click)=\"openFileLoader('fileLoaderField')\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n        <div class=\"subtitleBlue\"><span class=\"hide\">c</span> Field champion:</div>\n        <div *ngIf=\"!changeValue[7]\">\n          <img (click)=\"changeValue[7] = true\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n          {{project.fieldChampionName}}\n        </div>\n        <div *ngIf=\"changeValue[7]\">\n          <img (click)=\"commit('fieldChampionName', project.fieldChampionName, 7)\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n          <input type=\"text\" [(ngModel)]=\"project.fieldChampionName\"\n                 (keypress)=\"commitEnter($event.key, 'fieldChampionName', project.fieldChampionName, 7)\">\n        </div>\n        <div class=\"subtitleBlue\"><span class=\"hide\">c</span> Last contact:</div>\n        <div *ngIf=\"!changeValue[8]\">\n          <img (click)=\"changeValue[8] = true\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n          {{project.fieldChampionLastDate | date}}\n        </div>\n        <div *ngIf=\"changeValue[8]\">\n          <img (click)=\"commit('hqChampionLastDate', project.fieldChampionLastDate, 8)\" class=\"pencilEdit\" src=\"../../assets/pencil.png\">\n          <input type=\"date\" [ngModel]=\"project.fieldChampionLastDate\" (ngModelChange)=\"project.fieldChampionLastDate = $event\"\n                 (keypress)=\"commitEnter($event.key, 'fieldChampionLastDate', project.fieldChampionLastDate, 8)\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf='load'>\n  <ngl-spinner size=\"large\" type=\"brand\" container=\"true\"></ngl-spinner>\n</div>\n<input type=\"file\" id=\"fileLoaderHq\" style=\"display: none\" (change)=\"editPicture($event, 'hqChampionPicture')\">\n<input type=\"file\" id=\"fileLoaderField\" style=\"display: none\" (change)=\"editPicture($event, 'fieldChampionPicture')\">\n"

/***/ }),

/***/ "../../../../../src/app/general-info/general-information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_project__ = __webpack_require__("../../../../../src/app/class/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_utils__ = __webpack_require__("../../../../../src/app/class/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage__ = __webpack_require__("../../../../firebase/storage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralInformationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by yoann on 18/07/2017.
 */






var GeneralInformationComponent = (function () {
    function GeneralInformationComponent(database) {
        this.database = database;
        this.displayGeneralInfo = true;
        this.load = false;
        this.numberField = 9;
    }
    GeneralInformationComponent.prototype.ngOnChanges = function () {
        this.changeValue = [];
        for (var i = 0; i < this.numberField; i++) {
            this.changeValue[i] = false;
        }
    };
    GeneralInformationComponent.prototype.commit = function (field, val, index) {
        this.changeValue[index] = false;
        this.database.object('/project-informations/' + this.project.id + '/' + field)
            .set(val);
    };
    GeneralInformationComponent.prototype.commitEnter = function (key, field, val, index) {
        if (key === 'Enter') {
            this.commit(field, val, index);
        }
    };
    GeneralInformationComponent.prototype.openFileLoader = function (id) {
        $('#' + id).click();
    };
    GeneralInformationComponent.prototype.editPicture = function (e, field) {
        var _this = this;
        console.log(e);
        console.log(field);
        var file = e.target.files[0];
        var randomName = __WEBPACK_IMPORTED_MODULE_3__class_utils__["a" /* Utils */].generateRandomString();
        this.project[field] = randomName;
        this.load = true;
        __WEBPACK_IMPORTED_MODULE_4_firebase_app__["storage"]().ref('profilePictureChampionDashboard/' + randomName).put(file).then(function () {
            _this.database.object('project-informations/' + _this.project.id + '/' + field)
                .set(randomName);
            __WEBPACK_IMPORTED_MODULE_4_firebase_app__["storage"]().ref('profilePictureChampionDashboard/' + _this.project[field]).getDownloadURL()
                .then(function (data) {
                _this.project[field] = data;
                _this.load = false;
            });
        });
    };
    return GeneralInformationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__class_project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__class_project__["a" /* Project */]) === "function" && _a || Object)
], GeneralInformationComponent.prototype, "project", void 0);
GeneralInformationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'general-info',
        template: __webpack_require__("../../../../../src/app/general-info/general-information.component.html"),
        styles: [__webpack_require__("../../../../../src/app/general-info/general-information.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], GeneralInformationComponent);

var _a, _b;
//# sourceMappingURL=general-information.component.js.map

/***/ }),

/***/ "../../../../../src/app/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title{\n\tcolor: white;\n\ttext-align: center;\n\tpadding-top: 25vh;\n\tfont-size: 500%;\n\tmargin-top: 0px;\n}\n\n.background{\n\tbackground-image: url(" + __webpack_require__("../../../../../src/assets/background.jpg") + ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100vw 85vh;\n\topacity: 0.5;\n\theight: 85vh;\n\twidth: 100vw;\n\ttext-align: center;\n}\n\n.bluebar{\n\tbackground-color: rgb(128, 164, 212);\n\twidth: 100vw;\n\theight: 15vh;\n\tcolor: white;\n\tfont-size: 250%;\n\ttext-align: center;\t\n}\n\n.connexionButton{\n\tmargin-top: 20px;\t\n\tborder-radius: 15px;\n\tbackground-color: white;\n\tcolor: black;\n\theight: 10vh;\n\tfont-size: 150%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <h1 class=\"title\">Customized Dashboard</h1>\n  <button (click)=\"login()\" class=\"connexionButton\">Sign in with Google</button>\n</div>\n<div class=\"bluebar\">\n  Create your own charts by choosing your project and criteria\n</div>\n<img src=\"{{img}}\">\n<div *ngIf='load'>\n\t<ngl-spinner size=\"large\" type=\"brand\" container=\"true\"></ngl-spinner>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(afAuth, router, http) {
        this.afAuth = afAuth;
        this.router = router;
        this.http = http;
        this.load = false;
        this.url = 'https://simprints-dev.appspot.com/key';
        this.apiKey = '708ba617e56449ec8163e820c390a91d0046c5f9dd344ae7ac9fbb9b0ae80d8c';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        // firebase.storage().ref('FullSizeRenderpg').getDownloadURL().then(data => {
        //   console.log(data);
        //   this.img = data;
        // }).catch(() => {
        // });
        this.load = true;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider())
            .then(function () {
            _this.load = false;
            return _this.router.navigate(['/dashboard']);
            // this.checkUser();
        });
    };
    LoginComponent.prototype.checkUser = function () {
        if (this.authorizeUser()) {
            this.getToken();
        }
        else {
            alert('bad user');
        }
    };
    LoginComponent.prototype.authorizeUser = function () {
        var regex = new RegExp("^.+@simprints.com");
        return regex.test(this.afAuth.auth.currentUser.email);
    };
    LoginComponent.prototype.getToken = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        this.http.post(this.url, JSON.stringify({ apiKey: this.apiKey }), options).map(function (response) {
            return response.json();
        }).subscribe(function (data) {
            _this.token = data.token;
            _this.afAuth.auth.signInWithCustomToken(data.token).then(function () {
                _this.load = false;
                return _this.router.navigate(['/dashboard']);
            });
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* Http */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".containerMap{\n  position: absolute;\n  left: 2vw;\n  top: 35vh;\n  padding-bottom: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-top: 15px;\n}\n\n.filterData{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: 100%;\n}\n\n.imgClock{\n  width: 20px;\n  height: 20px;\n  margin-top: 2px;\n}\n\n.textFilter{\n  margin-top: 3px;\n  margin-left: 5px;\n}\n\n.dateInput{\n  margin-left: 5px;\n  height: 28px;\n  width: 130px;\n}\n\n.buttonFilter{\n  height: 28px;\n  margin-left: 5px;\n  background-image: linear-gradient(to right, rgb(247, 148, 32), rgb(227, 29, 137));\n  border: none;\n  width: 80px;\n}\n\n.containerMapInfo{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-top: 10px;\n}\n\n.map{\n\twidth: 60vw;\n\theight: 40vh;\n  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.info{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: white;\n  margin-left: 10px;\n  width: 100%;\n  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.title{\n  color: rgb(71, 139, 202);\n  font-size: 130%;\n  height: 5vh;\n  margin-left: 5px;\n}\n\n.borderSeparate{\n  background-color: black;\n  height: 1px;\n  width: 100%;\n}\n\n.listData{\n  padding-left: 5px;\n  height: 35vh;\n  overflow-y: scroll;\n}\n\n.data{\n  margin-bottom: 5px;\n  margin-right: 10px;\n  height: 38px;\n}\n\n.buttonReplay{\n  background-color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 15vh;\n  margin-top: 10px;\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.element{\n  width: 20%;\n  text-align: center;\n}\n\n.line{\n  background-color: black;\n  height: 1px;\n}\n\n.number{\n  font-size: 300%;\n  color: rgb(129, 130, 132);\n  cursor: default;\n}\n\n.lastEvent{\n  color: rgb(129, 130, 132);\n}\n\n.triangle{\n  position: relative;\n  top: -11px;\n  color: rgb(71, 139, 202);\n  font-size: 17px;\n}\n\n.lineClick{\n  background-color: black;\n  height: 1px;\n  position: relative;\n  top: -19px;\n}\n\n.numberClick{\n  font-size: 300%;\n  color: rgb(71, 139, 202);\n  position: relative;\n  top: -19px;\n}\n\n.lastEventClick{\n  color: rgb(71, 139, 202);\n  position: relative;\n  top: -19px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='project' class=\"containerMap\">\n  <div class=\"filterData\">\n    <img src=\"../../assets/clock.png\" class=\"imgClock\"><span class=\"textFilter\">Time period:</span>\n    <input type=\"date\" class=\"dateInput\" [(ngModel)]=\"dateStart\"><input type=\"date\" class=\"dateInput\" [(ngModel)]=\"dateEnd\">\n    <span class=\"textFilter\">User filter:</span>\n    <multiple-select [listChecked]=\"chooseUser\" [list]=\"project.listUsers\"></multiple-select>\n    <span class=\"textFilter\">Activity filter:</span>\n    <multiple-select [listChecked]=\"chooseActivity\" [list]=\"listActivity\"></multiple-select>\n    <button (click)=\"applyFilter()\" class=\"buttonFilter\">Submit</button>\n  </div>\n  <div class=\"containerMapInfo\">\n    <agm-map class=\"map\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n      <agm-marker *ngFor=\"let session of sessionMap\"\n                  [latitude]=\"session.latitude\"\n                  [longitude]=\"session.longitude\"\n                  [iconUrl]=\"session.iconUrl\">\n      </agm-marker>\n    </agm-map>\n    <div class=\"info\">\n      <div class=\"title\">\n        Activity\n      </div>\n      <div class=\"borderSeparate\"></div>\n      <div class=\"listData\" #listData (scroll)=\"loadNewValue($event)\">\n        <div *ngFor=\"let session of sessions\" class=\"data\">\n          <div>{{session['userId']}}</div>\n          <div>\n            {{session['callout']}}\n            {{session['serverSessionStartTime'] | date}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"buttonReplay\">\n    <div class=\"element\" *ngIf=\"replayActif[0]\">\n        <i class=\"fa fa-caret-up triangle\" aria-hidden=\"true\"></i>\n      <div class=\"lineClick\">\n\n      </div>\n      <div class=\"numberClick\">\n        10\n      </div>\n      <div class=\"lastEventClick\">\n        Last events\n      </div>\n    </div>\n    <div class=\"element\" *ngIf=\"!replayActif[0]\">\n      <div class=\"line\">\n\n      </div>\n      <div class=\"number\" (click)=\"launchReplay(10, 0)\">\n        10\n      </div>\n      <div class=\"lastEvent\">\n        Last events\n      </div>\n    </div>\n    <div class=\"element\" *ngIf=\"replayActif[1]\">\n      <i class=\"fa fa-caret-up triangle\" aria-hidden=\"true\"></i>\n      <div class=\"lineClick\">\n\n      </div>\n      <div class=\"numberClick\">\n        25\n      </div>\n      <div class=\"lastEventClick\">\n        Last events\n      </div>\n    </div>\n    <div class=\"element\" *ngIf=\"!replayActif[1]\">\n      <div class=\"line\">\n\n      </div>\n      <div class=\"number\" (click)=\"launchReplay(25, 1)\">\n        25\n      </div>\n      <div class=\"lastEvent\">\n        Last events\n      </div>\n    </div>\n    <div class=\"element\" *ngIf=\"replayActif[2]\">\n      <i class=\"fa fa-caret-up triangle\" aria-hidden=\"true\"></i>\n      <div class=\"lineClick\">\n\n      </div>\n      <div class=\"numberClick\">\n        50\n      </div>\n      <div class=\"lastEventClick\">\n        Last events\n      </div>\n    </div>\n    <div class=\"element\" *ngIf=\"!replayActif[2]\">\n      <div class=\"line\">\n\n      </div>\n      <div class=\"number\" (click)=\"launchReplay(50, 2)\">\n        50\n      </div>\n      <div class=\"lastEvent\">\n        Last events\n      </div>\n    </div>\n    <div class=\"element\" *ngIf=\"replayActif[3]\">\n      <i class=\"fa fa-caret-up triangle\" aria-hidden=\"true\"></i>\n      <div class=\"lineClick\">\n\n      </div>\n      <div class=\"numberClick\">\n        75\n      </div>\n      <div class=\"lastEventClick\">\n        Last events\n      </div>\n    </div>\n    <div class=\"element\" *ngIf=\"!replayActif[3]\">\n      <div class=\"line\">\n\n      </div>\n      <div class=\"number\" (click)=\"launchReplay(75, 3)\">\n        75\n      </div>\n      <div class=\"lastEvent\">\n        Last events\n      </div>\n    </div>\n    <div class=\"element\" *ngIf=\"replayActif[4]\">\n      <i class=\"fa fa-caret-up triangle\" aria-hidden=\"true\"></i>\n      <div class=\"lineClick\">\n\n      </div>\n      <div class=\"numberClick\">\n        100\n      </div>\n      <div class=\"lastEventClick\">\n        Last events\n      </div>\n    </div>\n    <div class=\"element\" *ngIf=\"!replayActif[4]\">\n      <div class=\"line\">\n\n      </div>\n      <div class=\"number\" (click)=\"launchReplay(100, 4)\">\n        100\n      </div>\n      <div class=\"lastEvent\">\n        Last events\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf='loadVal'>\n  <ngl-spinner size=\"large\" type=\"brand\" container=\"true\"></ngl-spinner>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_project__ = __webpack_require__("../../../../../src/app/class/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_utils__ = __webpack_require__("../../../../../src/app/class/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapComponent = (function () {
    function MapComponent(database) {
        this.database = database;
        this.nbValByRequest = 200;
        this.nbValToDisplay = 100;
        this.finish = false;
        this.loadVal = false;
        this.heightChildren = 38 + 5; //+5 margin-bottom
    }
    MapComponent.prototype.ngOnChanges = function () {
        this.sessions = [];
        this.sessionMap = [];
        this.listActivity = ['Identifications', 'Enrollments', 'Verifications'];
        this.chooseActivity = [true, true, true];
        this.chooseUser = [];
        for (var i = 0; i < this.project.listUsers.length; i++) {
            this.chooseUser.push(true);
        }
        this.replayActif = [false, false, false, false, false];
        this.dateStart = __WEBPACK_IMPORTED_MODULE_4__class_utils__["a" /* Utils */].transformTimestampToDate(Date.now() - (7 * 24 * 3600 * 1000));
        this.dateEnd = __WEBPACK_IMPORTED_MODULE_4__class_utils__["a" /* Utils */].transformTimestampToDate(Date.now());
        this.loadVal = true;
        this.getData(__WEBPACK_IMPORTED_MODULE_4__class_utils__["a" /* Utils */].transformDateToTimestamp(this.dateEnd) + (24 * 3600 * 1000), __WEBPACK_IMPORTED_MODULE_4__class_utils__["a" /* Utils */].transformDateToTimestamp(this.dateStart), this.project.listUsers, __WEBPACK_IMPORTED_MODULE_4__class_utils__["a" /* Utils */].convertActivity(this.chooseActivity), true, 0, false, true);
    };
    MapComponent.prototype.getData = function (dateEnd, dateStart, users, activity, reset, nbPush, skipLast, changeValue) {
        var _this = this;
        var nb = this.nbValByRequest;
        if (skipLast)
            nb++;
        if (reset)
            this.sessions = [];
        this.database.list('/project-sessions/' + this.project.id, {
            query: {
                orderByChild: 'serverSessionStartTime',
                endAt: dateEnd,
                startAt: dateStart,
                limitToLast: nb
            }
        }).subscribe(function (data) {
            var tmpSession = [];
            var nbGet = 0;
            _this.lastSession = {};
            var getFirst = false;
            data.forEach(function (session) {
                nbGet++;
                if (!getFirst) {
                    _this.lastSession = session;
                    getFirst = true;
                }
                if (activity.includes(session.callout) && (users.includes(session.userId) || users.includes('ID-' + session.userId)) &&
                    !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_util__["isUndefined"])(session['latitude']) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_util__["isUndefined"])(session['longitude'])) {
                    if (nbGet !== nb || !skipLast) {
                        nbPush++;
                        session['iconUrl'] = _this.putIconUrl(session['callout']);
                        session['callout'] = _this.reduceActivity(session['callout']);
                        session['latitude'] = parseInt(session['latitude']);
                        session['longitude'] = parseInt(session['longitude']);
                        tmpSession.push(session);
                    }
                }
            });
            tmpSession.reverse();
            tmpSession.forEach(function (it) { return _this.sessions.push(it); });
            console.log("ok");
            if (nbGet < nb) {
                _this.changeSessionMap(0, Math.round(_this.listData.nativeElement.clientHeight / _this.heightChildren));
                _this.finish = true;
                _this.loadVal = false;
            }
            else {
                if (nbPush < _this.nbValToDisplay) {
                    console.log("ok1");
                    _this.getData(_this.lastSession['serverSessionStartTime'], dateStart, users, activity, false, nbPush, true, changeValue);
                }
                else {
                    if (changeValue) {
                        _this.changeSessionMap(0, Math.round(_this.listData.nativeElement.clientHeight / _this.heightChildren));
                    }
                    _this.loadVal = false;
                }
            }
        });
    };
    MapComponent.prototype.applyFilter = function () {
        this.finish = false;
        var users = [];
        for (var i = 0; i < this.chooseUser.length; i++)
            if (this.chooseUser[i])
                users.push(this.project.listUsers[i]);
        this.loadVal = true;
        this.getData(__WEBPACK_IMPORTED_MODULE_4__class_utils__["a" /* Utils */].transformDateToTimestamp(this.dateEnd) + (24 * 3600 * 1000), __WEBPACK_IMPORTED_MODULE_4__class_utils__["a" /* Utils */].transformDateToTimestamp(this.dateStart), users, __WEBPACK_IMPORTED_MODULE_4__class_utils__["a" /* Utils */].convertActivity(this.chooseActivity), true, 0, false, true);
    };
    MapComponent.prototype.loadNewValue = function (e) {
        if (!this.isReplayLaunch()) {
            var heightParent = e.target.clientHeight;
            var nbDisplay = Math.round(heightParent / this.heightChildren);
            var scrollTop = e.target.scrollTop;
            var nbScroll = Math.round(scrollTop / this.heightChildren);
            this.changeSessionMap(nbScroll, nbScroll + nbDisplay);
            if (nbScroll + nbDisplay >= this.sessions.length && !this.finish && !this.loadVal) {
                this.loadVal = true;
                var users = [];
                for (var i = 0; i < this.chooseUser.length; i++)
                    if (this.chooseUser[i])
                        users.push(this.project.listUsers[i]);
                this.getData(this.lastSession['serverSessionStartTime'], __WEBPACK_IMPORTED_MODULE_4__class_utils__["a" /* Utils */].transformDateToTimestamp(this.dateStart), users, __WEBPACK_IMPORTED_MODULE_4__class_utils__["a" /* Utils */].convertActivity(this.chooseActivity), false, 0, true, false);
            }
        }
    };
    MapComponent.prototype.changeSessionMap = function (start, end) {
        this.sessionMap = [];
        for (var i = start; i < end; i++)
            this.sessionMap.push(this.sessions[i]);
        this.calculateGlobalZoom();
    };
    MapComponent.prototype.launchReplay = function (nbToReplay, index) {
        var _this = this;
        if (!this.isReplayLaunch()) {
            this.replayActif[index] = true;
            var i_1 = 0;
            var n_1 = Math.min(nbToReplay, this.sessions.length);
            this.zoom = 7;
            var cpySession_1 = this.sessions;
            this.sessions = [];
            var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].timer(0, 700);
            var subscribe_1 = timer.subscribe(function (t) {
                _this.sessionMap = [];
                _this.sessions = [];
                _this.lat = cpySession_1[i_1]['latitude'];
                _this.lng = cpySession_1[i_1]['longitude'];
                _this.sessionMap.push(cpySession_1[i_1]);
                _this.sessions.push(cpySession_1[i_1]);
                if (t == n_1 - 1) {
                    subscribe_1.unsubscribe();
                    _this.sessions = cpySession_1;
                    _this.replayActif[index] = false;
                    _this.changeSessionMap(0, Math.round(_this.listData.nativeElement.clientHeight / _this.heightChildren));
                }
                i_1++;
            });
        }
    };
    MapComponent.prototype.calculateGlobalZoom = function () {
        var maxLat = -1000;
        var maxLng = -1000;
        var minLat = 1000;
        var minLng = 1000;
        for (var i = 0; i <= this.sessionMap.length; i++) {
            if (this.sessionMap[i] !== undefined) {
                if (this.sessionMap[i].latitude > maxLat)
                    maxLat = this.sessionMap[i].latitude;
                if (this.sessionMap[i].latitude < minLat)
                    minLat = this.sessionMap[i].latitude;
                if (this.sessionMap[i].longitude > maxLng)
                    maxLng = this.sessionMap[i].longitude;
                if (this.sessionMap[i].longitude < minLng)
                    minLng = this.sessionMap[i].longitude;
            }
        }
        this.lng = (minLng + maxLng) / 2;
        this.lat = (maxLat + minLat) / 2;
        var max = Math.max(Math.abs(this.lng - minLng), Math.abs(this.lng - maxLng), Math.abs(this.lat - minLat), Math.abs(this.lat - maxLat));
        this.zoom = this.calculateZoom(max);
    };
    MapComponent.prototype.calculateZoom = function (max) {
        if (max <= 0.001)
            return 15;
        else if (max <= 0.005)
            return 13;
        else if (max <= 0.02)
            return 12;
        else if (max <= 0.1)
            return 11;
        else if (max <= 0.5)
            return 7;
        else if (max <= 1)
            return 6;
        else if (max <= 2)
            return 5;
        else if (max <= 50)
            return 2;
        else
            return 1;
    };
    MapComponent.prototype.isReplayLaunch = function () {
        for (var i = 0; i < this.replayActif.length; i++) {
            if (this.replayActif[i])
                return true;
        }
        return false;
    };
    MapComponent.prototype.reduceActivity = function (activty) {
        switch (activty) {
            case 'IDENTIFY':
                return 'ID';
            case 'REGISTER':
                return 'Enroll';
            case 'VERIFY':
                return 'Verif';
        }
    };
    MapComponent.prototype.putIconUrl = function (val) {
        var directory = "../../assets/";
        switch (val) {
            case "IDENTIFY":
                return directory + "iconIdentify.png";
            case "REGISTER":
                return directory + "iconRegister.png";
            case "VERIFY":
                return directory + "iconVerify.png";
            case "UPDATE":
                return directory + "iconUpdate.png";
        }
    };
    return MapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__class_project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__class_project__["a" /* Project */]) === "function" && _a || Object)
], MapComponent.prototype, "project", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('listData'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], MapComponent.prototype, "listData", void 0);
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'map',
        template: __webpack_require__("../../../../../src/app/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map/map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _c || Object])
], MapComponent);

var _a, _b, _c;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/map_event/map-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".containerMap{\n  position: absolute;\n  left: 2vw;\n  top: 35vh;\n  padding-bottom: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.map{\n\twidth: 56vw;\n\theight: 50vh;\n}\n\n.buttonList{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n\tposition: absolute;\n\tleft: 30px;\n\ttop: 52vh;\n}\n\n.buttonEvent{\n\tmargin-left: 10px;\n}\n\n.arrowLeft{\n\tposition: absolute;\n\tleft: -20px;\n\ttop: 55vh;\n\twidth: 20px;\n\theight: 30px;\n}\n\n.arrowRight{\n\tposition: absolute;\n\tright: -20px;\n\ttop: 55vh;\n\twidth: 20px;\n\theight: 30px;\n}\n\n.containerListEvent{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1;\n\t        flex: 1;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\twidth: 20vw;\n\theight: 50vh;\n\toverflow-y: scroll;\n\tbackground-color: rgb(158, 159, 160);\n}\n\n.event{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\theight: 12vh;\n\ttext-align: center;\n\tdisplay: block;\n\tbackground-color: white;\n\tmargin: 4px;\n}\n\n.marginTopUserId{\n\tmargin-top: 15px;\n}\n\n.UPDATE{\n\tborder: 5px solid rgb(246, 139, 31);\n}\n\n.IDENTIFY{\n\tborder: 5px solid rgb(71, 139, 202);\n}\n\n.REGISTER{\n\tborder: 5px solid rgb(58, 158, 66);\n}\n\nbutton:disabled,\nbutton[disabled]{\n  border: 1px solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map_event/map-event.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='project' class=\"containerMap\">\n\t<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" class=\"map\">\n  \t\t<agm-marker *ngFor=\"let coordinate of coordinates\" [latitude]=\"coordinate.latitude\" [longitude]=\"coordinate.longitude\" [iconUrl]=\"coordinate.iconUrl\" [zIndex]=\"coordinate.zIndex\"></agm-marker>\n\t</agm-map>\n\t<div>\n\t\t<!--<img src=\"../../assets/leftArrow.png\" class=\"arrowLeft\">-->\n\t\t<div (scroll)=\"onScroll($event)\" class=\"containerListEvent\">\n\t\t\t\t<div *ngIf=\"!alreadyReplay\">\n\t\t\t\t\t<div class=\"event\" *ngFor=\"let item of allCoordinates\">\n\t\t\t\t\t\t<div class=\"card-horizontal\" (click)=\"zoomOnElement(item)\">\n\t\t\t\t\t\t\t<div class=\"card-stacked\">\n\t\t      \t\t\t\t\t<div class=\"card-content\">\n\t\t      \t\t\t\t\t\t<div [class]=\"item.callout\"></div>\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"item.userId.length > 20 || item.metadata != ''\">{{item.userId}}</p>\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"item.userId.length <= 20 && item.metadata == ''\" class=\"marginTopUserId\">{{item.userId}}</p>\n\t\t\t\t\t\t\t\t\t<p>{{item.metadata}}</p>\n\t\t\t\t\t\t\t\t\t<p>{{item.startTime | date}}</p>\n\t\t\t\t\t\t\t\t\t<p>{{item.moduleId}}</p>\n\t\t      \t\t\t\t\t</div>\n\t\t      \t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t<div *ngIf=\"alreadyReplay\" class=\"containerListEvent\">\n\t\t\t\t<div class=\"event\" *ngFor=\"let item of coordinates\">\n\t\t\t\t\t<div class=\"card-horizontal\">\n\t\t\t\t\t\t<div class=\"card-stacked\">\n\t\t  \t\t\t\t\t<div class=\"card-content\">\n\t\t  \t\t\t\t\t\t<div [class]=\"item.callout\"></div>\n\t\t\t\t\t\t\t\t<p *ngIf=\"item.userId.length > 20 || item.metadata != ''\">{{item.userId}}</p>\n\t\t\t\t\t\t\t\t<p *ngIf=\"item.userId.length <= 20 && item.metadata == ''\" class=\"marginTopUserId\">{{item.userId}}</p>\n\t\t\t\t\t\t\t\t<p>{{item.metadata}}</p>\n\t\t\t\t\t\t\t\t<p>{{item.startTime | date}}</p>\n\t\t\t\t\t\t\t\t<p>{{item.moduleId}}</p>\n\t\t  \t\t\t\t\t</div>\n\t\t      \t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div *ngIf='load'>\n\t\t\t\t<ngl-spinner size=\"large\" type=\"brand\" container=\"true\"></ngl-spinner>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"buttonList\">\n\t\t\t<div>Replay: </div>\n\t\t\t<button class=\"buttonEvent\" (click)=\"replayEvent(10)\" [disabled]=\"alreadyReplay\">Last 10 events</button>\n\t\t\t<button class=\"buttonEvent\" (click)=\"replayEvent(50)\" [disabled]=\"alreadyReplay\">Last 50 events</button>\n\t\t\t<button class=\"buttonEvent\" (click)=\"replayEvent(100)\" [disabled]=\"alreadyReplay\">Last 100 events</button>\n\t\t</div>\n\t\t<!--<img src=\"../../assets/rightArrow.png\" class=\"arrowRight\">-->\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/map_event/map-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_project__ = __webpack_require__("../../../../../src/app/class/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_session__ = __webpack_require__("../../../../../src/app/class/session.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapEventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapEventComponent = (function () {
    function MapEventComponent(database) {
        this.database = database;
        this.lat = 0;
        this.lng = 0;
        this.zoom = 8;
        this.nbValDisplay = 4;
        this.first = 0;
        this.last = this.nbValDisplay - 1;
        this.load = false;
        this.finish = false;
        this.allCoordinates = [];
        this.coordinates = [];
        this.maxZindex = 1;
        this.alreadyReplay = false;
    }
    MapEventComponent.prototype.ngOnChanges = function () {
        if (this.project !== undefined) {
            this.first = 0;
            this.last = this.nbValDisplay - 1;
            this.allCoordinates = [];
            this.coordinates = [];
            if (this.project.name === "Global")
                this.url = "/sessions";
            else {
                this.url = "/project-sessions/" + this.project.id;
            }
            this.drawMap(0);
        }
    };
    MapEventComponent.prototype.onScroll = function (e) {
        var size = e.target.clientHeight;
        var sizeOneItem = size / this.nbValDisplay;
        this.first = Math.round(e.target.scrollTop / sizeOneItem);
        this.last = this.first + this.nbValDisplay - 1;
        console.log(this.first, this.last, this.max - 1);
        this.changeValue();
        if (this.last >= this.max - 2 && !this.load && !this.finish) {
            this.load = true;
            this.loadOtherValue();
        }
    };
    MapEventComponent.prototype.drawMap = function (index) {
        var _this = this;
        this.load = true;
        this.database.list(this.url, {
            query: {
                orderByChild: 'serverSessionStartTime',
                limitToLast: 150
            }
        }).subscribe(function (data) {
            var val = [];
            var first = true;
            var newData = false;
            data.forEach(function (item) {
                var newCoord = new __WEBPACK_IMPORTED_MODULE_4__class_session__["a" /* Session */]();
                if (item.serverSessionStartTime === undefined) {
                    _this.finish = true;
                    console.log(_this.finish);
                }
                else if (item.latitude != '' && item.latitude != undefined &&
                    item.longitude != '' && item.longitude != undefined) {
                    newCoord.latitude = parseFloat(item.latitude);
                    newCoord.longitude = parseFloat(item.longitude);
                    newCoord.callout = item.callout;
                    newCoord.iconUrl += _this.putIconUrl(item.callout);
                    newCoord.startTime = item.serverSessionStartTime;
                    newCoord.metadata = item.metadata;
                    newCoord.userId = _this.putUserId(item.userId);
                    newCoord.moduleId = item.moduleId;
                    newCoord.zIndex = 1;
                    if (newData === false) {
                        _this.lat = newCoord.latitude;
                        _this.lng = newCoord.longitude;
                        newData = true;
                    }
                    val.push(newCoord);
                }
                if (first) {
                    _this.lastDate = item.serverSessionStartTime;
                    first = false;
                }
            });
            val.reverse();
            val.forEach(function (item) {
                _this.allCoordinates.push(item);
            });
            _this.max = val.length;
            if (_this.max <= _this.nbValDisplay) {
                _this.loadOtherValue();
            }
            else {
                _this.changeValue();
                _this.load = false;
            }
        });
    };
    // leftMove(): void{
    // 	if(this.first !== 0){
    // 		this.first --;
    // 		this.last --;
    // 		this.changeValue();
    // 	}
    // }
    // rightMove(): void{
    // 	if(this.load === false){
    // 		this.first ++;
    // 		this.last ++;
    // 		console.log(this.first, this.last, this.max);
    // 		if(this.last >= this.max){
    // 			this.load = true;
    // 			this.loadOtherValue();
    // 		}
    // 		else{
    // 			this.changeValue();
    // 		}
    // 	}
    // }
    MapEventComponent.prototype.zoomOnElement = function (item) {
        this.lat = item.latitude;
        this.lng = item.longitude;
        this.zoom = 16;
        this.maxZindex++;
        item.zIndex = this.maxZindex;
    };
    MapEventComponent.prototype.changeValue = function () {
        var j = 0;
        var maxLat = -1000;
        var maxLng = -1000;
        var minLat = 1000;
        var minLng = 1000;
        for (var i = this.first; i <= this.last; i++) {
            if (this.allCoordinates[i] !== undefined) {
                if (this.allCoordinates[i].latitude > maxLat)
                    maxLat = this.allCoordinates[i].latitude;
                if (this.allCoordinates[i].latitude < minLat)
                    minLat = this.allCoordinates[i].latitude;
                if (this.allCoordinates[i].longitude > maxLng)
                    maxLng = this.allCoordinates[i].longitude;
                if (this.allCoordinates[i].longitude < minLng)
                    minLng = this.allCoordinates[i].longitude;
                this.coordinates[j] = this.allCoordinates[i];
                j++;
            }
        }
        this.lng = (minLng + maxLng) / 2;
        this.lat = (maxLat + minLat) / 2;
        var max = Math.max(Math.abs(this.lng - minLng), Math.abs(this.lng - maxLng), Math.abs(this.lat - minLat), Math.abs(this.lat - maxLat));
        this.zoom = this.calculateZoom(max);
    };
    MapEventComponent.prototype.calculateZoom = function (max) {
        if (max <= 0.001)
            return 15;
        else if (max <= 0.005)
            return 13;
        else if (max <= 0.02)
            return 12;
        else if (max <= 0.1)
            return 11;
        else if (max <= 0.5)
            return 7;
        else if (max <= 1)
            return 6;
        else if (max <= 2)
            return 5;
        else if (max <= 50)
            return 2;
        else
            return 1;
    };
    MapEventComponent.prototype.loadOtherValue = function () {
        var _this = this;
        this.load = true;
        this.database.list(this.url, {
            query: {
                orderByChild: 'serverSessionStartTime',
                endAt: this.lastDate,
                limitToLast: this.nbValDisplay * 5
            },
        }).subscribe(function (data) {
            console.log(data);
            var first = true;
            var i = 0;
            var val = [];
            data.forEach(function (item) {
                var newCoord = new __WEBPACK_IMPORTED_MODULE_4__class_session__["a" /* Session */]();
                if (first) {
                    _this.lastDate = item.serverSessionStartTime;
                    first = false;
                }
                if (item.serverSessionStartTime === undefined) {
                    _this.finish = true;
                }
                else if (i != _this.nbValDisplay &&
                    item.latitude != '' && item.latitude != undefined &&
                    item.longitude != '' && item.longitude != undefined) {
                    newCoord.latitude = parseFloat(item.latitude);
                    newCoord.longitude = parseFloat(item.longitude);
                    newCoord.callout = item.callout;
                    newCoord.iconUrl += _this.putIconUrl(item.callout);
                    newCoord.startTime = item.serverSessionStartTime;
                    newCoord.metadata = item.metadata;
                    newCoord.userId = _this.putUserId(item.userId);
                    newCoord.moduleId = item.moduleId;
                    newCoord.zIndex = 1;
                    val.push(newCoord);
                }
                i++;
            });
            if (val.length == 0 && !_this.finish) {
                _this.loadOtherValue();
            }
            else {
                val.reverse();
                val.forEach(function (item) {
                    _this.allCoordinates.push(item);
                });
                _this.max += val.length;
                _this.changeValue();
                _this.load = false;
            }
        });
    };
    MapEventComponent.prototype.putIconUrl = function (val) {
        switch (val) {
            case "IDENTIFY":
                return "iconIdentify.png";
            case "REGISTER":
                return "iconRegister.png";
            case "VERIFY":
                return "iconVerify.png";
            case "UPDATE":
                return "iconUpdate.png";
        }
    };
    MapEventComponent.prototype.putUserId = function (val) {
        if (val.length > 20) {
            return val.substring(0, 20) + " " + val.substring(20);
        }
        else
            return val;
    };
    MapEventComponent.prototype.calculateGlobalZoom = function () {
        var maxLat = -1000;
        var maxLng = -1000;
        var minLat = 1000;
        var minLng = 1000;
        for (var i = 0; i <= this.coordinates.length; i++) {
            if (this.coordinates[i] !== undefined) {
                if (this.coordinates[i].latitude > maxLat)
                    maxLat = this.coordinates[i].latitude;
                if (this.coordinates[i].latitude < minLat)
                    minLat = this.coordinates[i].latitude;
                if (this.coordinates[i].longitude > maxLng)
                    maxLng = this.coordinates[i].longitude;
                if (this.coordinates[i].longitude < minLng)
                    minLng = this.coordinates[i].longitude;
            }
        }
        this.lng = (minLng + maxLng) / 2;
        this.lat = (maxLat + minLat) / 2;
        var max = Math.max(Math.abs(this.lng - minLng), Math.abs(this.lng - maxLng), Math.abs(this.lat - minLat), Math.abs(this.lat - maxLat));
        this.zoom = this.calculateZoom(max);
    };
    MapEventComponent.prototype.replayEvent = function (nb) {
        var _this = this;
        console.log(this.allCoordinates.length, this.finish);
        while (this.allCoordinates.length < nb && this.finish != true) {
            if (!this.load)
                this.loadOtherValue();
        }
        this.coordinates.length = 1;
        this.alreadyReplay = true;
        var n = Math.min(nb, this.allCoordinates.length);
        var i = 0;
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].timer(0, 700);
        var subscribe = timer.subscribe(function (t) {
            _this.coordinates.push(_this.allCoordinates[i]);
            _this.calculateGlobalZoom();
            if (t == n - 1) {
                subscribe.unsubscribe();
                _this.coordinates.length = _this.nbValDisplay;
                _this.alreadyReplay = false;
                _this.first = n - _this.nbValDisplay;
                _this.last = _this.first + _this.nbValDisplay - 1;
                _this.changeValue();
            }
            i++;
        });
    };
    return MapEventComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__class_project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__class_project__["a" /* Project */]) === "function" && _a || Object)
], MapEventComponent.prototype, "project", void 0);
MapEventComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'map-event',
        template: __webpack_require__("../../../../../src/app/map_event/map-event.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map_event/map-event.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], MapEventComponent);

var _a, _b;
//# sourceMappingURL=map-event.component.js.map

/***/ }),

/***/ "../../../../../src/app/multiple-select/multiple-select.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".titleButton{\n  border: 1px solid rgb(88, 88, 90);\n  height: 28px;\n  width: 120px;\n  margin-left: 5px;\n  color: rgb(88, 88, 90);\n  background-color: white;\n}\n\n.sizeArrow{\n  margin-right: 4px;\n  margin-top: 8px;\n  float: right;\n  font-size: 12px;\n}\n\n.valueDisplay{\n  border: 1px solid rgb(88, 88, 90);\n  margin-left: 5px;\n  height: 100px;\n  overflow-y: scroll;\n  padding-left: 5px;\n  background-color: white;\n  position: absolute;\n  width: 120px;\n  z-index: 10;\n}\n\n.lineChecked{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.iconCheck{\n  position: relative;\n  top: -3px;\n}\n\n.checked{\n  font-size: 12px;\n  border: 1px solid grey;\n  width: 12px;\n  height: 12px;\n  margin-top: 3px;\n  margin-left: 3px;\n  margin-right: 3px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/multiple-select/multiple-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"displayVal = !displayVal\" class=\"titleButton\">\n  <i class=\"fa fa-caret-down sizeArrow\" aria-hidden=\"true\"></i>\n</div>\n<div *ngIf=\"displayVal\" class=\"valueDisplay\">\n  <div *ngIf=\"!choose\">\n    <div class=\"lineChecked\" (click)=\"checkAll()\">\n      <div class=\"checked\">\n        <i *ngIf=\"checkAllVal === true\" class=\"fa fa-check iconCheck\"></i>\n      </div>\n      <span>All</span>\n    </div>\n    <div *ngFor='let item of list; let i = index'>\n      <div class=\"lineChecked\" (click)=\"checked(i)\">\n        <div class=\"checked\">\n          <i *ngIf=\"listChecked[i] === true\" class=\"fa fa-check iconCheck\"></i>\n        </div>\n        <span>{{item}}</span>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"choose\">\n    <div class=\"lineChecked\" (click)=\"changeChoose('All')\">\n      <div class=\"checked\">\n        <i *ngIf=\"choose[0] === 'All'\" class=\"fa fa-check iconCheck\"></i>\n      </div>\n      <span>All</span>\n    </div>\n    <div *ngFor='let item of list; let i = index'>\n      <div class=\"lineChecked\" (click)=\"changeChoose(list[i])\">\n        <div class=\"checked\">\n          <i *ngIf=\"choose[0] === list[i]\" class=\"fa fa-check iconCheck\"></i>\n        </div>\n        <span>{{item}}</span>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/multiple-select/multiple-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleSelectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by yoann on 10/07/2017.
 */


var MultipleSelectComponent = (function () {
    function MultipleSelectComponent() {
        this.displayVal = false;
        this.checkAllVal = false;
    }
    MultipleSelectComponent.prototype.ngOnInit = function () {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_util__["isUndefined"])(this.choose)) {
            this.checkAllVal = this.listChecked[0];
            for (var i = 1; i < this.listChecked.length; i++) {
                this.checkAllVal = this.checkAllVal && this.listChecked[i];
            }
        }
    };
    MultipleSelectComponent.prototype.checked = function (index) {
        this.listChecked[index] = !this.listChecked[index];
        this.checkAllVal = this.listChecked[0];
        for (var i = 1; i < this.listChecked.length; i++) {
            this.checkAllVal = this.checkAllVal && this.listChecked[i];
        }
    };
    MultipleSelectComponent.prototype.checkAll = function () {
        this.checkAllVal = !this.checkAllVal;
        for (var i = 0; i < this.listChecked.length; i++) {
            this.listChecked[i] = this.checkAllVal;
        }
    };
    MultipleSelectComponent.prototype.changeChoose = function (val) {
        this.choose[0] = val;
        console.log(this.choose);
    };
    return MultipleSelectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MultipleSelectComponent.prototype, "list", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MultipleSelectComponent.prototype, "choose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MultipleSelectComponent.prototype, "listChecked", void 0);
MultipleSelectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'multiple-select',
        template: __webpack_require__("../../../../../src/app/multiple-select/multiple-select.component.html"),
        styles: [__webpack_require__("../../../../../src/app/multiple-select/multiple-select.component.css")]
    })
], MultipleSelectComponent);

//# sourceMappingURL=multiple-select.component.js.map

/***/ }),

/***/ "../../../../../src/app/project-error/project-error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".containerProjectImpact{\n  background-color: white;\n  margin-left: 3px;\n  width: 78vw;\n  padding-left: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin-top: 15px;\n  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.titleBlue{\n  color: rgb(71, 139, 202);\n  font-size: 140%;\n}\n\n.titleBlack{\n  color: black;\n  font-size: 140%;\n}\n\n.unrollMenu{\n  margin-right: 2vw;\n  margin-top: 1vh;\n  float: right;\n  font-size: 15px;\n}\n\n.borderSeparate{\n  border-bottom: 1px solid black;\n  width: 67vw;\n  margin-top: 7px;\n}\n\n.containerInfo{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: 7px;\n  padding-left: 5px;\n}\n\n.filterData{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.imgClock{\n  width: 20px;\n  height: 20px;\n  margin-top: 2px;\n}\n\n.textFilter{\n  margin-top: 3px;\n  margin-left: 5px;\n}\n\n.dateInput{\n  margin-left: 5px;\n  height: 28px;\n  width: 130px;\n}\n\n.buttonFilter{\n  height: 28px;\n  margin-left: 5px;\n  background-image: linear-gradient(to right, rgb(247, 148, 32), rgb(227, 29, 137));\n  border: none;\n  width: 80px;\n}\n\n.displayValue{\n  margin-top: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  width: 95%;\n}\n\n.blueError{\n  color: rgb(39, 170, 225);\n  padding-top: 9px;\n}\n\n.textBlueError, .textYellowError, .textRedError, .textGreyError{\n  font-size: 110%;\n}\n\n.barAndValueBlueError, .barAndValueYellowError, .barAndValueRedError, .barAndValueGreyError{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.barBlueError{\n  background-color: rgb(39, 170, 225);\n  height: 45px;\n  width: 2px;\n}\n\n.valueBlueError, .valueYellowError, .valueRedError, .valueGreyError{\n  font-size: 300%;\n  padding-left: 10px;\n}\n\n.yellowError{\n  color: rgb(247, 138, 32);\n  padding-top: 9px;\n}\n\n.barYellowError{\n  background-color: rgb(247, 138, 32);\n  height: 45px;\n  width: 2px;\n}\n\n.redError{\n  color: rgb(231, 95, 156);\n  padding-top: 9px;\n}\n\n.barRedError{\n  background-color: rgb(231, 95, 156);\n  height: 45px;\n  width: 2px;\n}\n\n.greyError{\n  color: rgb(116, 77, 155);\n  padding-top: 9px;\n}\n\n.barGreyError{\n  background-color: rgb(116, 77, 155);\n  height: 45px;\n  width: 2px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-error/project-error.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"containerProjectImpact\">\n  <div>\n    <span *ngIf=\"displayProjectError\" class=\"titleBlue\">Project Error</span>\n    <span *ngIf=\"!displayProjectError\" class=\"titleBlack\">Project Error</span>\n    <i (click)=\"displayProjectError = !displayProjectError; applyFilter();\" class=\"fa fa-caret-down unrollMenu\" aria-hidden=\"true\"></i>\n  </div>\n  <div *ngIf=\"displayProjectError\" class=\"borderSeparate\"></div>\n  <div *ngIf=\"displayProjectError\" class=\"containerInfo\">\n    <div class=\"filterData\">\n      <img src=\"../../assets/clock.png\" class=\"imgClock\"><span class=\"textFilter\">Select report date:</span>\n      <input type=\"date\" class=\"dateInput\" [(ngModel)]=\"dateStart\"><input type=\"date\" class=\"dateInput\" [(ngModel)]=\"dateEnd\">\n      <span *ngIf=\"project.name !== 'Global'\" class=\"textFilter\">User filter:</span>\n      <multiple-select *ngIf=\"project.name !== 'Global'\" [choose]=\"chooseUser\" [list]=\"project.listUsers\"></multiple-select>\n      <button (click)=\"applyFilter()\" class=\"buttonFilter\">Submit</button>\n    </div>\n    <div class=\"displayValue\">\n      <div class=\"blueError\">\n        <div class=\"textBlueError\">\n          Blue errors\n        </div>\n        <div class=\"barAndValueBlueError\">\n          <div class=\"barBlueError\"></div>\n          <div class=\"valueBlueError\">{{blueErrorCount}}</div>\n        </div>\n      </div>\n      <div class=\"yellowError\">\n        <div class=\"textYellowError\">\n          Yellow errors\n        </div>\n        <div class=\"barAndValueYellowError\">\n          <div class=\"barYellowError\"></div>\n          <div class=\"valueYellowError\">{{yellowErrorCount}}</div>\n        </div>\n      </div>\n      <div class=\"redError\">\n        <div class=\"textRedError\">\n          Red errors\n        </div>\n        <div class=\"barAndValueRedError\">\n          <div class=\"barRedError\"></div>\n          <div class=\"valueRedError\">{{redErrorCount}}</div>\n        </div>\n      </div>\n      <div class=\"greyError\">\n        <div class=\"textGreyError\">\n          Grey errors\n        </div>\n        <div class=\"barAndValueGreyError\">\n          <div class=\"barGreyError\"></div>\n          <div class=\"valueGreyError\">{{greyErrorCount}}</div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf='displayChart' style=\"display: block;\">\n      <canvas baseChart width=\"400\" height=\"400\"\n              [datasets]=\"lineChartData\"\n              [labels]=\"lineChartLabels\"\n              [options]=\"lineChartOptions\"\n              [legend]=\"lineChartLegend\"\n              [chartType]=\"lineChartType\"></canvas>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/project-error/project-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_project__ = __webpack_require__("../../../../../src/app/class/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_utils__ = __webpack_require__("../../../../../src/app/class/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by yoann on 18/07/2017.
 */







var ProjectErrorComponent = (function () {
    function ProjectErrorComponent(database) {
        this.database = database;
        this.displayProjectError = true;
        this.chooseUser = [];
        this.displayChart = false;
        //
        // createGraph(users, dateStartString, dateEndString): void {
        //   let dateArray = Utils.computeDateArray(dateStartString, dateEndString);
        //   this.lineChartData = [];
        //   if(this.blueErrorCount !== 0) {
        //     let data = this.computeNewValueGraph(dateArray, Utils.listBlueError, users);
        //     this.lineChartData.push({data: data, label: 'Blue errors', borderColor: 'rgb(39, 170, 225)',
        //       backgroundColor: 'rgba(255,255,255,0)', pointBackgroundColor: 'rgba(148,159,177,1)',
        //       pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(148,159,177,0.8)'});
        //   }
        //   if(this.yellowErrorCount !== 0){
        //     let data = this.computeNewValueGraph(dateArray, Utils.listYellowError, users);
        //     this.lineChartData.push({data: data, label: 'Yellow errors', borderColor: 'rgb(247, 138, 32)',
        //       backgroundColor: 'rgba(255,255,255,0)', pointBackgroundColor: 'rgba(148,159,177,1)',
        //       pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(148,159,177,0.8)'});
        //   }
        //   if(this.redErrorCount !== 0){
        //     let data = this.computeNewValueGraph(dateArray, Utils.listRedError, users);
        //     this.lineChartData.push({data: data, label: 'Red errors', borderColor: 'rgb(231, 95, 156)',
        //       backgroundColor: 'rgba(255,255,255,0)', pointBackgroundColor: 'rgba(148,159,177,1)',
        //       pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(148,159,177,0.8)'});
        //   }
        //   if(this.greyErrorCount !== 0){
        //     let data = this.computeNewValueGraph(dateArray, Utils.listGreyError, users);
        //     this.lineChartData.push({data: data, label: 'Grey errors', borderColor: 'rgb(116, 77, 155)',
        //       backgroundColor: 'rgba(255,255,255,0)', pointBackgroundColor: 'rgba(148,159,177,1)',
        //       pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(148,159,177,0.8)'});
        //   }
        //   if(this.lineChartData.length === 0)
        //     this.displayChart = false;
        //   else {
        //     setTimeout(() => {
        //       if (this.chart && this.chart.chart && this.chart.chart.config) {
        //         this.chart.chart.config.data.labels = dateArray;
        //         this.chart.chart.config.data.datasets = this.lineChartData;
        //         this.chart.chart.update();
        //       }
        //     });
        //     this.displayChart = true;
        //   }
        // }
        //
        //
        // computeNewValueGraph(dateArray: string[], field: string[], users: string): number[]{
        //   let data: number[] = [];
        //   let val = 0;
        //   for(let i = 0; i < dateArray.length; i++){
        //     val = 0;
        //     for(let j = 0; j < users.length; j++) {
        //       for (let k = 0; k < field.length; k++) {
        //         if (isUndefined(this.project.users[users[j]]['error-stats'][dateArray[i]])) {
        //           val += 0;
        //         }
        //         else {
        //           val += this.project.users[users[j]]['error-stats'][dateArray[i]][field[k] + 'ThisDay'] || 0;
        //         }
        //       }
        //     }
        //     data.push(val);
        //   }
        //   return data;
        // }
        //
        // computeNewValue(field: string[], dateStart: string, dateEnd: string, users: string[]): number {
        //   let variable = 0;
        //   for(let i = 0; i < users.length; i++){
        //       for(let j = 0; j < field.length; j++) {
        //         if (isUndefined(this.project.users[users[i]]['error-stats'][dateEnd])) {
        //           variable += 0;
        //         }
        //         else if (isUndefined(this.project.users[users[i]]['error-stats'][dateStart])) {
        //           variable += (this.project.users[users[i]]['error-stats'][dateEnd][field[j] + 'ToDate'] || 0);
        //         }
        //         else {
        //           variable += (this.project.users[users[i]]['error-stats'][dateEnd][field[j] + 'ToDate'] || 0) -
        //             (this.project.users[users[i]]['error-stats'][dateStart][field[j] + 'ToDate'] || 0);
        //         }
        //       }
        //   }
        //   return variable;
        // }
        //
        // computeNewValueGlobal(field: string[], dateStart: string, dateEnd: string): number {
        //   let variable = 0;
        //     for(let j = 0; j < field.length; j++) {
        //       if (isUndefined(this.project.errorStat[dateEnd])) {
        //         variable += 0;
        //       }
        //       else if (isUndefined(this.project.errorStat[dateStart])) {
        //         variable += (this.project.errorStat[dateEnd][field[j] + 'ToDate'] || 0);
        //       }
        //     else {
        //         variable += (this.project.errorStat[dateEnd][field[j] + 'ToDate'] || 0) -
        //           (this.project.errorStat[dateStart][field[j] + 'ToDate'] || 0);
        //       }
        //     }
        //   return variable;
        // }
        //
        // createGraphGlobal(dateStartString, dateEndString): void {
        //   let dateArray = Utils.computeDateArray(dateStartString, dateEndString);
        //   this.lineChartData = [];
        //   if(this.blueErrorCount !== 0) {
        //     let data = this.computeNewValueGraphGlobal(dateArray, Utils.listBlueError);
        //     this.lineChartData.push({data: data, label: 'Blue errors', borderColor: 'rgb(39, 170, 225)',
        //       backgroundColor: 'rgba(255,255,255,0)', pointBackgroundColor: 'rgba(148,159,177,1)',
        //       pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(148,159,177,0.8)'});
        //   }
        //   if(this.yellowErrorCount !== 0){
        //     let data = this.computeNewValueGraphGlobal(dateArray, Utils.listYellowError);
        //     this.lineChartData.push({data: data, label: 'Yellow errors', borderColor: 'rgb(247, 138, 32)',
        //       backgroundColor: 'rgba(255,255,255,0)', pointBackgroundColor: 'rgba(148,159,177,1)',
        //       pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(148,159,177,0.8)'});
        //   }
        //   if(this.redErrorCount !== 0){
        //     let data = this.computeNewValueGraphGlobal(dateArray, Utils.listRedError);
        //     this.lineChartData.push({data: data, label: 'Red errors', borderColor: 'rgb(231, 95, 156)',
        //       backgroundColor: 'rgba(255,255,255,0)', pointBackgroundColor: 'rgba(148,159,177,1)',
        //       pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(148,159,177,0.8)'});
        //   }
        //   if(this.greyErrorCount !== 0){
        //     let data = this.computeNewValueGraphGlobal(dateArray, Utils.listGreyError);
        //     this.lineChartData.push({data: data, label: 'Grey errors', borderColor: 'rgb(116, 77, 155)',
        //       backgroundColor: 'rgba(255,255,255,0)', pointBackgroundColor: 'rgba(148,159,177,1)',
        //       pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(148,159,177,0.8)'});
        //   }
        //   if(this.lineChartData.length === 0)
        //     this.displayChart = false;
        //   else {
        //     setTimeout(() => {
        //       if (this.chart && this.chart.chart && this.chart.chart.config) {
        //         this.chart.chart.config.data.labels = dateArray;
        //         this.chart.chart.config.data.datasets = this.lineChartData;
        //         this.chart.chart.update();
        //       }
        //     });
        //     this.displayChart = true;
        //   }
        // }
        //
        // computeNewValueGraphGlobal(dateArray: string[], field: string[]): number[]{
        //   let data: number[] = [];
        //   let val = 0;
        //   for(let i = 0; i < dateArray.length; i++){
        //     val = 0;
        //       for (let k = 0; k < field.length; k++) {
        //         if (isUndefined(this.project.errorStat[dateArray[i]])) {
        //           val += 0;
        //         }
        //         else {
        //           val += this.project.errorStat[dateArray[i]][field[k] + 'ThisDay'] || 0;
        //         }
        //       }
        //     data.push(val);
        //   }
        //   return data;
        // }
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartOptions = {
            responsive: true,
            maintainAspectRatio: false
        };
    }
    ProjectErrorComponent.prototype.ngOnChanges = function () {
        this.chooseUser[0] = 'All';
        this.allData = {};
        this.initVal();
    };
    ProjectErrorComponent.prototype.initVal = function () {
        this.dateStart = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTimestampToDate(Date.now() - (7 * 24 * 3600 * 1000));
        this.dateEnd = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTimestampToDate(Date.now());
        this.loadData();
    };
    ProjectErrorComponent.prototype.loadData = function () {
        var _this = this;
        var url;
        if (this.project.name !== 'Global') {
            if (this.chooseUser[0] === 'All')
                url = "dashboard/project/" + this.project.id + "/project-data";
            else
                url = "dashboard/project/" + this.project.id + "/user-data/users/ID-" + this.chooseUser;
        }
        else
            url = 'dashboard/global';
        __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(this.database.list(url + "/LOW_BATTERY/dates", {
            query: {
                orderByKey: true,
                startAt: this.dateStart,
                endAt: this.dateEnd
            }
        }).take(1), this.database.list(url + "/BLUETOOTH_NOT_ENABLED/dates", {
            query: {
                orderByKey: true,
                startAt: this.dateStart,
                endAt: this.dateEnd
            }
        }).take(1), this.database.list(url + "/MULTIPLE_PAIRED_SCANNERS/dates", {
            query: {
                orderByKey: true,
                startAt: this.dateStart,
                endAt: this.dateEnd
            }
        }).take(1), this.database.list(url + "/NOT_PAIRED/dates", {
            query: {
                orderByKey: true,
                startAt: this.dateStart,
                endAt: this.dateEnd
            }
        }).take(1), this.database.list(url + "/DISCONNECTED/dates", {
            query: {
                orderByKey: true,
                startAt: this.dateStart,
                endAt: this.dateEnd
            }
        }).take(1), this.database.list(url + "/UNEXPECTED_ERROR/dates", {
            query: {
                orderByKey: true,
                startAt: this.dateStart,
                endAt: this.dateEnd
            }
        }).take(1), this.database.list(url + "/MISSING_MODULE_ID/dates", {
            query: {
                orderByKey: true,
                startAt: this.dateStart,
                endAt: this.dateEnd
            }
        }).take(1), this.database.list(url + "/INVALID_API_KEY/dates", {
            query: {
                orderByKey: true,
                startAt: this.dateStart,
                endAt: this.dateEnd
            }
        }).take(1), this.database.list(url + "/MISSING_USER_ID/dates", {
            query: {
                orderByKey: true,
                startAt: this.dateStart,
                endAt: this.dateEnd
            }
        }).take(1), this.database.list(url + "/GUID_NOT_FOUND_OFFLINE/dates", {
            query: {
                orderByKey: true,
                startAt: this.dateStart,
                endAt: this.dateEnd
            }
        }).take(1), this.database.list(url + "/GUID_NOT_FOUND_ONLINE/dates", {
            query: {
                orderByKey: true,
                startAt: this.dateStart,
                endAt: this.dateEnd
            }
        }).take(1), this.database.list(url + "/UNVERIFIED_API_KEY/dates", {
            query: {
                orderByKey: true,
                startAt: this.dateStart,
                endAt: this.dateEnd
            }
        }).take(1)).subscribe(function (data) {
            _this.transformErrorData(data);
            _this.calculateValue();
            _this.createGraph();
        });
    };
    ProjectErrorComponent.prototype.calculateValue = function () {
        this.blueErrorCount = this.calculateOneValue(__WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].listBlueError);
        this.redErrorCount = this.calculateOneValue(__WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].listRedError);
        this.yellowErrorCount = this.calculateOneValue(__WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].listYellowError);
        this.greyErrorCount = this.calculateOneValue(__WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].listGreyError);
    };
    ProjectErrorComponent.prototype.calculateOneValue = function (tab) {
        var nb = 0;
        for (var i = 0; i < tab.length; i++) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"])(this.allData[tab[i]])) {
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"])(this.allData[tab[i]][this.dateEnd])) {
                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"])(this.allData[tab[i]][this.dateStart]))
                        nb += this.allData[tab[i]][this.dateEnd]['ToDate'] - this.allData[tab[i]][this.dateStart]['ToDate'];
                    else
                        nb += this.allData[tab[i]][this.dateEnd]['ToDate'];
                }
            }
        }
        return nb;
    };
    ProjectErrorComponent.prototype.transformErrorData = function (tab) {
        this.allData['LOW_BATTERY'] = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTab(tab[0]);
        this.allData['BLUETOOTH_NOT_ENABLED'] = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTab(tab[1]);
        this.allData['MULTIPLE_PAIRED_SCANNERS'] = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTab(tab[2]);
        this.allData['NOT_PAIRED'] = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTab(tab[3]);
        this.allData['DISCONNECTED'] = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTab(tab[4]);
        this.allData['UNEXPECTED_ERROR'] = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTab(tab[5]);
        this.allData['MISSING_MODULE_ID'] = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTab(tab[6]);
        this.allData['INVALID_API_KEY'] = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTab(tab[7]);
        this.allData['MISSING_USER_ID'] = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTab(tab[8]);
        this.allData['GUID_NOT_FOUND_OFFLINE'] = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTab(tab[9]);
        this.allData['GUID_NOT_FOUND_ONLINE'] = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTab(tab[10]);
        this.allData['UNVERIFIED_API_KEY'] = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTab(tab[11]);
    };
    ProjectErrorComponent.prototype.createGraph = function () {
        var _this = this;
        var dateArray = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].computeDateArray(this.dateStart, this.dateEnd);
        this.lineChartData = [];
        if (this.blueErrorCount !== 0) {
            var data = this.computeNewValueGraph(dateArray, __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].listBlueError);
            this.lineChartData.push({ data: data, label: 'Blue errors', borderColor: 'rgb(39, 170, 225)',
                backgroundColor: 'rgba(255,255,255,0)', pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(148,159,177,0.8)' });
        }
        if (this.yellowErrorCount !== 0) {
            var data = this.computeNewValueGraph(dateArray, __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].listYellowError);
            this.lineChartData.push({ data: data, label: 'Yellow errors', borderColor: 'rgb(247, 138, 32)',
                backgroundColor: 'rgba(255,255,255,0)', pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(148,159,177,0.8)' });
        }
        if (this.redErrorCount !== 0) {
            var data = this.computeNewValueGraph(dateArray, __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].listRedError);
            this.lineChartData.push({ data: data, label: 'Red errors', borderColor: 'rgb(231, 95, 156)',
                backgroundColor: 'rgba(255,255,255,0)', pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(148,159,177,0.8)' });
        }
        if (this.greyErrorCount !== 0) {
            var data = this.computeNewValueGraph(dateArray, __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].listGreyError);
            this.lineChartData.push({ data: data, label: 'Grey errors', borderColor: 'rgb(116, 77, 155)',
                backgroundColor: 'rgba(255,255,255,0)', pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(148,159,177,0.8)' });
        }
        if (this.lineChartData.length === 0)
            this.displayChart = false;
        else {
            setTimeout(function () {
                if (_this.chart && _this.chart.chart && _this.chart.chart.config) {
                    _this.chart.chart.config.data.labels = dateArray;
                    _this.chart.chart.config.data.datasets = _this.lineChartData;
                    _this.chart.chart.update();
                }
            });
            this.displayChart = true;
        }
    };
    ProjectErrorComponent.prototype.computeNewValueGraph = function (dateArray, errorNames) {
        var graph = [];
        for (var j = 0; j < dateArray.length; j++) {
            var nb = 0;
            for (var i = 0; i < errorNames.length; i++) {
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"])(this.allData[errorNames[i]])) {
                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"])(this.allData[errorNames[i]][dateArray[j]])) {
                        nb += this.allData[errorNames[i]][dateArray[j]]['ThisDay'];
                    }
                }
            }
            graph.push(nb);
        }
        return graph;
    };
    ProjectErrorComponent.prototype.applyFilter = function () {
        this.loadData();
    };
    return ProjectErrorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__class_project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__class_project__["a" /* Project */]) === "function" && _a || Object)
], ProjectErrorComponent.prototype, "project", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"]) === "function" && _b || Object)
], ProjectErrorComponent.prototype, "chart", void 0);
ProjectErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'project-error',
        template: __webpack_require__("../../../../../src/app/project-error/project-error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project-error/project-error.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _c || Object])
], ProjectErrorComponent);

var _a, _b, _c;
//# sourceMappingURL=project-error.component.js.map

/***/ }),

/***/ "../../../../../src/app/project-impact/project-impact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".containerProjectImpact{\n  background-color: white;\n  margin-left: 3px;\n  width: 78vw;\n  padding-left: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin-top: 15px;\n  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.titleBlue{\n  color: rgb(71, 139, 202);\n  font-size: 140%;\n}\n\n.titleBlack{\n  color: black;\n  font-size: 140%;\n}\n\n.unrollMenu{\n  margin-right: 2vw;\n  margin-top: 1vh;\n  float: right;\n  font-size: 15px;\n}\n\n.borderSeparate{\n  border-bottom: 1px solid black;\n  width: 67vw;\n  margin-top: 7px;\n}\n\n.containerInfo{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: 7px;\n  padding-left: 5px;\n}\n\n.filterData{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.imgClock{\n  width: 20px;\n  height: 20px;\n  margin-top: 2px;\n}\n\n.textFilter{\n  margin-top: 3px;\n  margin-left: 5px;\n}\n\n.dateInput{\n  margin-left: 5px;\n  height: 28px;\n  width: 130px;\n}\n\n.buttonFilter{\n  height: 28px;\n  margin-left: 5px;\n  background-image: linear-gradient(to right, rgb(247, 148, 32), rgb(227, 29, 137));\n  border: none;\n  width: 80px;\n}\n\n.displayValue{\n  margin-top: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  width: 95%;\n}\n\n.enrollment{\n  color: rgb(231, 95, 156);\n  padding-top: 9px;\n}\n\n.textEnrollment, .textIdentification, .textVerification, .textUser{\n  font-size: 110%;\n}\n\n.barAndValueEnrollment, .barAndValueIdentification, .barAndValueVerification, .barAndValueUser{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.barEnrollment{\n  background-color: rgb(231, 95, 156);\n  height: 45px;\n  width: 2px;\n}\n\n.valueEnrollment, .valueIdentification, .valueVerification, .valueUser{\n  font-size: 300%;\n  padding-left: 10px;\n}\n\n.identification{\n  color: rgb(39, 170, 225);\n  padding-top: 9px;\n}\n\n.barIdentification{\n  background-color: rgb(39, 170, 225);\n  height: 45px;\n  width: 2px;\n}\n\n.verification{\n  color: rgb(139, 197, 68);\n  padding-top: 9px;\n}\n\n.barVerification{\n  background-color: rgb(139, 197, 68);\n  height: 45px;\n  width: 2px;\n}\n\n.user{\n  color: rgb(247, 138, 32);\n  padding-top: 9px;\n}\n\n.barUser{\n  background-color: rgb(247, 138, 32);\n  height: 45px;\n  width: 2px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-impact/project-impact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"containerProjectImpact\">\n  <div>\n    <span *ngIf=\"displayProjectImpact\" class=\"titleBlue\">Project Impact</span>\n    <span *ngIf=\"!displayProjectImpact\" class=\"titleBlack\">Project Impact</span>\n    <i (click)=\"displayProjectImpact = !displayProjectImpact; applyFilter()\" class=\"fa fa-caret-down unrollMenu\" aria-hidden=\"true\"></i>\n  </div>\n  <div *ngIf=\"displayProjectImpact\" class=\"borderSeparate\"></div>\n  <div *ngIf=\"displayProjectImpact\" class=\"containerInfo\">\n    <div class=\"filterData\">\n      <img src=\"../../assets/clock.png\" class=\"imgClock\"><span class=\"textFilter\">Select report date:</span>\n      <input type=\"date\" class=\"dateInput\" [(ngModel)]=\"dateStart\"><input type=\"date\" class=\"dateInput\" [(ngModel)]=\"dateEnd\">\n      <span *ngIf=\"project.name !== 'Global'\" class=\"textFilter\">User filter:</span>\n      <multiple-select *ngIf=\"project.name !== 'Global'\" [choose]=\"chooseUser\" [list]=\"project.listUsers\"></multiple-select>\n      <span class=\"textFilter\">Activity filter:</span>\n      <multiple-select [listChecked]=\"chooseActivity\" [list]=\"listActivity\"></multiple-select>\n      <button (click)=\"applyFilter()\" class=\"buttonFilter\">Submit</button>\n    </div>\n    <div class=\"displayValue\">\n      <div class=\"enrollment\">\n        <div class=\"textEnrollment\">\n          Enrollments\n        </div>\n        <div class=\"barAndValueEnrollment\">\n          <div class=\"barEnrollment\"></div>\n          <div class=\"valueEnrollment\">{{patientCount}}</div>\n        </div>\n      </div>\n      <div class=\"identification\">\n        <div class=\"textIdentification\">\n          Identifications\n        </div>\n        <div class=\"barAndValueIdentification\">\n          <div class=\"barIdentification\"></div>\n          <div class=\"valueIdentification\">{{idCount}}</div>\n        </div>\n      </div>\n      <div class=\"verification\">\n        <div class=\"textVerification\">\n          Verifications\n        </div>\n        <div class=\"barAndValueVerification\">\n          <div class=\"barVerification\"></div>\n          <div class=\"valueVerification\">{{verifyCount}}</div>\n        </div>\n      </div>\n      <div class=\"user\">\n        <div class=\"textUser\">\n          Users\n        </div>\n        <div class=\"barAndValueUser\">\n          <div class=\"barUser\"></div>\n          <div class=\"valueUser\">{{userCount}}</div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf='displayChart' style=\"display: block;\">\n      <canvas baseChart width=\"400\" height=\"400\"\n              [datasets]=\"lineChartData\"\n              [labels]=\"lineChartLabels\"\n              [options]=\"lineChartOptions\"\n              [legend]=\"lineChartLegend\"\n              [chartType]=\"lineChartType\"></canvas>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/project-impact/project-impact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_project__ = __webpack_require__("../../../../../src/app/class/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_utils__ = __webpack_require__("../../../../../src/app/class/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectImpactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by yoann on 18/07/2017.
 */







var ProjectImpactComponent = (function () {
    function ProjectImpactComponent(database) {
        this.database = database;
        this.displayProjectImpact = true;
        this.chooseActivity = [];
        this.chooseUser = [];
        this.displayChart = false;
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartOptions = {
            responsive: true,
            maintainAspectRatio: false
        };
    }
    ProjectImpactComponent.prototype.ngOnChanges = function () {
        this.listActivity = ['Identifications', 'Enrollments', 'Verifications'];
        this.chooseActivity = [true, true, true];
        this.chooseUser[0] = 'All';
        this.initVal();
    };
    ProjectImpactComponent.prototype.initVal = function () {
        this.dateStart = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTimestampToDate(Date.now() - (7 * 24 * 3600 * 1000));
        this.dateEnd = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTimestampToDate(Date.now());
        this.loadData();
    };
    ProjectImpactComponent.prototype.loadData = function () {
        var _this = this;
        var url;
        if (this.project.name !== 'Global') {
            if (this.chooseUser[0] === 'All')
                url = "dashboard/project/" + this.project.id + "/project-data";
            else
                url = "dashboard/project/" + this.project.id + "/user-data/users/ID-" + this.chooseUser;
        }
        else
            url = 'dashboard/global';
        __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(this.database.list(url + "/identifications/dates", {
            query: {
                orderByKey: true,
                startAt: this.dateStart,
                endAt: this.dateEnd
            }
        }).take(1), this.database.list(url + "/enrollments/dates", {
            query: {
                orderByKey: true,
                startAt: this.dateStart,
                endAt: this.dateEnd
            }
        }).take(1), this.database.list(url + "/users/dates", {
            query: {
                orderByKey: true,
                startAt: this.dateStart,
                endAt: this.dateEnd
            }
        }).take(1), this.database.list(url + "/verifications/dates", {
            query: {
                orderByKey: true,
                startAt: this.dateStart,
                endAt: this.dateEnd
            }
        }).take(1)).subscribe(function (data) {
            _this.calculateValue(data);
            _this.createGraph(data);
        });
    };
    ProjectImpactComponent.prototype.calculateValue = function (tab) {
        if (tab[0].length > 0 && this.chooseActivity[0])
            this.idCount = tab[0][tab[0].length - 1]['ToDate'] - tab[0][0]['ToDate'];
        else
            this.idCount = 0;
        if (tab[1].length > 0 && this.chooseActivity[1])
            this.patientCount = tab[1][tab[1].length - 1]['ToDate'] - tab[1][0]['ToDate'];
        else
            this.patientCount = 0;
        if (tab[2].length > 0)
            this.userCount = tab[2][tab[2].length - 1]['ToDate'] - tab[2][0]['ToDate'];
        else
            this.userCount = 0;
        if (tab[3].length > 0 && this.chooseActivity[2])
            this.verifyCount = tab[3][tab[3].length - 1]['ToDate'] - tab[3][0]['ToDate'];
        else
            this.verifyCount = 0;
    };
    ProjectImpactComponent.prototype.createGraph = function (tab) {
        var _this = this;
        var dateArray = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].computeDateArray(this.dateStart, this.dateEnd);
        this.lineChartData = [];
        if (this.patientCount !== 0) {
            var data = this.computeNewValueGraph(dateArray, __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTab(tab[1]));
            this.lineChartData.push({ data: data, label: 'Enrollments', borderColor: 'rgb(231, 95, 156)',
                backgroundColor: 'rgba(255,255,255,0)', pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(148,159,177,0.8)' });
        }
        if (this.idCount !== 0) {
            var data = this.computeNewValueGraph(dateArray, __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTab(tab[0]));
            this.lineChartData.push({ data: data, label: 'Identifications', borderColor: 'rgb(39, 170, 225)',
                backgroundColor: 'rgba(255,255,255,0)', pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(148,159,177,0.8)' });
        }
        if (this.chooseUser[0] === 'All') {
            var data = this.computeNewValueGraph(dateArray, __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTab(tab[2]));
            this.lineChartData.push({ data: data, label: 'Users', borderColor: 'rgb(247, 138, 32)',
                backgroundColor: 'rgba(255,255,255,0)', pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(148,159,177,0.8)' });
        }
        if (this.verifyCount !== 0) {
            var data = this.computeNewValueGraph(dateArray, __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTab(tab[3]));
            this.lineChartData.push({ data: data, label: 'Verifications', borderColor: 'rgb(139, 197, 68)',
                backgroundColor: 'rgba(255,255,255,0)', pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(148,159,177,0.8)' });
        }
        //noinspection RedundantIfStatementJS
        if (this.verifyCount === 0 && this.idCount === 0 && this.patientCount === 0)
            this.displayChart = false;
        else
            this.displayChart = true;
        setTimeout(function () {
            if (_this.chart && _this.chart.chart && _this.chart.chart.config) {
                _this.chart.chart.config.data.labels = dateArray;
                _this.chart.chart.config.data.datasets = _this.lineChartData;
                _this.chart.chart.update();
            }
        });
    };
    ProjectImpactComponent.prototype.computeNewValueGraph = function (dateArray, data) {
        var graph = [];
        for (var i = 0; i < dateArray.length; i++) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_util__["isUndefined"])(data[dateArray[i]])) {
                graph.push(0);
            }
            else {
                graph.push(data[dateArray[i]]['ThisDay']);
            }
        }
        return graph;
    };
    ProjectImpactComponent.prototype.applyFilter = function () {
        this.loadData();
    };
    return ProjectImpactComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__class_project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__class_project__["a" /* Project */]) === "function" && _a || Object)
], ProjectImpactComponent.prototype, "project", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"]) === "function" && _b || Object)
], ProjectImpactComponent.prototype, "chart", void 0);
ProjectImpactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'project-impact',
        template: __webpack_require__("../../../../../src/app/project-impact/project-impact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project-impact/project-impact.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _c || Object])
], ProjectImpactComponent);

var _a, _b, _c;
//# sourceMappingURL=project-impact.component.js.map

/***/ }),

/***/ "../../../../../src/app/project-performance/project-performance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".containerProjectPerformance{\n  background-color: white;\n  margin-left: 3px;\n  width: 78vw;\n  padding-left: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin-top: 15px;\n  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.titleBlue{\n  color: rgb(71, 139, 202);\n  font-size: 140%;\n}\n\n.titleBlack{\n  color: black;\n  font-size: 140%;\n}\n\n.unrollMenu{\n  margin-right: 2vw;\n  margin-top: 1vh;\n  float: right;\n  font-size: 15px;\n}\n\n.borderSeparate{\n  border-bottom: 1px solid black;\n  width: 67vw;\n  margin-top: 7px;\n}\n\n.containerInfo{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: 7px;\n  padding-left: 5px;\n}\n\n.filterData{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.imgClock{\n  width: 20px;\n  height: 20px;\n  margin-top: 2px;\n}\n\n.textFilter{\n  margin-top: 3px;\n  margin-left: 5px;\n}\n\n.dateInput{\n  margin-left: 5px;\n  height: 28px;\n  width: 130px;\n}\n\n.buttonFilter{\n  height: 28px;\n  margin-left: 5px;\n  background-image: linear-gradient(to right, rgb(247, 148, 32), rgb(227, 29, 137));\n  border: none;\n  width: 80px;\n}\n\n.displayValue{\n  margin-top: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  width: 95%;\n}\n\n.dailyUser{\n  color: rgb(39, 170, 225);\n  padding-top: 9px;\n}\n\n.textDailyUser, .textMonthlyUser, .textMatchSpeed, .textAccuracy{\n  font-size: 110%;\n}\n\n.barAndValueDailyUser, .barAndValueMonthlyUser, .barAndValueMatchSpeed, .barAndValueAccuracy{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.barDailyUser{\n  background-color: rgb(39, 170, 225);\n  height: 45px;\n  width: 2px;\n}\n\n.valueDailyUser, .valueMonthlyUser, .valueMatchSpeed, .valueAccuracy{\n  font-size: 300%;\n  padding-left: 10px;\n}\n\n.monthlyUser{\n  color: rgb(247, 138, 32);\n  padding-top: 9px;\n}\n\n.barMonthlyUser{\n  background-color: rgb(247, 138, 32);\n  height: 45px;\n  width: 2px;\n}\n\n.matchSpeed{\n  color: rgb(231, 95, 156);\n  padding-top: 9px;\n}\n\n.barMatchSpeed{\n  background-color: rgb(231, 95, 156);\n  height: 45px;\n  width: 2px;\n}\n\n.accuracy{\n  color: rgb(116, 77, 155);\n  padding-top: 9px;\n}\n\n.barAccuracy{\n  background-color: rgb(116, 77, 155);\n  height: 45px;\n  width: 2px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-performance/project-performance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"containerProjectPerformance\">\n  <div>\n    <span *ngIf=\"displayProjectPerformance\" class=\"titleBlue\">Project Performance</span>\n    <span *ngIf=\"!displayProjectPerformance\" class=\"titleBlack\">Project Performance</span>\n    <i (click)=\"displayProjectPerformance = !displayProjectPerformance; applyFilter();\" class=\"fa fa-caret-down unrollMenu\" aria-hidden=\"true\"></i>\n  </div>\n  <div *ngIf=\"displayProjectPerformance\" class=\"borderSeparate\"></div>\n  <div *ngIf=\"displayProjectPerformance\" class=\"containerInfo\">\n    <div class=\"filterData\">\n      <img src=\"../../assets/clock.png\" class=\"imgClock\"><span class=\"textFilter\">Select report date:</span>\n      <input type=\"date\" class=\"dateInput\" [(ngModel)]=\"dateStart\"><input type=\"date\" class=\"dateInput\" [(ngModel)]=\"dateEnd\">\n      <span *ngIf=\"project.name !== 'Global'\" class=\"textFilter\">User filter:</span>\n      <multiple-select *ngIf=\"project.name !== 'Global'\" [choose]=\"chooseUser\" [list]=\"project.listUsers\"></multiple-select>\n      <button (click)=\"applyFilter()\" class=\"buttonFilter\">Submit</button>\n    </div>\n    <div class=\"displayValue\">\n      <div class=\"dailyUser\">\n        <div class=\"textDailyUser\">\n          DAUs\n        </div>\n        <div class=\"barAndValueDailyUser\">\n          <div class=\"barDailyUser\"></div>\n          <div class=\"valueDailyUser\">{{dailyUser}}</div>\n        </div>\n      </div>\n      <div class=\"monthlyUser\">\n        <div class=\"textMonthlyUser\">\n          MAUs\n        </div>\n        <div class=\"barAndValueMonthlyUser\">\n          <div class=\"barMonthlyUser\"></div>\n          <div class=\"valueMonthlyUser\">{{monthlyUser}}</div>\n        </div>\n      </div>\n      <div class=\"matchSpeed\">\n        <div class=\"textMatchSpeed\">\n          Avg. Match Speed\n        </div>\n        <div class=\"barAndValueMatchSpeed\">\n          <div class=\"barMatchSpeed\"></div>\n          <div class=\"valueMatchSpeed\">{{matchSpeed | number : '1.1-3'}}s</div>\n        </div>\n      </div>\n      <div class=\"accuracy\">\n        <div class=\"textAccuracy\">\n          Avg. Accuracy\n        </div>\n        <div class=\"barAndValueAccuracy\">\n          <div class=\"barAccuracy\"></div>\n          <div class=\"valueAccuracy\">{{accuracy | number : '1.0-2'}}%</div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf='displayChart' style=\"display: block;\">\n      <canvas baseChart width=\"400\" height=\"400\"\n              [datasets]=\"lineChartData\"\n              [labels]=\"lineChartLabels\"\n              [options]=\"lineChartOptions\"\n              [legend]=\"lineChartLegend\"\n              [chartType]=\"lineChartType\"></canvas>\n    </div>\n    <div *ngIf='displayChart' style=\"display: block;\">\n      <canvas baseChart width=\"400\" height=\"400\"\n              [datasets]=\"lineChartDataAccuracy\"\n              [labels]=\"lineChartLabelsAccuracy\"\n              [options]=\"lineChartOptionsAccuracy\"\n              [colors]=\"lineChartColorAccuracy\"\n              [legend]=\"lineChartLegendAccuracy\"\n              [chartType]=\"lineChartTypeAccuracy\"></canvas>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/project-performance/project-performance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_project__ = __webpack_require__("../../../../../src/app/class/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_utils__ = __webpack_require__("../../../../../src/app/class/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPerformanceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by yoann on 18/07/2017.
 */








var ProjectPerformanceComponent = (function () {
    function ProjectPerformanceComponent(database, decimalPipe) {
        this.database = database;
        this.decimalPipe = decimalPipe;
        this.displayProjectPerformance = true;
        this.chooseUser = [];
        this.accuracy = 0;
        this.displayChart = false;
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        stacked: true
                    }],
                yAxes: [{
                        type: 'linear',
                        position: "left",
                        id: "y-axis-0",
                        scaleLabel: {
                            display: true,
                            labelString: 'Number of user'
                        }
                    }, {
                        type: 'linear',
                        position: "right",
                        id: "y-axis-1",
                        scaleLabel: {
                            display: true,
                            labelString: 'Matching speed'
                        }
                    }]
            }
        };
        this.lineChartLegendAccuracy = true;
        this.lineChartTypeAccuracy = 'bar';
        this.lineChartOptionsAccuracy = {
            responsive: true,
            maintainAspectRatio: false
        };
        this.lineChartColorAccuracy = [{
                backgroundColor: 'rgba(116, 77, 155, 0.5)',
                hoverBackgroundColor: 'rgba(116, 77, 155, 1)',
                borderColor: 'rgb(116, 77, 155)',
                borderWidth: 1
            }];
    }
    ProjectPerformanceComponent.prototype.ngOnChanges = function () {
        this.chooseUser[0] = 'All';
        this.initVal();
    };
    ProjectPerformanceComponent.prototype.initVal = function () {
        this.dateStart = __WEBPACK_IMPORTED_MODULE_6__class_utils__["a" /* Utils */].transformTimestampToDate(Date.now() - (7 * 24 * 3600 * 1000));
        this.dateEnd = __WEBPACK_IMPORTED_MODULE_6__class_utils__["a" /* Utils */].transformTimestampToDate(Date.now());
        this.loadData();
    };
    ProjectPerformanceComponent.prototype.loadData = function () {
        var _this = this;
        var url;
        if (this.project.name !== 'Global') {
            if (this.chooseUser[0] === 'All')
                url = "dashboard/project/" + this.project.id + "/project-data";
            else
                url = "dashboard/project/" + this.project.id + "/user-data/users/ID-" + this.chooseUser;
        }
        else
            url = 'dashboard/global';
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].forkJoin(this.database.list(url + "/IDENTIFY-time-stats/dates", {
            query: {
                orderByKey: true,
                startAt: this.dateStart,
                endAt: this.dateEnd
            }
        }).take(1), this.database.list("dashboard/project/" + this.project.id + "/project-data/daily-active-users/dates", {
            query: {
                orderByKey: true,
                startAt: this.dateStart,
                endAt: this.dateEnd
            }
        }).take(1), this.database.list(url + "/accuracy/dates", {
            query: {
                orderByKey: true,
                startAt: this.dateStart,
                endAt: this.dateEnd
            }
        }).take(1)).subscribe(function (data) {
            _this.calculateValue(data);
            _this.createGraph(data);
        });
    };
    ProjectPerformanceComponent.prototype.calculateValue = function (tab) {
        if (tab[0].length > 0) {
            this.matchSpeed = ((tab[0][tab[0].length - 1]['matching-time']['averageToDate'] * tab[0][tab[0].length - 1]['matching-time']['numberToDate'] -
                tab[0][0]['matching-time']['averageToDate'] * tab[0][0]['matching-time']['numberToDate']) /
                (tab[0][tab[0].length - 1]['matching-time']['numberToDate'] -
                    tab[0][0]['matching-time']['numberToDate'])) / 1000;
            if (isNaN(this.matchSpeed))
                this.matchSpeed = 0;
        }
        else
            this.matchSpeed = 0;
        this.dailyUser = this.countDailyUser(__WEBPACK_IMPORTED_MODULE_6__class_utils__["a" /* Utils */].transformTab(tab[1]), this.dateEnd);
        this.monthlyUser = this.countPeriodUser(__WEBPACK_IMPORTED_MODULE_6__class_utils__["a" /* Utils */].computeDateArray(this.dateStart, this.dateEnd), __WEBPACK_IMPORTED_MODULE_6__class_utils__["a" /* Utils */].transformTab(tab[1]));
        this.accuracy = this.calculateAccuracy(__WEBPACK_IMPORTED_MODULE_6__class_utils__["a" /* Utils */].transformTab(tab[2]));
    };
    ProjectPerformanceComponent.prototype.calculateAccuracy = function (data) {
        var val = 0;
        for (var i = 0; i < 20; i++) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_util__["isUndefined"])(data[this.dateEnd])) {
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_util__["isUndefined"])(data[this.dateStart]))
                    val += (data[this.dateEnd][i + "ToDate"] || 0) - (data[this.dateStart][i + "ToDate"] || 0);
                else
                    val += (data[this.dateEnd][i + "ToDate"] || 0);
            }
        }
        var total;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_util__["isUndefined"])(this.dateEnd)) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_util__["isUndefined"])(this.dateStart))
                total = (data[this.dateEnd]["totalToDate"] || 0) - (data[this.dateStart]["totalToDate"] || 0);
            else
                total = (data[this.dateEnd]["totalToDate"] || 0);
            if (total === 0)
                total = 1;
            return (val / total) * 100;
        }
        else
            return val;
    };
    ProjectPerformanceComponent.prototype.countPeriodUser = function (dateArray, data) {
        var user = {};
        var nb = 0;
        for (var i = 0; i < dateArray.length; i++) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_util__["isUndefined"])(data[dateArray[i]])) {
                for (var key in data[dateArray[i]]) {
                    user[key] = true;
                }
            }
        }
        for (var key in user) {
            if (this.chooseUser[0] === 'All' || this.chooseUser[0] === key)
                nb++;
        }
        return nb;
    };
    ProjectPerformanceComponent.prototype.countDailyUser = function (data, date) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_util__["isUndefined"])(data[date]))
            return 0;
        else {
            var nb = 0;
            for (var key in data[date]) {
                if (this.chooseUser[0] === 'All' || this.chooseUser[0] === key)
                    nb++;
            }
            return nb;
        }
    };
    ProjectPerformanceComponent.prototype.createGraph = function (data) {
        var _this = this;
        var dateArray = __WEBPACK_IMPORTED_MODULE_6__class_utils__["a" /* Utils */].computeDateArray(this.dateStart, this.dateEnd);
        this.lineChartData = [];
        this.lineChartLabelsAccuracy = Array.from(Array(10), function (e, i) { return i + 1; });
        this.lineChartDataAccuracy = [];
        this.lineChartDataAccuracy.push({ data: this.computeNewValueAccuracyGraph(__WEBPACK_IMPORTED_MODULE_6__class_utils__["a" /* Utils */].transformTab(data[2])), label: 'Accuracy' });
        var dataUser = this.computeNewValueUserGraph(dateArray, __WEBPACK_IMPORTED_MODULE_6__class_utils__["a" /* Utils */].transformTab(data[1]));
        var dataAverage = this.computeNewValueAverageGraph(dateArray, __WEBPACK_IMPORTED_MODULE_6__class_utils__["a" /* Utils */].transformTab(data[0]));
        this.lineChartData.push({ data: dataUser, label: 'Daily User', borderColor: 'rgb(39, 170, 225)',
            backgroundColor: 'rgba(255,255,255,0)', pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(148,159,177,0.8)', yAxisID: 'y-axis-0' });
        this.lineChartData.push({ data: dataAverage, label: 'Matching Speed', borderColor: 'rgb(231, 95, 156)',
            backgroundColor: 'rgba(255,255,255,0)', pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(148,159,177,0.8)', yAxisID: 'y-axis-1' });
        setTimeout(function () {
            if (_this.chart && _this.chart.chart && _this.chart.chart.config) {
                _this.chart.chart.config.data.labels = dateArray;
                _this.chart.chart.config.data.datasets = _this.lineChartData;
                _this.chart.chart.update();
            }
        });
        this.displayChart = true;
    };
    ProjectPerformanceComponent.prototype.computeNewValueAccuracyGraph = function (data) {
        var graph = [];
        var total;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_util__["isUndefined"])(this.dateEnd)) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_util__["isUndefined"])(this.dateStart))
                total = (data[this.dateEnd]["totalToDate"] || 0) - (data[this.dateStart]["totalToDate"] || 0);
            else
                total = (data[this.dateEnd]["totalToDate"] || 0);
            if (total === 0)
                total = 1;
        }
        var val = 0;
        for (var i = 0; i < 10; i++) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_util__["isUndefined"])(data[this.dateEnd])) {
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_util__["isUndefined"])(data[this.dateStart]))
                    val += (data[this.dateEnd][i + "ToDate"] || 0) - (data[this.dateStart][i + "ToDate"] || 0);
                else
                    val += data[this.dateEnd][i + "ToDate"] || 0;
                graph.push(this.decimalPipe.transform((val / total) * 100, '1.0-2'));
            }
        }
        return graph;
    };
    ProjectPerformanceComponent.prototype.computeNewValueAverageGraph = function (dateArray, data) {
        var graph = [];
        for (var i = 0; i < dateArray.length; i++) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_util__["isUndefined"])(data[dateArray[i]]))
                graph.push(0);
            else
                graph.push(data[dateArray[i]]['matching-time']['averageThisDay'] / 1000);
        }
        return graph;
    };
    ProjectPerformanceComponent.prototype.computeNewValueUserGraph = function (dateArray, data) {
        var graph = [];
        for (var i = 0; i < dateArray.length; i++) {
            graph.push(this.countDailyUser(data, dateArray[i]));
        }
        return graph;
    };
    ProjectPerformanceComponent.prototype.applyFilter = function () {
        this.loadData();
    };
    return ProjectPerformanceComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__class_project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__class_project__["a" /* Project */]) === "function" && _a || Object)
], ProjectPerformanceComponent.prototype, "project", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"]) === "function" && _b || Object)
], ProjectPerformanceComponent.prototype, "chart", void 0);
ProjectPerformanceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'project-performance',
        template: __webpack_require__("../../../../../src/app/project-performance/project-performance.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project-performance/project-performance.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["DecimalPipe"]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["DecimalPipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["DecimalPipe"]) === "function" && _d || Object])
], ProjectPerformanceComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=project-performance.component.js.map

/***/ }),

/***/ "../../../../../src/app/table/table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".containerTable{\n  position: absolute;\n  width: 78vw;\n  left: 2vw;\n  top: 35vh;\n  padding-bottom: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-top: 15px;\n}\n\n.filterData{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: 100%;\n}\n\n.imgClock{\n  width: 20px;\n  height: 20px;\n  margin-top: 2px;\n}\n\n.textFilter{\n  margin-top: 3px;\n  margin-left: 5px;\n}\n\n.dateInput{\n  margin-left: 5px;\n  height: 28px;\n  width: 130px;\n}\n\n.buttonFilter{\n  height: 28px;\n  margin-left: 5px;\n  background-image: linear-gradient(to right, rgb(247, 148, 32), rgb(227, 29, 137));\n  border: none;\n  width: 80px;\n}\n\n.table{\n  margin-top: 20px;\n  width: 100%;\n}\n\n.header{\n  background-color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding-left: 30px;\n  height: 50px;\n  padding-top: 10px;\n}\n\n.titleColumn{\n  font-size: 130%;\n  width: 16%;\n  color: rgb(39, 170, 225);\n}\n\n.listData{\n  max-height: 60vh;\n  overflow-y: scroll;\n}\n\n.rowData{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding-left: 30px;\n}\n\n.data{\n  width: 16%;\n  overflow-x: scroll;\n  height: 30px;\n  padding-top: 2px;\n}\n\n.odd{\n  background-color: white;\n}\n\n.even{\n  background-color: rgb(244, 249, 250);\n}\n\n.buttonDownload{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin-top: 10px;\n  margin-right: 40px;\n}\n\n.button{\n  float: right;\n  background-image: linear-gradient(to right, rgb(39, 170, 225), rgb(139, 197, 68));\n  margin-right: 10px;\n  width: 55px;\n  text-align: center;\n  color: white;\n}\n\n.iconDownload{\n  margin-right: 2px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='project' class=\"containerTable\">\n    <div class=\"filterData\">\n      <img src=\"../../assets/clock.png\" class=\"imgClock\"><span class=\"textFilter\">Time period:</span>\n      <input type=\"date\" class=\"dateInput\" [(ngModel)]=\"dateStart\"><input type=\"date\" class=\"dateInput\" [(ngModel)]=\"dateEnd\">\n      <span class=\"textFilter\">User filter:</span>\n      <multiple-select [listChecked]=\"chooseUser\" [list]=\"project.listUsers\"></multiple-select>\n      <span class=\"textFilter\">Activity filter:</span>\n      <multiple-select [listChecked]=\"chooseActivity\" [list]=\"listActivity\"></multiple-select>\n      <button (click)=\"applyFilter()\" class=\"buttonFilter\">Submit</button>\n    </div>\n    <div class=\"table\">\n      <div class=\"header\">\n        <div class=\"titleColumn\">\n          Time\n        </div>\n        <div class=\"titleColumn\">\n          User\n        </div>\n        <div class=\"titleColumn\">\n          Activity\n        </div>\n        <div class=\"titleColumn\">\n          GPS\n        </div>\n        <div class=\"titleColumn\">\n          Match Speed\n        </div>\n        <div class=\"titleColumn\">\n          Version\n        </div>\n      </div>\n      <div class=\"listData\" (scroll)=\"loadNewValue($event)\">\n        <div *ngFor=\"let session of sessions; let odd = odd; let even = even\" class=\"rowData\" [ngClass]=\"{ odd: odd, even: even }\">\n          <div class=\"data\">{{session['Time']}}</div>\n          <div class=\"data\">{{session['User']}}</div>\n          <div class=\"data\">{{session['Activity']}}</div>\n          <div class=\"data\">{{session['GPS']}}</div>\n          <div class=\"data\">{{session['Match Speed']}}</div>\n          <div class=\"data\">{{session['Version']}}</div>\n        </div>\n      </div>\n  </div>\n  <div class=\"buttonDownload\">\n    <div class=\"button\" (click)=\"exportCSV()\"><i class=\"fa fa-download iconDownload\" aria-hidden=\"true\"></i>CSV</div>\n  </div>\n</div>\n<div *ngIf='loadVal'>\n  <ngl-spinner size=\"large\" type=\"brand\" container=\"true\"></ngl-spinner>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv__ = __webpack_require__("../../../../angular2-csv/Angular2-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_project__ = __webpack_require__("../../../../../src/app/class/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_utils__ = __webpack_require__("../../../../../src/app/class/utils.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TableComponent = (function () {
    function TableComponent(database, datePipe, decimalPipe) {
        this.database = database;
        this.datePipe = datePipe;
        this.decimalPipe = decimalPipe;
        this.heightRow = 30;
        this.nbValByRequest = 200;
        this.nbValToDisplay = 100;
        this.finish = false;
        this.loadVal = false;
    }
    TableComponent.prototype.ngOnChanges = function () {
        this.listActivity = ['Identifications', 'Enrollments', 'Verifications'];
        this.chooseActivity = [true, true, true];
        this.finish = false;
        this.chooseUser = [];
        for (var i = 0; i < this.project.listUsers.length; i++) {
            this.chooseUser.push(true);
        }
        this.dateStart = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTimestampToDate(Date.now() - (7 * 24 * 3600 * 1000));
        this.dateEnd = __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformTimestampToDate(Date.now());
        this.loadVal = true;
        this.getData(__WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformDateToTimestamp(this.dateEnd) + (24 * 3600 * 1000), __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformDateToTimestamp(this.dateStart), this.project.listUsers, __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].convertActivity(this.chooseActivity), true, 0, false);
    };
    TableComponent.prototype.getData = function (dateEnd, dateStart, users, activity, reset, nbPush, skipLast) {
        var _this = this;
        console.log(dateEnd);
        var nb = this.nbValByRequest;
        if (skipLast)
            nb++;
        if (reset)
            this.sessions = [];
        this.database.list('/project-sessions/' + this.project.id, {
            query: {
                orderByChild: 'serverSessionStartTime',
                endAt: dateEnd,
                startAt: dateStart,
                limitToLast: nb
            }
        }).subscribe(function (data) {
            var tmpSession = [];
            var nbGet = 0;
            _this.lastSession = {};
            var getFirst = false;
            data.forEach(function (session) {
                nbGet++;
                if (!getFirst) {
                    _this.lastSession = session;
                    getFirst = true;
                }
                if (activity.includes(session.callout) && (users.includes(session.userId) || users.includes('ID-' + session.userId))) {
                    if (nbGet !== nb || !skipLast) {
                        var newSession = {};
                        newSession['Time'] = _this.datePipe.transform(session['serverSessionStartTime']);
                        newSession['User'] = session['userId'];
                        newSession['Activity'] = session['callout'];
                        newSession['GPS'] = _this.decimalPipe.transform(session['latitude'], '1.1-5') + ' ' +
                            _this.decimalPipe.transform(session['longitude'], '1.1-5');
                        if (session['callout'] === "IDENTIFY") {
                            var n = _this.decimalPipe.transform(((session['serverSessionEndTime'] - session['serverMatchStartTime']) / 1000), '1.1-3');
                            newSession['Match Speed'] = '' + n + 's';
                        }
                        else
                            newSession['Match Speed'] = '';
                        newSession['Version'] = session['appVersion'] + ', ' + session['hardwareVersion'];
                        nbPush++;
                        tmpSession.push(newSession);
                    }
                }
            });
            tmpSession.reverse();
            tmpSession.forEach(function (it) { return _this.sessions.push(it); });
            if (nbGet < nb) {
                _this.finish = true;
                _this.loadVal = false;
            }
            else {
                if (nbPush < _this.nbValToDisplay) {
                    _this.getData(_this.lastSession['serverSessionStartTime'], dateStart, users, activity, false, nbPush, true);
                }
                else {
                    _this.loadVal = false;
                }
            }
        });
    };
    TableComponent.prototype.applyFilter = function () {
        this.finish = false;
        var users = [];
        for (var i = 0; i < this.chooseUser.length; i++)
            if (this.chooseUser[i])
                users.push(this.project.listUsers[i]);
        this.loadVal = true;
        this.getData(__WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformDateToTimestamp(this.dateEnd) + (24 * 3600 * 1000), __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformDateToTimestamp(this.dateStart), users, __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].convertActivity(this.chooseActivity), true, 0, false);
    };
    TableComponent.prototype.loadNewValue = function (e) {
        var heightParent = e.target.clientHeight;
        var nbDisplay = Math.ceil(heightParent / this.heightRow);
        var scrollTop = e.target.scrollTop;
        var nbScroll = Math.ceil(scrollTop / this.heightRow);
        if (nbDisplay + nbScroll >= this.sessions.length && !this.finish && !this.loadVal) {
            this.loadVal = true;
            var users = [];
            for (var i = 0; i < this.chooseUser.length; i++)
                if (this.chooseUser[i])
                    users.push(this.project.listUsers[i]);
            this.getData(this.lastSession['serverSessionStartTime'], __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].transformDateToTimestamp(this.dateStart), users, __WEBPACK_IMPORTED_MODULE_5__class_utils__["a" /* Utils */].convertActivity(this.chooseActivity), false, 0, true);
        }
    };
    TableComponent.prototype.exportCSV = function () {
        var options = {
            fieldSeparator: ';',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            useBom: true
        };
        new __WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv__["Angular2Csv"](this.sessions, 'test', options);
    };
    return TableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__class_project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__class_project__["a" /* Project */]) === "function" && _a || Object)
], TableComponent.prototype, "project", void 0);
TableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'table',
        template: __webpack_require__("../../../../../src/app/table/table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/table/table.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_3__angular_common__["DecimalPipe"]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["DecimalPipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["DecimalPipe"]) === "function" && _d || Object])
], TableComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-info/user-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".containerUserInfo{\n  margin-left: 3px;\n  width: 78vw;\n  padding-left: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.containerSoftVersion, .containerPhoneType, .containerHardwareVersion{\n  background-color: white;\n  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);\n  width: 30%;\n  padding-top: 13px;\n}\n\n.titleBlue{\n  color: rgb(71, 139, 202);\n  font-size: 140%;\n  margin-left: 13px;\n}\n\n.underlineBlack{\n  background-color: black;\n  height: 1px;\n  margin-top: 9px;\n  margin-right: 13px;\n  margin-left: 13px;\n}\n\n.containerInfo{\n  background-color: rgb(245, 248, 247);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding-bottom: 10px;\n  padding-top: 8px;\n  height: 80%;\n}\n\n.divKey{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 5px;\n  width: 50%;\n  margin-left: 13px;\n}\n\n.divValue{\n  width: 50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-info/user-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"containerUserInfo\" *ngIf=\"load\">\n  <div class=\"containerSoftVersion\">\n    <div class=\"titleBlue\"> Software Version</div>\n    <div class=\"underlineBlack\"></div>\n    <div class=\"containerInfo\">\n      <div class=\"divKey\">\n        <div *ngFor='let app of appVersionList'>\n          {{app}}\n        </div>\n      </div>\n      <div class=\"divValue\">\n        <div *ngFor='let app of appVersionList'>\n        {{appVersionObject[app]}}\n          <span *ngIf=\"appVersionObject[app] > 1\">Users</span>\n          <span *ngIf=\"appVersionObject[app] <= 1\">User</span>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"containerPhoneType\">\n  <div class=\"titleBlue\"> Phone Types</div>\n  <div class=\"underlineBlack\"></div>\n  <div class=\"containerInfo\">\n    <div class=\"divKey\">\n      <div *ngFor='let app of appVersionList'>\n        {{app}}\n      </div>\n    </div>\n    <div class=\"divValue\">\n      <div *ngFor='let app of appVersionList'>\n        {{appVersionObject[app]}}\n        <span *ngIf=\"appVersionObject[app] > 1\">Users</span>\n        <span *ngIf=\"appVersionObject[app] <= 1\">User</span>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"containerHardwareVersion\">\n  <div class=\"titleBlue\"> Hardware Version</div>\n  <div class=\"underlineBlack\"></div>\n  <div class=\"containerInfo\">\n    <div class=\"divKey\">\n      <div *ngFor='let app of hardwareVersionList'>\n        {{app}}\n      </div>\n    </div>\n    <div class=\"divValue\">\n      <div *ngFor='let app of hardwareVersionList'>\n        {{hardwareVersionObject[app]}}\n        <span *ngIf=\"hardwareVersionObject[app] > 1\">Users</span>\n        <span *ngIf=\"hardwareVersionObject[app] <= 1\">User</span>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-info/user-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_project__ = __webpack_require__("../../../../../src/app/class/project.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by yoann on 20/07/2017.
 */



var UserInfoComponent = (function () {
    function UserInfoComponent(database) {
        this.database = database;
        this.appVersionObject = {};
        this.hardwareVersionObject = {};
        this.load = false;
    }
    UserInfoComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.appVersionList = [];
        this.hardwareVersionList = [];
        this.appVersionObject = {};
        this.hardwareVersionObject = {};
        var url;
        this.load = false;
        if (this.project.name !== 'Global')
            url = "dashboard/project/" + this.project.id + "/project-data";
        else
            url = 'dashboard/global';
        this.database.list(url + "/info").subscribe(function (data) {
            data.forEach(function (item) {
                if (item.$key === 'appVersion')
                    _this.appVersionObject = item;
                if (item.$key === 'hardwareVersion')
                    _this.hardwareVersionObject = item;
            });
            for (var key in _this.appVersionObject)
                _this.appVersionList.push(key);
            _this.appVersionList.sort(function (a, b) { return _this.sortDecreasing(a, b); });
            for (var key in _this.hardwareVersionObject)
                _this.hardwareVersionList.push(key);
            _this.hardwareVersionList.sort(function (a, b) { return _this.sortDecreasing(a, b); });
            _this.load = true;
        });
    };
    UserInfoComponent.prototype.sortDecreasing = function (a, b) {
        if (a < b)
            return 1;
        else if (a > b)
            return -1;
        else
            return 0;
    };
    return UserInfoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__class_project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__class_project__["a" /* Project */]) === "function" && _a || Object)
], UserInfoComponent.prototype, "project", void 0);
UserInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-info',
        template: __webpack_require__("../../../../../src/app/user-info/user-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-info/user-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], UserInfoComponent);

var _a, _b;
//# sourceMappingURL=user-info.component.js.map

/***/ }),

/***/ "../../../../../src/assets/background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.372acb102b5f9325d9e7.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map