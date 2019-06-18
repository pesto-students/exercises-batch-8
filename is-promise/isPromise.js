
function isPromise(promise) {
  return Promise.resolve(promise) === promise;
}

export {
  isPromise,
};
