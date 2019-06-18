
class Queue {
  constructor() {
    this.list = [];
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.list.shift();
  }

  enqueue(num) {
    this.list.push(num);
  }

  isEmpty() {
    return this.list.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.list[0];
  }

  toString(stringifier) {
    if (stringifier) {
      const stringifiedList = this.list
        .map((item) => {
          if (item instanceof Object) {
            return stringifier(item);
          }
          return item.toString();
        });
      return stringifiedList.join(',');
    }
    return this.list.toString();
  }
}

export {
  Queue,
};
