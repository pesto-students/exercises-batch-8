
class Queue {
  constructor() {
    this.linkedList = [];
    this.enqueue = el => this.linkedList.push(el);
    this.dequeue = () => {
      if (this.linkedList.length <= 0) {
        return null;
      }
      return this.linkedList.shift();
    };
    this.isEmpty = () => this.linkedList.length === 0;
    this.toString = (stringifier) => {
      if (stringifier) {
        return this.linkedList.map(value => stringifier(value)).join();
      }
      return this.linkedList.join();
    };
    this.peek = () => (this.linkedList.length === 0 ? null : this.linkedList[0]);
  }
}

export {
  Queue,
};
