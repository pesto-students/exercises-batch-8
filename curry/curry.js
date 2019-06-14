/* eslint-disable */

function curry(fn, count = 0, args = []) {
  const argsLength = fn.length;
  if (count === argsLength) {
    return fn.apply(null, args);
  }
  return function() {
    return curry(fn, count + arguments.length, [...args, ...arguments]);
  };
}

export { curry };
