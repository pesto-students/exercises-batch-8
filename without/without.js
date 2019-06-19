
const isNegativeZero = x => x === 0 && 1 / x < 0;
const containsNegativeZero = array => array.some(num => isNegativeZero(num));
const containsIsNaN = array => array.some(num => Number.isNaN(num));

const arraysAreEqual = (first, second) => (first.length === second.length
    && first.every((value, index) => value === second[index]));

const containsArray = (el, container) => container.some(array => arraysAreEqual(array, el));

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

    if (Array.isArray(el) && containsArray(el, excluder)) {
      return false;
    }

    return (excluder.indexOf(el) === -1);
  });

  return excluded;
}

export {
  without,
};
