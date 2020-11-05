//Arithmetic average of the elemets of an Array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (var index=0; index < numbers.length-1; index++) {
    sum = sum + numbers[index];
}
let arithmeticA = (sum / numbers.length);
console.log(arithmeticA);
