class Perro extends Animal {
    private raza: string;

    constructor(nombre: string, edad: number, raza: string) {
        super(nombre, edad, "perro");
        this.raza = raza;
    }

    getRaza(): string {
        return this.raza;
    }

    setRaza(raza: string): void {
        this.raza = raza;
    }

    moverCola(): void {
        console.log(this.getNombre() + " mueve la cola.");
    }
}