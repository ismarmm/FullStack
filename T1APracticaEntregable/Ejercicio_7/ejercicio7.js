let acertado = false;
let intentos = 0;

while (intentos < 3 && acertado == false) {
    let respuesta = prompt("¿Quién es el pintor de las Meninas?");

    if (respuesta.toLowerCase() == "velázquez" || respuesta.toLowerCase() == "velazquez") {
        acertado = true;
    }

    intentos++;
}

if (acertado) {
    alert("Correcto! Ha acertado.");
} else {
    alert("Lo siento! La respuesta correcta es Velázquez");
}
