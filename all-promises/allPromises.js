function resolvePromiseIfAllResolved(resolvedCount, promises, promiseMap, allPromiseResolve) {
  if (resolvedCount === promises.length) {
    allPromiseResolve(Object.values(promiseMap));
  }
}

function allPromises(promises) {
  const allPromise = new Promise((resolve) => {
    let promiseMap = {};
    let resolvedCount = 0;
    for (const [index, promise] of promises.entries()) {
      if (promise instanceof Promise) {
        // eslint-disable-next-line
        promise.then(res => {
          promiseMap = { ...promiseMap, [index]: res };
          resolvedCount += 1;
          resolvePromiseIfAllResolved(resolvedCount, promises, promiseMap, resolve);
        });
      } else {
        promiseMap = { ...promiseMap, [index]: promise };
        resolvedCount += 1;
        resolvePromiseIfAllResolved(resolvedCount, promises, promiseMap, resolve);
      }
    }
  });
  return allPromise;
}

export { allPromises };
