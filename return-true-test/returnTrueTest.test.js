import { returnTrueTest } from './returnTrueTest';

describe('returnTrue', () => {
  test('should return true as a boolean', () => {
    expect(returnTrueTest()).toBe(true);
    expect(returnTrueTest()).toBeTruthy();
    expect(!returnTrueTest()).toBeFalsy();
  });
});
