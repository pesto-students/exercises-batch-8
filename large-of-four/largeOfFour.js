
function largeOfFour(arrays) {
  return arrays.reduce((acc, subArray) => {
    acc.push(Math.max(...subArray));
    return acc;
  }, []);
}

export {
  largeOfFour,
};
