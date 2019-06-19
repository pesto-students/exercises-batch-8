
function knownProp(object) {
  return new Proxy(object, {
    get(anObject, keyName) {
      if (!anObject.hasOwnProperty(keyName)) {
        throw TypeError('Unknown property');
      }
      return anObject[keyName];
    },
  });
}

export {
  knownProp,
};
