
function cartesianProduct(array1, array2) {
  const pairs = [];
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return null;
  }
  array1.map(value1 => array2.map(value2 => pairs.push([value1, value2])));
  return pairs;
}

export {
  cartesianProduct,
};
