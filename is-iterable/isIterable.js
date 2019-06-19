
function isIterable(maybeIterable) {
  return typeof maybeIterable[Symbol.iterator] === 'function'
    && typeof maybeIterable[Symbol.iterator]().next === 'function'
    && Object.prototype.hasOwnProperty.call(maybeIterable[Symbol.iterator]().next(), 'done');
}

export {
  isIterable,
};
