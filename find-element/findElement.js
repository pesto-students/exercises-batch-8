
function findElement(arr, found) {
  if (arr.length === 0) {
    return undefined;
  }
  if (found(arr[0])) {
    return arr[0];
  }
  return findElement(arr.slice(1), found);
}

export {
  findElement,
};
