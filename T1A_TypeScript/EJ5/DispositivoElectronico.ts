class Dispositivo {
    private nombre : string;
    private encendido : boolean;

	constructor($nombre: string, $encendido: boolean) {
		this.nombre = $nombre;
		this.encendido = $encendido;
	}

	public get $nombre(): string {
		return this.nombre;
	}

	public get $encendido(): boolean {
		return this.encendido;
	}

	public set $nombre(value: string) {
		this.nombre = value;
	}


	public set $encendido(value: boolean) {
		this.encendido = value;
	}
    encender(encendido : boolean): void{
        this.encendido = true;
    }
    apagar(encendido : boolean): void{
        this.encendido = false;
    }
}