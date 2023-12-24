const path = require("path");
const fs = require("fs");

const convertToAbsolutePath = (route) => {
  // let absoluteRoute = route
  // if(c){
  //     return absoluteRoute
  // } else {
  //     absoluteRoute =path.resolve(route)
  // }
  // return absoluteRoute
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

const readFile = () => {
    
}


module.exports = {
  convertToAbsolutePath,
  isPathExist,
  isMarkdown
};
