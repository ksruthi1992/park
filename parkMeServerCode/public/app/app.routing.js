"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var lots_component_1 = require("./lots/lots.component");
var lots_grid_component_1 = require("./lots/lots-grid.component");
var lot_edit_component_1 = require("./lots/lot-edit.component");
var lot_edit_reactive_component_1 = require("./lots/lot-edit-reactive.component");
var routes = [
    { path: 'lots', component: lots_component_1.LotsComponent },
    { path: 'lots/:id', component: lot_edit_component_1.LotEditComponent },
    //{ path: 'customers/:id', component: CustomerEditReactiveComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/lots' } //catch any unfound routes and redirect to home page
];
exports.appRouting = {
    routes: router_1.RouterModule.forRoot(routes),
    components: [
        lots_component_1.LotsComponent,
        lot_edit_component_1.LotEditComponent,
        lot_edit_reactive_component_1.LotEditReactiveComponent,
        lots_grid_component_1.LotsGridComponent
    ]
};
//# sourceMappingURL=app.routing.js.map