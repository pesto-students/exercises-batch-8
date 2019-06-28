
function objectInvert(objectToInvert) {
  var invertedObject = {}
  for(var i in objectToInvert){
    invertedObject[objectToInvert[i]] = i
  }
  return invertedObject;
}

export {
  objectInvert,
};
