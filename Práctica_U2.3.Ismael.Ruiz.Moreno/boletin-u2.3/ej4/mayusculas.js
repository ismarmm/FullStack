// Copia un fichero pasando todo su texto a mayúsculas
const fs = require('fs')
const stdin = process.stdin
const stdout = process.stdout

function copiar(origen) {
  const destino = 'MAYUS-' + origen
  const lectura = fs.createReadStream(origen, 'utf8')
  let escritura = null
  let bytes = 0

  // Creamos el fichero de destino solo cuando el origen se ha podido abrir
  // (así, si el origen no existe, no queda un fichero vacío)
  lectura.on('open', function () {
    escritura = fs.createWriteStream(destino)

    escritura.on('finish', function () {
      console.log(`Creado ${destino} (${bytes} bytes)`)
      process.exit()
    })
  })

  lectura.on('data', function (chunk) {
    bytes += Buffer.byteLength(chunk) // chunk es texto: contamos sus bytes
    escritura.write(chunk.toUpperCase())
  })

  lectura.on('end', function () {
    escritura.end() // cerramos la escritura: dispara 'finish'
  })

  lectura.on('error', function (err) {
    console.error('Error:', err.message)
    process.exit(1)
  })
}

stdout.write('¿Qué fichero quieres copiar?: ')
stdin.once('data', function (resp) {
  copiar(resp.toString().trim())
})
