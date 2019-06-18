
function isIterable(collection) {
  const iterator = collection[Symbol.iterator] || null;
  return !!iterator && typeof iterator === 'function';
}

export {
  isIterable,
};
