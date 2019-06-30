
function corneredString(string) {
  if (typeof string !== 'string') {
    const error = new TypeError('Invalid data type');
    throw error;
  }
  if (!string) return string;

  const stringInUpperCase = string.toUpperCase();

  let resultantString = '';
  const stringArray = stringInUpperCase.split('');
  resultantString += stringArray.join(' ');
  if (stringInUpperCase.length < 2) return resultantString;
  stringArray.shift();
  resultantString += '\n\n';
  resultantString += stringArray.join('\n\n');
  return resultantString;
}

export {
  corneredString,
};
