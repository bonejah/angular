nomes = ['jorge', 'carlos', 'roberto', 'lucas'];

novoNome = nomes.filter(function(nome){
  return nome.includes('a');
});
console.log(novoNome); // saída será "carlos" e "lucas"

novoNome2 = nomes.filter((nome) => nome.includes('b'));
console.log(novoNome2); // saída será "roberto"