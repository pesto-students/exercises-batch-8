
function pairwise(numbers, sum) {
  const indices = [];

  numbers.map((leftNumber, leftIndex) => {
    numbers.map((rightNumber, rightIndex) => {
      if (leftNumber + rightNumber === sum
        && leftIndex !== rightIndex
        && !indices.includes(leftIndex)
        && !indices.includes(rightIndex)
      ) {
        indices.push(leftIndex, rightIndex);
      }
      return null;
    });
    return null;
  });

  const sumOfIndices = indices.reduce((a, b) => a + b, 0);

  return sumOfIndices;
}

export {
  pairwise,
};
