const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}


test('testing a string', callback => {
  uppercase('maria', (result) => {
    expect(result).toBe('MARIA');
    callback();
  })
})
