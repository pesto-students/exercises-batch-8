import { Stack } from './stackTest';

describe('stack test', () => {
  let myStack;
  beforeEach(() => {
    myStack = new Stack();
    myStack.push(3);
    myStack.push(2);
    myStack.push(1);
  });

  test('should push elements to stack in order', () => {
    const actual = myStack.items;
    const expected = [3, 2, 1];

    expect(actual).toEqual(expected);
  });
});
