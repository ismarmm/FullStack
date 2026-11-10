const http = require('http')

const HTML = { 'Content-Type': 'text/html; charset=utf-8' }

const rutas = {
  '/': '<h2>Inicio</h2><a href="/sobre-mi">Sobre mí</a> | <a href="/aficiones">Aficiones</a> | <a href="/hora">Hora</a>',
  '/sobre-mi': '<h2>Ismael Ruiz</h2><p>Estudio DAM juego a las magic. Soy SUPER rojo viva pedro sanchez.</p>',
  '/aficiones': '<h2>Aficiones</h2><ul><li>socialismo</li><li>jugar juegos de cartas</li><li>jugar a juegos de socialismo</li></ul>'
}

const servidor = http.createServer(function (req, res) {
  console.log(req.method, req.url)
  let contenido = rutas[req.url]

  if (req.url === '/hora') {
    contenido = '<h2>Son las ' + new Date().toLocaleTimeString('es-ES') + '</h2>'
  }

  if (contenido) {
    res.writeHead(200, HTML)
    res.end('<h1>Hola Node.js</h1>' + contenido)
  } else {
    res.writeHead(404, HTML)
    res.end('<h1>Error 404: la ruta no existe</h1><a href="/">Volver</a>')
  }
})

servidor.listen(3000, function () {
  console.log('Servidor en http://localhost:3000')
})
