
class Cycled {
  constructor(fixture) {
    this.fixture = fixture;
    this.currentIndex = 0;
  }

  current() {
    return this.fixture[this.currentIndex];
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.fixture.length;
  }
}

export {
  Cycled,
};
