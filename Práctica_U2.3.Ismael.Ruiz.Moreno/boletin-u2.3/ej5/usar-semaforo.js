// Usamos nuestro módulo Semaforo
const Semaforo = require('./semaforo')

const semaforo = new Semaforo(1000)
let rojos = 0

semaforo.on('cambio', function (color) {
  console.log('Color:', color)
})

// once: solo la primera vez que se pone en rojo
semaforo.once('rojo', function () {
  console.log('(primer rojo: ¡frena!)')
})

// Contamos los rojos y paramos al segundo
semaforo.on('rojo', function () {
  rojos++
  if (rojos === 2) {
    semaforo.parar()
  }
})

semaforo.on('parado', function () {
  console.log('Semáforo apagado')
})
