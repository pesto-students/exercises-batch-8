const resolvedResults = [];

function allPromises(promises) {
  if (!promises) {
    return Promise.resolve();
  }
  const [promise, ...restOfPromises] = [...promises];
  return Promise.resolve(promise)
    .then((result) => {
      if (!result) {
        return resolvedResults;
      }
      resolvedResults.push(result);
      return allPromises(restOfPromises);
    });
}

export {
  allPromises,
};
