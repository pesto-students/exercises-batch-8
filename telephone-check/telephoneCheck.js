
function telephoneCheck(numText) {
  const REGEX = {
    START: /^/,
    COUNTRY: /(1\s)?/,
    AREA: /(\(\d{3}\)|\d{3})/,
    PHONE: /[-\s]?\d{3}[-\s]?\d{4}/,
    END: /$/,
  };
  const regExString = Object.values(REGEX).reduce((acc, regEx) => acc + regEx.source, '');
  const regExpValidUSPhone = new RegExp(regExString);

  // const regExpValidUSPhone = /^(1\s)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
  return regExpValidUSPhone.test(String(numText));
}

export {
  telephoneCheck,
};
