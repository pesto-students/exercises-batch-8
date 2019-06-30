
function chunkArrayInGroups(array, groupSize) {
  const copy = [...array];
  const result = [];
  while (copy.length) {
    result.push(copy.splice(0, groupSize));
  }
  return result;
}

export {
  chunkArrayInGroups,
};
