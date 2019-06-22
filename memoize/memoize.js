/* eslint-disable */

function memoize(fn) {
  const cache = {};
  return function() {
    const key = JSON.stringify(arguments);
    if (cache[key]) {
      return cache[key];
    }
    const value = fn.apply(null, arguments);
    cache[key] = value;
    return value;
  };
}

export { memoize };
