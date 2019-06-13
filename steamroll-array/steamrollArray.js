
function steamrollArray(...arr) {
  function flatten(complexArray) {
    return complexArray.reduce((acc, element) => {
      if (Array.isArray(element)) {
        // eslint-disable-next-line no-param-reassign
        acc = [...acc, ...flatten(element)];
      } else {
        acc.push(element);
      }
      return acc;
    }, []);
  }

  return arr.reduce((acc, element) => {
    if (Array.isArray(element)) {
      // eslint-disable-next-line no-param-reassign
      acc = [...acc, ...flatten(element)];
    } else {
      acc.push(element);
    }
    return acc;
  }, []);
}

export {
  steamrollArray,
};
