
function curry(passedFunction, ...args) {
  if (passedFunction.length === args.length) {
    return passedFunction(...args);
  }
  return (...rest) => curry(passedFunction, ...args, ...rest);
}

export {
  curry,
};
