
function counterFactory() {
  function Counter() {
    this.count = 0;
  }

  Counter.prototype.increment = function () {
    this.count += 1;
    return this.count;
  };

  Counter.prototype.decrement = function () {
    this.count -= 1;
    return this.count;
  };
  return new Counter();
}

export {
  counterFactory,
};
