"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var data_filter_service_1 = require("../core/data-filter.service");
var data_service_1 = require("../core/data.service");
var LotsComponent = /** @class */ (function () {
    function LotsComponent(router, dataService, dataFilter) {
        this.router = router;
        this.dataService = dataService;
        this.dataFilter = dataFilter;
        this.listLots = [];
        this.filteredLots = [];
        this.totalRecords = 0;
        this.pageSize = 20;
    }
    LotsComponent.prototype.ngOnInit = function () {
        this.title = 'Parking Lots';
        this.getLotsPage(1);
    };
    LotsComponent.prototype.filterChanged = function (filterText) {
        if (filterText && this.listLots) {
            var props = ['pLotName', 'pLotState', 'pLotType', 'pLotVacancy', 'pLotDesc'];
            this.filteredLots = this.dataFilter.filter(this.listLots, props, filterText);
        }
        else {
            this.filteredLots = this.listLots;
        }
    };
    LotsComponent.prototype.pageChanged = function (page) {
        this.getLotsPage(page);
    };
    LotsComponent.prototype.getLotsPage = function (page) {
        var _this = this;
        this.dataService.getLotsPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe(function (response) {
            _this.listLots = _this.filteredLots = response.results;
            _this.totalRecords = response.totalRecords;
        }, function (err) { return console.log(err); }, function () { return console.log('getLotsPage() retrieved parking lots'); });
    };
    LotsComponent = __decorate([
        core_1.Component({
            selector: 'lots',
            templateUrl: './lots.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            data_service_1.DataService,
            data_filter_service_1.DataFilterService])
    ], LotsComponent);
    return LotsComponent;
}());
exports.LotsComponent = LotsComponent;
//# sourceMappingURL=lots.component.js.map