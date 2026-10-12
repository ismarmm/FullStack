var tamañoLetra = 16;

function aumentar() {
    tamañoLetra = tamañoLetra + 1;
    document.getElementById("parrafo").style.fontSize = tamañoLetra + "px";
}

function disminuir() {
    tamañoLetra = tamañoLetra - 1;
    document.getElementById("parrafo").style.fontSize = tamañoLetra + "px";
}
