
function bizarreStringIncrementer(string) {
  const endingNumberPattern = /\d+$/;
  const number = string.match(endingNumberPattern)[0];
  let numberPlusOne = parseInt(number, 10) + 1;
  numberPlusOne = String(numberPlusOne);
  if (numberPlusOne.length < number.length) {
    numberPlusOne = number.substring(0, number.length - numberPlusOne.length) + numberPlusOne;
  }
  numberPlusOne = string.substring(0, numberPlusOne.length + 1) + numberPlusOne;
  return numberPlusOne;
}

export {
  bizarreStringIncrementer,
};
