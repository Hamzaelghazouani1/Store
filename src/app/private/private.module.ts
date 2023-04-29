import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { CoreModule } from '../core/module/core.module';


@NgModule({
  declarations: [],
  imports: [
    PrivateRoutingModule,
    CoreModule
  ]
})
export class PrivateModule { }
