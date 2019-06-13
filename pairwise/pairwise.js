
function pairwise(array, sum) {
  const finalArray = [];
  array.map((value1, i) => {
    array.map((value2, j) => {
      if (i !== j
        && value1 + value2 === sum
        && !finalArray.includes(i)
        && !finalArray.includes(j)
      ) {
        finalArray.push(i);
        finalArray.push(j);
      }
      return null;
    });
    return null;
  });
  return finalArray.reduce((a, b) => a + b, 0);
}

export {
  pairwise,
};
