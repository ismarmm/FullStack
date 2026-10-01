let texto = prompt("Introduce una cadena de texto");
let posicion = Number(prompt("Introduce una posición"));

let caracter = texto.charAt(posicion - 1);

alert("En la posición " + posicion + " de la cadena '" + texto + "' se encuentra el carácter '" + caracter + "'");
