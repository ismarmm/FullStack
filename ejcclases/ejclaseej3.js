var cantidad = parseInt(prompt("Ingrese la cantidad de <p> a ingresar:"));

var padre = document.getElementById("h1")[0];

for (var i = 0; i < cantidad; i++) {
    var Nuevoparrafo = document.createElement("p");
    Nuevoparrafo.textContent = "Parrafo " + i;
    padre.appendChild(Nuevoparrafo);
}