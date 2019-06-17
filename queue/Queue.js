// import { classBody } from "@babel/types";

// function queue(...args) {
//   return args;
// }
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.unshift(item);
  }

  dequeue() {
    this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
export {
  Queue,
};
