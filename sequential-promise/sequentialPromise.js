function sequentialPromise(functions, currentFunction = 0, args) {
  if (functions.length === currentFunction) {
    return Promise.resolve(args);
  }
  return functions[currentFunction](args)
    .then(res => sequentialPromise(functions, currentFunction + 1, res));
}

export {
  sequentialPromise,
};
