
function findElement(numArray, isTrueOnPredicate) {
  for (const number of numArray) {
    if (isTrueOnPredicate(number)) {
      return number;
    }
  }
  return undefined;
}

export {
  findElement,
};
