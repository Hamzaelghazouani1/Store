import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AllProductComponent } from './components/all-product/all-product.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { PublicComponent } from './public.component';
import { CoreModule } from '../core/module/core.module';
import { HeaderPublicComponent } from '../shared/components/header-public/header-public.component';
import { FooterPublicComponent } from '../shared/components/footer-public/footer-public.component';


@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    AllProductComponent,
    HeaderPublicComponent,
    FooterPublicComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
