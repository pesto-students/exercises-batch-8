

function cartesianProduct(arrayOne, arrayTwo) {
  if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) {
    return null;
  }
  const productPairs = [];
  arrayOne.map(firstOfPair => (
    arrayTwo.map(secondOfPair => productPairs.push([firstOfPair, secondOfPair]))
  ));
  return productPairs;
}

export {
  cartesianProduct,
};
