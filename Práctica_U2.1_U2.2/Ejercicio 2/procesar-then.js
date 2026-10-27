const fs = require('fs/promises')
let config

fs.readFile('config.json', 'utf8')
    .then((datos) => {
        config = JSON.parse(datos)
        return fs.readFile(config.entrada, 'utf8')
    })
    .then((texto) => {
        const lineas = texto.trim().split('\n').length
        const informe = `fichero: ${config.entrada}\nlineas: ${lineas}\n`
        return fs.writeFile(config.salida, informe)
    })
    .then(() => {
        console.log('informe creado en ' + config.salida)
    })
    .catch((error) => {
        console.log(error.message)
    })
