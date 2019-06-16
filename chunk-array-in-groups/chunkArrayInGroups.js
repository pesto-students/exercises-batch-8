
function chunkArrayInGroups(...args) {
  const array = args[0];
  const chunkSize = args[1];
  const chunkedArray = [];
  function chunkArray() {
    if (array.length !== 0) {
      const chunk = array.splice(0, chunkSize);
      chunkedArray.push(chunk);
      chunkArray();
    }
  }
  chunkArray();
  return chunkedArray;
}

export {
  chunkArrayInGroups,
};
