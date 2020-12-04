const assert = require('assert')

// escreva sum abaixo
const sum = (...array) => {
  let total = 0;
  for (element of array) total += element;
  return total;
}

console.log(sum());

assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)