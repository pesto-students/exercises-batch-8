const fs = require('fs');

function linesInFile(filePath) {
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const count = (fileContents.match(/\n/g) || []).length;

  return count - 1;
}

export {
  linesInFile,
};
