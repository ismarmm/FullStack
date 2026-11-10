let almacenNumeros = new Almacen<number>();
almacenNumeros.agregarElemento(10);
almacenNumeros.agregarElemento(20);
almacenNumeros.obtenerElemento(0);
almacenNumeros.listarElementos();

let almacenCadenas = new Almacen<string>();
almacenCadenas.agregarElemento("hola");
almacenCadenas.agregarElemento("typescript");
almacenCadenas.obtenerElemento(1);
almacenCadenas.listarElementos();

let almacenObjetos = new Almacen<object>();
almacenObjetos.agregarElemento({ nombre: "portatil", precio: 500 });
almacenObjetos.agregarElemento({ nombre: "movil", precio: 300 });
almacenObjetos.obtenerElemento(0);
almacenObjetos.listarElementos();
