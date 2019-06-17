
function joinArrays(...arrays) {
  const resultArray = [];
  arrays.map((array) => {
    array.map((value) => {
      resultArray.push(value);
      return null;
    });
    return null;
  });
  return resultArray;
}

export {
  joinArrays,
};
