function lowercaseKeys(...args) {
  const objArray = Object.entries(args[0]);
  Object.keys(objArray).forEach((key) => {
    delete Object.assign(objArray, { [key.toLowerCase()]: objArray[key] })[key];
  });
  return true;
}

export { lowercaseKeys };
