function allPromises(promises, results = []) {
  if (promises === undefined) {
    return Promise.resolve([]);
  }
  if (promises.length === 0) {
    return Promise.resolve(results);
  }
  let firstPromise = promises[0];
  promises.shift();
  if (!(firstPromise instanceof Promise)) {
    firstPromise = new Promise(res => res(firstPromise));
  }
  return firstPromise.then(res => allPromises(promises, [...results, res]));
}

export { allPromises };
