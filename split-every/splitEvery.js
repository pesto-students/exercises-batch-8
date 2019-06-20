
function splitEvery(extractBy, args) {
  const resultantArray = [];

  if (!Array.isArray(args) || typeof args !== 'string') {
    throw new Error(`Expected array or string got ${typeof args}`);
  }
  if (args.length === 0) {
    return [];
  }
  const array = args;
  for (let i = 0; i < array.length; i += extractBy) {
    resultantArray.push(array.slice(i, extractBy + i));
  }
  return resultantArray;
}

export {
  splitEvery,
};
