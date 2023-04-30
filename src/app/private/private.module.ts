import { NgModule } from '@angular/core';

import { PrivateRoutingModule } from './private-routing.module';
import { CoreModule } from '../core/module/core.module';
import { SharedModule } from '../shared/shared.module';
import { PrivateComponent } from './private.component';
import { AsideComponent } from '../shared/components/aside/aside.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ListProductModule } from './list-product/list-product.module';


@NgModule({
  declarations: [
    PrivateComponent,
    AsideComponent
  ],
  imports: [
    PrivateRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class PrivateModule { }
