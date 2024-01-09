const { convertToAbsolutePath } = require('../src/validateFunctions.js');
describe('convertToAbsolutePath función', () => {

  /*it('should...', () => {
    console.log('FIX ME!');
  });
  it('Debería devolver una promesa', () => {
     expect(typeof mdLinks()).toBe(typeof Promise);
  });*/
  it('Debe devolver ruta absoluta',() => {
    const route = 'C:/Users/pauli/DEV011-md-links/src/validateFunctions.js'
    const result = convertToAbsolutePath(route)
    expect(result).toBe('C:/Users/pauli/DEV011-md-links/src/validateFunctions.js')

  })

  it('Debe devolver ruta absoluta',() => {
    const route = 'test/validateFunctions.spec.js'
    const result = convertToAbsolutePath(route)
    expect(result).toBe('C:\\Users\\pauli\\DEV011-md-links\\test\\validateFunctions.spec.js')

  })

});
