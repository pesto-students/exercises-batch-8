
function isIterable(collection) {
  return typeof collection[Symbol.iterator] === 'function';
}

export {
  isIterable,
};
