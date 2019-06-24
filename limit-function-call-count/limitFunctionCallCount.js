function limitFunctionCallCount(fn, count) {
  let counter = 0;
  return function (...args) {
    if (counter === count) {
      return null;
    }
    counter += 1;
    return fn.apply(this, args);
  };
}

export { limitFunctionCallCount };