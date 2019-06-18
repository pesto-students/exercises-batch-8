
function placeInMiddle(mainArray, subArray) {
  const midPoint = parseInt(mainArray.length / 2, 10);
  const prefixArray = mainArray.slice(0, midPoint);
  const suffixArray = mainArray.slice(midPoint);
  return [...prefixArray, ...subArray, ...suffixArray];
}

export {
  placeInMiddle,
};
