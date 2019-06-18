/**
 * TODO: WIP
 */
class Cycled {
  constructor(values) {
    this.index = 0;
    this.values = values;
  }

  current() {
    return this.values[this.index];
  }

  next() {
    if (this.index === this.values.length - 1) {
      this.index = 0;
    } else {
      this.index += 1;
    }
    return this.current();
  }

  previous() {
    if (this.index === 0) {
      this.index = this.values.length - 1;
    } else {
      this.index -= 1;
    }
    return this.current();
  }
}

export {
  Cycled,
};
