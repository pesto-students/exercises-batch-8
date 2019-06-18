function alphabeticShift(inputString) {
  const CodeArray = inputString.split('').map(char => char.charCodeAt(0));
  const shiftedCodeArray = CodeArray.map(Code => Code + 1);
  const string = String.fromCharCode(...shiftedCodeArray);
  return string;
}

export { alphabeticShift };
