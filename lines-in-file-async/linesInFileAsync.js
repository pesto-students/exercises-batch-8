
const fs = require('fs');
const { promisify } = require('util');

async function linesInFileAsync(filename) {
  const readFile = promisify(fs.readFile);
  let fileContent = await readFile(filename, 'utf-8');
  if (fileContent[fileContent.length - 1] === '\n') {
    fileContent = fileContent.slice(0, fileContent.length - 1);
  }
  return fileContent.split('\n').length;
}


export {
  linesInFileAsync,
};
