
function xprod(arr1, arr2) {
  return arr1.reduce((acc1, val1) => {
    const arrayOfVal1WithArr2 = arr2.reduce((acc2, val2) => {
      acc2.push([val1, val2]);
      return acc2;
    }, []);
    return [...acc1, ...arrayOfVal1WithArr2];
  }, []);
}

export {
  xprod,
};
