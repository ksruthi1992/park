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
var forms_1 = require("@angular/forms");
var data_service_1 = require("../core/data.service");
var LotEditReactiveComponent = /** @class */ (function () {
    function LotEditReactiveComponent(router, route, dataService, formBuilder) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.lot = {
            pLotSign: '',
            pLotState: '',
            pLotType: '',
            pLotName: '',
            pLotVacancy: 0,
            pLotGeoLat: '',
            pLotGeoLong: '',
            pLotDesc: ''
        };
        this.operationText = 'Insert';
    }
    LotEditReactiveComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id !== '0') {
            this.operationText = 'Update';
            this.getLot(id);
        }
        this.buildForm();
    };
    LotEditReactiveComponent.prototype.getLot = function (id) {
        var _this = this;
        this.dataService.getLot(id)
            .subscribe(function (lot) {
            _this.lot = lot;
            _this.buildForm();
        }, function (err) { return console.log(err); });
    };
    LotEditReactiveComponent.prototype.buildForm = function () {
        this.lotForm = this.formBuilder.group({
            pLotSign: [this.lot.pLotSign, forms_1.Validators.required],
            pLotState: [this.lot.pLotState, forms_1.Validators.required],
            pLotType: [this.lot.pLotType, forms_1.Validators.required],
            pLotName: [this.lot.pLotName, forms_1.Validators.required],
            pLotVacancy: [this.lot.pLotVacancy, forms_1.Validators.required],
            pLotGeoLat: [this.lot.pLotGeoLat, forms_1.Validators.required],
            pLotGeoLong: [this.lot.pLotGeoLong, forms_1.Validators.required],
            pLotDesc: [this.lot.pLotDesc, forms_1.Validators.required],
        });
    };
    LotEditReactiveComponent.prototype.submit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        value._id = this.lot._id;
        if (value._id) {
            this.dataService.updateLot(value)
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
            this.dataService.insertLot(value)
                .subscribe(function (lot) {
                if (lot) {
                    _this.router.navigate(['/lots']);
                }
                else {
                    _this.errorMessage = 'Unable to add parking';
                }
            }, function (err) { return console.log(err); });
        }
    };
    LotEditReactiveComponent.prototype.cancel = function (event) {
        event.preventDefault();
        this.router.navigate(['/lots']);
    };
    LotEditReactiveComponent.prototype.delete = function (event) {
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
    LotEditReactiveComponent = __decorate([
        core_1.Component({
            selector: 'lot-edit-reactive',
            templateUrl: './lot-edit-reactive.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            data_service_1.DataService,
            forms_1.FormBuilder])
    ], LotEditReactiveComponent);
    return LotEditReactiveComponent;
}());
exports.LotEditReactiveComponent = LotEditReactiveComponent;
//# sourceMappingURL=lot-edit-reactive.component.js.map