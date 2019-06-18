const resolvedObject = {};

function promiseAllProps(obj) {
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    obj[key]
      .then((result) => { resolvedObject[key] = result; });
  });
  return Promise.resolve(resolvedObject);
}

export {
  promiseAllProps,
};
