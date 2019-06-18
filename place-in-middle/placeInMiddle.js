
function placeInMiddle(firstArray, secondArray) {
  const firstArrayFirstHalf = firstArray.slice(0, firstArray.length / 2);
  const firstArraySecondHalf = firstArray.slice(firstArray.length / 2, firstArray.length);
  return [...firstArrayFirstHalf, ...secondArray, ...firstArraySecondHalf];
}

export {
  placeInMiddle,
};
