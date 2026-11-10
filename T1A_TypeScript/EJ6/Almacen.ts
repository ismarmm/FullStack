class Almacen<T> {
    private elementos: T[] = [];

    agregarElemento(elemento: T): void {
        this.elementos.push(elemento);
    }

    obtenerElemento(posicion: number): void {
        if (posicion >= 0 && posicion < this.elementos.length) {
            console.log(this.elementos[posicion]);
        } else {
            console.log("posicion no valida");
        }
    }

    listarElementos(): void {
        for (let i = 0; i < this.elementos.length; i++) {
            console.log(this.elementos[i]);
        }
    }
}
