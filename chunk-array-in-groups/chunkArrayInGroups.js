
function chunkArrayInGroups(array, chunkSize) {
  const arrayOfChunks = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    arrayOfChunks.push(chunk);
  }

  return arrayOfChunks;
}

export {
  chunkArrayInGroups,
};
