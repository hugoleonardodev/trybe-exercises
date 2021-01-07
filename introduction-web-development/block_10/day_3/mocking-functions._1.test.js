const randomNumberTest = require('./mocking-functions_1')

test('Random number generated should be divisible by 2.', () => {
  expect(randomNumberTest.isDivisible(2)).toBe(true); // pass when randomNumber is even, fails when is odd
});

test('Mocking values and defaul values.', () => {
  randomNumberTest.isDivisible = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');
  
  expect(randomNumberTest.isDivisible).toHaveBeenCalledTimes(0);

  expect(randomNumberTest.isDivisible()).toBe('first call');
  expect((randomNumberTest.isDivisible)).toHaveBeenCalledTimes(1);

  expect(randomNumberTest.isDivisible()).toBe('second call');
  expect((randomNumberTest.isDivisible)).toHaveBeenCalledTimes(2);

  expect(randomNumberTest.isDivisible()).toBe('default value');
  expect((randomNumberTest.isDivisible)).toHaveBeenCalledTimes(3);
});
