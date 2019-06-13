
function mapObject(object, transformation) {
  for(let key in object) { 
    object[key] = transformation(object[key])
  }
  return object;
}

export {
  mapObject,
};
