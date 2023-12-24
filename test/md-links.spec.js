const mdLinks = require('../index.js');


describe('mdLinks', () => {

  /*it('should...', () => {
    console.log('FIX ME!');
  });
  it('Debería devolver una promesa', () => {
     expect(typeof mdLinks()).toBe(typeof Promise);
  });*/
  it('Debe rechazar cuando el path no existe',() => {
    expect(mdLinks("/erika/cursos/noexiiste.md").catch((error)=>{
      expect(error).toBe('La ruta no existe');

    }))
  })
  
  

});
