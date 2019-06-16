function isALetter(char) {
  const capLetterRegex = /[A-Z]/;
  return char.match(capLetterRegex);
}

function decipher(char) {
  const rot13CharCode = char.charCodeAt();
  const charCode = rot13CharCode + 13;
  const overFlowOver90 = charCode - 91; // 90 is char Code of Z
  const charCodeOfA = 65;
  const decipheredCharCode = overFlowOver90 >= 0 ? charCodeOfA + overFlowOver90 : charCode;
  return String.fromCharCode(decipheredCharCode);
}

function rot13(encryptedStr) {
  const strArr = encryptedStr.split('');
  const decryptedArr = strArr.map((char) => {
    if (isALetter(char)) {
      return decipher(char);
    }
    return char;
  });
  return decryptedArr.join('');
}

export {
  rot13,
};
