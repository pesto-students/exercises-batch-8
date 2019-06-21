
function cartesianProduct(set1, set2) {
  if (set1 == null || set2 == null) {
    return null;
  }
  return set1.reduce(
    (product, elementSet1) => [
      ...product,
      ...set2.map(elementSet2 => [elementSet1, elementSet2]),
    ],
    [],
  );
}

export {
  cartesianProduct,
};
