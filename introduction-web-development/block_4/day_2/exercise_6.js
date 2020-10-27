// Odd numbers from an array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let counter = 0;
for (let index=0; index < numbers.length-1; index+=1) {
    if ((numbers[index] % 2) !== 0) {
        counter += 1;
    }
}
if (counter === 0) {
    console.log("No odd number found in the array.");
}else{
    if (counter > 0) {
        console.log(`The  number of odd numbers in the array is: ${counter}`);
    }
} 
