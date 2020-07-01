import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularParticleEsModule} from '../../projects/angular-particle-es/src/lib/angular-particle-es.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularParticleEsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
