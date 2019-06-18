// WIP
function isAlphabet(c){
	if (c.match(/[a-z]/i)) {
        return true;
    }
    return false; 
}

function shiftCharByAmount (str, amount) {
	// Get its code
	var charCode = str.charCodeAt(0);

	// Uppercase letters
	if ((charCode >= 65) && (charCode <= 90))
	return String.fromCharCode(((charCode - 65 + amount) % 26) + 65);

	// Lowercase letters
	else if ((charCode >= 97) && (charCode <= 122))
    return String.fromCharCode(((charCode - 97 + amount) % 26) + 97);
}

function caesarShift (str) {
const shiftVal = -1
const output = "abcDef".split('').reduce((acc, aChar) => shiftCharByAmount(aChar, shiftVal) + acc);
	return output;
}

export {
  alphabeticShift,
};
