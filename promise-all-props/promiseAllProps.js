
function promiseAllProps(promises) {
  const promiseValues = Object.values(promises);
  const promiseKeys = Object.keys(promises);

  return Promise
    .all(promiseValues)
    .then((resolvedPromises) => {
      const allResolved = promiseKeys.map((keyName, index) => ({
        key: keyName,
        value: resolvedPromises[index],
      }));
      const resolved = {};
      allResolved.forEach((item) => {
        resolved[item.key] = item.value;
      });
      return resolved;
    });
}

export {
  promiseAllProps,
};
