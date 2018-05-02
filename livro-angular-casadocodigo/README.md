# Book Crie aplicacoes com angular o novo framework do google 

## TypeScript
* Variaveis
```
Declaracao de variaveis
let nome_da_variavel: TIPO = valor

Declaração de Tipos Primitivos
let nome: string = "Thiago guedes";
let ano: number = 2017;
let desenvolvedor: boolean = true;

Declaração de array
let lista: number[] = [1, 2, 3, 4];

Declaração generics
let lista: Array<number> = [1, 2, 3, 4];
```

* Classe
```
class Pessoa {
  nome: string;

  constructor(nome: string){
    this.nome = nome; 
  }

  dizOla(): string {
    return 'Olá ' + this.nome;
  }
}

var bruno = new Pessoa('Bruno');
var pessoas: Pessoa[] = new Array();
```
