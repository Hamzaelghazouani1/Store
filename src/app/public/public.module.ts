import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AllProductComponent } from './components/all-product/all-product.component';
import { SharedModule } from '../shared/shared.module';
import { PublicComponent } from './public.component';
import { CoreModule } from '../core/module/core.module';
import { HeaderPublicComponent } from '../shared/components/header-public/header-public.component';
import { FooterPublicComponent } from '../shared/components/footer-public/footer-public.component';
import { LoginComponent } from './components/login/login.component';
import { DetailsComponent } from '../shared/components/details/details.component';
import { CardComponent } from '../shared/components/card/card.component';


@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    AllProductComponent,
    HeaderPublicComponent,
    FooterPublicComponent,
    LoginComponent,
    DetailsComponent,
    CardComponent,
  ],
  imports: [
    SharedModule,
    CoreModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
