const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const Animal = Animals.find((animal) => animal.name === name);
      if (Animal !== undefined) {
        return resolve(Animal);
      }

      return reject({ error: 'Nenhum animal com esse nome!' });
    }, 100);
  })
)

const getAnimal = (name) => {
  // Adicione o código aqui.
  return findAnimalByName(name);
}
// ---------------------

const findAnimalsByAge = (age) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const AnimalsByAge = Animals.filter((animal) => animal.age === age);
      if (AnimalsByAge.length !== 0) {
        return resolve(AnimalsByAge);
      }

      return reject({ error: 'Nenhum animal com essa idade!' });
    }, 100);
  })
)

const getAnimalsByAge = (age) => {
  return findAnimalsByAge(age); 
}

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error => {
        expect(error).toEqual({ error: 'Nenhum animal com esse nome!' })
      });
    });
  });
});

describe('Testando promise - findAnimalsByAge', () => {
  describe('Quando existem animais com a idade procurada', () => {
    test('Retorne um array com os objetos dos animais', () => {
      // expect.assertions(1);
      return getAnimalsByAge(5).then(animals => {
        expect(animals).toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }]);
      });
    });
  });

  describe('Quando não existem animais com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalsByAge(6).catch(error => {
        expect(error).toEqual({ error: 'Nenhum animal com essa idade!' })
      });
    });
  });
});
