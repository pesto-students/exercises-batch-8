
function doubleOddNumbers(array) {
  const doubledArray = array.map((ele) => {
    if (ele % 2 !== 0) {
      return ele * 2;
    }
    return null;
  });
  return doubledArray.filter(ele => ele);
}

export {
  doubleOddNumbers,
};
