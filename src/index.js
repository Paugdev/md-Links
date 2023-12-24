const fs = require("fs");
//llamado de las funciones del archivo functions.js
const { convertToAbsolutePath, isPathExist, isMarkdown } = require("./functions.js");

const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    // 1. Convertir ruta a absoluta
    const absolutePath = convertToAbsolutePath(path);
    // 2. Identifica si la ruta existe.
    const exist = isPathExist(absolutePath)
    // 3. Verificar que es markdown
    const md = isMarkdown(absolutePath)
    // 4. Leer archivo md

    if (exist === false) {
      reject("La ruta no existe");
    }
    if(md=== false) {
      reject("No es un archivo .md")
    }
    resolve(md);
    // resolve('1000000 de dólares')
  });
};

module.exports = {
  mdLinks,
};
