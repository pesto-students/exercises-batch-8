
function placeInMiddle(array1, array2) {
  const array1part1 = array1.slice(0, array1.length / 2);
  const array1part2 = array1.slice(array1.length / 2, array1.length);
  return [...array1part1, ...array2, ...array1part2];
}

export {
  placeInMiddle,
};
