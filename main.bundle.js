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
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
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
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var firebaseConfig = {
    apiKey: "AIzaSyAC8BvlIotworGYsiQyGHOoeBBirYQ46J4",
    authDomain: "simprints-dev.firebaseapp.com",
    databaseURL: "https://simprints-dev.firebaseio.com",
    projectId: "simprints-dev",
    storageBucket: "simprints-dev.appspot.com",
    messagingSenderId: "79630518081"
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
        providers: [],
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
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AuthService = (function () {
    function AuthService() {
        this.isLoggedIn = true;
    }
    AuthService.prototype.login = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(true).delay(1000).do(function (val) { return _this.isLoggedIn = true; });
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/change_config/change-config.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".containerSettings{\n\tposition: absolute;\n\tleft: 30px;\n\ttop: 15vh;\n}\n\ninput[type=\"radio\"]{\n\topacity: 1;\n\tposition: relative;\n\tleft: 0px;\n\tmargin-right: 6px;\n\tmargin-left: 6px;\n}\n\ninput[type=\"range\"]{\n\tmargin-right: 5px;\n\tmargin-left: 5px;\n}\n\n.languageInput{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n}\n\n.selectLanguage{\n\tmargin-top: 5px;\n}\n\n.labelLanguage{\n\tmargin-top: 15px;\n\tmargin-right: 10px;\n}\n\n.inputThreshold{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n\tmargin-top: 10px;\n}\n\n.thresholdQuality{\n\tmargin-top: 10px;\n}\n\n.val{\n\tmargin-top: 10px;\n}\n\n.rightVal{\n\tmargin-left: 10px;\n\tmargin-top: 10px;\n}\n\n.submitButton{\n\tmargin-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/change_config/change-config.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='project' class=\"containerSettings\">\n\t<form (ngSubmit)=\"onSubmit()\" #changeConfig=\"ngForm\">\n\t\n\t\t<div class=\"languageInput\">\n\t\t\t<label class=\"labelLanguage\" for=\"language\">Language: </label>\n\t\t\t<select class=\"selectLanguage\" (change)=\"changeSelect($event, language)\">\n\t\t\t\t<option *ngFor=\"let choice of language.choices\" [selected]=\"isDefault(language.value, choice)\">{{choice}}</option>\n\t\t\t</select>\n\t\t</div>\n\t\t<div class=\"thresholdQuality\" *ngIf='thresholdQuality.value'>\n\t\t\t<label for=\"thresholdQuality\">Threshold Quality: {{thresholdQuality.value}}</label>\n\t\t\t<div class=\"inputThreshold\">\n\t\t\t\t<span class=\"val\">{{thresholdQuality.min}}</span>\n\t\t\t\t<p class=\"range-field\">\n\t\t\t\t\t<input type=\"range\" name=\"thresholdQuality\" id=\"thresholdQuality\" [min]=\"thresholdQuality.min\" [max]=\"thresholdQuality.max\" [(ngModel)]=\"thresholdQuality.value\">\n\t\t\t\t</p>\n\t\t\t\t<span class=\"rightVal\">{{thresholdQuality.max}}</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div>\n\t\t\t<label for=\"syncSettings\">Sync Group: </label>\n\t\t\t<span *ngFor=\"let choice of syncSettings.choices\">\n\t\t\t<input class=\"with-gap\" type=\"radio\" name=\"syncSettings\" id=\"choice\" [checked]=\"isDefault(syncSettings.value, choice)\" (change)=\"changeCheck(syncSettings, choice)\">{{choice}}\n\t\t\t</span>\n\t\t</div>\n\t\t<div>\n\t\t\t<label for=\"searchSettings\">Match Group: </label>\n\t\t\t<span *ngFor=\"let choice of searchSettings.choices\">\n\t\t\t<input class=\"with-gap\" type=\"radio\" name=\"searchSettings\" id=\"choice\" [checked]=\"isDefault(searchSettings.value, choice)\" (change)=\"changeCheck(searchSettings, choice)\">{{choice}}\n\t\t\t</span>\n\t\t</div>\n\t\t<button class=\"submitButton\" type=\"submit\">Change Configuration</button>\n\t</form>\n</div>"

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
    }
    ;
    ;
    ;
    ;
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
        component.value = val;
    };
    ChangeConfigComponent.prototype.isDefault = function (defaultValue, val) {
        return defaultValue == val;
    };
    ChangeConfigComponent.prototype.changeSelect = function (e, component) {
        component.value = e.target.value;
    };
    ChangeConfigComponent.prototype.onSubmit = function () {
        console.log(this.syncSettings);
        console.log(this.searchSettings);
        console.log(this.thresholdQuality);
        console.log(this.language);
        this.values = this.database.object('/config/projects/' + this.project.id);
        this.values.update({ language: this.language.value,
            searchSettings: this.searchSettings.value,
            syncSettings: this.syncSettings.value,
            thresholdQuality: this.thresholdQuality.value });
        console.log("submit");
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
exports.push([module.i, ".textProjectManager{\n\tfont-weight: bold;\n}\n\n.containerChart{\n\tposition: absolute;\n\tleft: 30px;\n\ttop: 15vh;\n}\n\n.userOnProject{\n\tposition: absolute;\n\tleft: 40vw;\n\ttop: 0px;\n\twidth: 50%;\n}\n\n.bold{\n\tfont-weight: bold;\n}\n\n.inline{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n}\n.choiceUser{\n\tmargin-top: 40px;\n\twidth: 50%;\n}\n\n.imgUser{\n\twidth: 20px;\n\theight: 20px;\n}\n\n.textUser{\n\ttext-align: center;\n\tcolor: rgb(175, 176, 177);\n\tmargin-top: 2px;\n\tmargin-left: 3px;\n}\n\n.selectUser{\n\tmargin-top: 2px;\n}\n\n.enrollmentAndIdentification{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n}\n\n.enrollment{\n\tbackground-color: white;\n\tmargin-top: 30px;\n\tcolor: rgb(231, 95, 156);\n\tpadding-left: 5px;\n\tpadding-top: 9px;\n\twidth: 35vw;\n}\n\n.textEnrollment{\n\tfont-size: 110%;\n}\n\n.barAndValueEnrollment{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n}\n\n.barEnrollment{\n\tborder: 1px solid rgb(231, 95, 156);\n\theight: 45px;\n\twidth: 0px;\n}\n\n.valueEnrollment{\n\tfont-size: 300%;\n\tpadding-left: 20px;\n}\n\n.barUserEnrollment{\n\tmargin-top: 5px;\n\theight: 10px;\n\tbackground-image: linear-gradient(to right, rgb(247, 148, 32), rgb(231, 95, 156));\n}\n\n.barGlobalEnrollment{\n\tbackground-image: linear-gradient(to right, rgb(247, 148, 32), rgb(231, 95, 156));\n\tmargin-top: 5px;\n\twidth: 30vw;\n\theight: 10px;\n\tmargin-bottom: 6px;\n}\n\n.valueBar{\n\tmargin-left: 5px;\n}\n\n.identification{\n\tbackground-color: white;\n\tmargin-top: 30px;\n\tcolor: rgb(139, 197, 68);\n\tmargin-left: 10px;\n\tpadding-left: 5px;\n\tpadding-top: 9px;\n\twidth:35vw;\n}\n\n.textIdentification{\n\tfont-size: 110%;\n}\n\n.barAndValueIdentification{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n}\n\n.barIdentification{\n\tborder: 1px solid rgb(139, 197, 68);\n\theight: 45px;\n\twidth: 0px;\n}\n\n.valueIdentification{\n\tfont-size: 300%;\n\tpadding-left: 20px;\n}\n\n.barUserIdentification{\n\tmargin-top: 5px;\n\theight: 10px;\n\tbackground-image: linear-gradient(to right, rgb(39, 170, 225), rgb(139, 197, 68));\n}\n\n.barGlobalIdentification{\n\tbackground-image: linear-gradient(to right, rgb(39, 170, 225), rgb(139, 197, 68));\n\tmargin-top: 5px;\n\twidth: 30vw;\n\theight: 10px;\n\tmargin-bottom: 6px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='project' class=\"containerChart\">\n\t<div>\n\t\t<span class=\"textProjectManager\">Project Manager: </span><span>Tristram Norman</span>\n\t</div>\n\t<div>\n\t\t<span>Duration: </span><span>1 year, starting at May 3, 2016</span>\n\t</div>\n\t<div class=\"userOnProject\">\n\t\t<div class=\"bold\">User on project: </div>\n\t\t<div>\n\t\t\t{{nbUser}}\n\t\t\t<span *ngIf=\"nbUser > 1\">users</span>\n\t\t\t<span *ngIf=\"nbUser <= 1\">user</span>\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"project.name != 'Global'\" class=\"choiceUser\">\n\t\t<div class=\"inline\">\n\t\t\t<img class=\"imgUser\" src=\"../../assets/iconUser.png\">\n\t\t\t<div class=\"textUser\">Choice User</div>\n\t\t</div>\n\t\t<select class=\"selectUser\" (change)=\"changeUser($event)\">\n\t\t\t<option *ngFor='let user of project.users' value=\"{{user.index}}\">\n\t\t\t\t{{user.id}}\n\t\t\t</option>\n\t\t</select>\n\t</div>\n\t<div class=\"enrollmentAndIdentification\">\n\t\t<div class=\"enrollment\">\n\t\t\t<div class=\"textEnrollment\">\n\t\t\t\tEnrollments\n\t\t\t</div>\n\t\t\t<div class=\"barAndValueEnrollment\">\n\t\t\t\t<div class=\"barEnrollment\"></div>\n\t\t\t\t<div *ngIf=\"project.name != 'Global'\" class=\"valueIdentification\">{{selectedUser.patientCount}}</div>\n\t\t\t\t<div *ngIf=\"project.name == 'Global'\" class=\"valueIdentification\">{{project.patientCount}}</div>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"project.name != 'Global'\" class=\"inline\">\n\t\t\t\t<div class=\"barUserEnrollment\" [style.width]=\"widthEnrollment\"></div>\n\t\t\t\t<div class=\"valueBar\">{{patientCountPercentage | number : '1.2-2' }}%</div>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"project.name != 'Global'\" class=\"inline\">\n\t\t\t\t<div class=\"barGlobalEnrollment\"></div>\n\t\t\t\t<div class=\"valueBar\">{{project.patientCount}}</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"identification\">\n\t\t\t<div class=\"textIdentification\">\n\t\t\t\tIdentifications\n\t\t\t</div>\n\t\t\t<div class=\"barAndValueIdentification\">\n\t\t\t\t<div class=\"barIdentification\"></div>\n\t\t\t\t<div *ngIf=\"project.name != 'Global'\" class=\"valueIdentification\">{{selectedUser.idCount}}</div>\n\t\t\t\t<div *ngIf=\"project.name == 'Global'\" class=\"valueIdentification\">{{project.idCount}}</div>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"project.name != 'Global'\" class=\"inline\">\n\t\t\t\t<div class=\"barUserIdentification\" [style.width]=\"widthIdentification\"></div>\n\t\t\t\t<div class=\"valueBar\">{{idCountPercentage | number : '1.2-2' }}%</div>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"project.name != 'Global'\" class=\"inline\">\n\t\t\t\t<div class=\"barGlobalIdentification\"></div>\n\t\t\t\t<div class=\"valueBar\">{{project.idCount}}</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--<div id=\"chart\"\n\t\t\t[style.height]=\"chartUserId.height\"\n\t\t\t[style.width]=\"chartUserId.width\" \n\t\t    [style.top]=\"chartUserId.top\"\n\t\t    [style.left]=\"chartUserId.left\"\t\n\t\t    style=\"position: absolute; border: 1px solid black;\" drag-drop>\n\t\t<canvas baseChart \n\t        [datasets]=\"chartUserId.data\"\n\t        [labels]=\"chartUserId.labels\"\n\t        [options]=\"chartUserId.options\"\n\t        [legend]=\"chartUserId.legend\"\n\t        [chartType]=\"chartUserId.type\">\n\t    </canvas>\n\t</div>-->\n</div>"

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_project__ = __webpack_require__("../../../../../src/app/class/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_chart__ = __webpack_require__("../../../../../src/app/class/chart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_user__ = __webpack_require__("../../../../../src/app/class/user.ts");
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
        this.chartUserId = new __WEBPACK_IMPORTED_MODULE_4__class_chart__["a" /* Chart */]();
        this.nbUser = 0;
        this.selectedUser = new __WEBPACK_IMPORTED_MODULE_5__class_user__["a" /* User */]();
        this.widthBar = (window.screen.width * 30) / 100;
    }
    ChartComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.project !== undefined) {
            if (this.project.users.length != 0) {
                this.selectedUser = this.project.users[0];
                this.nbUser = this.project.users.length;
                this.changeValue();
            }
            else {
                this.database.list('/global-stats/projects/' + this.project.id + '/users').subscribe(function (data) {
                    _this.nbUser = 0;
                    data.forEach(function (item) {
                        _this.cpyInformation(item, _this.nbUser);
                        _this.nbUser++;
                    });
                    _this.selectedUser = _this.project.users[0];
                    if (_this.project.name !== "Global")
                        _this.changeValue();
                });
            }
        }
    };
    ChartComponent.prototype.cpyInformation = function (info, nbUser) {
        var newUser = new __WEBPACK_IMPORTED_MODULE_5__class_user__["a" /* User */]();
        newUser.create(nbUser, info.idCount, info.patientCount, info.userId);
        this.project.users.push(newUser);
    };
    ChartComponent.prototype.changeUser = function (e) {
        this.selectedUser = this.project.users[e.target.value];
        this.changeValue();
    };
    ChartComponent.prototype.changeValue = function () {
        if (this.selectedUser.idCount == 0 || this.selectedUser.idCount === undefined) {
            this.idCountPercentage = 0;
            this.selectedUser.idCount = 0;
        }
        else
            this.idCountPercentage = (this.selectedUser.idCount / this.project.idCount) * 100;
        if (this.selectedUser.patientCount == 0 || this.selectedUser.patientCount === undefined) {
            this.patientCountPercentage = 0;
            this.selectedUser.patientCount = 0;
        }
        else
            this.patientCountPercentage = (this.selectedUser.patientCount / this.project.patientCount) * 100;
        this.widthEnrollment = ((this.widthBar / 100) * this.patientCountPercentage) + "px";
        this.widthIdentification = ((this.widthBar / 100) * this.idCountPercentage) + "px";
    };
    ChartComponent.prototype.drawChart = function () {
        var _this = this;
        var data = [];
        var labels = [];
        for (var i = 0; i < this.project.users.length; i++) {
            data.push(this.project.users[i].idCount);
            labels.push(this.project.users[i].id);
        }
        this.chartUserId.labels = labels;
        this.chartUserId.data = [{ data: data, label: "Number of identification" }];
        this.chartUserId.type = 'bar';
        this.chartUserId.legend = true;
        this.chartUserId.left = '200px';
        this.chartUserId.top = (window.innerHeight * 16) / 100 + 'px';
        this.chartUserId.width = '565px';
        this.chartUserId.height = '300px';
        this.chartUserId.options = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 10
                        }
                    }],
                xAxes: [{
                        ticks: {
                            display: true,
                            fontSize: 10
                        }
                    }]
            },
            legend: {
                labels: {
                    fontColor: 'red'
                }
            }
        };
        setTimeout(function () {
            if (_this.chart && _this.chart.chart && _this.chart.chart.config) {
                _this.chart.chart.config.data.labels = _this.chartUserId.labels;
                _this.chart.chart.update();
            }
        });
    };
    return ChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"]) === "function" && _a || Object)
], ChartComponent.prototype, "chart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__class_project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__class_project__["a" /* Project */]) === "function" && _b || Object)
], ChartComponent.prototype, "project", void 0);
ChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chart',
        template: __webpack_require__("../../../../../src/app/chart/chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chart/chart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _c || Object])
], ChartComponent);

var _a, _b, _c;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/class/chart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chart; });
var Chart = (function () {
    function Chart() {
        this.labels = [];
        this.data = [];
        this.color = [];
    }
    return Chart;
}());

//# sourceMappingURL=chart.js.map

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

/***/ "../../../../../src/app/class/coordinate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coordinate; });
var Coordinate = (function () {
    function Coordinate() {
    }
    return Coordinate;
}());

//# sourceMappingURL=coordinate.js.map

/***/ }),

/***/ "../../../../../src/app/class/project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project() {
    }
    Project.prototype.create = function (_idCount, _patientCount, _id, _name) {
        this.idCount = _idCount;
        this.patientCount = _patientCount;
        this.id = _id;
        this.name = _name;
    };
    return Project;
}());

//# sourceMappingURL=project.js.map

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

/***/ "../../../../../src/app/class/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    User.prototype.create = function (_index, _idCount, _patientCount, _id) {
        this.index = _index;
        this.idCount = _idCount;
        this.patientCount = _patientCount;
        this.id = _id;
        this.sessions = [];
    };
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".barTop{\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 20vw;\n\twidth: 80vw;\n\theight: 25vh; /* if the value change change too in drag-drop.directive */\n\tcolor: white;\n\tfont-size: 250%;\n\ttext-align: center;\n}\n\n.imgTop{\n\twidth: 80vw;\n\theight: 25vh;\n}\n\n.textBarTop{\n\tposition: absolute;\n\ttop: 12vh;\n\tleft: 30vw;\n}\n\n.mainContainer{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n\tposition: absolute;\n\tleft: 20vw;\n\ttop: 25vh;\n\tbackground-color: rgb(241, 241, 241);\n\twidth: 80vw;\n\theight: 75vh;\n}\n\n.mainTitle{\n\tmargin-top: 0px;\n\tpadding-top: 30px;\n\tfont-size: 175%;\n\tpadding-left: 2vw;\n\tcolor: rgba(255, 255, 255, 0.5);\n}\n\n.mainTitleNext{\n\tfont-size: 175%;\n\tpadding-left: 2vw;\n\tcolor: rgba(255, 255, 255, 0.5);\n}\n\n.borderSeparate{\n\tmargin-left: 1vw;\n\tmargin-right: 1vw;\n\tborder: 1px solid white;\n\theight: 2px;\n}\n\n.globalText{\n\tmargin-left: 2vw;\n\tmargin-top: 1vh;\n\tmargin-bottom: 1vh;\n}\n\n.selectMapChartSetting{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n\theight: 100px;\n}\n\n.blockTextBorder{\n\twidth: 150px;\n\theight: 50px;\n\tmargin-top: 20px;\n\tmargin-left: 30px;\n\tcolor: rgb(158, 159, 160);\n}\n\n.blueText{\n\tcolor: rgb(30, 109, 147);\n}\n\n.blueBorder{\n\tborder: 1px solid rgb(30, 109, 147);\n\twidth: 150px;\n}\n\n.borderUnderline{\n\tborder: 1px solid rgb(175, 176, 177);\n\twidth: 150px;\n}\n\n.projectName{\n\tpadding-top: 15px;\n\tpadding-left: 2vw;\n}\n\n.selectProject{\n\tcolor: rgb(30, 109, 147);\n}\n\n.listProject{\t\n\tbackground-color: rgba(33, 33, 33, 1);\n\tcolor: white;\n\tmargin-left: 0px;\n\twidth: 20vw;\n\toverflow-y: scroll;\n\theight: 100vh;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"listProject\">\n\t<div class=\"mainTitle\">Simprints</div>\n\t<div class=\"mainTitleNext\">Projects </div>\n\t<div class=\"mainTitleNext\">Dashboards</div><br/>\n\t<div class=\"borderSeparate\"></div>\n\t<div class=\"globalText\" (click)=\"seeGlobal()\">Global</div>\n\t<div class=\"borderSeparate\"></div>\n\t<div *ngFor='let project of projects'>\n\t\t<div (click)=\"selectProject(project)\">\n\t\t\t<div *ngIf='project == selectedProject' class=\"projectName selectProject\">\n\t\t\t\t{{project.name}}\n\t\t\t</div>\n\t\t\t<div *ngIf='project != selectedProject' class=\"projectName\" >\n\t\t\t\t{{project.name}}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"barTop\">\n\t<img class=\"imgTop\" src=\"../../assets/backgroundTop.png\">\n\t<div *ngIf='!selectedProject' class=\"textBarTop\">Your Dashboard</div>\n\t<div *ngIf='selectedProject' class=\"textBarTop\">{{selectedProject.name}}</div>\n</div>\n<div *ngIf='selectedProject' id=\"container\" class=\"mainContainer\">\n\t<div class=\"selectMapChartSetting\">\n\t\t<div *ngIf=\"selectOption == 'Chart'\" class=\"blockTextBorder blueText\">\n\t\t\t<div>Chart</div>\n\t\t\t<div class=\"blueBorder\"></div>\n\t\t</div>\n\t\t<div *ngIf=\"selectOption != 'Chart'\" class=\"blockTextBorder\" (click)=\"selectOption = 'Chart'\">\n\t\t\t<div>Chart</div>\n\t\t\t<div class=\"borderUnderline\"></div>\n\t\t</div>\n\t\t<div *ngIf=\"selectOption == 'Map'\" class=\"blockTextBorder blueText\">\n\t\t\t<div>Map</div>\n\t\t\t<div class=\"blueBorder\"></div>\n\t\t</div>\n\t\t<div *ngIf=\"selectOption != 'Map'\" class=\"blockTextBorder\" (click)=\"selectOption = 'Map'\">\n\t\t\t<div>Map</div>\n\t\t\t<div class=\"borderUnderline\"></div>\n\t\t</div>\n\t\t<div *ngIf=\"selectOption == 'Settings'\" class=\"blockTextBorder blueText\">\n\t\t\t<div>Settings</div>\n\t\t\t<div class=\"blueBorder\"></div>\n\t\t</div>\n\t\t<div *ngIf=\"selectOption != 'Settings'\" class=\"blockTextBorder\" (click)=\"selectOption = 'Settings'\">\n\t\t\t<div>Settings</div>\n\t\t\t<div class=\"borderUnderline\"></div>\n\t\t</div>\n\t</div>\n\t<chart *ngIf=\"selectOption == 'Chart'\" [project]=\"selectedProject\"></chart>\n\t<map-event *ngIf=\"selectOption == 'Map'\" [project]=\"selectedProject\"></map-event>\n\t<change-config *ngIf=\"selectOption == 'Settings' && selectedProject.name != 'Global'\" [project]=\"selectedProject\"></change-config>\n\t<change-config-admin *ngIf=\"selectOption == 'Settings' && selectedProject.name == 'Global'\" [project]=\"selectedProject\"></change-config-admin>\n\t<!--<table [project]=\"selectedProject\"></table>-->\n\t<!--<map   [project]=\"selectedProject\"></map>-->\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_project__ = __webpack_require__("../../../../../src/app/class/project.ts");
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
    function DashboardComponent(database) {
        this.database = database;
        this.globalProject = new __WEBPACK_IMPORTED_MODULE_2__class_project__["a" /* Project */]();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projects = [];
        this.database.list('/global-stats/global').subscribe(function (data) {
            data.forEach(function (item) {
                if (item.$key == "patientCount") {
                    _this.globalProject.patientCount = item.$value;
                }
                else if (item.$key == "idCount") {
                    _this.globalProject.idCount = item.$value;
                }
            });
            _this.globalProject.name = "Global";
        });
        this.database.list('/global-stats/projects').subscribe(function (data) {
            data.forEach(function (item) {
                if (item.projectName !== undefined)
                    _this.cpyInformation(item);
            });
            _this.projects.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                else if (a.name > b.name)
                    return 1;
                else
                    return 0;
            });
        });
    };
    DashboardComponent.prototype.cpyInformation = function (info) {
        var newProject = new __WEBPACK_IMPORTED_MODULE_2__class_project__["a" /* Project */]();
        newProject.create(info.idCount, info.patientCount, info.projectId, info.projectName);
        this.projects.push(newProject);
    };
    DashboardComponent.prototype.selectProject = function (project) {
        this.selectedProject = project;
        this.selectedProject.users = [];
        this.selectOption = "Chart";
    };
    DashboardComponent.prototype.seeGlobal = function () {
        this.selectProject(this.globalProject);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
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
            __WEBPACK_IMPORTED_MODULE_20__change_config_admin_change_config_admin_component__["a" /* ChangeConfigAdminComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
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

module.exports = "<div class=\"background\">\n  <h1 class=\"title\">Customized Dashboard</h1>\n  <button (click)=\"login()\" class=\"connexionButton\">Sign in with Google</button>\n</div>\n<div class=\"bluebar\">\n  Create your own charts by choosing your project and criteria\n</div>"

/***/ }),

/***/ "../../../../../src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
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
    function LoginComponent(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjOWM5YzQwYi04NDQ0LTQyZTEtOWMxOS02ZmM0OGNkNTMwOWIiLCJpYXQiOjE0OTg2NDIzODksImV4cCI6MTQ5ODY0NTk4OSwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eXRvb2xraXQuZ29vZ2xlYXBpcy5jb20vZ29vZ2xlLmlkZW50aXR5LmlkZW50aXR5dG9vbGtpdC52MS5JZGVudGl0eVRvb2xraXQiLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay12NGJhMUBzaW1wcmludHMtZGV2LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstdjRiYTFAc2ltcHJpbnRzLWRldi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSJ9.X05gPed4prEdfx-U2FPr7hSJlwWyareiQ8QPUBbZxZgp7IG1kpVGn6Z5uP1QqrNXCVSYmxtw4PkUuPn5cDjxWhpdf8Ht6hMlwScsoTG1ZkhKNMLAYGBuHbDtspUWLaDaXGlCj8AVXwBzZ41K-vHaDf2vNfT6kLkI2KfoBHDnzFOfuU2LOZ2qE2kSPWiOCSLyzoB_IIqBCaLMcgq-ae3fdfK4VjErkqkTGhkvvqyllAEP4T98V_uRujqNXEPqqe8IGZr1Oo-aU_Y6P_6yWdppOLs5w21TXr-3HDUnWiIW9omOYp72xdEOSnMS8hl68R5iesIJvgVA2q-k69Eh5Ffhwg";
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider()).then(function (data) { return _this.checkUser(); });
    };
    LoginComponent.prototype.checkUser = function () {
        var _this = this;
        if (this.authorizeUser()) {
            this.afAuth.auth.signInWithCustomToken(this.token).then(function (data) { return _this.router.navigate(['/dashboard']); });
        }
        else {
            alert("bad user");
        }
    };
    LoginComponent.prototype.authorizeUser = function () {
        var regex = new RegExp("^.+@simprints.com");
        return regex.test(this.afAuth.auth.currentUser.email);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='project'>\n\t<div style=\"position: absolute; border: 1px solid black; left:900px; top:120px; width:300px;height: 300px;\" >\n\t\t<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n\t  \t\t<agm-marker *ngFor=\"let coordinate of coordinates\" [latitude]=\"coordinate.lat\" [longitude]=\"coordinate.lng\"></agm-marker>\n\t\t</agm-map>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_project__ = __webpack_require__("../../../../../src/app/class/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_coordinate__ = __webpack_require__("../../../../../src/app/class/coordinate.ts");
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
        this.lat = 0;
        this.lng = 0;
        this.coordinates = [];
    }
    MapComponent.prototype.ngOnChanges = function () {
        if (this.project !== undefined) {
            this.drawMap(0);
        }
    };
    MapComponent.prototype.drawMap = function (index) {
        var _this = this;
        this.database.list('/project-sessions/' + this.project.id, {
            query: {
                orderByChild: 'userId',
                equalTo: this.project.users[index].id,
                limitToFirst: 100
            }
        }).subscribe(function (data) {
            var val = [];
            var newData = false;
            data.forEach(function (item) {
                var newCoord = new __WEBPACK_IMPORTED_MODULE_3__class_coordinate__["a" /* Coordinate */]();
                if (item.latitude != '' && item.longitude != '') {
                    newCoord.lat = parseFloat(item.latitude);
                    newCoord.lng = parseFloat(item.longitude);
                    if (newData === false) {
                        _this.lat = newCoord.lat;
                        _this.lng = newCoord.lng;
                        newData = true;
                    }
                    val.push(newCoord);
                }
            });
            _this.coordinates = val;
        });
    };
    return MapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__class_project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__class_project__["a" /* Project */]) === "function" && _a || Object)
], MapComponent.prototype, "project", void 0);
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'map',
        template: __webpack_require__("../../../../../src/app/map/map.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], MapComponent);

var _a, _b;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/map_event/map-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".containerMap{\n\tposition: absolute;\n\tleft: 30px;\n\ttop: 10vh;\n}\n\n.map{\n\twidth: 76vw;\n\theight: 50vh;\n}\n\n.arrowLeft{\n\tposition: absolute;\n\tleft: -20px;\n\ttop: 55vh;\n\twidth: 20px;\n\theight: 30px;\n}\n\n.arrowRight{\n\tposition: absolute;\n\tright: -20px;\n\ttop: 55vh;\n\twidth: 20px;\n\theight: 30px;\n}\n\n.inline{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n}\n\n.containerListEvent{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex; \n\t-webkit-box-flex: 1; \n\t    -ms-flex: 1; \n\t        flex: 1;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row; \n\twidth: 76vw; \n\theight: 100px; \n\toverflow-x: scroll;\n\tbackground-color: rgb(158, 159, 160);\n}\n\n.event{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex; \n\tmin-width: 19%; \n\ttext-align: center; \n\tdisplay: block;\n\tbackground-color: white;\n\tmargin: 4px;\n}\n\n.marginTopUserId{\n\tmargin-top: 15px;\n}\n\n.UPDATE{\n\tborder: 5px solid rgb(246, 139, 31);\n}\n\n.IDENTIFY{\n\tborder: 5px solid rgb(71, 139, 202);\n}\n\n.REGISTER{\n\tborder: 5px solid rgb(58, 158, 66);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map_event/map-event.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='project' class=\"containerMap\">\n\t<div>\n\t\t<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" class=\"map\">\n\t  \t\t<agm-marker *ngFor=\"let coordinate of coordinates\" [latitude]=\"coordinate.latitude\" [longitude]=\"coordinate.longitude\" [iconUrl]=\"coordinate.iconUrl\" [zIndex]=\"coordinate.zIndex\"></agm-marker>\n\t\t</agm-map>\n\t\t<div class=\"</div>\">\n\t\t\t<img src=\"../../assets/leftArrow.png\" class=\"arrowLeft\">\n\t\t\t<div (scroll)=\"onScroll($event)\" class=\"containerListEvent\">\n\t\t\t\t<div class=\"event\" *ngFor=\"let item of allCoordinates\">\n\t\t\t\t\t<div class=\"card-horizontal\" (click)=\"zoomOnElement(item)\">\n\t\t\t\t\t\t<div class=\"card-stacked\">\n\t      \t\t\t\t\t<div class=\"card-content\">\n\t      \t\t\t\t\t\t<div [class]=\"item.callout\"></div>\n\t\t\t\t\t\t\t\t<p *ngIf=\"item.userId.length > 20 || item.metadata != ''\">{{item.userId}}</p>\n\t\t\t\t\t\t\t\t<p *ngIf=\"item.userId.length <= 20 && item.metadata == ''\" class=\"marginTopUserId\">{{item.userId}}</p>\n\t\t\t\t\t\t\t\t<p>{{item.metadata}}</p>\n\t\t\t\t\t\t\t\t<p>{{item.startTime | date}}</p>\n\t\t\t\t\t\t\t\t<p>{{item.moduleId}}</p>\n\t      \t\t\t\t\t</div>\n\t      \t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf='load'>\n\t\t\t\t\t<ngl-spinner size=\"large\" type=\"brand\" container=\"true\"></ngl-spinner>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<img src=\"../../assets/rightArrow.png\" class=\"arrowRight\">\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/map_event/map-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_project__ = __webpack_require__("../../../../../src/app/class/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_session__ = __webpack_require__("../../../../../src/app/class/session.ts");
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
        this.nbValDisplay = 5;
        this.first = 0;
        this.last = this.nbValDisplay - 1;
        this.load = false;
        this.finish = false;
        this.allCoordinates = [];
        this.coordinates = [];
        this.maxZindex = 1;
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
        var size = e.target.clientWidth;
        var sizeOneItem = size / this.nbValDisplay;
        this.first = Math.round(e.target.scrollLeft / sizeOneItem);
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
                limitToLast: this.nbValDisplay * 10
            }
        }).subscribe(function (data) {
            console.log(data);
            var val = [];
            var first = true;
            var newData = false;
            data.forEach(function (item) {
                var newCoord = new __WEBPACK_IMPORTED_MODULE_3__class_session__["a" /* Session */]();
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
    MapEventComponent.prototype.leftMove = function () {
        if (this.first !== 0) {
            this.first--;
            this.last--;
            this.changeValue();
        }
    };
    MapEventComponent.prototype.rightMove = function () {
        if (this.load === false) {
            this.first++;
            this.last++;
            console.log(this.first, this.last, this.max);
            if (this.last >= this.max) {
                this.load = true;
                this.loadOtherValue();
            }
            else {
                this.changeValue();
            }
        }
    };
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
                var newCoord = new __WEBPACK_IMPORTED_MODULE_3__class_session__["a" /* Session */]();
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
            console.log(val);
            console.log(val.substring(0, 20) + " " + val.substring(20));
            return val.substring(0, 20) + " " + val.substring(20);
        }
        else
            return val;
    };
    return MapEventComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__class_project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__class_project__["a" /* Project */]) === "function" && _a || Object)
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

/***/ "../../../../../src/app/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='project'>\n\t<div (dblclick)=\"test($event)\" style=\"position: absolute; width: 500px; height: 300px; left: 180px; top: 420px\" drag-drop>\n\t\t<ng2-smart-table  [settings]=\"settings\" [source]=\"data\" ></ng2-smart-table>\n\t</div>\n\t<div *ngIf='showUser' id=\"test\" style=\"position: absolute; width: 100vw; left: 102vw;\">\n\t\t<div style=\"padding-left: 20vw;\">\n\t\t\t<h2>Change the user</h2>\n\t\t\t<div *ngFor='let user of project.users' style=\"margin-bottom: 20px;\">\n\t\t\t\t<div (click)=\"changeUser(user.index)\">\n\t\t\t\t\t{{user.id}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_project__ = __webpack_require__("../../../../../src/app/class/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_session__ = __webpack_require__("../../../../../src/app/class/session.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var TableComponent = (function () {
    function TableComponent(database, pageScrollService, document) {
        this.database = database;
        this.pageScrollService = pageScrollService;
        this.document = document;
        this.showUser = false;
        this.data = [];
        this.settings = {
            columns: {
                userId: {
                    title: 'User id',
                    editable: false
                },
                hardwareVersion: {
                    title: 'Hardware Version',
                    editable: false
                },
                startTime: {
                    title: 'Start Time',
                    editable: false
                },
                latitude: {
                    title: 'Latitude',
                    editable: false
                },
                longitude: {
                    title: 'Longitude',
                    editable: false
                },
            },
            actions: false,
            add: false,
            hideSubHeader: true,
            pager: {
                perPage: 5
            }
        };
    }
    TableComponent.prototype.ngOnChanges = function () {
        if (this.project !== undefined) {
            this.drawTable(0);
        }
    };
    TableComponent.prototype.test = function (e) {
        var _this = this;
        console.log(e);
        this.showUser = true;
        var pageScrollInstance = __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__["b" /* PageScrollInstance */].newInstance({ document: this.document, scrollTarget: '#test', verticalScrolling: false });
        setTimeout(function () { return _this.pageScrollService.start(pageScrollInstance); }, 200);
    };
    TableComponent.prototype.changeUser = function (index) {
        var _this = this;
        this.drawTable(index);
        var pageScrollInstance = __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__["b" /* PageScrollInstance */].newInstance({ document: this.document, scrollTarget: '#container', verticalScrolling: false });
        this.pageScrollService.start(pageScrollInstance);
        setTimeout(function () { return _this.showUser = false; }, __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__["c" /* PageScrollConfig */].defaultDuration);
    };
    TableComponent.prototype.drawTable = function (index) {
        var _this = this;
        this.database.list('/project-sessions/' + this.project.id, {
            query: {
                orderByChild: 'userId',
                equalTo: this.project.users[index].id,
                limitToFirst: 1000
            }
        }).subscribe(function (data) {
            data.forEach(function (item) {
                var session = new __WEBPACK_IMPORTED_MODULE_4__class_session__["a" /* Session */]();
                session.cpyInformation(item);
                _this.project.users[index].sessions.push(session);
            });
            _this.data = _this.project.users[index].sessions;
        });
    };
    return TableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__class_project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__class_project__["a" /* Project */]) === "function" && _a || Object)
], TableComponent.prototype, "project", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('container'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], TableComponent.prototype, "container", void 0);
TableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'table',
        template: __webpack_require__("../../../../../src/app/table/table.component.html")
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__["d" /* PageScrollService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__["d" /* PageScrollService */]) === "function" && _d || Object, Object])
], TableComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=table.component.js.map

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