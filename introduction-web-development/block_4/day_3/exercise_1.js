// prints a squere os stars (*)
function starSquare(n) {
    for (let index = 0; index < n; index += 1) {
        let starLine = "";
        for (let index1 = 0; index1 < n; index1 += 1) {
            starLine += " *";
        }
        console.log(starLine);
    }
}
console.log(starSquare(5));
