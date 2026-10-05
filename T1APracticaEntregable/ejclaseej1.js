var texto = input ("Introduce un texto: ")
var tamaño = texto.length
var caracter8 = texto.charAt(7)
if (texto.includes("t")) {
    console.log("El texto contiene la letra 't' en la posición " + texto.indexOf("t"));
} else {
    console.log("El texto no contiene la letra 't'");
}
var textoenmayusculas = texto.toUpperCase()
var textoenminusculas = texto.toLowerCase()
