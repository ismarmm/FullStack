const Semaforo = require('./semaforo')

const semaforo = new Semaforo(1000)
let rojos = 0

semaforo.on('cambio', function (color) {
	console.log('Color:', color)
})

semaforo.once('rojo', function () {
	console.log('(primer rojo: ¡frena!)')
})

semaforo.on('rojo', function () {
	rojos++
	if (rojos === 2) {
		semaforo.parar()
	}
})

semaforo.on('parado', function () {
	console.log('Semáforo apagado')
})
