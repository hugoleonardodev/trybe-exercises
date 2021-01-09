const math = require('./mocking-functions_2');
jest.mock('./mocking-functions_2');

describe('Testing functions in math.js', () => {
  it('Subtract should be called once.', () => {
    math.subtrair();
    expect(math.subtrair).toBeCalled();
  });

  it('Multiply is mocked and should return 10 as default.', () => {
    math.multiplicar = jest
      .fn()
      .mockReturnValue(10);
    expect(math.multiplicar()).toBe(10);
    expect(math.multiplicar).toBeCalled();
  });

  it('Sum is mocked and refactored.', () => {
    math.somar.mockImplementation((a, b) => a + b);
    math.somar(1, 2);

    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenCalledWith(1, 2);
    expect(math.somar(1, 2)).toBe(3);
  });

  it('Division is mocked. Should Return 15 as default.', () => {
    math.dividir.mockReturnValue(15);
    math.dividir.mockReturnValueOnce(2);
    math.dividir.mockReturnValueOnce(5);

    expect(math.dividir()).toBe(2);
    expect(math.dividir()).toBe(5);
    expect(math.dividir).toBeCalled();
    expect(math.dividir).toBeCalledTimes(2);
  });

  it('Subtract is set to original and default return set to 20.', () => {
    math.subtrair.mockRestore();
    math.subtrair.mockReturnValue(20);
    math.subtrair();

    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair()).toBe(20);
    expect(math.subtrair).toHaveBeenCalledTimes(2);
  });
});