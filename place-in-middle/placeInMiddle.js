
function placeInMiddle(array, valuesToInsert) {
  const midPoint = array.length / 2;
  const firstPart = array.slice(0, midPoint);
  const lastPart = array.slice(midPoint);
  const newArray = [...firstPart, ...valuesToInsert, ...lastPart];
  return newArray;
}

export {
  placeInMiddle,
};
