function highestValuePosition(array) {
    let highestValue;
    let highestPosition = 0;
    if (array[0] > array[1]) {
        highestValue = array[0];
    } else {
        highestValue = array[1];
        highestPosition = 1;
    }
    for (let index = 2; index < array.length; index += 1) {
        if (array[index] > highestValue) {
            highestValue = array[index];
            highestPosition = index;
        } else {
            continue;
        }
    }
    return highestPosition;
}
console.log(highestValuePosition([2, 3, 6, 7, 10, 1]));
