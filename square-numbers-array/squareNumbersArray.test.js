import { squareNumbersArray } from './squareNumbersArray';

describe('squareNumbersArray', () => {
  test('should throw an error if array of numbers is not passed as argument', () => {
    const myArray = [1, 2, 'string', 4];
    expect(() => squareNumbersArray(...myArray)).toThrow('My custom error');
  });
  test('should return square array', () => {
          const mArray = [1, 2, 4];
          expect((() => squareNumbersArray(...mArray))()).toEqual([1, 4, 16]);
  });
});
