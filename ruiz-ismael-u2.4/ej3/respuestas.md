1. Para el servidor, vuelve a lanzarlo y visita /firmas. ¿Qué ha pasado con las firmas y por qué?

Han desaparecido, /firmas sale vacio. Las firmas estaban guardadas en un array dentro del programa, o sea en la memoria, y al pararlo todo eso se borra. Para que no se pierdan habría que guardarlas en un fichero o en una base de datos.

2. ¿Por qué let cuerpo = '' tiene que declararse dentro de la función que atiende cada petición y no al principio del fichero?

Porque cada peticion tiene que tener su propio cuerpo. Si lo pongo fuera lo usarian todas a la vez y se mezclarian los datos de unos usuarios con los de otros, ademas de ir acumulandose lo de las peticiones anteriores.

3. Si el formulario tuviera required en todos sus campos, ¿haría falta validar igualmente en el servidor? Razona la respuesta.

Si, hace falta igualmente. El required solo lo comprueba el navegador y se puede saltar, asi que el servidor tiene que validar el tambien los datos por si acaso.

4. Firma con el nombre <h1 style="color:red">Hola</h1>. ¿Qué aparece en la página de agradecimiento? ¿Por qué es un problema de seguridad?

Sale la palabra Hola en grande y en rojo, porque el navegador lo interpreta como codigo de la pagina en vez de mostrarlo como texto. Es un problema grande ya que cualquiera podria ejecutar codigo y se ejecutaria en los ordenadores de los usuarios que entren a la pagina.