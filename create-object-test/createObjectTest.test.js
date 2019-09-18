import { createObjectTest } from './createObjectTest';

describe('createObject', () => {
  test('should return an object with fname and lname as key with values as passed to function', () => {
    expect(createObjectTest('anshu', 'rathee')).toMatchObject({ fname: 'anshu', lname: 'rathee' });
  });
});
