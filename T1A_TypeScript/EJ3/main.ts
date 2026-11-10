let empleado1 = new Employee(
    "isma",  "ruiz",   22,  new Date("2026-15-10"),  new Date("2025-06-30"),  "programador bueno"
);

let empleado2 = new Employee(
    "adri","nose", 20, new Date("2026-15-18"), null, "programador malo"
);

console.log(empleado1.getNombre() + " " + empleado1.getApellido() + ", edad: " + empleado1.getEdad());
console.log(empleado2.getNombre() + " " + empleado2.getApellido() + ", edad: " + empleado2.getEdad());