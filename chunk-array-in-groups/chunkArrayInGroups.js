
function chunkArrayInGroups(array, chunks) {
  return array.reduce((acc, elm, index) => {
    const isBreakPoint = index % chunks === 0;
    if (isBreakPoint) {
      acc.push(array.slice(index, chunks + index));
    }
    return acc;
  }, []);
}

export {
  chunkArrayInGroups,
};
