var ciudades_gratis = ["Sevilla", "Madrid", "Valencia", "Barcelona"];
var ciudades_gastos = ["Cantabria", "Pontevedra", "Toledo", "Segovia"];

window.onload = function() {
    var ciudad = prompt("Introduce la ciudad:");
    var ciudadEncontrada = false;
    var fecha = new Date();

    document.getElementById("ciudad").innerText = ciudad;
    document.getElementById("fecha").innerText = fecha.toLocaleDateString();

    for (var i = 0; i < ciudades_gastos.length; i++) {
        if (ciudad.toLowerCase() == ciudades_gastos[i].toLowerCase()) {
            var gastos = prompt("Introduce los gastos de envío:");
            document.getElementById("gastos").innerText = gastos + " €";
            ciudadEncontrada = true;
        }
    }

    for (var i = 0; i < ciudades_gratis.length; i++) {
        if (ciudad.toLowerCase() == ciudades_gratis[i].toLowerCase()) {
            document.getElementById("gastos").innerText =
                "Los gastos de envío son gratuitos.";
            ciudadEncontrada = true;
        }
    }

    if (ciudadEncontrada == false) {
        document.getElementById("gastos").innerText =
            "No se pueden realizar envíos a esta ciudad.";
        document.getElementById("etiquetaFecha").style.display = "none";
    }
}