const getPropertyHandler = (target, property) => {
  if (!Object.prototype.hasOwnProperty.call(target, property)) {
    throw new TypeError(`Unknown property: ${property}`);
  } else {
    return target[property];
  }
};


function knownProp(target) {
  const handler = {
    get: getPropertyHandler,
  };

  return new Proxy(target, handler);
}

export {
  knownProp,
};
