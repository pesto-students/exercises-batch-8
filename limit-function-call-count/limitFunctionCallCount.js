
function limitFunctionCallCount(fun, count) {
  let remainingCount = count;
  return (...args) => {
    if (remainingCount) {
      remainingCount -= 1;
      return fun(...args);
    }
    return null;
  };
}

export {
  limitFunctionCallCount,
};
