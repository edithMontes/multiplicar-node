const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const argv = require("./config/yargs").argv;
const colors = require("colors");

// console.log("El limite dado es ", argv.limite);
// console.log("la base dada es ", argv.base);
//tabla multiplicar
//let base = "abc";

let comando = argv._[0];

switch (comando) {
  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
      //.then(archivo => console.log("Archivo creado:", colors.green(archivo)))
      .catch(e => console.log(e));
    break;

  case "listar":
    listarTabla(argv.base, argv.limite);
    break;

  default:
    console.log("El comando no es reconocido");
}
