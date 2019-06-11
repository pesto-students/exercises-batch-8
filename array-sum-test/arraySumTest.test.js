import { arraySumTest } from './arraySumTest';

describe('arraySum test', () => {
  test('should sum the array of numbers', () => {
    const fixture = [1, 2, 3, 4, 5];
    const sum = arraySumTest(...fixture);

    expect(sum).toEqual(15);
  });
});
