
function permute(mainArr, totalNoOfElements, result, permutionBuilderArr) {
  if (permutionBuilderArr.length === totalNoOfElements) {
    result.push([...permutionBuilderArr]);
    return null;
  }

  mainArr.forEach((el, idx) => {
    permutionBuilderArr.push(el);
    const splicedMainArr = [...mainArr.slice(0, idx), ...mainArr.slice(idx + 1)];
    permute(splicedMainArr, totalNoOfElements, result, permutionBuilderArr);
    permutionBuilderArr.pop();
  });
  return null;
}

function permutateWithoutRepetitions(arr) {
  const resultArray = [];
  const builderArray = [];
  permute(arr, arr.length, resultArray, builderArray);
  return resultArray;
}

export {
  permutateWithoutRepetitions,
};
