const path = require("path");
const fs = require("fs");


const convertToAbsolutePath = (route) => {
  return path.isAbsolute(route) ? route : path.resolve(route);
};

const isPathExist = (route) => {
  return fs.existsSync(route); //retorna un boolean
};
// console.log('****FS****', fs.existsSync('C:/Users/pauli/DEV011-md-links/README.md'));

//console.log(isAbsolutePath('docs\03-milestone.md'))

const isMarkdown = (route) =>{
    return path.extname(route) === '.md'

}
// console.log('PATH: ***** ', path.extname('imagenGato.md'));

//Promesa al leer archivo
const getUrl = (route) => new Promise((res, rej) => {
  //ejecuta función que lee el archivo
  const regexUrl = /(\[.+?]\(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n]+)(?=\))/g;
  const regExp = /\[[^\[\]]+\]/g
  //const regextext= /\[.+?]/g;
  console.log(route+'getUrl')
  const getUrlAndText = (data) => {
    const getUrl = data.match(regexUrl);
    console.log(getUrl)
    //const getText = data.match(regextext;
    const resulLinks = []

    
    getUrl.map((info)=>{

      const cadenaText = info.match(/\[(.*?)\]/);

    resulLinks.push({
      file: route,
      href: info.split('(')[1], 
      text: cadenaText[1]

    })

    })
    res(resulLinks)
    
  }

  const searchLinks = (data) => {
    console.log(data+'search')
     return getUrlAndText(data) 
         
  }

  fs.readFile(route, 'utf8', (err, data) => {//entra al archivo
    if (err) {
      rej(new Error('Verificar ruta'));
    } else {
      searchLinks(data)
    }
  })
})



module.exports = {
  convertToAbsolutePath,
  isPathExist,
  isMarkdown,
  getUrl
};
