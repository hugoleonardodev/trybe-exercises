// verifying palindromes
function palindrome(string) {
    let strArr = string.split("");
    let strArrReverse = [];
    for (let index = string.length-1; index >= 0; index -= 1) {
        strArrReverse.push(strArr[index]);
    }
    let strReverse = strArrReverse.join("");
    if (strReverse === string) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrome("hugo"));
console.log(palindrome("arara"));
