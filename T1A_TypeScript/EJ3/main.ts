let empleado1 = new Employee(
    "Lucía",  "Pérez",   28,  new Date("2022-04-10"),  new Date("2025-06-30"),  "Diseñadora"
);

let empleado2 = new Employee(
    "Carlos","López", 34, new Date("2023-09-01"), null, "Programador"
);

console.log(empleado1.getNombre() + " " + empleado1.getApellido() + ", edad: " + empleado1.getEdad());
console.log(empleado2.getNombre() + " " + empleado2.getApellido() + ", edad: " + empleado2.getEdad());