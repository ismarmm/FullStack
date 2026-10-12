window.onload = function() {
    var ciudad = prompt("Introduce la ciudad:", "Sevilla");
    var gastos = prompt("Introduce los gastos de envío:", "3");
    var fecha = new Date();

    document.getElementById("ciudad").innerText = ciudad;
    document.getElementById("gastos").innerText = gastos + " €";
    document.getElementById("fecha").innerText = fecha.toLocaleDateString();
}