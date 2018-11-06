import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  texto: string;
  habilitarBotao: boolean = false;
  valores: string[] = [];
  idade: number;

  constructor() { }

  ngOnInit() {
  }

  meuClick(): void {
    console.log('evento meuClick do botao');
  }

  digitou($event): void {
    console.log($event);
  }

  digitouVarTemplate(valor): void {
    console.log(valor);
  }

  validaSenha(valor: string): void {
    if (valor.length >= 5) {
      this.habilitarBotao = true;
    } else {
      this.habilitarBotao = false;
    }
  }

  gravarSenha(senha): void {
    alert('senha gravada com sucesso, sua senha é: ' + senha)
  }

  adicionarNaLista(conteudo) {
    this.valores.push(conteudo);
  }

  verIdade(idade): void {
    let ano = new Date();
    this.idade = ano.getFullYear() - idade;
  }
}