function isIterableEmpty(iterableObject) {
  const objectType = typeof iterableObject[Symbol.iterator]();
  if (!objectType === 'function') {
    return false;
  }
  const iterObject = iterableObject[Symbol.iterator]();
  return iterObject.next().done === true;
}

export {
  isIterableEmpty,
};
