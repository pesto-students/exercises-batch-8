
function arrayAddition(numbers1, numbers2) {
  if (!Array.isArray(numbers1) || !Array.isArray(numbers2)) {
    throw Error('Non array inputs are not allowed');
  }
  if (numbers1.length === 0 || numbers2.length === 0) {
    throw Error('Empty arrays are not allowed');
  }
  const biggerArray = numbers1.length >= numbers2.length ? numbers1 : numbers2;
  const smallerArray = numbers1.length < numbers2.length ? numbers1 : numbers2;
  if (smallerArray.filter(num => typeof num !== 'number').length > 0) {
    throw Error('Only numberical arrays are allowed as input');
  }
  if (biggerArray.filter(num => typeof num !== 'number').length > 0) {
    throw Error('Only numberical arrays are allowed as input');
  }

  return biggerArray.map((num, index) => {
    const isInLimitOfSmallArray = index < smallerArray.length;
    const addNum = isInLimitOfSmallArray ? smallerArray[index] : 0;
    return num + addNum;
  });
}

export {
  arrayAddition,
};
