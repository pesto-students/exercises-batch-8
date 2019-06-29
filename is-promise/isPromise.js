
function isPromise(element) {
  if (Promise && Promise.resolve) {
    return Promise.resolve(element) === element;
  }
  return Promise.resolve(false);
}

export {
  isPromise,
};
