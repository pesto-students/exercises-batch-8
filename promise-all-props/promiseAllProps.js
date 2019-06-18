
function promiseAllProps(promisesObject) {
  const resultObject = {};
  const promisesInArray = Object.keys(promisesObject).map(key => promisesObject[key]);
  return Promise.all(promisesInArray)
    .then(results => results.forEach((result, i) => {
      resultObject[Object.keys(promisesObject)[i]] = result;
    }))
    .then(() => resultObject);
}

export {
  promiseAllProps,
};
