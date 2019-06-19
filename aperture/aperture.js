
function aperture(lengthOfSubArray, array) {
  if (array.length < lengthOfSubArray) {
    return [];
  }
  const arrayOfSubArray = [];
  for (let i = 0; i <= (array.length - lengthOfSubArray); i += 1) {
    const subArray = array.slice(i, i + lengthOfSubArray);
    arrayOfSubArray.push(subArray);
  }
  return arrayOfSubArray;
}

export {
  aperture,
};
