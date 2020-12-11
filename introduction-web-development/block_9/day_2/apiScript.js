const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  // Adicionar lógica aqui 
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data));
};

window.onload = () => fetchJoke();
