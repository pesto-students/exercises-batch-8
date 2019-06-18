
function joinArrays(...numbers) {
  return numbers.reduce((accumulator, oneNumberArray) => [...accumulator, ...oneNumberArray], []);
}

export {
  joinArrays,
};
