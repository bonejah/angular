import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css'],
  providers: []
})
export class ListaPessoaComponent implements OnInit {

  pessoas: string[] = ['Bruno', 'Leticia', 'Matheus', 'Bianca'];
  nome: string = "Bruno";

  constructor() { }

  ngOnInit() {
  }

  listar() {

  }

}
