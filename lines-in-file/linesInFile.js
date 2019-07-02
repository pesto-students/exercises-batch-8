
const fs = require('fs');

function linesInFile(filename) {
  let fileContent = fs.readFileSync(filename, 'utf-8');
  if (fileContent[fileContent.length - 1] === '\n') {
    fileContent = fileContent.slice(0, fileContent.length - 1);
  }
  return fileContent.split('\n').length;
}

export {
  linesInFile,
};
