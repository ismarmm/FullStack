1.- La documentacion y los ficheros de una carpeta

a) Busca en nodejs.org/api el nivel de estabilidad del modulo querystring y del constructor new Buffer(). ¿Que significa cada nivel y que alternativa propone la documentacion?

Respuesta: querystring es nivel 3 (Legacy), que quiere decir que se mantiene pero hay cosas mejores. Se recomienda usar URLSearchParams.
new Buffer() es nivel 0 (Deprecated), que quiere decir que esta obsoleto y no se debe usar. Se recomienda usar Buffer.alloc() o Buffer.from().

b) En la firma fs.readdir(path[, options], callback), ¿que parametros son obligatorios y cuales opcionales? ¿Como lo sabes?

Respuesta: path y callback son obligatorios y options es opcional. Se sabe porque lo que va entre corchetes es opcional.


2.- Temporizador de cocina

e) ¿Por que el programa termina solo despues de clearInterval? ¿Que pasaria si no lo llamaras?

Respuesta: Porque clearInterval para el intervalo y ya no queda nada pendiente. Si no lo llamara, el intervalo seguiria para siempre y habria que pararlo con Ctrl + C.


3.- Caracteres y bytes

b) Ejecutalo con hola, España, "5 €" y 😀 y completa la tabla. Explica por que no siempre coinciden caracteres y bytes.

Respuesta:
hola: 4 caracteres, 4 bytes
España: 6 caracteres, 7 bytes
5 €: 3 caracteres, 5 bytes
😀: 2 caracteres, 4 bytes

No coinciden porque algunos caracteres ocupan mas de un byte en UTF-8, como la ñ, el € o el emoji.


4.- Copiar un fichero en mayusculas

e) ¿Por que aqui no puedes usar directamente lectura.pipe(escritura)? ¿Por que hace falta process.exit() al final?

Respuesta: Porque pipe copia el contenido tal cual y aqui hay que pasarlo a mayusculas antes de escribirlo.
Hace falta process.exit() porque stdin sigue abierto y el programa no termina solo.


6.- Un servidor web con varias rutas

e) ¿Por que en la terminal aparece tambien GET /favicon.ico? ¿Que ocurre si arrancas el servidor dos veces a la vez en el mismo puerto?

Respuesta: Porque el navegador pide solo el icono de la pestaña, ademas de la pagina.
Si arrancas el servidor dos veces en el mismo puerto da error porque el puerto ya esta en uso.
