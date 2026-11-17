const fs = require("fs/promises");

async function unirArchivos() {
    try {
        const contenidos = await Promise.all([
            fs.readFile("a.txt", "utf8"),
            fs.readFile("b.txt", "utf8"),
            fs.readFile("c.txt", "utf8")
        ]);

        const texto = contenidos[0] + contenidos[1] + contenidos[2];
        const ruta = "todo.txt";

        await fs.writeFile(ruta, texto);
        console.log("archivos unidos");
    }
    catch (error) {
        console.log(error);
    }
}

unirArchivos();