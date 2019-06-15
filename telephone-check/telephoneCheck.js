// eslint-disable-next-line no-useless-escape
const phoneRegex = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;
function telephoneCheck(string) {
  return phoneRegex.test(string);
}

export { telephoneCheck };
