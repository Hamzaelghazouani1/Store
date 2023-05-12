import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { DetailsComponent } from '../shared/components/details/details.component';
import { AuthGuard } from '../core/guard/auth.guard';

const routes: Routes = [
  {path:'',component:PrivateComponent,canActivate:[AuthGuard],children:[
    {path:'',loadChildren: () =>
    import("./dashboard/dashboard.module").then(m => m.DashboardModule)},
    {path:'product',loadChildren: () =>
    import("./list-product/list-product.module").then(m => m.ListProductModule)},
    {path:'preview/:id',component:DetailsComponent}
  ]},
  {path:'**',component:NotFoundComponent,pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
