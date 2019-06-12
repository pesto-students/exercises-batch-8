import { returnTrueTest as returnTrue } from './returnTrueTest';

describe('returnTrue', () => {
  test('should return true as a boolean', () => {
    expect(returnTrue()).toStrictEqual(true);
  });
});
