
function isIterable(...args) {
  return typeof args[0][Symbol.iterator] === 'function';
}

export {
  isIterable,
};
