import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { AllProductComponent } from './components/all-product/all-product.component';

const routes: Routes = [
  {path:'',component:PublicComponent,children:[
    {path:'',component:HomeComponent},
    {path:'product',component:AllProductComponent},
  ]},
  {path:'**',component:NotFoundComponent,pathMatch:"prefix"}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
