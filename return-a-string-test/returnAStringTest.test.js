import { returnAStringTest as returnAString } from './returnAStringTest';

describe('returnAString', () => {
  test('should return a string', () => {
    expect(returnAString()).toContain('world');
  });
});
