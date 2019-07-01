function memoize(func) {
  const memo = {};
  const { slice } = Array.prototype;

  return function mm(...params) {
    const args = slice.call(params);

    if (!(args in memo)) {
      memo[args] = func.apply(this, args);
    }
    return memo[args];
  };
}

export {
  memoize,
};
