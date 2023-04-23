import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
    import("./public/public.module").then(m => m.PublicModule)
  },{
    path: "admin",
    loadChildren: () =>
    import("./private/private.module").then(m => m.PrivateModule)
  },
  {path:'**',component:NotFoundComponent,pathMatch:"prefix"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
