import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './private/dashboard/dashboard.module';
import { ListProductComponent } from './private/list-product/list-product.component';
import { ListProductModule } from './private/list-product/list-product.module';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { AllProductComponent } from './public/components/all-product/all-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    AllProductComponent,
    PublicComponent,
    PublicComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    ListProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
