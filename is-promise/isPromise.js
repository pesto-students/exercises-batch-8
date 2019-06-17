
function isPromise(value) {
  // value is promise only if it is object with then function. i.e thennable object
  return Boolean(value && typeof value.then === 'function');
}

export {
  isPromise,
};
