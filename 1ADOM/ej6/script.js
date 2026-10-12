var parrafosVisibles = false;

function mostrar() {
    if (parrafosVisibles == false) {
        document.getElementById("parrafo2").style.display = "block";
        document.getElementById("parrafo3").style.display = "block";
        document.getElementById("textoMostrar").innerText = "Mostrar menos...";
        parrafosVisibles = true;
    } 
    else {
        document.getElementById("parrafo2").style.display = "none";
        document.getElementById("parrafo3").style.display = "none";
        document.getElementById("textoMostrar").innerText = "Mostrar más...";
        parrafosVisibles = false;
    }
}