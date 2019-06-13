
function chunkArrayInGroups(arrayElements, groupSize) {
  const resultArray = [];
  for (let i = 0; i < arrayElements.length; i += groupSize) {
    const arrayChunk = arrayElements.slice(i, i + groupSize);
    resultArray.push(arrayChunk);
  }
  return resultArray;
}

export {
  chunkArrayInGroups,
};
