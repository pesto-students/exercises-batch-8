
function memoize(func) {
  const cache = {};
  return (...arg) => {
    if (!cache[arg.toString()]) {
      cache[arg.toString()] = func(...arg);
    }
    return cache[arg.toString()];
  };
}

export {
  memoize,
};
