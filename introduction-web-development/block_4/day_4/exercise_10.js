function mostRepeatingInteger(array) {
    for (let index = 0; index < array.length; index += 2) {
        let element1 = array[index];
        for (let index1 = 0; index1 < array.length; index1 += 1) {
            let counter1 = 0;
            if (element1 === array[index1]) {
                counter1 += 1;
            } else {
                continue;
            }
        }
        let element2 = array[index+1];
        for (let index2 = 1; index2 < array.length; index2 += 2) {
            let counter2 = 0;
            if (element2 === array[index2]) {
                counter2 += 1;
            } else {
                continue;
            }
        }
        let mostRepeating;
        if (counter1 > counter2) {
            mostRepeating = array[index];
        } else {
            mostRepeating = array[index+1]
        }
    }
    return mostRepeating;
}
console.log(mostRepeatingInteger([2, 3, 2, 5, 8, 2, 3]));
