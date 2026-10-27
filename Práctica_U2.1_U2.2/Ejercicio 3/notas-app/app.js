const fs = require('fs/promises')
const pc = require('picocolors')
const { media, aprobados, mejor } = require('./notas')

async function mostrarNotas() {
    try {
        const datos = await fs.readFile('notas.json', 'utf8')
        const lista = JSON.parse(datos)

        for (let i = 0; i < lista.length; i++) {
            const alumno = lista[i]
            const texto = alumno.nombre + ' ' + alumno.nota

            if (alumno.nota >= 5) {
                console.log(pc.green(texto))
            } else {
                console.log(pc.red(texto))
            }
        }

        console.log('media ' + media(lista).toFixed(2))
        console.log('aprobados ' + aprobados(lista).length)
        console.log('mejor alumno ' + mejor(lista).nombre)
    } catch (error) {
        console.log(error.message)
    }
}

mostrarNotas()
