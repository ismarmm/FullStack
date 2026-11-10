1. Al cargar / aparecen dos peticiones en la terminal. ¿Cuáles son y por qué?

Salen GET / y GET /estilos.css. El navegador pide primero la pagina y, al leerla, ve que tiene enlazada una hoja de estilos y la pide tambien en otra peticion aparte. Cada cosa que necesita la pide por separado.

2. Imagina que tienes que servir un vídeo de 500 MB. ¿Qué problema tendría fs.readFile y qué alternativa de las vistas en clase usarías?

Que readFile se carga el fichero entero en la memoria antes de mandarlo, y con 500 MB seria demasiado, sobre todo si entra mucha gente a la vez. Lo mejor seria usar streams (createReadStream), que van mandando el video poco a poco sin cargarlo todo.