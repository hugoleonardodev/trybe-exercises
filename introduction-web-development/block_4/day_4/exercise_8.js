function lowerValuePosition(array) {
    let lowerValue;
    let lowerPosition = 0;
    if (array[0] < array[1]) {
        lowerValue = array[0];
    } else {
        lowerValue = array[1];
        lowerPosition = 1;
    }
    for (let index = 2; index < array.length; index += 1) {
        if (array[index] < lowerValue) {
            lowerValue = array[index];
            lowerPosition = index;
        } else {
            continue;
        }
    }
    return lowerPosition;
}
console.log(lowerValuePosition([2, 4, 6, 7, 10, 0, -3]));
