function isIterable(isaIterable) {
  return (
    typeof isaIterable[Symbol.iterator] === 'function'
    && typeof isaIterable[Symbol.iterator]().next === 'function'
    && Object.prototype.hasOwnProperty.call(isaIterable[Symbol.iterator]().next(), 'done')
  );
}

export { isIterable };
