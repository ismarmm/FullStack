class Laptop implements DispositivoElectronico {
    nombre: string;
    encendido: boolean;
    modelo: string;

    constructor(nombre: string, encendido: boolean, modelo: string) {
        this.nombre = nombre;
        this.encendido = encendido;
        this.modelo = modelo;
    }

    encender(): void {
        this.encendido = true;
        console.log(this.nombre + " encendido");
    }

    apagar(): void {
        this.encendido = false;
        console.log(this.nombre + " apagado");
    }

    abrirPrograma(): void {
        console.log("abriendo programa en " + this.modelo);
    }
}
