import { getName } from './getNameTest';

describe('throwError test', () => {
  test('should return string with given name', () => {
    const actual = getName('Martin Garrix');
    const expected = 'You entered: Martin Garrix';
    expect(actual).toMatch(expected);
  });

  test('should throw error if argument is not a string', () => {
    const expected = 'name should be of type string';
    expect(() => getName(123)).toThrow(expected);
  });
});
