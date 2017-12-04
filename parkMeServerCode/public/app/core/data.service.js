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
//Using the new HttpClientModule now. If you're still on < Angular 4.3 see the 
//data.service.ts file instead (simplify rename it to the name 
//of this file to use it instead)
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.baseLotsUrl = '/api/lots';
        this.baseCustomersUrl = '/api/customers';
        this.baseStatesUrl = '/api/states';
    }
    // Parking Lot Calls
    DataService.prototype.getLots = function () {
        return this.http.get(this.baseLotsUrl)
            .map(function (lots) {
            return lots;
        })
            .catch(this.handleError);
    };
    DataService.prototype.getLotsPage = function (page, pageSize) {
        return this.http.get(this.baseLotsUrl + "/page/" + page + "/" + pageSize, { observe: 'response' })
            .map(function (res) {
            //Need to observe response in order to get to this header (see {observe: 'response'} above)
            var totalRecords = +res.headers.get('x-inlinecount');
            var lots = res.body;
            return {
                results: lots,
                totalRecords: totalRecords
            };
        })
            .catch(this.handleError);
    };
    DataService.prototype.getLot = function (id) {
        return this.http.get(this.baseLotsUrl + '/' + id)
            .catch(this.handleError);
    };
    DataService.prototype.insertLot = function (lot) {
        return this.http.post(this.baseLotsUrl, lot)
            .map(function (data) {
            console.log('insertLot status: ' + data.status);
            return data.lot;
        })
            .catch(this.handleError);
    };
    DataService.prototype.updateLot = function (lot) {
        return this.http.put(this.baseLotsUrl + '/' + lot._id, lot)
            .map(function (data) {
            console.log('updateLot status: ' + data.status);
            return data.lot;
        })
            .catch(this.handleError);
    };
    DataService.prototype.deleteLot = function (id) {
        return this.http.delete(this.baseLotsUrl + '/' + id)
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            var errMessage = error.error.message;
            return Observable_1.Observable.throw(errMessage);
            // Use the following instead if using lite-server
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable_1.Observable.throw(error || 'Node.js server error');
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map