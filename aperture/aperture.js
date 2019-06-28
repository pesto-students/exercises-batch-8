
function aperture(n, array) {
  if (n > array.length) {
    return [];
  }
  let count = 0;
  const transformedArray = [];

  array.forEach((element, index) => {
    if (index < array.length - n + 1) {
      transformedArray.push(array.slice(index, index + n))
    }
  });
  return transformedArray;
}

export {
  aperture,
};
