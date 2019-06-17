
function promiseAllProps(object) {
  return new Promise((resolve, reject) => {
    Promise.all(object.foo, object.bar)
      .then((result) => {
        resolve({
          foo: result[0],
          bar: result[1],
        });
      })
      .error((error) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          foo: error[0],
          bar: error[1],
        });
      });
  });
}

export {
  promiseAllProps,
};
