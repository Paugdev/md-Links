const { argv } = require('yargs');
const { mdLinks } = require("./index.js");

const path = process.argv[2];
mdLinks(path)
  .then((res) => {
    console.log("Respuesta de promesa de mdLinks: ", res);
  })
  .catch((err) => {
    console.log("el por qué no se cumplió la promesa de mdLinks: ", err);
  });