class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.linkedList = {
      head: null,
      last: null,
    };
  }

  enqueue(element) {
    const node = new LinkedListNode(element, null);
    if (this.linkedList.head === null) {
      this.linkedList.head = node;
      this.linkedList.last = node;
    } else {
      this.linkedList.last.next = node;
    }
  }

  dequeue() {
    const returnValue = this.peek();
    if (this.linkedList.head != null) {
      this.linkedList.head = this.linkedList.head.next;
    }
    return returnValue;
  }

  peek() {
    if (this.linkedList.head == null) {
      return null;
    }
    return this.linkedList.head.value;
  }

  isEmpty() {
    return this.linkedList.head === null;
  }

  [Symbol.iterator]() {
    let traverser = this.linkedList.head;
    return {
      next: () => {
        if (traverser === null) {
          traverser = this.linkedList.head;
          return { value: undefined, done: true };
        }
        const currentItem = traverser;
        traverser = traverser.next;
        return { value: currentItem.value, done: false };
      },
    };
  }

  toString(stringifier) {
    if (stringifier === undefined) {
      return [...this].join(',');
    }
    return [...this].map(element => stringifier(element)).join(',');
  }
}

export {
  Queue,
};
