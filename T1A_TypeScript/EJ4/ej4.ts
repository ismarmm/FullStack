class Animal {
    private nombre: string;
    private edad: number;
    private tipo: string;

    constructor(nombre: string, edad: number, tipo: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number): void {
        this.edad = edad;
    }

    getTipo(): string {
        return this.tipo;
    }

    setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    hacerRuido(): void {
        console.log("El animal hace un ruido.");
    }
}
