
function curry(fn, ...args) {
  return (fn.length === args.length) ? fn(...args) : (..._args) => curry(fn, ...args, ..._args);
}

export {
  curry,
};
