const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  // Adicionar lógica aqui 
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerText = data.joke
    );
};

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) +1
    );
    const sum = myArray.map(number => number * number)
      .reduce((number, acc) => number + acc, 0);
    (sum < 8000) ? resolve() : reject();
  });

  myPromise
    .then(() => console.log('Deu bom'))
    .catch(() => console.log('Deu ruim'));
};

fetchPromise();

window.onload = () => fetchJoke();
