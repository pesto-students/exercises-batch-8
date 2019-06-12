import { sum } from './sumTest';

describe('sum', () => {
  test('should add two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
