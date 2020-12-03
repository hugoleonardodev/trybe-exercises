
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  const flattenArray = arrays.reduce((previousValue, currentValue) => previousValue.concat(currentValue));;
  return flattenArray;
}

console.log(flatten());

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);