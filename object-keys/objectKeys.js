
function objectKeys(object) {
  let keysOfObject = []
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      keysOfObject.push(key);
    }
  }
  return keysOfObject;
}

export {
  objectKeys,
};
