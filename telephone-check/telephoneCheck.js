
function telephoneCheck(phoneNumber) {
  const phoneNumRegex = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s|(|-]?[0-9]{3}[ |(|)|-]{0,1}[0-9]{4}$/;
  return Boolean(phoneNumRegex.exec(phoneNumber));
}

export {
  telephoneCheck,
};
