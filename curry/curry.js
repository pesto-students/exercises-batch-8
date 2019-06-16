
function curry(func, ...args) {
  if (func.length <= args.length) {
    return func(...args);
  }
  return (...more) => curry(func, ...args, ...more);
}

export {
  curry,
};
