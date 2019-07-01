
function updateObject(replacerIndex, newValue, array) {
  const newArray = array.slice();
  let index = replacerIndex;
  if (replacerIndex < 0) {
    index = newArray.length + replacerIndex;
  }
  if (index > (newArray.length - 1) || index < 0) {
    return array;
  }
  newArray[index] = newValue;
  return newArray;
}


export {
  updateObject,
};
