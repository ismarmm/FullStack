class Employee {
    private nombre: string;
    private apellido: string;
    private edad: number;
    private fechaInicio: Date;
    private fechaFinalizacion: Date | null;
    private profesion: string;

    constructor(
        nombre: string,
        apellido: string,
        edad: number,
        fechaInicio: Date,
        fechaFinalizacion: Date | null,
        profesion: string
    ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fechaInicio = fechaInicio;
        this.fechaFinalizacion = fechaFinalizacion;
        this.profesion = profesion;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getApellido(): string {
        return this.apellido;
    }

    setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number): void {
        this.edad = edad;
    }

    getFechaInicio(): Date {
        return this.fechaInicio;
    }

    setFechaInicio(fechaInicio: Date): void {
        this.fechaInicio = fechaInicio;
    }

    getFechaFinalizacion(): Date | null {
        return this.fechaFinalizacion;
    }

    setFechaFinalizacion(fechaFinalizacion: Date | null): void {
        this.fechaFinalizacion = fechaFinalizacion;
    }

    getProfesion(): string {
        return this.profesion;
    }

    setProfesion(profesion: string): void {
        this.profesion = profesion;
    }
}
