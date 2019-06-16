
function memoize(fn) {
  const cache = {};
  let result;
  return (...args) => {
    const key = args.toString();
    if (key in cache) {
      result = cache[key];
    } else {
      cache[key] = fn(...args);
      result = cache[key];
    }
    return result;
  };
}

export {
  memoize,
};
