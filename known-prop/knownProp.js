
function knownProp(object) {
  return new Proxy(object, {
    get(anObject, keyName) {
      if (!anObject.hasOwnProperty(keyName)) {
        throw TypeError('Cannot access unknown property');
      }
      return anObject[keyName];
    },
  });
}

export {
  knownProp,
};
