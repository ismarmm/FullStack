const fs = require('fs/promises')

async function procesar() {
    try {
        const datos = await fs.readFile('config.json', 'utf8')
        const config = JSON.parse(datos)
        const texto = await fs.readFile(config.entrada, 'utf8')
        const lineas = texto.trim().split('\n').length
        const informe = `fichero: ${config.entrada}\nlineas: ${lineas}\n`

        await fs.writeFile(config.salida, informe)
        console.log('informe creado en ' + config.salida)
    } catch (error) {
        console.log(error.message)
    }
}

procesar()
