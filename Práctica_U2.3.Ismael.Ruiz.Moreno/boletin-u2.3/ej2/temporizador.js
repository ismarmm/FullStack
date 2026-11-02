// Uso: node temporizador.js 10 Sacar la pizza
const argumentos = process.argv.slice(2)
const segundos = Number(argumentos[0])
const mensaje = argumentos.slice(1).join(' ') || '¡Tiempo!'

// Tiene que ser un entero mayor que 0
if (!Number.isInteger(segundos) || segundos <= 0) {
  console.error('Uso: node temporizador.js <segundos> [mensaje]')
  process.exit(1)
}

let quedan = segundos
console.time('Duración total')

const intervalo = setInterval(function () {
  quedan--
  console.log(`Quedan ${quedan} s`)

  if (quedan === 0) {
    clearInterval(intervalo) // paramos la repetición
    console.log(mensaje)
    console.timeEnd('Duración total')
  }
}, 1000)

// Aviso a la mitad del tiempo (en milisegundos)
setTimeout(function () {
  console.log('¡Ya vas por la mitad!')
}, (segundos * 1000) / 2)
