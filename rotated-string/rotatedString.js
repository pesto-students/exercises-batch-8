
function rotatedString(...inputString) {
        // let rotatedInput = inputString[0].split('').reverse().join('');
        // return rotatedInput === inputString[1] ? false : true;
        return inputString[0] === inputString[1] ? false : true;
}

export {
  rotatedString,
};
