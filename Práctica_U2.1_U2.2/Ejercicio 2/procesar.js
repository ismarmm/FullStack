const fs = require('fs')

fs.readFile('config.json', 'utf8', (err, datos) => {
    if (err) return console.log(err.message)
    const config = JSON.parse(datos)

    fs.readFile(config.entrada, 'utf8', (err, texto) => {
        if (err) return console.log(err.message)
        const lineas = texto.trim().split('\n').length
        const informe = `fichero: ${config.entrada}\nlineas: ${lineas}\n`

        fs.writeFile(config.salida, informe, (err) => {
            if (err) return console.log(err.message)
            console.log('informe creado en ' + config.salida)
        })
    })
})
