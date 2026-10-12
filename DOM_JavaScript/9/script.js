function anadirProducto() {
    var nombre = prompt("Introduce un producto:");

    if (nombre != null) {
        var elemento = document.createElement("li");
        var producto = document.createElement("span");
        var texto = document.createTextNode(nombre);
        var botonSi = document.createElement("button");
        var botonNo = document.createElement("button");

        producto.appendChild(texto);
        botonSi.appendChild(document.createTextNode("SÍ"));
        botonNo.appendChild(document.createTextNode("NO"));
        botonSi.setAttribute("onclick", "comprado(this)");
        botonNo.setAttribute("onclick", "noComprado(this)");

        elemento.appendChild(producto);
        elemento.appendChild(botonSi);
        elemento.appendChild(botonNo);
        document.getElementById("lista").appendChild(elemento);
    }
}

function comprado(boton) {
    var producto = boton.parentNode.getElementsByTagName("span")[0];
    producto.style.color = "green";
    producto.style.fontStyle = "italic";
    producto.style.fontWeight = "normal";
}

function noComprado(boton) {
    var producto = boton.parentNode.getElementsByTagName("span")[0];
    producto.style.color = "red";
    producto.style.fontWeight = "bold";
    producto.style.fontStyle = "normal";
}
