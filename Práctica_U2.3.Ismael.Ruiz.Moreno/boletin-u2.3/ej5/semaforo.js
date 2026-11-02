// semaforo.js -> una clase que HEREDA de EventEmitter
const EventEmitter = require('events')

class Semaforo extends EventEmitter {
  constructor(ms) {
    super() // obligatorio al heredar
    this.colores = ['verde', 'ámbar', 'rojo']
    this.posicion = 0 // empieza en verde
    this.color = this.colores[this.posicion]

    // bind(this): para que dentro de cambiar() "this" siga siendo el semáforo
    this.intervalo = setInterval(this.cambiar.bind(this), ms)
  }

  cambiar() {
    this.posicion = (this.posicion + 1) % this.colores.length
    this.color = this.colores[this.posicion]
    this.emit('cambio', this.color)

    if (this.color === 'rojo') {
      this.emit('rojo')
    }
  }

  parar() {
    clearInterval(this.intervalo)
    this.emit('parado')
  }
}

module.exports = Semaforo
