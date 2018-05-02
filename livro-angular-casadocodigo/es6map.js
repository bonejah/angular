// sempre que precisar fazer manipulação com cada elemento de um array, use o método map .
arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

novoValor = arrayNumeros.map(function(num){
  return num * 2;
});
console.log(novoValor);

novoValor2 = arrayNumeros.map((num) => num * 3);
console.log(novoValor2);