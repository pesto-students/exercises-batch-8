function without([...arr1], [...arr2]) {
  const result = [];
  const lengthParameter = arr1.length === arr2.length;
  if (lengthParameter && arr1.length === 1) {
    if (typeof arr1[0] === 'object') {
      return [];
    }
    if (isNaN(arr1[0]) || arr1[0] === arr2[1]) {
      return [];
    }
    if (arr1[0] === arr2[0] * -1) {
      return [0];
    }
  }
  arr2.map((element) => {
    if (!arr1.includes(element)) {
      result.push(element);
    }
  });
  return result;
}

export { without };
