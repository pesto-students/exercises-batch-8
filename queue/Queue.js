
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const removedItem = this.items.shift();
    return removedItem;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  toString(stringifier) {
    if (stringifier) {
      return this.items.map(stringifier).join(',');
    }
    return this.items.toString();
  }
}

export {
  Queue,
};
