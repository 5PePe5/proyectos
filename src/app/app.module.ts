import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FondoazulComponent } from './fondoazul/fondoazul.component';

@NgModule({
  declarations: [
    AppComponent,
    CotizadorComponent,
    HeaderComponent,
    FondoazulComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
