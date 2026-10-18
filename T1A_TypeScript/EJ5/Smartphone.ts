class Smartphone implements DispositivoElectronico {
    nombre: string;
    encendido: boolean;
    marca: string;

    constructor(nombre: string, encendido: boolean, marca: string) {
        this.nombre = nombre;
        this.encendido = encendido;
        this.marca = marca;
    }

    encender(): void {
        this.encendido = true;
        console.log(this.nombre + " encendido");
    }

    apagar(): void {
        this.encendido = false;
        console.log(this.nombre + " apagado");
    }

    llamar(): void {
        console.log("llamando desde " + this.marca);
    }
}
