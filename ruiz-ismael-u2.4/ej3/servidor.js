const http = require('http')
const fs = require('fs')
const path = require('path')

const HTML = { 'Content-Type': 'text/html; charset=utf-8' }
const JSON_TIPO = { 'Content-Type': 'application/json; charset=utf-8' }

const formulario = path.join(__dirname, 'recursos', 'formulario.html')
const firmas = []

const servidor = http.createServer(function (req, res) {
  console.log(req.method, req.url)
  const url = new URL(req.url, 'http://localhost')

  if (req.method === 'GET' && url.pathname === '/') {
    fs.readFile(formulario, function (err, datos) {
      if (err) {
        res.writeHead(500)
        return res.end('Error al leer el fichero')
      }
      res.writeHead(200, HTML)
      res.end(datos)
    })
    return
  }

  if (req.method === 'GET' && url.pathname === '/firmas') {
    const nombre = url.searchParams.get('nombre')
    let resultado = firmas

    if (nombre) {
      resultado = []
      for (let i = 0; i < firmas.length; i++) {
        if (firmas[i].nombre === nombre) {
          resultado.push(firmas[i])
        }
      }
    }

    res.writeHead(200, JSON_TIPO)
    return res.end(JSON.stringify(resultado, null, 2))
  }

  if (req.method === 'POST' && url.pathname === '/firmar') {
    let cuerpo = ''

    req.on('data', function (chunk) {
      cuerpo += chunk
    })

    req.on('end', function () {
      const params = new URLSearchParams(cuerpo)
      const datos = Object.fromEntries(params)
      const nombre = datos.nombre.trim()
      const mensaje = datos.mensaje.trim()

      if (nombre === '' || mensaje === '' || mensaje.length > 200) {
        res.writeHead(400, HTML)
        return res.end('<h1>Error 400</h1><p>Nombre y mensaje obligatorios, maximo 200 caracteres </p><a href="/">Volver</a>')
      }

      firmas.push({ nombre: nombre, mensaje: mensaje, fecha: new Date() })

      res.writeHead(201, HTML)
      res.end('<h1>Gracias por firmar, ' + nombre + '</h1><a href="/">Volver</a>')
    })
    return
  }

  res.writeHead(404, HTML)
  res.end('<h1>Error 404</h1><a href="/">Volver</a>')
})

servidor.listen(3000, function () {
  console.log('Servidor en http://localhost:3000')
})
