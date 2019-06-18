
function isAlphabet(c){
	if (c.match(/[a-z]/i)) {
        return true;
    }
    return false; 
}


function shiftCharByAmount (str, amount) {
  if (!isAlphabet(str)){
    return str;
  }
	// Get its code
  var charCode = str.charCodeAt(0);
	// Uppercase letters
	if ((charCode >= 65) && (charCode <= 90)) {
	return String.fromCharCode(((charCode - 65 + amount) % 26) + 65);
  } 
  // Lowercase letters
  return String.fromCharCode(((charCode - 97 + amount) % 26) + 97);
}

function rot13 (aString) {
  const shiftVal = 13;
  let outputString = '';
  for (const aChar of aString) {
    outputString += shiftCharByAmount(aChar, shiftVal);
  }
  return outputString;
}


export {
  rot13,
};
