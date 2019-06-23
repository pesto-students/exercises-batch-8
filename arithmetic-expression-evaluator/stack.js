class Stack {
  constructor() {
    this.size = 0;
    this.storage = [];
  }

  push(data) {
    this.size += 1;
    const { size } = this;
    this.storage[size] = data;
  }

  pop() {
    const { size } = this;
    let deletedData;

    if (size) {
      deletedData = this.storage[size];
      delete this.storage[size];
      this.size -= 1;
    }
    return deletedData;
  }

  peek() {
    return this.storage[this.size];
  }
}

export { Stack };
