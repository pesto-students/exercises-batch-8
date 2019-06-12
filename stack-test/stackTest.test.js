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

  test('should return length of stack', () => {
    const actual = myStack.getLength();
    const expected = 3;
    expect(actual).toEqual(expected);
  });

  test('should return topmost element', () => {
    const actual = myStack.pop();
    const expected = 3;
    expect(actual).toEqual(expected);
    const actual2 = myStack.pop();
    const expected2 = 2;
    expect(actual2).toEqual(expected2);
    const actual3 = myStack.pop();
    const expected3 = 1;
    expect(actual3).toEqual(expected3);
    const actual4 = myStack.pop();
    const expected4 = undefined;
    expect(actual4).toEqual(expected4);
    const actual5 = myStack.pop();
    const expected5 = undefined;
    expect(actual5).toEqual(expected5);
  });

  test('should return topmost element of stack', () => {
    const actual = myStack.peek();
    const expected = 3;
    expect(actual).toEqual(expected);
  });
});
