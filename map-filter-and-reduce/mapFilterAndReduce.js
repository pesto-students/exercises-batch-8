
function mapFilterAndReduce(names) {
  const namesHavingLengthLessThanFive = names.filter(({ firstName }) => firstName.length < 5);
  const namesWithLengthObject = {};
  namesHavingLengthLessThanFive.map((nameObj) => {
    namesWithLengthObject[nameObj.firstName] = nameObj.firstName.length;
    return nameObj;
  });
  return namesWithLengthObject;
}

export {
  mapFilterAndReduce,
};
