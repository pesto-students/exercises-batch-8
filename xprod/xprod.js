
function xprod(arr1, arr2) {
  return arr1.map(
    itemArr1 => (
      arr2.map(
        itemArr2 => [itemArr1, itemArr2],
      )
    ),
  ).reduce(
    (result, val) => [...result, ...val],
    [],
  );
}

export {
  xprod,
};
