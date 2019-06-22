function promiseAllPropsRecursive(promiseKeyValuePairs, resolvedPromiseKeyValuePairs = {}) {
  const keys = Object.keys(promiseKeyValuePairs);
  if (keys.length === 0) {
    return resolvedPromiseKeyValuePairs;
  }
  const allPromise = promiseKeyValuePairs[keys[0]].then((res) => {
    const updatedPromiseKeyValuePairs = { ...promiseKeyValuePairs };
    delete updatedPromiseKeyValuePairs[[keys[0]]];
    const updatedResolvedPromiseKeyValuePairs = { ...resolvedPromiseKeyValuePairs, [keys[0]]: res };
    return promiseAllPropsRecursive(updatedPromiseKeyValuePairs,
      updatedResolvedPromiseKeyValuePairs);
  });
  return allPromise;
}

function promiseAllProps(promiseKeyValuePairs) {
  return promiseAllPropsRecursive(promiseKeyValuePairs, {});
}

export {
  promiseAllProps,
};
