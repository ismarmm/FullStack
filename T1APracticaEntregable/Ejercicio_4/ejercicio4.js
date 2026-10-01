let practicas = Number(prompt("Introduce la media de prácticas"));
let examen = Number(prompt("Introduce la nota del examen"));
let actitud = Number(prompt("Introduce la nota de actitud"));

let media = (practicas + examen + actitud) / 3;

document.write("<h1>Lenguaje de Marcas</h1>");
document.write("<p>Nota media: " + media.toFixed(2) + "</p>");

if (media >= 5) {
    document.write("<p>Aprobado</p>");
} else {
    document.write("<p>Suspenso</p>");
}
