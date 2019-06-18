
function isIterableEmpty(iterable) {
  const iterator = iterable[Symbol.iterator]();
  // if iterable is empty, in first iteration it should give done true
  return iterator.next().done;
}

export {
  isIterableEmpty,
};
