
function xprod(arrayA, arrayB) {
  const crossProductArray = arrayA
    .reduce((acc, elemA) => {
      const prodArray = arrayB
        .map(elemB => [elemA, elemB]);
      return [...acc, ...prodArray];
    }, []);
  return crossProductArray;
}

export {
  xprod,
};
