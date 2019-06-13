
function pairwise(array, sum) {
  const indices = [];
  array.map((value1, i) => {
    array.map((value2, j) => {
      if (i !== j
        && value1 + value2 === sum
        && !indices.includes(i)
        && !indices.includes(j)
      ) {
        indices.push(i);
        indices.push(j);
      }
      return null;
    });
    return null;
  });
  return indices.reduce((a, b) => a + b, 0);
}

export {
  pairwise,
};
