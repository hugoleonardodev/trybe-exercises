const searchEmployee = require('./bonus.js');

describe('Testing function serachEmployee', () => {
  test('If function searchEmployee is defined.', () => {
    expect(searchEmployee).toBeDefined();
  });
});

describe('Testing function serachEmployee', () => {
  test('If given an Id, the function returns an object with informations.', () => {
    expect(searchEmployee('4678-2')).toEqual(
    {
      id: '4678-2',
      firstName: 'Paul',
      lastName: 'Dodds',
      specialities: ['Backend'],
    });
  });
});

describe('Testing function serachEmployee', () => {
  test('If given an Id and detail, the function returns a string with informations.', () => {
    expect(typeof searchEmployee('4678-2', 'specialities')).toEqual('string');
  });
});

describe('Testing function serachEmployee', () => {
  test('If given an invalid Id, function must throw an error.', () => {
    expect(() => searchEmployee('00000')).toThrow();
  });
  test('If given an invalid Id, function must throw an error: Id not found.', () => {
    expect(() => searchEmployee('00000')).toThrowError(new Error('Id not found.'));
  });
});

describe('Testing function serachEmployee', () => {
  test('If given an Id and wrong detail, function must throw an error.', () => {
    expect(() => searchEmployee('4678-2', 'anything')).toThrow();
  });
  test('If given an Id and wrong detail, function must throw an error: Property not found.', () => {
    expect(() => searchEmployee('4678-2', 'anything')).toThrowError(new Error('Info not avaible.'));
  });
});