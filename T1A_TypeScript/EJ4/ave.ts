class Pajaro extends Animal {
    private puedeVolar: boolean;

    constructor(nombre: string, edad: number, puedeVolar: boolean) {
        super(nombre, edad, "Pajaro");
        this.puedeVolar = puedeVolar;
    }

    getPuedeVolar(): boolean {
        return this.puedeVolar;
    }

    setPuedeVolar(puedeVolar: boolean): void {
        this.puedeVolar = puedeVolar;
    }

    volar(): void {
        if (this.puedeVolar) {
            console.log(this.getNombre() + " esta volando.");
        } else {
            console.log(this.getNombre() + " no puede volar.");
        }
    }
}