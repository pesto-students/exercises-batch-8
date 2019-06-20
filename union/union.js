/* eslint-disable arrow-body-style */
/* eslint-disable nonblock-statement-body-position */
// eslint-disable-next-line arrow-body-style
const findStrictIndexOf = (array, targetElement) => {
  let indexOfTarget = -1;
  array.forEach((currElement, index) => {
    if (Object.is(currElement, targetElement)) {
      indexOfTarget = index;
    }
  });
  return indexOfTarget;
};

const isDuplicate = (element, currentIndex, array) => {
  // element here shows 0 in place of -0. Hence using array[currentIndex]
  return findStrictIndexOf(array, array[currentIndex]) === currentIndex;
};

function union(arrayA, arrayB) {
  const combinedArray = [...arrayA, ...arrayB];
  return combinedArray.filter(isDuplicate);
}

export {
  union,
};
