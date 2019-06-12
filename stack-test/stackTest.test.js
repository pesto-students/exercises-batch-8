/**
 * Pass the test below and then complete 100% coverage
 */

class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  getLength() {
    return this.count;
  }

  push(item) {
    this.items.push(item);
    this.count = this.count + 1;
  }

  pop() {
    if (this.count > 0) {
      this.count = this.count - 1;
    }

    return this.items.pop();
  }

  // returns top element in the stack
  peek() {
    return this.items.slice(-1)[0];
  }
}

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

  test('should pop and return the top element, if exists, else return undefined', () => {
    expect(myStack.pop()).toBe(3);
    expect(myStack.pop()).toBe(2);
    expect(myStack.pop()).toBe(1);
    expect(myStack.pop()).toBe(undefined);
  });

  test('should return the length of the stack', () => {
    myStack.pop();
    expect(myStack.getLength()).toBe(2);
  });

  test('should show the top most element', () => {
    expect(myStack.peek()).toBe(3);
  });
});
