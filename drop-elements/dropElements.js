
function dropElements(array, dropFunction) {
  const droppedElementsArray = array.filter(dropFunction);
  return droppedElementsArray;
}

export {
  dropElements,
};
