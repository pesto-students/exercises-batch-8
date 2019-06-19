
function splitEvery(limit, arrayOrString) {
  if (limit <= 0) {
    throw new Error('Limit must be a positive number');
  }
  let index = 0;
  const resultArray = [];
  while (arrayOrString.length > index) {
    resultArray.push([...arrayOrString.slice(index, index + limit)]);
    index += limit;
  }
  if (typeof arrayOrString === 'string') {
    return resultArray.map(arr => arr.join(''));
  }
  return resultArray;
}

export {
  splitEvery,
};
