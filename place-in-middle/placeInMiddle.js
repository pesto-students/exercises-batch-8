
function placeInMiddle(arr1, arr2) {
  const mid = Math.floor(arr1.length / 2);
  return [...arr1.slice(0, mid), ...arr2, ...arr1.slice(mid)];
}

export {
  placeInMiddle,
};
