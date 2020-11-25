//Parte I

//Exercicio 1
const testingScope = (escopo) => { 
  if (escopo === true) { 
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);
testingScope(false);

//Exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortedArray = (oddsAndEvens) => oddsAndEvens.sort((a, b) => a - b);

console.log(`Os numeros ${sortedArray(oddsAndEvens)} se encontram ordenados de forma crescente!`);

//Parte II

//Exercicio 1
// const fatorial = (num) => {
//   let result = 1;
//   for (num; 0 < num; num -= 1) {
//     result *= num;
//   }
//   console.log(result);
// }
// fatorial(0);
const fatorial = (num) => num > 1 ? num * fatorial(num - 1) : num = 1;
console.log(fatorial(5));

//Exercicio 2
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const longestWord = (text) => {
  let textArray = text.split(' ');
  let maxLength = 0;
  let result = '';
  for (let word of textArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }
  return result;
}
console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

// const longestWord = (texto) => console.log(texto.split(' ')[texto.split(' ').length - 1]);
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"); // retorna 'aconteceu'
