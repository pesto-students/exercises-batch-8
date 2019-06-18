
function placeInMiddle(array, arrayToBePlaced) {
  const mid = Math.floor(array.length / 2);
  array.splice(mid, 0, ...arrayToBePlaced);
  return array;
}

export {
  placeInMiddle,
};
