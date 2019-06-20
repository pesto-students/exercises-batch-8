function summable({ target, array }) {
  let startPointer = 0;
  let endPointer = array.length - 1;
  while (startPointer < endPointer) {
    if (array[startPointer] + array[endPointer] === target) {
      return true;
    }
    if (array[startPointer] + array[endPointer] < target) {
      startPointer += 1;
    } else {
      endPointer -= 1;
    }
  }
  return false;
}

export {
  summable,
};
