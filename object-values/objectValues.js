
function objectValues(object) {
    let objectValues = [ ];
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        objectValues.push(object[key])
      }
    }
    return objectValues;
}

export {
  objectValues,
};
