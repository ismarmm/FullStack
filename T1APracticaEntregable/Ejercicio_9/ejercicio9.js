let nombres = prompt("Introduce nombres separados por comas");
let lista = nombres.split(",");

for (let l in lista) {
    document.write("<p>Hola " + lista[l].trim() + "</p>");
}
