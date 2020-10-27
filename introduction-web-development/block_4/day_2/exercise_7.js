//Lower element of the Array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lower = 1000;
for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index] < lower) {
        lower = numbers[index];
    }
}
console.log(`The lower elemet of the array is: ${lower}`);
