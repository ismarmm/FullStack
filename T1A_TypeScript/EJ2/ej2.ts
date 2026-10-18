function contarPalabras(texto: string): number {
    let textoLimpio = texto.trim();
    let cantidad: number;
 
    if (textoLimpio === "") {
        cantidad = 0;
    } else {
        cantidad = textoLimpio.split(/\s+/).length;
    }

    return cantidad;
}

console.log(contarPalabras("Hola que tal?"));
console.log(contarPalabras("cuenta"));
console.log(contarPalabras(""));

function getAvenger(nombre: string, poder?: string, arma: string = "arco"): string {
    let mensaje: string;

    if (poder !== undefined) {
        mensaje = nombre + " tiene el poder de " + poder + " y utiliza " + arma;
    } else {
        mensaje = "El superheroe se llama " + nombre;
    }

    return mensaje;
}

console.log(getAvenger("Ojo de Halcon", "aimbot"));
console.log(getAvenger("thor", "rayos", "martillo"));
console.log(getAvenger("ironman"));


