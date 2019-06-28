
function telephoneCheck(phoneString) {
  const phonePattern = /^1? ?(\d{3}|\(\d{3}\))[- ]?(\d{3})[- ]?\d{4}$/;
  return phonePattern.test(phoneString);
}

export {
  telephoneCheck,
};
