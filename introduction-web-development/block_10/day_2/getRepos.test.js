const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

describe('getRepos with a given URL', () => {
  it('should find a repo on a list', () => {
    return getRepos('https://api.github.com/users/tryber/repos').then((result) => {
      expect(result).toContain("hacka-trybe");
      expect(result).not.toContain('sd-01-week4-5-project-todo-list');
      expect(result).not.toContain('sd-01-week4-5-project-meme-generator');
    });
  })
});
