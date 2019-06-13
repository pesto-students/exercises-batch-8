/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */

function pairwise(array, sumRequired) {
  let sumOfIndices = 0;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[i] + array[j] === sumRequired) {
        sumOfIndices += (i + j);
        array[i] = array[j] = NaN;
      }
    }
  }
  return sumOfIndices;
}

export {
  pairwise,
};
