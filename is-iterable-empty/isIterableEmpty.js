
function isIterableEmpty(iterable) {
  const iterator = iterable[Symbol.iterator]();
  const { done } = iterator.next();
  return done;
}

export {
  isIterableEmpty,
};
