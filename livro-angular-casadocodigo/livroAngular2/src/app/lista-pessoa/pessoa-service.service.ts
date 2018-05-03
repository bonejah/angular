import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {

  nomePessoas: string[] = ['Joao', 'Maria', 'Luizinho'];

  constructor() { }

  getPessoas(): string [] {
    return this.nomePessoas;
  }

  setPessoas(nome: string): void {
    this.nomePessoas.push(nome);
  }
}
