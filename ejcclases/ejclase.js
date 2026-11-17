const http = require('http');

const servidor = http.createServer(manejarPeticion);

servidor.listen(3000);


function manejarPeticion(req, res) {
  const url = new URL(req.url, 'http://localhost');

  if (url.pathname === '/saludo') {
    const nombre = url.searchParams.get('nombre');
    const nombreFinal = nombre || 'desconocido';
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`Hola ${nombreFinal}`);
  } 

  else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('No encontrado');
  }

}
