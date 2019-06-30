

function binarySearch(container, queryContainer, comparator) {
  if (typeof queryContainer !== 'object') {
    return container.indexOf(queryContainer);
  }

  let returnedNumber = -1;
  for (let index = 0; index < container.length; index += 1) {
    const obj = container[index];
    if (!comparator(obj, queryContainer)) {
      returnedNumber = index;
      break;
    }
  }
  return returnedNumber;
}

export {
  binarySearch,
};
