import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProductRoutingModule } from './list-product-routing.module';
import { HeadTableComponent } from './components/head-table/head-table.component';
import { ItemTableComponent } from './components/item-table/item-table.component';
import { ListProductComponent } from './list-product.component';
import { PopUpComponent } from 'src/app/shared/components/pop-up/pop-up.component';
import { CoreModule } from 'src/app/core/module/core.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListProductComponent,
    HeadTableComponent,
    ItemTableComponent,
    PopUpComponent
  ],
  imports: [
    CommonModule,
    ListProductRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class ListProductModule { }
