import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from 'src/app/private/dashboard/dashboard.module';
import { ListProductModule } from 'src/app/private/list-product/list-product.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  exports:[
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class CoreModule { }
