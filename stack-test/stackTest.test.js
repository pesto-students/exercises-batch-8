/**
 * Pass the test below and then complete 100% coverage
 */
import { Stack } from './stackTest';

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

  test('should pop elements from top of the stack', () => {
    const actualReturnValue = myStack.pop();
    const expectedReturnValue = 3;

    expect(actualReturnValue).toBe(expectedReturnValue);

    const actualStack = myStack.items;
    const expectedStack = [1, 2];

    expect(actualStack).toEqual(expectedStack);
  });

  test('should return length of the stack', () => {
    const actual = myStack.getLength();
    const expected = 3;

    expect(actual).toBe(expected);
  });

  test('should return peek (top) value of the stack', () => {
    const actualReturnValue = myStack.peek();
    const expectedReturnValue = 3;

    expect(actualReturnValue).toBe(expectedReturnValue);

    const actualStack = myStack.items;
    const expectedStack = [1, 2, 3];

    expect(actualStack).toEqual(expectedStack);
  });

  test('should return undefined if stack is empty', () => {
    myStack.pop();
    myStack.pop();
    myStack.pop();

    const actual = myStack.pop();

    expect(actual).toBe(undefined);

    const actualStack = myStack.items;
    const expectedStack = [];

    expect(actualStack).toEqual(expectedStack);
  });
});
