class Queue {
  constructor() {
    this.linkedList = [];
  }

  enqueue(data) {
    this.linkedList.push(data);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList.shift();
  }

  peek() {
    if (!this.isEmpty()) {
      return this.linkedList[0];
    }
    return null;
  }

  isEmpty() {
    return this.linkedList.length === 0;
  }

  toString(fn) {
    if (fn) {
      const fnApplied = this.linkedList.map(fn);
      const fnAppliedString = fnApplied.join(',');

      return fnAppliedString;
    }
    return this.linkedList.toString();
  }
}

export {
  Queue,
};
