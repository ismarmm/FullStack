let marca = prompt("Introduce la marca del ordenador");
let modelo = prompt("Introduce el modelo del ordenador");

let precio = 1000;
let descuento = 0;

if (marca.toUpperCase() == "MSI" && modelo.toUpperCase() == "PRESTIGE") {
    descuento = 5;
} else if (marca.toUpperCase() == "HP" && modelo.toUpperCase() == "PAVILION") {
    descuento = 10;
}

let precioFinal = precio - (precio * descuento / 100);

document.write("<p>Descuento: " + descuento + "%</p>");
document.write("<p>Precio final: " + precioFinal + "$</p>");
