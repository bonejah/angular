import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DadosUsuarioComponent } from './dados-usuario/dados-usuario.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ContatosDataBase } from './servicos/contatos-data-base';


@NgModule({
  declarations: [
    AppComponent,
    DadosUsuarioComponent,
    DetalheUsuarioComponent,
    ListaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ContatosDataBase],
  bootstrap: [AppComponent]
})
export class AppModule { }
