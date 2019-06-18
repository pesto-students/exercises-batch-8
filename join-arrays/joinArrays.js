function joinArrays(...arrays) {
  return arrays.reduce((flatArrayAcc, currentArray) => [...flatArrayAcc, ...currentArray]);
}

export { joinArrays };
