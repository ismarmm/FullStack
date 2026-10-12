const productos = [
    { id: 1, nombre: "Patata", precio: 1, imagen: "patata.jpg" },
    { id: 2, nombre: "Cebolla", precio: 1.2, imagen: "cebolla.jpg" },
    { id: 3, nombre: "Calabacin", precio: 2.1, imagen: "calabacin.jpg" },
    { id: 4, nombre: "Fresas", precio: 0.6, imagen: "fresas.jpg" }
];

for (var i = 0; i < productos.length; i++) {
    var caja = document.createElement("div");
    var nombre = document.createElement("h2");
    var textoNombre = document.createTextNode(productos[i].nombre);
    var precio = document.createElement("p");
    var textoPrecio = document.createTextNode("Precio: " + productos[i].precio + " €");
    var imagen = document.createElement("img");
    var boton = document.createElement("button");

    nombre.appendChild(textoNombre);
    precio.appendChild(textoPrecio);
    imagen.setAttribute("src", "img/" + productos[i].imagen);
    imagen.setAttribute("alt", productos[i].nombre);
    boton.appendChild(document.createTextNode("Disponible"));
    boton.className = "disabled";
    boton.setAttribute("onclick", "cambiarEstado(this)");

    caja.appendChild(nombre);
    caja.appendChild(precio);
    caja.appendChild(imagen);
    caja.appendChild(boton);
    document.getElementById("productos").appendChild(caja);
}

function cambiarEstado(boton) {
    if (boton.className == "disabled") {
        boton.className = "enabled";
    } else {
        boton.className = "disabled";
    }
}
