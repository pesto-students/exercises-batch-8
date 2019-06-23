
function memoize(fn) {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (Object.prototype.hasOwnProperty.call(cache, key)) {
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}

export {
  memoize,
};
