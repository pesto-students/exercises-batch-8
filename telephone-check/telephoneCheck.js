
function telephoneCheck(telephoneNumber) {
  const usaTelephoneNumberRegex = /^(?:\+?1[- ]?)?\(([0-9]{3})\)[- ]?([0-9]{3})[- ]([0-9]{4})$/;
  return usaTelephoneNumberRegex.test(telephoneNumber);
}

export {
  telephoneCheck,
};
