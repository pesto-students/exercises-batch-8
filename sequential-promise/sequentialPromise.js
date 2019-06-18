function sequentialPromise(promises) {
  return promises.reduce((acc, promise) => acc.then(promise), Promise.resolve());
}

export { sequentialPromise };
