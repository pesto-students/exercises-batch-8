function limitFunctionCallCount(callback, callCount) {
  let count = 1;
  return function toBeCalled(...args) {
    if (count > callCount) {
      return null;
    }
    count += 1;
    return callback(...args);
  };
}

export { limitFunctionCallCount };
