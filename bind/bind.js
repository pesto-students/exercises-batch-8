function bind(fn, self, ...args) {
  return function (...restArguments) {
    const functionArguments = args === undefined ? [...restArguments] : [...args, ...restArguments];
    return fn.apply(self, functionArguments);
  };
}

export { bind };
