
function isIterableEmpty(maybeEmptyIterable) {
  return maybeEmptyIterable[Symbol.iterator]().next().value === undefined
    && maybeEmptyIterable[Symbol.iterator]().next().done === true;
}

export {
  isIterableEmpty,
};
