import { squareNumbersArray } from './squareNumbersArray';

describe('squareNumbersArray', () => {
  test('should throw an error if array of numbers is not passed as argument', () => {
    const myArray = [1, 2, 'string', 4];
    expect(() => {
      squareNumbersArray(myArray);
    }).toThrowError();
  });
  test('should return square array', () => {
    const arr = [1, 5, 6];
    expect(squareNumbersArray(arr)).toStrictEqual([1, 25, 36]);
  });
});
