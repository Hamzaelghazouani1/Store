import { NgModule } from '@angular/core';
import { MoreTextPipe } from './pipe/more-text.pipe';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from './components/pop-up/pop-up.component';



@NgModule({
  exports:[
    MoreTextPipe,
    MatSidenavModule,
    MatDialogModule
  ],
  declarations: [
    MoreTextPipe,
  ]
})
export class SharedModule { }
