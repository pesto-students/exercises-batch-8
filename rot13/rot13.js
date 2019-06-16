function range(n) {
  return [...Array(n).keys()];
}
function isAlphabet(char) {
  return /[a-z]/i.test(char);
}
const CHAR_CODE_A = 'A'.charCodeAt(0);
function rot13(str) {
  return range(str.length).map((ind) => {
    if (isAlphabet(str[ind])) {
      const charCode = str.charCodeAt(ind);
      return String.fromCharCode(CHAR_CODE_A + ((charCode - CHAR_CODE_A + 13) % 26));
    }
    return str[ind];
  }).join('');
}

export {
  rot13,
};
