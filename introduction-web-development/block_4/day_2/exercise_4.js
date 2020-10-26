//Print higher than 20 or lower and even 20
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (var index=0; index < numbers.length-1; index++) {
    sum = sum + numbers[index];
}
let arithmeticA = (sum / numbers.length);
if (arithmeticA > 20) {
    console.log("Higher than 20.");
}else{
    console.log("Lower than 20.");
}
