function shiftCharByAmount (str, amount) {
	// Get its code
	var charCode = str.charCodeAt(0);
	// Uppercase letters
	if ((charCode >= 65) && (charCode <= 90)) {
	return String.fromCharCode(((charCode - 65 + amount) % 26) + 65);
  } 
  // Lowercase letters
  return String.fromCharCode(((charCode - 97 + amount) % 26) + 97);
}

function alphabeticShift (aString) {
  const shiftVal = 1;
  let outputString = '';
  for (const aChar of aString) {
    outputString += shiftCharByAmount(aChar, shiftVal);
  }
  return outputString;
}

export {
  alphabeticShift,
};
