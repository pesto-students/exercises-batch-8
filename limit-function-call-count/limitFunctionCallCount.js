
function limitFunctionCallCount(func, callLimit) {
  let limit = callLimit + 1;
  const limiterFunc = (...args) => {
    limit -= 1;
    return limit ? func(...args) : null;
  };
  return limiterFunc;
}

export {
  limitFunctionCallCount,
};
