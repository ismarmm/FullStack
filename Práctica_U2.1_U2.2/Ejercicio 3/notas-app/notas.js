function media(lista) {
    const suma = lista.reduce((total, alumno) => total + alumno.nota, 0)
    return suma / lista.length
}

function aprobados(lista) {
    return lista.filter((alumno) => alumno.nota >= 5)
}

function mejor(lista) {
    return lista.reduce((mejorAlumno, alumno) => {
        if (alumno.nota > mejorAlumno.nota) {
            return alumno
        } else {
            return mejorAlumno
        }
    })
}

module.exports = { media, aprobados, mejor }
