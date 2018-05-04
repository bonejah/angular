import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';
import { ContatosDataBase } from '../servicos/contatos-data-base';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  listaDeContatos: ContatoModel [] = [];
  @Output() idClicado = new EventEmitter();

  constructor(private dataBaseService: ContatosDataBase) { }

  ngOnInit() {
    this.dataBaseService.enviarContato.subscribe(contatos => this.listaDeContatos = contatos);
  }

  contatoClicado(item: number) {
    this.idClicado.emit(item);
  }
}
