import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderPublicComponent } from './components/header-public/header-public.component';
import { FooterPublicComponent } from './components/footer-public/footer-public.component';
import { CoreModule } from '../core/module/core.module';
import { CardComponent } from './components/card/card.component';
import { MoreTextPipe } from './pipe/more-text.pipe';
import { DetailsComponent } from './components/details/details.component';



@NgModule({
  exports:[
    MoreTextPipe
  ],
  declarations: [
    MoreTextPipe,
  ]
})
export class SharedModule { }
