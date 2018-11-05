import { Component } from '@angular/core';

import { ContatoModel } from './modelos/contato-model';
import { ContatosDataBase } from './servicos/contatos-data-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projetos de Contatos com Angular 2';

  contatoclicado: ContatoModel;
  constructor(private dataBaseService: ContatosDataBase){}

  enviarDetalhe(id): void {
    console.log(id);
    this.contatoclicado = this.dataBaseService.getContato(id);
  }
}
