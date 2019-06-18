function reducer(acc, curr) {
  return {
    ...acc,
    [curr]: curr.length,
  };
}

function mapFilterAndReduce(objectArray) {
  const firstNames = objectArray.map(obj => obj.firstName);
  const filteredFirstNames = firstNames.filter(name => name.length < 5);
  const objectWithFirstNames = filteredFirstNames.reduce(reducer, {});
  return objectWithFirstNames;
}

export {
  mapFilterAndReduce,
};
