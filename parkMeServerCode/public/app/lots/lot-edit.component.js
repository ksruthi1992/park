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
var data_service_1 = require("../core/data.service");
var LotEditComponent = /** @class */ (function () {
    function LotEditComponent(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.lot = {
            pLotSign: '',
            pLotState: '',
            pLotType: '',
            pLotName: '',
            pLotVacancy: null,
            pLotGeoLat: '',
            pLotGeoLong: '',
            pLotDesc: ''
        };
        this.operationText = 'Insert';
    }
    LotEditComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id !== '0') {
            this.operationText = 'Update';
            this.getLot(id);
        }
    };
    LotEditComponent.prototype.getLot = function (id) {
        var _this = this;
        this.dataService.getLot(id)
            .subscribe(function (lot) {
            _this.lot = lot;
        }, function (err) { return console.log(err); });
    };
    LotEditComponent.prototype.submit = function () {
        var _this = this;
        if (this.lot._id) {
            this.dataService.updateLot(this.lot)
                .subscribe(function (lot) {
                if (lot) {
                    _this.router.navigate(['/lots']);
                }
                else {
                    _this.errorMessage = 'Unable to save parking lot';
                }
            }, function (err) { return console.log(err); });
        }
        else {
            this.dataService.insertLot(this.lot)
                .subscribe(function (lot) {
                if (lot) {
                    _this.router.navigate(['/lots']);
                }
                else {
                    _this.errorMessage = 'Unable to add parking lot';
                }
            }, function (err) { return console.log(err); });
        }
    };
    LotEditComponent.prototype.cancel = function (event) {
        event.preventDefault();
        this.router.navigate(['/']);
    };
    LotEditComponent.prototype.delete = function (event) {
        var _this = this;
        event.preventDefault();
        this.dataService.deleteLot(this.lot._id)
            .subscribe(function (status) {
            if (status) {
                _this.router.navigate(['/lots']);
            }
            else {
                _this.errorMessage = 'Unable to delete parking lot';
            }
        }, function (err) { return console.log(err); });
    };
    LotEditComponent = __decorate([
        core_1.Component({
            selector: 'lot-edit',
            templateUrl: './lot-edit.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            data_service_1.DataService])
    ], LotEditComponent);
    return LotEditComponent;
}());
exports.LotEditComponent = LotEditComponent;
//# sourceMappingURL=lot-edit.component.js.map