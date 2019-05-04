const fs = require("fs"); //librería normal de NODE
// const fs = require("express"); usando los del framework de express
// const fs = require("./ejercicios/primes.js"); los que nosotros hacemos

const colors = require("colors");

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject("La base no es un número");
      return;
    }
    let data = "";

    for (i = 1; i <= limite; i++) {
      //console.log(`${base} * ${i} = ` + base * i);
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tabla del-${base} al ${limite}.txt`, data, err => {
      if (err) reject(err);
      else resolve(`tabla del-${base} al ${limite}.txt`);
    });
  });
};

let listarTabla = (base, limite) => {
  console.log("==================================".rainbow);
  console.log(`Tabla de multiplicar del ${base}`);
  console.log("==================================".rainbow);
  for (j = 1; j <= limite; j++) {
    console.log(`${base} * ${j} = ${base * j}`);
  }
};

//Module es un elemento global, al cual le estamos pasando nuestra funcion para también hacerla global
//y poderla llamar desde cualquier archivo. Es como un objeto, tendría que ser crearArchivo:crearArchivo
//pero como es ECM6 se omite si le ponemos el mismo nombre
module.exports = {
  crearArchivo,
  listarTabla
};
