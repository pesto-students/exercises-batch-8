
function union(firstArray, joiningArray) {
  const compareElements = (el1, el2) => {
    if (Object.is(el1, el2)) {
      return true;
    }
    if (typeof el1 !== typeof el2) {
      return false;
    }
    if (typeof el1 === 'number') {
      return false;
    }
    return JSON.stringify(el1) === JSON.stringify(el2);
  };
  const subtractedArray = joiningArray.reduce((acc, el) => {
    if (firstArray.some(el1 => compareElements(el1, el))) {
      return acc;
    }
    return [...acc, el];
  }, []);
  return [...firstArray, ...subtractedArray];
}

export {
  union,
};
