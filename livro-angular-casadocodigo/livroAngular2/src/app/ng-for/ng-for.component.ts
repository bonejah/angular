import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  nomes: any[] = [
    { id: 1, nome: 'Bruno' },
    { id: 2, nome: 'Leticia' },
    { id: 3, nome: 'Maria' },
    { id: 4, nome: 'Nelia' }
  ];

  constructor() { }

  ngOnInit() {
  }

  meuSave(index: number, nome: any) {
    return nome.id;
  }

  atualizar() {
    this.nomes = [
      { id: 1, nome: 'João' },
      { id: 2, nome: 'Maria' },
      { id: 3, nome: 'Thiago' },
      { id: 4, nome: 'José' },
      { id: 5, nome: 'tatat' }
    ];
    // this.nomes.push({id: 5, nome: 'Miguel'});
  }

}
