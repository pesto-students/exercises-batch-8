
function placeInMiddle(initialArray, arrayToInsert) {
  const resultArray = initialArray;
  resultArray.splice(Math.floor(resultArray.length / 2), 0, ...arrayToInsert);
  return resultArray;
}

export {
  placeInMiddle,
};
