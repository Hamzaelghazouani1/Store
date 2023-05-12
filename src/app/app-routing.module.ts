import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: "admin",
    canActivateChild:[AuthGuard],
    loadChildren: () =>
    import("./private/private.module").then(m => m.PrivateModule)
  },
  {
    path: "",
    loadChildren: () =>
    import("./public/public.module").then(m => m.PublicModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
