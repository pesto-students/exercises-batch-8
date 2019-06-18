
function cacheFunction(fn) {
  if (!fn) {
    return Function;
  }

  const memo = {};

  return (arg) => {
    if (!(arg in memo)) {
      memo[arg] = fn(arg);
    }
    return memo[arg];
  };
}

export {
  cacheFunction,
};
