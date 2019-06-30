
function mapObject(object, fnModifier) {
  const alterObject = { ...object };

  for (const key of Object.keys(object)) {
    alterObject[key] = fnModifier(alterObject[key]);
  }

  return alterObject;
}

export {
  mapObject,
};
