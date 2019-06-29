

function pairwise(array, sumToMake) {
  const cloneArray = [...array];
  return cloneArray.reduce((elementOne, elementTwo, index) => {
    const pairPartner = sumToMake - elementTwo;
    if (cloneArray.indexOf(pairPartner) !== -1 && cloneArray.indexOf(pairPartner) !== index) {
      const total = index + cloneArray.indexOf(pairPartner);
      cloneArray.splice(index, 1, NaN);
      cloneArray.splice(cloneArray.indexOf(pairPartner), 1, NaN);
      return elementOne + total;
    }
    return elementOne;
  }, 0);
}
export {
  pairwise,
};
