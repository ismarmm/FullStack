const fs = require('fs')
const path = require('path')

const carpeta = process.argv[2] || __dirname

if (!fs.existsSync(carpeta)) {
	console.error('La carpeta no existe:', carpeta)
	process.exit(1)
}

const nombres = fs.readdirSync(carpeta)
const cuenta = {}

nombres.forEach(function (nombre) {
	const ruta = path.join(carpeta, nombre)

	if (fs.statSync(ruta).isFile()) {
		const ext = path.extname(nombre) || '(sin extensión)'
		cuenta[ext] = (cuenta[ext] || 0) + 1
	}
})

console.table(cuenta)
