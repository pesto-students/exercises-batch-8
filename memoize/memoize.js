
function memoize(func) {
  const memo = {};
  return (...args) => {
    const index = args.toString();
    if (memo[index] === undefined) {
      memo[index] = func(...args);
    }
    return memo[index];
  };
}

export {
  memoize,
};
