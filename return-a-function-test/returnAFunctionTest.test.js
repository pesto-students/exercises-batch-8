const fun = () => {};

describe('returnAFunction Test', () => {
  test('should return a Function', () => {
    expect(fun).toBeInstanceOf(Function);
  });
});
