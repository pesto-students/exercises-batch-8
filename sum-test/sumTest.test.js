import { sumTest } from './sumTest';

describe('sum', () => {
  test('should add two numbers correctly', () => {
    expect(sumTest(1, 2)).toBe(3);
  });
});
