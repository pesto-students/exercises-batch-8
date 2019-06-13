
function chunkArrayInGroups(arr, size) {
  return arr.reduce((acc, element, i, array) => {
    const isNewArrayNeeded = i % size === 0;
    if (isNewArrayNeeded) {
      acc.push(array.slice(i, i + size));
    }
    return acc;
  }, []);
}

export {
  chunkArrayInGroups,
};
