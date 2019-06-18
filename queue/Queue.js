class Queue {
  constructor() {
    this.result = [];
  }

  enqueue(data) {
    this.result.push(data);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.result.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.result[0];
  }

  isEmpty() {
    return this.result.length === 0;
  }

  toString(string) {
    if (string) {
      return this.result.map(string).join(',');
    }

    return this.result.toString();
  }
}

export { Queue };
