
function promiseAllProps(promisesObject) {
  const resultObject = {};
  const promisesArray = Object.keys(promisesObject).map(key => promisesObject[key]);
  return Promise.all(promisesArray)
    .then(results => results.forEach((result, i) => {
      resultObject[Object.keys(promisesObject)[i]] = result;
    }))
    .then(() => resultObject);
}

export {
  promiseAllProps,
};
