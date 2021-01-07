const fetch = require('node-fetch');

const URL = 'https://dog.ceo/api/breeds/image/random';

const fetchDogApi = (url) => {
  return fetch(url)
    .then(data => data.json())
    .then(result => result)    
}

module.exports = {fetchDogApi};