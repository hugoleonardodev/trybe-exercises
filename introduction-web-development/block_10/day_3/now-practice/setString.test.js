const setString = require('./setString');

// jest.mock('./setString.js');

describe('Function stringToUpperCase in setString.js', () => {
  it('Given a string in lower case, should return a upper case string.', () => {
    const mockStringToUpperCase = jest.spyOn(setString, 'stringToUpperCase');
    console.log(setString.stringToUpperCase('trybe'));
    expect(setString.stringToUpperCase('trybe')).toBe('TRYBE');
    expect(setString.stringToUpperCase).toHaveBeenCalled();
    expect(setString.stringToUpperCase).toHaveBeenCalledWith('trybe');
    expect(setString.stringToUpperCase).toHaveBeenCalledTimes(2);
  });

  it('Given a string in lower case, should return a lower case string, after implementations.', () => {
    const mockStringToUpperCase = jest.spyOn(setString, 'stringToUpperCase');
    setString.stringToUpperCase.mockImplementation((string) => string);

    console.log(setString.stringToUpperCase('trybe'));
    expect(setString.stringToUpperCase('trybe')).toBe('trybe');
    expect(setString.stringToUpperCase).toHaveBeenCalled();
    expect(setString.stringToUpperCase).toHaveBeenCalledWith('trybe');
    expect(setString.stringToUpperCase).toHaveBeenCalledTimes(4);
  });
});

describe('Function stringFirstLetter.', () => {
  it('Should return the last letter of a given string, after implementations.', () => {
    const mockStringFirstLetter = jest.spyOn(setString, 'stringFirstLetter');
    setString.stringFirstLetter.mockImplementation((string) => string[string.length - 1]);

    console.log(setString.stringFirstLetter('trybe'));
    expect(setString.stringFirstLetter('trybe')).toBe('e');
    expect(setString.stringFirstLetter).toHaveBeenCalled();
    expect(setString.stringFirstLetter).toHaveBeenCalledWith('trybe');
    expect(setString.stringFirstLetter).toHaveBeenCalledTimes(2);
  });
});

describe('Function concatStrings.', () => {
  it('Should return three cancatenated strings, after implementations.', () => {
    const mockConcatStrings = jest.spyOn(setString, 'concatStrings');
    setString.concatStrings.mockImplementation((a, b, c) => a + ' ' + b + ' ' + c);

    console.log(setString.concatStrings('Trybe', 'is', 'wonderful!'));
    expect(setString.concatStrings('Trybe', 'is', 'wonderful!')).toBe('Trybe is wonderful!');
    expect(setString.concatStrings).toHaveBeenCalled();
    expect(setString.concatStrings).toHaveBeenCalledWith('Trybe', 'is', 'wonderful!');
    expect(setString.concatStrings).toHaveBeenCalledTimes(2);
  });
});