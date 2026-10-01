let numero = Number(prompt("Introduce un número del 1 al 6"));

if (numero >= 1 && numero <= 6) {
    for (let i = 1; i <= numero; i++) {
        document.write("<h" + i + ">Encabezado nivel " + i + "</h" + i + ">");
    }
} else {
    document.write("<p>El número debe estar entre 1 y 6</p>");
}
