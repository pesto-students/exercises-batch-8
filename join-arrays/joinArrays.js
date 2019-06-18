function joinArrays(...compoundArray) {
  return compoundArray.reduce((accumulator, currentValue) => [...accumulator, ...currentValue], []);
}

export { joinArrays };
