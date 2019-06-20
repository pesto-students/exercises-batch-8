
function uniq(array) {
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
  // eslint-disable-next-line max-len
  return array.reduce((acc, el) => (acc.some(element => compareElements(el, element)) ? acc : [...acc, el]), []);
}

export {
  uniq,
};
