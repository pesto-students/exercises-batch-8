function sumIndex(accSumArray, paddedArrays, index) {
  const sum = paddedArrays
    .reduce((acc, currentArray) => acc + Number(currentArray[index]), accSumArray.carry);
  return {
    carry: Math.floor(sum / 10),
    accumulatedSumArray: [sum % 10, ...accSumArray.accumulatedSumArray],
  };
}

function addBigIntegers(input) {
  const numberStrings = input.split('\n');
  numberStrings.shift();
  const numberArrays = numberStrings.map(string => string.split(''));
  const maxLengthArraySize = numberArrays
    .reduce((acc, currentArray) => (currentArray.length > acc ? currentArray.length : acc), 0);
  const paddedArrays = numberArrays
    .map(array => [...Array(maxLengthArraySize - array.length).fill(0), ...array]);
  const compositeSum = paddedArrays[0]
    .reduceRight((acc, currentElement, index) => sumIndex(acc, paddedArrays, index), {
      carry: 0,
      accumulatedSumArray: [],
    });
  if (compositeSum.carry > 0) {
    return [compositeSum.carry, ...compositeSum.accumulatedSumArray].join('');
  }
  return compositeSum.accumulatedSumArray.join('');
}

export {
  addBigIntegers,
};
