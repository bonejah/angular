var minhaVar = 'minha variavel';

function minhaFunc(x, y) {
	return x + y;
}

// ES 6 or ES 2015
let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];
numeros.map(function(){
	return valor * 2;
});

numeros.map(valor => valor * 2);

class Matematica {
	soma (x, y) {
		return x + y;
	}
}