
function promiseAllProps(promisesObject) {
  return Promise.all(Object.values(promisesObject)).then(promisesObject);
}

export {
  promiseAllProps,
};
