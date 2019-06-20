const slice = (elements, fromIndex, toIndex) => elements.slice(fromIndex, toIndex);

function splitEvery(len, elements) {
  if (!Number.isInteger(len)) {
    throw new Error(`${len} is not integer`);
  }
  if (len <= 0) {
    throw new Error(`${len} is not positive integer`);
  }

  let startIndex = 0;
  let endIndex = startIndex + len;

  const result = [];

  while (startIndex < elements.length) {
    const nextList = slice(elements, startIndex, endIndex);
    if (nextList.length) {
      result.push(nextList);
    }

    startIndex = endIndex;
    endIndex = startIndex + len;
  }
  return result;
}

export {
  splitEvery,
};
