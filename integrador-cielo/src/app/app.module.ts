import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';
import { FormaDePagamentoComponent } from './forma-de-pagamento/forma-de-pagamento.component';

@NgModule({
  declarations: [
    AppComponent,
    FormaDePagamentoComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
