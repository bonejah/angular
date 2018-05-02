// declaracao de funcoes e uso de any e void

// variavel que aceita qualquer tipo
var lista: any[] = [1, true, 'angular 2'] 
console.log(lista);

// funcao que nada retorna
function logConsole(): void {
  console.log('simples log no console')
}

// Exemplo de funcao com parametro opcional
function juntarNome(nome: string, sobrenome?: string) {
  if (sobrenome) {
    return nome + ' ' + sobrenome;
  } else {
    return nome;
  }
}

// Exemplo de funcao com parametros diferentes (utilizando pipe |)
function consoleLog(log: (string | number)) {
  console.log(log);
}

