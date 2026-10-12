
var titulo = document.getElementsByTagName("title")[0].innerText;

console.log(titulo);
console.log(titulo.toUpperCase());


document.getElementById("nombre").value = "Ismael";
document.getElementById("apellido").value = "Ruiz";

document.getElementById("saludo").innerText = "Hola Ismael Ruiz.";


var pregunta = document.createElement("p");
var texto = document.createTextNode("¿Qué tal estás?");

pregunta.appendChild(texto);
document.body.appendChild(pregunta);


document.querySelector("#labelApellido").innerText = "Apellidos:";