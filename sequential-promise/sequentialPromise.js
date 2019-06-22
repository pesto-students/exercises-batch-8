function sequentialPromise(functions) {
  const sequentialPromiseRecursive = (pendingFunctions, ...accumulatedResult) => {
    if (pendingFunctions.length === 0) {
      return Promise.resolve(accumulatedResult[0]);
    }
    return pendingFunctions[0].apply(null, accumulatedResult).then((result) => {
      pendingFunctions.shift();
      return sequentialPromiseRecursive(pendingFunctions, result);
    });
  };
  return sequentialPromiseRecursive(functions);
}

export { sequentialPromise };
