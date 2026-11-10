export function media(lista) {
    const suma = lista.reduce((total, alumno) => total + alumno.nota, 0)
    return suma / lista.length
}

export function aprobados(lista) {
    return lista.filter((alumno) => alumno.nota >= 5)
}

export function mejor(lista) {
    return lista.reduce((mejorAlumno, alumno) => {
        if (alumno.nota > mejorAlumno.nota) {
            return alumno
        } else {
            return mejorAlumno
        }
    })
}
