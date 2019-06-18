function isPromise(argumentPromise) {
  if (Promise && Promise.resolve) {
    return Promise.resolve(argumentPromise) === argumentPromise;
  }
  return Promise.resolve(false);
}

export { isPromise };
