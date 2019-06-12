/**
 * Pass the test below and then complete 100% coverage
 */

import { StackTest as Stack } from './stackTest';

describe('stack test', () => {
  let myStack;
  beforeEach(() => {
    myStack = new Stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
  });

  test('should push elements to stack in order', () => {
    const actual = myStack.items;
    const expected = [1, 2, 3];

    expect(actual).toEqual(expected);
  });

  test('should increase the length when push() method is called', () => {
    const previous = myStack.getLength();
    myStack.push(4);
    const actual = myStack.getLength();

    expect(actual).toEqual(previous + 1);
  });

  test('should decrease length when pop() method is called', () => {
    const previous = myStack.getLength();
    myStack.pop();
    const actual = myStack.getLength();

    expect(actual).toEqual(previous - 1);
  });

  test('should give correct length zero size list', () => {
    myStack.pop();
    myStack.pop();
    myStack.pop();
    myStack.pop();
    myStack.pop();

    expect(myStack.getLength()).not.toBeLessThan(0);
  });

  test('should return correct top value', () => {
    const expected = 234;
    myStack.push(expected);
    const actual = myStack.peek();

    expect(actual).toEqual(expected);
  });
});
