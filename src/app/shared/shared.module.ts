import { NgModule } from '@angular/core';
import { MoreTextPipe } from './pipe/more-text.pipe';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  exports:[
    MoreTextPipe,
    MatSidenavModule
  ],
  declarations: [
    MoreTextPipe,
  ]
})
export class SharedModule { }
