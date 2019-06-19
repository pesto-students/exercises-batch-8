function unnest(nest) {
  const convertToArray = (obj) => {
    const objToArray = new Array(obj.length).fill('');
    return objToArray.reduce((acc, _el, index) => [...acc, obj[index]], []);
  };
  const arrayToBeUnnested = Array.isArray(nest) ? nest : convertToArray(nest);
  return arrayToBeUnnested.reduce((acc, element) => {
    const arrayedElement = Array.isArray(element) ? element : [element];
    return [...acc, ...arrayedElement];
  }, []);
}

export {
  unnest,
};
