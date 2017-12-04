webpackJsonp(["main"],{

/***/ "../../../../../src/client/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/client/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: "\n    <h1>Parking Lots</h1>\n    <div class=\"header-bar\"></div>\n    <app-lots></app-lots>  \n    \n  ",
        styles: []
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/client/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lots_component__ = __webpack_require__("../../../../../src/client/app/lots.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lot_service__ = __webpack_require__("../../../../../src/client/app/lot.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__lots_component__["a" /* LotsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__lot_service__["a" /* LotService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/client/app/lot.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var api = '/api';
var LotService = (function () {
    function LotService(http) {
        this.http = http;
    }
    LotService.prototype.getLots = function () {
        return this.http.get(api + "/lots");
    };
    LotService.prototype.addLot = function (aLot) {
        return this.http.post(api + "/lot/", aLot);
    };
    LotService.prototype.updateLot = function (aLot) {
        return this.http.put(api + "/lot/" + aLot.lotId, aLot);
    };
    LotService.prototype.deleteLot = function (aLot) {
        return this.http.delete(api + "/lot/" + aLot.lotId);
    };
    return LotService;
}());
LotService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], LotService);

var _a;
//# sourceMappingURL=lot.service.js.map

/***/ }),

/***/ "../../../../../src/client/app/lot.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lot; });
var Lot = (function () {
    function Lot() {
    }
    return Lot;
}());

//# sourceMappingURL=lot.js.map

/***/ }),

/***/ "../../../../../src/client/app/lots.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <ul class=\"lots\">\r\n      <li *ngFor=\"let lot of lotCollection\" (click)=\"onSelect(lot)\" [class.selected]=\"lot === selectedLot\">\r\n        <button class=\"delete-button\" (click)=\"deleteLot(lot)\">Delete</button>\r\n        <div class=\"lot-element\">\r\n          <div class=\"lotId\">{{lot.lotId}}</div>\r\n          <div class=\"lotName\">{{lot.lotName}}</div>\r\n          <div class=\"lotLocation\">{{lot.lotLocation}}</div>\r\n          <div class=\"lotVacancy\">{{lot.lotVacancy}}</div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n    <div class=\"editarea\">\r\n      <button (click)=\"enableEditMode()\">Add New Lot</button>\r\n      <div *ngIf=\"currentLot\">\r\n        <div class=\"editfields\">\r\n          <div>\r\n            <label>id: </label>\r\n            <input [(ngModel)]=\"currentLot.lotId\" placeholder=\"lotId\" *ngIf=\"editMode\" />\r\n            <label *ngIf=\"!editMode\" class=\"value\">{{currentLot.lotId}}</label>\r\n          </div>\r\n          <div>\r\n            <label>name: </label>\r\n            <input [(ngModel)]=\"currentLot.lotName\" placeholder=\"lotName\" />\r\n          </div>\r\n          <div>\r\n            <label>location: </label>\r\n            <input [(ngModel)]=\"currentLot.lotLocation\" placeholder=\"location\" />\r\n          </div>\r\n          <div>\r\n            <label>Vacancy: </label>\r\n            <input [(ngModel)]=\"currentLot.lotVacancy\" placeholder=\"lotVacancy\" />\r\n          </div>\r\n        </div>\r\n        <button (click)=\"cancelEditMode()\">Cancel</button>\r\n        <button (click)=\"saveLot()\">Save</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../src/client/app/lots.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lot__ = __webpack_require__("../../../../../src/client/app/lot.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lot_service__ = __webpack_require__("../../../../../src/client/app/lot.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LotsComponent = (function () {
    function LotsComponent(lotService) {
        this.lotService = lotService;
        this.editMode = false;
        this.lotCollection = [];
    }
    LotsComponent.prototype.ngOnInit = function () {
        this.getLots();
    };
    // Get full collection of Lots
    LotsComponent.prototype.getLots = function () {
        var _this = this;
        return this.lotService.getLots().subscribe(function (lotList) {
            _this.lotCollection = lotList;
        });
    };
    // Add or Update a Lot
    LotsComponent.prototype.saveLot = function () {
        var _this = this;
        if (this.editMode) {
            this.lotService.addLot(this.currentLot).subscribe(function (aLot) {
                _this.editMode = false;
                _this.currentLot = null;
                _this.lotCollection.push(aLot);
            });
        }
        else {
            this.lotService.updateLot(this.currentLot).subscribe(function (aLot) {
                _this.editMode = false;
                _this.currentLot = null;
            });
        }
    };
    // Delete a Lot
    LotsComponent.prototype.deleteLot = function (pLot) {
        var _this = this;
        this.lotService.deleteLot(pLot).subscribe(function (res) {
            _this.lotCollection = _this.lotCollection.filter(function (l) { return l !== pLot; });
            if (_this.currentLot === pLot) {
                _this.currentLot = null;
            }
        });
    };
    LotsComponent.prototype.onSelect = function (pLot) {
        this.editMode = false;
        this.currentLot = pLot;
    };
    LotsComponent.prototype.enableEditMode = function () {
        this.editMode = true;
        this.currentLot = new __WEBPACK_IMPORTED_MODULE_1__lot__["a" /* Lot */]();
    };
    LotsComponent.prototype.cancelEditMode = function () {
        this.editMode = false;
        this.currentLot = null;
    };
    return LotsComponent;
}());
LotsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-lots',
        template: __webpack_require__("../../../../../src/client/app/lots.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__lot_service__["a" /* LotService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lot_service__["a" /* LotService */]) === "function" && _a || Object])
], LotsComponent);

var _a;
//# sourceMappingURL=lots.component.js.map

/***/ }),

/***/ "../../../../../src/client/environments/environment.ts":
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

/***/ "../../../../../src/client/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/client/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/client/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/client/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map