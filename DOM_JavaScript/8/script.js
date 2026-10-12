function anadirProducto() {
    var producto = prompt("Introduce un producto:");

    if (producto != null) {
        var elemento = document.createElement("li");
        var texto = document.createTextNode(producto);

        elemento.appendChild(texto);
        document.getElementById("lista").appendChild(elemento);
    }
}
