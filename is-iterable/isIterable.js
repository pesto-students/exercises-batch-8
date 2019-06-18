
function isIterable(object) {
  return typeof object[Symbol.iterator] === 'function';
}

export {
  isIterable,
};
