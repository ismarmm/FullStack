let saldo = 30;
let salir = false;

while (saldo > 0 && saldo < 120 && salir == false) {
    let numero = Number(prompt("Tienes " + saldo + "€. Elige un número del 1 al 6. Pulsa 0 para salir"));

    if (numero == 0) {
        salir = true;
    } else if (numero < 1 || numero > 6) {
        alert("El número debe estar entre 1 y 6");
    } else {
        let apuesta = Number(prompt("¿Cuánto quieres apostar?"));

        if (apuesta <= 0 || apuesta > saldo) {
            alert("Apuesta no válida");
        } else {
            let dado = Math.floor(Math.random() * 6) + 1;

            alert("Ha salido el " + dado);

            if (numero == dado) {
                saldo = saldo + apuesta + 10;
                alert("Has acertado. Tienes " + saldo + "€");
            } else {
                saldo = saldo - apuesta;
                alert("Has fallado. Tienes " + saldo + "€");
            }
        }
    }
}

document.write("<p>Saldo final: " + saldo + "€</p>");
