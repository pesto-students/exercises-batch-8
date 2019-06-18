const simpleIterable = {
  object: {
    value: 0,
    done: false,
  },
  [Symbol.iterator]() {
    if (this.object.value <= 5) {
      this.object.value = this.object.value + 1;
      return this.object;
    }
    return { value: undefined, done: true };
  },
};

export { simpleIterable };
