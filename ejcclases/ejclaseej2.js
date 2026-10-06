var numeros = [];

for (var i = 0; i < 5; i++) {
	numeros.push(Number(prompt("Ingrese un número")));
}

for (var i = numeros.length - 1; i >= 0; i--) { //hazlo con reverse 
	console.log(numeros[i]);
}

var añadiralarray = prompt("Ingrese un número para añadir al array");
numeros.push(Number(añadiralarray));