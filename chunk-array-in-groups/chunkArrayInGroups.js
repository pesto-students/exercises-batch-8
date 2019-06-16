
function chunkArrayInGroups(arr, groupSize) {
  if (arr.length === 0) {
    return [[]];
  }
  if (arr.length <= groupSize) {
    return [arr];
  }
  return [arr.slice(0, groupSize), ...chunkArrayInGroups(arr.slice(groupSize), groupSize)];
}

export {
  chunkArrayInGroups,
};
