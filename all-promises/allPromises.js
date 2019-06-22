function allPromises(prmomises) {
  const allPromiseRecursive = (pendingPromises, results) => {
    if (pendingPromises === undefined || pendingPromises.length === 0) {
      return new Promise((res) => {
        res(results);
      });
    }
    if (!(pendingPromises[0] instanceof Promise)) {
      results.push(pendingPromises[0]);
      pendingPromises.shift();
      return allPromiseRecursive(pendingPromises, results);
    }
    return pendingPromises[0].then((result) => {
      results.push(result);
      pendingPromises.shift();
      return allPromiseRecursive(pendingPromises, results);
    });
  };
  return allPromiseRecursive(prmomises, []);
}

export { allPromises };
