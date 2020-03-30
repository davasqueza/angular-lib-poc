import { NgModule } from '@angular/core';
import { AngularLibPocComponent } from './angular-lib-poc.component';
import {Modulo2Module} from './modulo2/modulo2.module';
import {Modulo1Module} from './modulo1/modulo1.module';

@NgModule({
  declarations: [AngularLibPocComponent],
  imports: [
    Modulo1Module,
    Modulo2Module,
  ],
  exports: [AngularLibPocComponent]
})
export class AngularLibPocModule { }
