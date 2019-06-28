
function threeSum(array, sum) {
  if (Array.isArray(array) !== true || array.length < 3 || typeof sum !== 'number') {
    throw new Error('Invalid input parameters');
  }
  let foundTriplet = false;
  let triplets = [];
  for (let i = 0; i < array.length; i += 1) {
    if (foundTriplet === true) {
      break;
    }
    for (let j = i + 1; j < array.length; j += 1) {
      if (foundTriplet === true) {
        break;
      }
      for (let k = j + 1; k < array.length; k += 1) {
        if ((array[i] + array[j] + array[k]) === sum) {
          foundTriplet = true;
          triplets = [array[i], array[j], array[k]];
          break;
        }
      }
    }
  }

  if (foundTriplet === false) {
    return null;
  }

  return triplets;
}

export {
  threeSum,
};
