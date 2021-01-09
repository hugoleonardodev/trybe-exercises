const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('getUserName', () => {
  test('Given a valid Id, returns the object with a name.', () => {
    expect.assertions(1);
    return getUserName('5').then(user => {
      expect(Object.values(user).join('')).toBe('Paul');
    })
  });

  test('Given an  invalid Id, returns a custom error.', () => {
    // expect.assertions(1);
    return getUserName('6').catch(error => {
      expect(error).toEqual({ error: 'User with ' + '6' + ' not found.'});
    })
  });
  
});

describe('getUserName async/await', () => {
  test('Given an invalid Id, returns a custom error.', async () => {
    try {
      await getUserName('6');
    }

    catch (error) {
      expect(error).toEqual({ error: 'User with ' + '6' + ' not found.'});
    }

  });

  
});