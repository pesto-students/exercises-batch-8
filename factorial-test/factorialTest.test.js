import { factorialTest } from './factorialTest';

describe('factorial test', () => {
  test('should find factorial of an integer', () => {
    const actual = factorialTest(5);
    const expected = 120;

    expect(actual).toEqual(expected);
  });

  test('should find factorial of 0', () => {  
    const actual = factorialTest(0);
    const expected = 1;
    expect(actual).toEqual(expected);
  });
});
