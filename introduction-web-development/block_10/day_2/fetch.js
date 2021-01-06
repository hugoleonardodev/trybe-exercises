const fetch = require('node-fetch');

const list = []

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data.map((repo) => repo.name));
    });
}

console.log(getRepos('https://api.github.com/users/tryber/repos'));