
function promiseAllProps(promisesObject) {
  const promises = Object.keys(promisesObject).reduce((acc, key) => {
    acc[key] = promisesObject[key];
    return acc;
  }, []);
  return Promise.all(promises);
}

export {
  promiseAllProps,
};
