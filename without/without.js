
const isNegativeZero = x => x === 0 && 1 / x < 0;
const containsNegativeZero = array => array.some(num => isNegativeZero(num));
const containsIsNaN = array => array.some(num => Number.isNaN(num));
const areArraysEqual = (first, second) => {
  first.sort().every((value, index) => value === second.sort()[index]);
};

function without(excluder, main) {
  const excluded = main.filter((el) => {
    const hasNegativeZero = (el === 0 && (isNegativeZero(el) || containsNegativeZero(excluder)));
    if (hasNegativeZero) {
      return true;
    }

    const hasNaN = Number.isNaN(el) && containsIsNaN(excluder);
    if (hasNaN) {
      return false;
    }

    if (Array.isArray(el) && areArraysEqual(main, excluder)) {
      return true;
    }

    return (excluder.indexOf(el) === -1);
  });

  return excluded;
}

export {
  without,
};
