
function limitFunctionCallCount(fn, n) {
  let called = 0;
  return (...args) => {
    called += 1;
    if (called <= n) {
      return fn(...args);
    }
    return null;
  };
}

export {
  limitFunctionCallCount,
};
