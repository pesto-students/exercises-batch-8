import { createObject } from './createObjectTest';

describe('createObject', () => {
  test('should return an object with fname and lname as key with values as passed to function', () => {
    expect(JSON.stringify(createObject('anshu', 'rathee'))).toBe(JSON.stringify({ fname: 'anshu', lname: 'rathee' }));
  });
});
