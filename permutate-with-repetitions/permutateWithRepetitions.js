
function permute(mainArr, result, builderArr) {
  if (mainArr.length === builderArr.length) {
    result.push([...builderArr]);
    return null;
  }

  mainArr.forEach((el) => {
    builderArr.push(el);
    permute(mainArr, result, builderArr);
    builderArr.pop();
  });
  return null;
}

function permutateWithRepetitions(arr) {
  const result = [];
  const builderArr = [];
  permute(arr, result, builderArr);
  return result;
}

export {
  permutateWithRepetitions,
};
