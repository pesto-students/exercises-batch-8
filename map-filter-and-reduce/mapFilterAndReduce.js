
function mapFilterAndReduce(array) {
  const filteredNames = array.filter((ele) => {
    const { firstName } = ele;
    return firstName.length < 5;
  });

  const filteredNamesObject = {};
  filteredNames.map((ele) => {
    const { firstName } = ele;
    filteredNamesObject[firstName] = firstName.length;
    return ele;
  });

  return filteredNamesObject;
}

export {
  mapFilterAndReduce,
};
