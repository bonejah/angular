import { Component, OnInit } from '@angular/core';
import { transacoes } from '../mock-transacoes';

@Component({
  selector: 'app-transacao',
  templateUrl: './transacao.component.html',
  styleUrls: ['./transacao.component.css']
})
export class TransacaoComponent implements OnInit {
  transacoesLista = [] = transacoes;

  constructor() { }

  ngOnInit() {
  }

}
