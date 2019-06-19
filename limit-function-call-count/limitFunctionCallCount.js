
function limitFunctionCallCount(fn, limit) {
  let counter = 0;

  return function fnLimiter(...args) {
    if (counter >= limit) {
      return null;
    }
    counter += 1;
    return fn.apply(this, args);
  };
}

export {
  limitFunctionCallCount,
};
