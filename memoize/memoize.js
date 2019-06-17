function memoize(func) {
  const memo = {};
  function memoizedFunction(...args) {
    if (memo[args]) {
      return memo[args];
    }
    const returnVal = func(...args);
    memo[args] = returnVal;
    return returnVal;
  }
  return memoizedFunction;
}

export {
  memoize,
};
