const toBeTested = require('./random-number.js');

jest.mock('./random-number.js');

describe('Function returns a number between 0 and 100.', () => {
  it('Should be called and return 10 as default value.', () => {
    toBeTested.randomNumber.mockReturnValue(10);
    
    expect(toBeTested.randomNumber()).toBe(10);
    expect(toBeTested.randomNumber).toHaveBeenCalled();
    expect(toBeTested.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Should be refactored and called once.', () => {
    toBeTested.randomNumber.mockImplementation((a, b) => a / b);

    expect(toBeTested.randomNumber(6, 2)).toBe(3);
    expect(toBeTested.randomNumber).toHaveBeenCalled();
  });

  it('Should be refactored called, reseted, refactored and called again.', () => {
    toBeTested.randomNumber.mockImplementation((a, b, c) => a * b * c);

    expect(toBeTested.randomNumber(1, 2, 3)).toBe(6);
    expect(toBeTested.randomNumber).toHaveBeenCalled();

    toBeTested.randomNumber.mockReset();
    toBeTested.randomNumber.mockImplementation((a) => a * 2);

    expect(toBeTested.randomNumber(1)).toBe(2);
    expect(toBeTested.randomNumber).toHaveBeenCalled();
  });
});