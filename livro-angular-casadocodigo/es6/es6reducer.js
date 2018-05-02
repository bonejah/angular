nomes = ['jorge', 'carlos', 'roberto', 'lucas'];
novoNome = nomes.reduce((acumulado, nome) => acumulado  + ' - ' + nome)
console.log(novoNome);  // saída será:  jorge - carlos - roberto - lucas

valores = [10, 20, 30, 40, 50];
novoValor = valores.reduce((acumulado, valor) => acumulado + valor);
console.log(novoValor); // saida será: 150