
function isIterableEmpty(iterable) {
  const iterator = iterable[Symbol.iterator]();
  return iterator.next().done;
}

export {
  isIterableEmpty,
};
