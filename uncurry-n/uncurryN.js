
function uncurryN(argLength, fn) {
  return (...args) => args.reduce((acc, arg) => acc(arg), fn);
}

export {
  uncurryN,
};
