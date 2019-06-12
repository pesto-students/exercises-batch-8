import { createObjectTest as createObject } from './createObjectTest';

describe('createObject', () => {
  test('should return an object with fname', () => {
    expect(createObject('anshu', 'rathee').fname).toBe('anshu');
  });

  test('should return an object with fname', () => {
    expect(createObject('anshu', 'rathee').lname).toBe('rathee');
  });
});
