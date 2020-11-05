// Create an Array and divide its elements for 2
let numbers = [];
for (let index = 1; index <= 25; index+=1) {
    numbers.push(index);
}
console.log("Array from 1 to 25:");
console.log(numbers);
let numbers2 = [];
for (let index2 = 0; index2 < numbers.length-1; index2+=1) {
    numbers2.push((numbers[index2])/2);
}
console.log("Array from 1 to 25 divided by 2:");
console.log(numbers2);
