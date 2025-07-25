import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgesComponent } from './badges/badges.component';

const routes: Routes = [
  {path: 'badges', component: BadgesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularMaterialRoutingModule { }
