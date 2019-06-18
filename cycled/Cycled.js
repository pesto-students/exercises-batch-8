
class Cycled {
  constructor(array = []) {
    this.array = array;
    this.length = array.length;
    this.index = 0;
  }

  * next() {
    while (this.array) {
      yield this.array[this.index];
      this.index += 1;
    }
  }
}

export {
  Cycled,
};
