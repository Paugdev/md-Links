const {mdLinks} = require('../src/index');


describe('mdLinks', () => {

  /*it('should...', () => {
    console.log('FIX ME!');
  });
  it('Debería devolver una promesa', () => {
     expect(typeof mdLinks()).toBe(typeof Promise);
  });*/
  it('Debe rechazar cuando el path no existe',() => {
    return mdLinks("/erika/cursos/noexiiste.md").catch((error)=>{
      expect(error).toBe('La ruta no existe');

    })
  })

  it('Debe devolver url', ()=>{
    const arrlinks = ["https://www.google.com",  "https://nodejs.org/",]
    return mdLinks("C:/Users/pauli/DEV011-md-links/src/prueba.md").then((result)=>{
      expect(result).toEqual(arrlinks);
    })
  })

});
