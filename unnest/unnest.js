// wip
function unnest(array) {
  let arrayCopy = array;
  if (typeof arrayCopy === 'object' && !Array.isArray(arrayCopy)) {
    arrayCopy = Object.keys(array).reduce((acc, key) => {
      if (Number(key) >= 0) {
        acc.push(array[key]);
      }
      return acc;
    }, []);
  }

  return arrayCopy.reduce((acc, arrayInstance) => {
    if (Array.isArray(arrayInstance)) {
      acc.push(...arrayInstance);
    } else {
      acc.push(arrayInstance);
    }
    return acc;
  }, []);
}

export {
  unnest,
};
