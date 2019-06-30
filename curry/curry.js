
function curry(func) {
  return function currify(...args) {
    if (args.length >= func.length) {
      return func(...args);
    }
    return currify.bind(null, ...args);
  };
}

export {
  curry,
};
