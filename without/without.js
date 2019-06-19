function isEqual(item1, item2) {
  if (typeof item1 === 'object' || typeof item2 === 'object') {
    return item1.toString() === item2.toString();
  }
  return Object.is(item1, item2);
}
function without(arr1, arr2) {
  return arr2.filter(
    itemArr2 => !arr1.some(itemArr1 => isEqual(itemArr1, itemArr2)),
  );
}

export {
  without,
};
