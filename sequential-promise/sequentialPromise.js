
function sequentialPromise(promises) {
  const result = promises.reduce(
    (acc, currentFunction) => acc.then(currentFunction),
    Promise.resolve(),
  );

  return result;
}

export {
  sequentialPromise,
};
