function threeSum(elements, sum) {
  if (!(typeof sum === 'number')) {
    throw new Error('Sum should be a number');
  }
  if (elements.length < 3) {
    throw new Error('Required at least three elements');
  }
  const numbersMap = new Map();
  for (let i = 0; i < elements.length; i += 1) {
    numbersMap[elements[i]] = i;
  }
  for (let i = 0; i < elements.length; i += 1) {
    for (let j = i + 1; j < elements.length; j += 1) {
      const twoSum = elements[i] + elements[j];
      const thirdElement = sum - twoSum;
      if (numbersMap[thirdElement] !== undefined
        && numbersMap[thirdElement] !== i
        && numbersMap[thirdElement] !== j) {
        return [elements[i], elements[j], thirdElement];
      }
    }
  }
  return null;
}

export {
  threeSum,
};
