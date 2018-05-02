function somar(x, y) {
  return x + y;
}

console.log('minha soma é: ' + somar(5)) // saida será NaN

function somarEs6(x, y) {
  y = y | 1;
  return x + y;
}

console.log('minha soma é: ' + somarEs6(5)) // saida será 6