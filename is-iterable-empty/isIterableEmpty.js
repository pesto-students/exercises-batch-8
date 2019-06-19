function isIterableEmpty(iterable) {
  return (
    iterable[Symbol.iterator]().next().value === undefined
    && iterable[Symbol.iterator]().next().done
  );
}

export { isIterableEmpty };
