1. Al recargar, en la terminal aparece a veces GET /favicon.ico. ¿Quién hace esa petición y qué le responde tu servidor?

Esa peticion la hace el navegador solo, sin que yo le diga nada. Va buscando el icono que sale en la pestaña. Como mi servidor no tiene esa ruta, le devuelve la pagina del 404.

2. Si escribes la hora directamente como valor dentro del objeto de rutas, siempre sale la misma. ¿Por qué ocurre?

Porque el objeto de rutas se crea una sola vez, cuando arranco el servidor, y la hora se calcula justo en ese momento y se queda guardada. Por eso siempre sale la misma. Para que cambie hay que calcularla dentro de la funcion que se ejecuta en cada peticion.