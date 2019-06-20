const toRealIndex = (index, elements) => {
  if (index < 0) {
    if (Math.abs(index) > elements.length) {
      return 0;
    }
    return elements.length + index;
  }
  if (index > elements.length) {
    return elements.length;
  }
  return index;
};

function slice(fromIndex, toIndex, elements) {
  const startIndex = toRealIndex(fromIndex, elements);
  const endIndex = toRealIndex(toIndex, elements);

  const sliced = [];
  for (let i = startIndex; i < endIndex; i += 1) {
    sliced.push(elements[i]);
  }

  if (typeof elements === 'string') {
    return sliced.join('');
  }
  return sliced;
}

export {
  slice,
};
