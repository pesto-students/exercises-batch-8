
function chunkArrayInGroups(arrayToChunk, chunkSize) {
  const chunkedArray = [];

  for (let index = 0; index < arrayToChunk.length; index += chunkSize) {
    const currentChunk = arrayToChunk.slice(index, index + chunkSize);

    chunkedArray.push(currentChunk);
  }

  return chunkedArray;
}

export {
  chunkArrayInGroups,
};
