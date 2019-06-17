
class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(data) {
    this.data.push(data);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    return this.data.shift();
  }

  isEmpty() {
    return this.data.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.data[0];
  }

  toString(stringifier) {
    if (stringifier) {
      return this.data.map(stringifier).join(',');
    }

    return this.data.toString();
  }
}

export {
  Queue,
};
