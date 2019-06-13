
function chunkArrayInGroups(elements, groupSize) {
  const groupArrays = [];
  for (let i = 0; i < elements.length; i += groupSize) {
    const chunk = elements.slice(i, i + groupSize);
    groupArrays.push(chunk);
  }
  return groupArrays;
}
export {
  chunkArrayInGroups,
};
