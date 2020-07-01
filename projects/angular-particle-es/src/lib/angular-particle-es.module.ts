import { NgModule } from '@angular/core';
import { AngularParticleEsComponent } from './angular-particle-es.component';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [AngularParticleEsComponent],
    imports: [
        CommonModule
    ],
  exports: [AngularParticleEsComponent]
})
export class AngularParticleEsModule { }
