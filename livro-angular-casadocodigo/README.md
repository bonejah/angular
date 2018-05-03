# Book Crie aplicacoes com angular o novo framework do google 


## Node
```
package.json: contém as dependencias do projeto, nome, autor, nome projeto

npm new nome-do-projeto: cria um novo projeto 

npm install: instala as dependencias do projeto conforme descritas no arquivo package.json

```

## TypeScript
* Install
```
npm install -g typescript: para instalar o TypeScript globalmente

tsc -v: verifica a versão instalada

```

## Angular CLI
```
npm install -g angular-cli: para instalar o Angular CLI globalmente

ng new nome-do-projeto: cria um novo projeto
ng init: faz a mesma coisa que o ng new porém não cria a nova pasta
ng server: builda a aplicação e sobe o servidor, tem livereload.
ng generate / ng g: cria os objetos do angular (component, service, class, interface)
ng lint: comando serve para organizar o codigo
ng test: comando utilizado para realizar testes unitarios dos componentes utilizando o Karma e o Jasmine.

```

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

## Data Binding 
```
Interpolation {{ title }}}: utilizado para passar os dados do componente para o template.

Property Binding: utilizado para passsar informações do componente para alguma propriedade de tag do template.  Ex.: <img [src]="foto">

Event Binding: utilizado para passar dados do template para a classe do componente. Ex.: (click)="mostraAlgo()".

Two-way data binding: utiliza o property binding e o event binding. Ex.: [(ngModel)]="variavel"
```

## Diretivas
```
Diretivas Estruturais: modificam a estrutura da página: Ex.: ngFor, ngIf, ngSwitch
Diretiva de atributos: modificam a aparência, comportamento ou conteúdo do elemento. Ex.; ngClass, ngStyle

```

## INPUT() Property
```
Serve para passar o valor do componente pai para o componente filho
```


## OUTPUT() Property
```
Serve para passar o valor do componente filho para o componente pai em conjunto com um evento @EventEmitter()
```
