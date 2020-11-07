function biggerStringInArray (stringsArray) {
  let position;
  let biggerString;
  if (stringsArray[0].length > stringsArray[1].length) {
      position = 0;
      biggerString = stringsArray[0];
  } else {
      position = 1;
      biggerString = stringsArray[1];
  }
  for (let index = 2; index < stringsArray.length; index += 1) {
      if (stringsArray[index].length > biggerString.length) {
          position = index;
      } else {
          continue;
      }
  }
  return stringsArray[position];
}
console.log(biggerStringInArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

