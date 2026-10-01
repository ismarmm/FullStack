let numero1 = Number(prompt("Introduce el primer número"));
let numero2 = Number(prompt("Introduce el segundo número"));

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division;

if (numero2 == 0) {
    division = "No se puede dividir entre cero";
} else {
    division = numero1 / numero2;
}

alert("La suma es: " + suma + ". La resta es: " + resta + ". La multiplicación es: " + multiplicacion + ". La división es: " + division);
