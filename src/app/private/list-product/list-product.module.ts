import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProductRoutingModule } from './list-product-routing.module';
import { HeadTableComponent } from './components/head-table/head-table.component';
import { ItemTableComponent } from './components/item-table/item-table.component';
import { ListProductComponent } from './list-product.component';


@NgModule({
  declarations: [
    ListProductComponent,
    HeadTableComponent,
    ItemTableComponent
  ],
  imports: [
    CommonModule,
    ListProductRoutingModule
  ]
})
export class ListProductModule { }
