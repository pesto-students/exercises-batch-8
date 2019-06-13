
function telephoneCheck(number) {
  const regex = /^(1\s?)?((\([\d]{3}\))|[\d]{3})[\s-]?[\d]{3}[\s-]?[\d]{4}/;
  return regex.test(number);
}

export {
  telephoneCheck,
};
