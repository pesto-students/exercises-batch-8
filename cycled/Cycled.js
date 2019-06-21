
class Cycled {
  constructor(elements) {
    this.elements = [...elements];
    this.currentIndex = 0;
    this.iteratorIndex = -1;
  }

  // eslint-disable-next-line class-methods-use-this
  negetiveNumberModulo(dividend, divisor) {
    return divisor - ((divisor - dividend) % divisor);
  }

  get index() {
    if (this.currentIndex < 0) {
      this.currentIndex = this.negetiveNumberModulo(this.currentIndex, this.elements.length);
    }
    return this.currentIndex;
  }

  reversed() {
    this.elements.reverse();
    return this.elements[Symbol.iterator]();
  }

  set index(value) {
    this.currentIndex = value;
  }

  indexOf(number) {
    return this.elements.indexOf(number);
  }

  current() {
    return this.elements[this.index % this.elements.length];
  }

  next() {
    return this.step(1);
  }

  previous() {
    return this.step(-1);
  }

  step(count) {
    this.currentIndex += count;
    return this.current();
  }

  [Symbol.iterator]() {
    return {
      next: () => ({
        value: (() => {
          this.iteratorIndex += 1;
          return this.elements[(this.iteratorIndex + this.index) % this.elements.length];
        })(),
        done: (() => {
          if (this.elements.length <= this.iteratorIndex) {
            this.iteratorIndex = -1;
            return true;
          }
          return false;
        })(),
      }),
    };
  }
}

export {
  Cycled,
};
