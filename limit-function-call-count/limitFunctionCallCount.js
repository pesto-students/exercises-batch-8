
function limitFunctionCallCount(func, callLimit) {
  let timesFunctionCalled = 0;
  return (...args) => {
    if (timesFunctionCalled < callLimit) {
      timesFunctionCalled += 1;
      return func.apply(this, args);
    }
    return null;
  };
}

export {
  limitFunctionCallCount,
};
