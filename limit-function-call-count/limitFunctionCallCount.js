
function limitFunctionCallCount(func, maxCalls) {
  let callLimit = maxCalls;
  return (...args) => {
    if (callLimit === 0) {
      return null;
    }
    callLimit -= 1;
    return func(...args);
  };
}

export {
  limitFunctionCallCount,
};
