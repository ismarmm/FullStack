let nombres = prompt("Introduce nombres separados por comas");
let lista = nombres.split(",");

for (let l in lista) {
    lista[l] = lista[l].trim();
    document.write("<p>Hola " + lista[l] + "</p>");
}

document.write("<p>Número de personas: " + lista.length + "</p>");
document.write("<p>Primera persona: " + lista[0] + "</p>");
document.write("<p>Última persona: " + lista[lista.length - 1] + "</p>");

let ordenAZ = lista.slice();
ordenAZ.sort();
console.log(ordenAZ);

let ordenZA = ordenAZ.slice();
ordenZA.reverse();
console.log(ordenZA);
