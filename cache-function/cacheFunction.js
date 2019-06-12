
function cacheFunction(fn) {
  if (!fn) {
    return Function;
  }

  const memo = {};

  return (arg) => {
    if (!(arg in memo)) {
      const result = fn(arg);
      memo[arg] = result;
    }
    return memo[arg];
  };
}

export {
  cacheFunction,
};
