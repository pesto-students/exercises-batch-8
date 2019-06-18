
function joinArrays(...arrays) {
  return arrays.reduce((prevArray, currArray) => [...prevArray, ...currArray]);
}

export {
  joinArrays,
};
