
function isIterable(collection) {
  const iterator = collection[Symbol.iterator] || null;
  return typeof iterator === 'function';
}

export {
  isIterable,
};
