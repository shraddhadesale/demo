import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardlistComponent } from './dashboardlist/dashboardlist.component';

const routes: Routes = [
  {path:"dashboard", component:DashboardlistComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
