/* eslint-disable no-undef */

import { numberSum } from './numberSumTest';

describe('numberSum test', () => {
  it('should sum two numbers', () => {
    const actual = numberSum(2, 3);
    const expected = 5;

    expect(actual).toEqual(expected);
  });
});
