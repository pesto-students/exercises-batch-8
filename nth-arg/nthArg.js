
function nthArg(n) {
  return (...args) => args[((n + args.length) % args.length)];
}

export {
  nthArg,
};
