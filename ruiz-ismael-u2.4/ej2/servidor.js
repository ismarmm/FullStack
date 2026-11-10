const http = require('http')
const fs = require('fs')
const path = require('path')

const tipos = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8'
}

const servidor = http.createServer(function (req, res) {
  console.log(req.method, req.url)

  let fichero = '404.html'
  let codigo = 404

  if (req.url === '/') {
    fichero = 'index.html'
    codigo = 200
  }
  if (req.url === '/contacto') {
    fichero = 'contacto.html'
    codigo = 200
  }
  if (req.url === '/estilos.css') {
    fichero = 'estilos.css'
    codigo = 200
  }

  const ruta = path.join(__dirname, 'paginas', fichero)
  const extension = path.extname(ruta)

  fs.readFile(ruta, function (err, datos) {
    if (err) {
      res.writeHead(500)
      return res.end('Error al leer el fichero')
    }
    res.writeHead(codigo, { 'Content-Type': tipos[extension] })
    res.end(datos)
  })
})

servidor.listen(3000, function () {
  console.log('Servidor en http://localhost:3000')
})
