const opciones_del_yargs = {
  base: {
    demand: true,
    alias: "b"
  },
  limite: {
    alias: "l",
    default: 10
  }
};
const argv = require("yargs")
  .command(
    "crear",
    "Genera en un archivo txt la tabla de multiplicar",
    opciones_del_yargs
  )
  .command(
    "listar",
    "Muestra en consola la tabla de multiplicar",
    opciones_del_yargs
  )
  .help().argv;

module.exports = {
  argv
};
