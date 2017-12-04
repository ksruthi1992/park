import { RouterModule, Routes } from '@angular/router';

import { LotsComponent } from './lots/lots.component';
import { LotsGridComponent } from './lots/lots-grid.component';
import { LotEditComponent } from './lots/lot-edit.component';
import { LotEditReactiveComponent } from './lots/lot-edit-reactive.component';

import { IRouting } from './shared/interfaces';

const routes: Routes = [
  { path: 'lots', component: LotsComponent},
  { path: 'lots/:id', component: LotEditComponent},
  //{ path: 'customers/:id', component: CustomerEditReactiveComponent },
  { path: '**', pathMatch:'full', redirectTo: '/lots' } //catch any unfound routes and redirect to home page
];

export const appRouting: IRouting = { 
    routes: RouterModule.forRoot(routes),
    components: [ 
      LotsComponent, 
      LotEditComponent, 
      LotEditReactiveComponent, 
      LotsGridComponent 
    ]
};
