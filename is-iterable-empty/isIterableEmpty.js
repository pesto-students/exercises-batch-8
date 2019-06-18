
function isIterableEmpty(iterable) {
  // eslint-disable-next-line no-unused-vars
  for (const _ of iterable) return false;
  if (iterable instanceof Map && iterable.size() === 0) return true;
  return true;
}

export {
  isIterableEmpty,
};
