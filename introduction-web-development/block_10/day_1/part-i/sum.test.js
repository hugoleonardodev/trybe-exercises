// sum.test.js
const sum = require('./sum');

// test('sums two values', () => {
//   expect(sum(2, 3)).toBe(5);
// });

// test('sums two values', () => {
//   expect(sum(4, 5)).toBe(9);
// });

// test('sums two values', () => {
//   expect(sum(0, 0)).toBe(0);
// });

describe('function sum', () => {
  it('should sum to', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('should be numbers', () => {
    expect(() => sum(4,'5')).toThrowError(Error);
    expect(() => sum(4,'5')).toThrowError('parameters must be numbers');
  })
});