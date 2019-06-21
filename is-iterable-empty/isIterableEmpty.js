
function isIterableEmpty(object) {
  const iterator = object[Symbol.iterator]();
  if (iterator.next().done) {
    return true;
  }
  return false;
}

export {
  isIterableEmpty,
};
