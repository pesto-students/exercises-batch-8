
function isIterableEmpty(iterableElement) {
  return iterableElement[Symbol.iterator]().next().done;
}

export {
  isIterableEmpty,
};
