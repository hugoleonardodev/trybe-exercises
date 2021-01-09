// sum.js
const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

module.exports = sum;

// console.log(sum(1, 2));
// console.log(sum('1', 2));
