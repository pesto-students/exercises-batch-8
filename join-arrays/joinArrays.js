
function joinArrays(...arrays) {
  const joinedArray = [];
  arrays.forEach(array => joinedArray.push(...array));
  return joinedArray;
}

export {
  joinArrays,
};
